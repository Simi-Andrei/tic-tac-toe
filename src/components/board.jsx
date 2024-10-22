import { useSelector } from "react-redux";

export const Board = () => {
  const { board } = useSelector((state) => state.game);

  return (
    <div className="mb-8">
      <div className="grid grid-cols-3 border-[#313131] rounded-lg border-[16px] bg-stone-500 gap-[1px]">
        {board.map((cell, index) => (
          <div key={index} className="">
            <button className="w-20 h-20 bg-[#313131]">{index}</button>
          </div>
        ))}
      </div>
    </div>
  );
};
