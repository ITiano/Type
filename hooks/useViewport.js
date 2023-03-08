import { useEffect, useState } from "react";

const useViewport = (unit) => {
  const [viewport, setViewport] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const widthCalculator = () => (unit ? `${Math.floor(visualViewport.width)}${unit}` : Math.floor(visualViewport.width));
    const heightCalculator = () => (unit ? `${Math.floor(visualViewport.height)}${unit}` : Math.floor(visualViewport.height));
    setViewport({ width: widthCalculator(), height: heightCalculator() });
    const calcViewportSize = () => setViewport({ width: widthCalculator(), height: heightCalculator() });
    window.addEventListener("resize", calcViewportSize);
    return () => window.removeEventListener("resize", calcViewportSize);
  }, [unit]);

  return viewport;
};

export default useViewport;
