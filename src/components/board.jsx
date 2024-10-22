import { useDispatch, useSelector } from "react-redux";
import { move } from "../features/gameSlice";
import { useEffect, useState } from "react";

const WinningLine = ({ winningCells }) => {
  const cellWidth = 80; // Cell width in pixels
  const cellHeight = 80; // Cell height in pixels

  // Get the positions of the winning cells
  const startCellIndex = winningCells[0]; // First winning cell
  const endCellIndex = winningCells[winningCells.length - 1]; // Last winning cell

  const startX = (startCellIndex % 3) * cellWidth + cellWidth / 2; // Center of the first cell
  const startY = Math.floor(startCellIndex / 3) * cellHeight + cellHeight / 2; // Center of the first cell

  const endX = (endCellIndex % 3) * cellWidth + cellWidth / 2; // Center of the last cell
  const endY = Math.floor(endCellIndex / 3) * cellHeight + cellHeight / 2; // Center of the last cell

  // Extend the line by a third of the cell size
  const extension = (cellWidth * 1.8) / 3; // One third of the cell width

  // Calculate the angle of the line
  const angle = Math.atan2(endY - startY, endX - startX);

  // Calculate extended start and end positions
  const extendedStartX = startX - extension * Math.cos(angle);
  const extendedStartY = startY - extension * Math.sin(angle);
  const extendedEndX = endX + extension * Math.cos(angle);
  const extendedEndY = endY + extension * Math.sin(angle);

  // Calculate line length based on the extended positions
  const lineLength = Math.sqrt(
    (extendedEndX - extendedStartX) ** 2 + (extendedEndY - extendedStartY) ** 2
  );
  const rotationAngle = angle * (180 / Math.PI); // Convert radians to degrees

  const lineStyle = {
    position: "absolute",
    width: `${lineLength}px`,
    height: "5px",
    backgroundColor: "white",
    left: `${extendedStartX}px`, // Positioning the line
    top: `${extendedStartY}px`, // Positioning the line
    transform: `rotate(${rotationAngle}deg)`,
    transformOrigin: "0% 50%", // Adjust the origin to the start of the line
    zIndex: 1,
    transition: "opacity 1s ease-in-out",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return <div style={lineStyle} />;
};

export const Board = ({ player }) => {
  const [winningCells, setWinningCells] = useState([]);

  const dispatch = useDispatch();

  const { board, winner, status, currentPlayer } = useSelector(
    (state) => state.game
  );

  useEffect(() => {
    if (status === "won") {
      const winnerCells = calculateWinningCells(board); // Get winning cells
      setWinningCells(winnerCells);
    }
  }, [status, board]);

  useEffect(() => {
    if (status === "won" || status === "draw") {
      const timer = setTimeout(() => {
        setWinningCells([]);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  const calculateWinningCells = (squares) => {
    const lines = [
      [0, 1, 2], // Row 1
      [3, 4, 5], // Row 2
      [6, 7, 8], // Row 3
      [0, 3, 6], // Column 1
      [1, 4, 7], // Column 2
      [2, 5, 8], // Column 3
      [0, 4, 8], // Diagonal \
      [2, 4, 6], // Diagonal /
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return line; // Return the winning cells
      }
    }
    return []; // No winning cells
  };

  const handleCellClick = (index) => {
    if (board[index] || currentPlayer !== player) return;

    dispatch(move({ index, player }));
  };

  return (
    <div className="mb-8">
      <div className="grid grid-cols-3 border-[#313131] rounded-lg border-[16px] bg-stone-500 gap-[1px] relative">
        {winner && <WinningLine winningCells={winningCells} />}
        {board.map((cell, index) => (
          <div key={index} className="">
            <button
              onClick={() => handleCellClick(index)}
              className="block w-20 h-20 bg-[#313131] text-[#ee9918] font-bold text-6xl"
            >
              {board[index]}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
