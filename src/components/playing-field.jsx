import { Board } from "./board";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { reset } from "../features/gameSlice";
import { Chat } from "./chat";

export const PlayingField = () => {
  const dispatch = useDispatch();

  // Get data from the state in a granular way
  const board = useSelector((state) => state.game.board);
  const currentPlayer = useSelector((state) => state.game.currentPlayer);
  const winner = useSelector((state) => state.game.winner);
  const status = useSelector((state) => state.game.status);

  // Use useEffect to clear the boards after 5 seconds after the game is won or draw
  useEffect(() => {
    if (status === "won" || status === "draw") {
      const timer = setTimeout(() => {
        dispatch(reset());
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [status, dispatch]);

  // Display different messages for players depending on the game state
  const getMessageForPlayer = (player) => {
    const isBoardEmpty = board.every((cell) => cell === null);

    if (isBoardEmpty) {
      return player === "X"
        ? "Game Started! Your turn:"
        : "Game Started! Wait for your opponent.";
    }

    if (status === "won") {
      return winner === player ? (
        <span className="text-green-500">You Win!</span>
      ) : (
        <span className="text-red-500">You Lost!</span>
      );
    } else if (status === "draw") {
      return "Draw!";
    } else if (status === "inProgress") {
      return currentPlayer === player
        ? "Your turn:"
        : "Wait for your opponent.";
    }

    return "";
  };

  return (
    <div className="flex-1 bg-[#1a1714] text-white flex flex-col md:flex-row items-start justify-between">
      {/* Player X side */}
      <div className="flex-1 self-stretch flex flex-col items-center justify-center p-2 md:pb-0 border-b border-b-stone-700 md:border-b-0">
        <p className="mt-4 md:hidden">Player 1</p>
        <p className="my-4 text-xl sm:text-2xl xl:text-3xl font-semibold text-[#f09a18] text-center md:min-h-16">
          {getMessageForPlayer("X")}
        </p>
        {/* Board for player X */}
        <Board player="X" />
        {/* Chat for player X */}
        <Chat player="X" playerLabel="Player 1" />
      </div>

      {/* Separating line */}
      <div className="w-0.5 bg-stone-700 h-full" />

      {/* Player O side */}
      <div className="flex-1 self-stretch flex flex-col items-center justify-center p-2 md:pb-0">
        <p className="mt-4 md:hidden">Player 2</p>
        <p className="my-4 text-xl sm:text-2xl xl:text-3xl font-semibold text-[#f09a18] text-center md:min-h-16">
          {getMessageForPlayer("O")}
        </p>
        {/* Board for player O */}
        <Board player="O" />
        {/* Chat for player O */}
        <Chat player="O" playerLabel="Player 2" />
      </div>
    </div>
  );
};
