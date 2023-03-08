import { useEffect, useState } from "react";

export const CustomBlur = (ref, open, setOpen) => {
  const [isEventSet, setIsEventSet] = useState(false);

  useEffect(() => {
    const closeHandler = (e) => !ref?.current?.contains(e.target) && setOpen(false);
    if (open && !isEventSet) {
      setIsEventSet(true);
      window.addEventListener("click", (e) => closeHandler(e));
    }
    return () => window.removeEventListener("click", (e) => closeHandler(e));
  }, [setOpen, isEventSet, open, ref]);
};
