import { Children, cloneElement, useEffect, useRef, useState } from "react";

const CustomFade = ({ children }) => {
  const parentRef = useRef([]);

  useEffect(() => {
    const Observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            Observer.disconnect(entry);
          }
        });
      },
      { rootMargin: "0px 0px -100px 0px" }
    );
    parentRef?.current?.forEach((child) => Observer.observe(child));
  }, []);

  return Children.map(children, (child, index) =>
    cloneElement(child, {
      className: `${child.props.className} fade-out`,
      ref: (ref) => (parentRef.current[index] = ref),
    })
  );
};

export default CustomFade;
