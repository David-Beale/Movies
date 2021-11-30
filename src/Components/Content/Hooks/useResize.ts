import { useEffect, useState } from "react";

export const useResize = () => {
  const [resize, setResize] = useState<null[]>([]);

  useEffect(() => {
    const onResize = () => {
      setResize([]);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return resize;
};
