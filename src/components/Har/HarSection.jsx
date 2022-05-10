import React from "react";
import { useState } from "react";
import { HarData } from "./HarData";
import HarItem from "./HarItem";

const HarSection = () => {
  const [har] = useState(HarData);

  return (
    <div>
      <div className="font-Roboto py-12 text-center font-bold text-3xl">
        HAVE A READ
      </div>
      <div className="space-y-8">
        {har.map((har) => (
          <HarItem {...har} key={har.id} />
        ))}
      </div>
    </div>
  );
};

export default HarSection;
