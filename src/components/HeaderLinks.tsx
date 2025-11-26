import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ScrambleText Component
export default function ScrambleText({ label }: { label: string }) {
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
      className="cursor-pointer transition-colors hover:text-gray-300"
    >
      {textValue}
    </span>
  );
}
