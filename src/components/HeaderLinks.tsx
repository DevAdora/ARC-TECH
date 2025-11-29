"use client";
import { useState, useEffect, useRef } from "react";

// ScrambleText Component
export default function ScrambleText({
  label,
  isLight = false,
}: {
  label: string;
  isLight?: boolean;
}) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const [textValue, setTextValue] = useState<string>(label);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const triggerScramble = () => {
    if (intervalRef.current !== null) return;

    let progress = 0;
    const originalText = label;

    intervalRef.current = setInterval(() => {
      setTextValue((prevText: string) => {
        return prevText
          .split("")
          .map((_, index: number) => {
            if (index < progress) return originalText[index];
            return alphabet[Math.floor(Math.random() * alphabet.length)];
          })
          .join("");
      });

      progress += 0.5;

      if (progress >= originalText.length) {
        if (intervalRef.current !== null) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      }
    }, 40);
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <span
      onMouseEnter={triggerScramble}
      className={`font-onest cursor-pointer transition-colors relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:transition-all after:duration-300 hover:after:w-full ${
        isLight
          ? "hover:text-white after:bg-white  after:bottom-[-10px]"
          : "hover:text-white after:bg-white"
      }`}
    >
      {textValue}
    </span>
  );
}
