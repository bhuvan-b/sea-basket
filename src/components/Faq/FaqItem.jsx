import React from "react";

import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const FaqItem = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div className="bg-white font-Roboto shadow-md border border-2 rounded-2xl p-6 px-8">
      <div
        onClick={() => setShowAnswer(!showAnswer)}
        className="flex justify-between items-center justify-center cursor-pointer"
      >
        <div>
          <h2
            onClick={() => setShowAnswer(!showAnswer)}
            className="text-xl font-semibold tracking-wider cursor-pointer"
          >
            {question}
          </h2>
        </div>
        <div>
          {showAnswer ? (
            <button onClick={() => setShowAnswer(!showAnswer)}>
              <IoIosArrowUp className="text-3xl text-[#0E79BD]" />
            </button>
          ) : (
            <button onClick={() => setShowAnswer(!showAnswer)}>
              <IoIosArrowDown className="text-3xl text-[#0E79BD]" />
            </button>
          )}
        </div>
      </div>
      <div className="">
        {showAnswer && <div className="py-4">{answer}</div>}
      </div>
    </div>
  );
};

export default FaqItem;
