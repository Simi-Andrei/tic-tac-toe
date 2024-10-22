import { Board } from "./board";

export const PlayingField = () => {
  return (
    <div className="flex-1 bg-[#1a1714] text-white flex items-start justify-between">
      <div className="flex-1 self-stretch flex flex-col items-center justify-center">
        <p className="mb-6 text-3xl font-semibold text-[#f09a18]">
          Game started! Your turn:
        </p>
        <Board />
        <div className="border w-2/3 rounded-lg p-4 h-96">Chat</div>
      </div>
      <div className="w-0.5 bg-stone-700 h-full" />
      <div className="flex-1 self-stretch flex flex-col items-center justify-center">
        <p className="mb-6 text-3xl font-semibold text-[#f09a18]">
          Game started! Wait for your opponent.
        </p>
        <Board />
        <div className="border w-2/3 rounded-lg p-4 h-96">Chat</div>
      </div>
    </div>
  );
};
