import { PiPaperPlaneRightFill } from "react-icons/pi";
import { Board } from "./board";

export const PlayingField = () => {
  return (
    <div className="flex-1 bg-[#1a1714] text-white flex flex-col md:flex-row items-start justify-between">
      <div className="flex-1 self-stretch flex flex-col items-center justify-center p-2 md:pb-0 border-b border-b-stone-700">
        <p className="mt-4 md:hidden">Player 1</p>
        <p className="my-4 text-xl sm:text-2xl xl:text-3xl font-semibold text-[#f09a18] text-center md:min-h-16">
          Game started! Your turn:
        </p>
        <Board />
        <div className="border border-stone-500 border-b-0 w-4/5 lg:w-2/3 rounded-lg md:rounded-b-none min-h-80 h-full mt-auto overflow-hidden flex flex-col">
          <div className="bg-[#222222] flex items-center gap-2 p-2 h-12">
            <div className="bg-stone-500 h-7 w-7 grid place-items-center text-[#f09a18] font-extrabold rounded-full">
              X
            </div>
            <span>Player 1</span>
          </div>
          <div className="bg-[#313131] flex-1"></div>
          <div className="h-16 p-2 bg-[#313131] relative">
            <input
              type="text"
              placeholder="Message"
              className="w-full h-12 bg-[#424242] border border-stone-400 rounded-lg px-4 focus-visible:outline-none focus-visible:ring-stone-500 focus-visible:ring-1"
            />
            <button
              type="submit"
              className="absolute top-1/2 -translate-y-1/2 right-6"
            >
              <PiPaperPlaneRightFill className="size-6" />
            </button>
          </div>
        </div>
      </div>
      <div className="w-0.5 bg-stone-700 h-full" />
      <div className="flex-1 self-stretch flex flex-col items-center justify-center p-2 md:pb-0">
        <p className="mt-4 md:hidden">Player 2</p>

        <p className="my-4 text-xl sm:text-2xl xl:text-3xl font-semibold text-[#f09a18] text-center md:min-h-16">
          Game started! Wait for your opponent.
        </p>
        <Board />
        <div className="border border-stone-500 md:border-b-0 w-4/5 lg:w-2/3 rounded-lg md:rounded-b-none min-h-80 h-full mt-auto overflow-hidden flex flex-col">
          <div className="bg-[#222222] flex items-center gap-2 p-2 h-12">
            <div className="bg-stone-500 h-7 w-7 grid place-items-center text-[#f09a18] font-extrabold rounded-full">
              O
            </div>
            <span>Player 2</span>
          </div>
          <div className="bg-[#313131] flex-1"></div>
          <div className="h-16 p-2 bg-[#313131] relative">
            <input
              type="text"
              placeholder="Message"
              className="w-full h-12 bg-[#424242] border border-stone-400 rounded-lg px-4 focus-visible:outline-none focus-visible:ring-stone-500 focus-visible:ring-1"
            />
            <button
              type="submit"
              className="absolute top-1/2 -translate-y-1/2 right-6"
            >
              <PiPaperPlaneRightFill className="size-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
