export const Header = () => {
  return (
    <div className="h-20 relative flex items-center justify-between bg-[#1a1714] text-white border-b border-b-stone-700">
      <div className="flex-1 grid place-items-center">
        <span>Player 1</span>
      </div>
      <div className="flex-1 grid place-items-center">
        <span>Player 2</span>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-between gap-x-8">
        <span className="text-3xl font-semibold">Score: 1:0</span>
        <button
          type="button"
          className="bg-green-600 rounded-lg px-2 py-1 hover:bg-green-600/90 duration-200"
        >
          Reset
        </button>
      </div>
    </div>
  );
};
