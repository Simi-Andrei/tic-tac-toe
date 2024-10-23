import { PiPaperPlaneRightFill } from "react-icons/pi";
import { useState, useRef, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../features/gameSlice";
import { memo } from "react";

export const Chat = memo(({ player, playerLabel }) => {
  const [chatInput, setChatInput] = useState("");

  // Set a ref to the chat container
  const chatRef = useRef(null);

  const dispatch = useDispatch();

  // Get messages from the state
  const messages = useSelector((state) => state.game.messages);

  // Scroll to the bottom of the chat when new messages arrive
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  // Handle sending messages
  const handleSendMessage = useCallback(
    (e) => {
      e.preventDefault();
      if (chatInput.trim()) {
        dispatch(addMessage({ player, text: chatInput.trim() }));
        setChatInput("");
      }
    },
    [chatInput, dispatch]
  );

  return (
    <div className="border border-stone-500 md:border-b-0 w-4/5 lg:w-2/3 rounded-lg md:rounded-b-none min-h-80 mt-auto overflow-hidden flex flex-col h-96">
      <div className="bg-[#222222] flex items-center gap-2 p-2 h-12">
        <div className="bg-stone-500 h-7 w-7 grid place-items-center text-[#f09a18] font-extrabold rounded-full">
          {player}
        </div>
        <span>{playerLabel}</span>
      </div>
      <div
        ref={chatRef}
        className="chatbox bg-[#313131] flex-1 flex flex-col p-2 overflow-y-scroll"
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`text-sm inline-block my-1 p-2 rounded-lg font-semibold ${
              message.player === player
                ? "bg-green-500 text-white self-start"
                : "bg-gray-300 text-black self-end"
            }`}
          >
            {message.text}
            <span className="block text-[11px]">{message.timestamp}</span>
          </div>
        ))}
      </div>
      <div className="h-16 p-2 bg-[#313131] relative">
        <form onSubmit={handleSendMessage}>
          <input
            type="text"
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            placeholder="Message"
            className="w-full h-12 bg-[#424242] border border-stone-400 rounded-lg px-4 focus-visible:outline-none focus-visible:ring-stone-500 focus-visible:ring-1"
          />
          <button
            type="submit"
            className="absolute top-1/2 -translate-y-1/2 right-6"
          >
            <PiPaperPlaneRightFill className="size-6" />
          </button>
        </form>
      </div>
    </div>
  );
});
