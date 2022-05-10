import React from "react";
import { useState } from "react";
import { TopicData } from "./TopicData";
import TopicItem from "./TopicItem";

const TopicSection = () => {
  const [topic] = useState(TopicData);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="font-Roboto py-12 text-center font-bold text-3xl">
        TOPICS YOU CAN'T MISS
      </div>
      <div className="space-y-8 w-[90%]">
        {topic.map((topic) => (
          <TopicItem {...topic} key={topic.id} />
        ))}
      </div>
    </div>
  );
};

export default TopicSection;
