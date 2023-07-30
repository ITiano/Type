import { useEffect, useState } from "react";

const useScroll = () => {
  const [scroll, setScroll] = useState({ scrollOffset: 0, isScrollingDown: false, isInTop: true });

  useEffect(() => {
    const updateScrollData = () =>
      setScroll((prev) => {
        const scrollY = window.scrollY;
        return { scrollOffset: scrollY, isScrollingDown: prev.scrollOffset < scrollY, isInTop: scrollY < 10 };
      });
    updateScrollData();
    window.addEventListener("scroll", updateScrollData);
    return () => window.removeEventListener("scroll", updateScrollData);
  }, []);

  return scroll;
};

export default useScroll;
