import { Board } from "./board";

export const PlayingField = () => {
  return (
    <div className="flex-1 bg-[#1a1714] text-white flex items-start justify-between">
      <div className="flex-1 self-stretch grid grid-cols-1 grid-rows-2">
        <Board />
        <p>Chat</p>
      </div>
      <div className="w-0.5 bg-stone-700 h-full" />
      <div className="flex-1 self-stretch grid">
        <Board />
        <p>Chat</p>
      </div>
    </div>
  );
};
