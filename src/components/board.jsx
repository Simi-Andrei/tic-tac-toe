import { useSelector } from "react-redux";

export const Board = () => {
  const { board } = useSelector((state) => state.game);

  return (
    <div className="mb-8">
      <div className="grid grid-cols-3 border rounded-lg p-4">
        {board.map((cell, index) => (
          <div key={index}>
            <button className="w-20 h-20 bg-red-800 border">{index}</button>
          </div>
        ))}
      </div>
    </div>
  );
};
