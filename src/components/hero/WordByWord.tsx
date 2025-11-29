"use client";

import { useEffect, useState } from "react";

const PHRASES = [
  "Secure smarter",
  "Safety without excess",
  "Making cyber accessible",
  "Defend without friction",
  "Less noise more signal",
  "Security that scales",
  "Proof over promises",
  "Audit ready always",
];

type WordByWordProps = {
  phrases?: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  holdFull?: number;
  holdEmpty?: number;
  gradient?: string;
};

export default function WordByWord({
  phrases = PHRASES,
  typeSpeed = 120,
  deleteSpeed = 60,
  holdFull = 2000,
  holdEmpty = 400,
  // use primary token for first color so it matches theme
  gradient = "linear-gradient(90deg, var(--primary), #00E5FF)",
}: WordByWordProps) {
  const [i, setI] = useState(0); // which phrase
  const [len, setLen] = useState(0); // how many characters are shown
  const [dir, setDir] = useState<1 | -1>(1); // direction of typing

  useEffect(() => {
    const phrase = phrases[i];
    const atStart = len === 0 && dir === -1;
    const atEnd = len === phrase.length && dir === 1;

    let delay = dir === 1 ? typeSpeed : deleteSpeed;

    if (atEnd) delay = holdFull;
    if (atStart) delay = holdEmpty;

    const t = setTimeout(() => {
      if (atEnd) {
        setDir(-1);
      } else if (atStart) {
        setDir(1);
        setI((idx) => (idx + 1) % phrases.length);
      } else {
        setLen((n) => n + dir);
      }
    }, delay);

    return () => clearTimeout(t);
  }, [i, len, dir, phrases, typeSpeed, deleteSpeed, holdFull, holdEmpty]);

  const shown = phrases[i]?.slice(0, len) ?? "";

  return (
    <span
      className="align-baseline bg-clip-text text-transparent"
      style={{ backgroundImage: gradient }}
      aria-live="polite"
    >
      {shown}
      <span className="ms-2 inline-block w-5 animate-blink"> _ </span>
    </span>
  );
}
