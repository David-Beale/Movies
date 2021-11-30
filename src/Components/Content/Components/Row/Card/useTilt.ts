import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

const options = {
  scale: 1.05,
  speed: 1000,
  glare: true,
  "max-glare": 0.5,
  max: 10,
};

export const useTilt = () => {
  const tilt = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!tilt.current) return;
    VanillaTilt.init(tilt.current, options);
  }, []);

  return tilt;
};
