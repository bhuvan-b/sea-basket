import React from "react";
import { useState } from "react";
import { FaqData } from "./FaqData";
import FaqItem from "./FaqItem";

const FaqSection = () => {
  const [questions] = useState(FaqData);

  return (
    <div>
      <div className="font-Roboto py-10 text-center font-bold text-3xl">
        FAQ's
      </div>
      <div className="space-y-8">
        {questions.map((question) => (
          <FaqItem {...question} key={question.id} />
        ))}
      </div>
    </div>
  );
};

export default FaqSection;
