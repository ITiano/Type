import { useEffect, useState } from "react";

const useViewport = () => {
  const [viewport, setViewport] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setViewport({ width: Math.floor(visualViewport.width), height: Math.floor(visualViewport.height) });
    const calcViewportSize = () =>
      setViewport({ width: Math.floor(visualViewport.width), height: Math.floor(visualViewport.height) });
    window.addEventListener("resize", calcViewportSize);
    return () => window.removeEventListener("resize", calcViewportSize);
  }, []);

  return viewport;
};

export default useViewport;
