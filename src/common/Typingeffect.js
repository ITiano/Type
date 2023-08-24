"use client"

import React, { useState, useEffect } from "react";

const TypingEffect = ({ dynamicText = [], defaultText = "" }) => {
  const [index, setIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === dynamicText.length - 1 && subIndex === dynamicText[index].length) return;

    if (subIndex === dynamicText[index].length + 1 && index !== dynamicText.length - 1 && !reverse) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    const timeout = setTimeout(() => setSubIndex((prev) => prev + (reverse ? -1 : 1)), 150);
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, dynamicText]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => setBlink((prev) => !prev), 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <div className="flex-start-center">
      <p className={defaultText ? "" : "opacity-0 w-0"}>{defaultText ? defaultText : "_"}</p>
      <p>{dynamicText[index].substring(0, subIndex)}</p>
      <p className="!w-[7px] overflow-hidden">{blink ? "|" : " "}</p>
    </div>
  );
};

export default TypingEffect;
