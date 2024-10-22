import { useDispatch, useSelector } from "react-redux";
import { reset } from "../features/gameSlice";

export const Header = () => {
  const dispatch = useDispatch();

  const { score } = useSelector((state) => state.game);

  // Reset the state when pressing the Reset button
  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <div className="h-16 relative flex items-center justify-between bg-[#1a1714] text-white border-b border-b-stone-700 shrink-0">
      <div className="flex-1 grid place-items-center">
        <span className="hidden md:inline-block text-lg">Player 1</span>
      </div>
      <div className="flex-1 grid place-items-center">
        <span className="hidden md:inline-block text-lg">Player 2</span>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-between gap-x-8">
        {/* Displaying score from the state */}
        <span className="text-xl sm:text-2xl xl:text-3xl font-semibold">
          Score: {score.player1} : {score.player2}
        </span>
        <button
          onClick={handleReset}
          type="button"
          className="bg-green-600 rounded-lg px-2 py-1 hover:bg-green-600/90 duration-200"
        >
          Reset
        </button>
      </div>
    </div>
  );
};
