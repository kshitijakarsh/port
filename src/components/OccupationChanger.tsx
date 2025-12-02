"use client";

import { useState, useEffect } from "react";

export default function OccupationChanger() {
  const items = ["Frontend Developer", "Designer", "Learner"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="text-blue-400 underline font-semibold">
      {items[index]}
    </span>
  );
}
