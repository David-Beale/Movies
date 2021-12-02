import { useState, useEffect } from "react";

export const useDimensions = () => {
  const [dimensions, setDimensions] = useState({ height: 0, width: 0 });

  useEffect(() => {
    const onResize = () => {
      const maxHeight = window.innerHeight - 50;
      const maxWidth = window.innerWidth - 50;
      const ratio = maxWidth / maxHeight;
      if (ratio < 1.34) {
        setDimensions({ height: (maxWidth * 3) / 4, width: maxWidth });
      } else {
        setDimensions({ height: maxHeight, width: (maxHeight * 4) / 3 });
      }
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return dimensions;
};
