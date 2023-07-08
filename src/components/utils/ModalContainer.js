import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

// Icons
import CloseIcon from "public/icons/CloseIcon";

const classes = {
  transition: "transition",
  outerWrapper: "fixed top-0 left-0 z-50 min-h-screen centering w-full h-full bg-black/70",
  innerWrapper:
    "max-h-[90vh] 3xs:max-h-[85vh] lg:max-h-[900px] h-full w-full mt-auto 3xs:my-auto max-w-[1400px] overflow-hidden 3xs:px-5",
  innerContainer: "bg-white overflow-auto max-h-full disable-scrollbar p-[17px] min-w-full 3xs:min-w-[400px]",
};

const ModalContainer = ({
  open,
  title,
  clear,
  setOpen,
  children,
  necessary,
  width = 25,
  yesOrNoModal,
  className = "",
  height = "fit-content",
}) => {
  const modalRef = useRef();
  const [mounted, setMounted] = useState(false);
  const [size, setSize] = useState({ width, height });

  const necessaryCloseHandler = (e) => !necessary && modalRef.current.contains(e.target) && setOpen && setOpen(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    open ? document.body.classList.add("!overflow-hidden") : document.body.classList.remove("!overflow-hidden");
  }, [open]);

  useEffect(() => {
    const values = { width, height };
    !isNaN(width) && (values.width = `${width}vw`);
    !isNaN(height) && (values.height = `${height}vh`);
    setSize(values);
  }, [height, width]);

  const outerWrapperOpenCondition = open ? "opacity-100 visible backdrop-blur-sm" : "opacity-0 invisible";
  const outerWrapperYerOrNoModalCondition = yesOrNoModal ? "p-3" : "lg:py-8";
  const innerWrapperOpenCondition = `${open ? "translate-y-0" : "translate-y-full"} 3xs:!translate-y-0`;
  const innerWrapperYerOrNoModalCondition = yesOrNoModal ? "centering" : "flex-center-end 3xs:items-center";
  const innerContainerYerOrNoModalCondition = yesOrNoModal ? "rounded-[10px]" : "rounded-[10px_10px_0px_0px] 3xs:rounded-[10px]";

  return mounted ? (
    createPortal(
      <div
        ref={modalRef}
        onClick={necessaryCloseHandler}
        className={`${open && classes.transition} ${
          classes.outerWrapper
        } ${outerWrapperOpenCondition} ${outerWrapperYerOrNoModalCondition}`}
      >
        <div className={`${classes.innerWrapper} ${innerWrapperOpenCondition} ${innerWrapperYerOrNoModalCondition}`}>
          <div
            style={size}
            onClick={(e) => e.stopPropagation()}
            className={`${innerContainerYerOrNoModalCondition} ${classes.innerContainer} ${className}`}
          >
            {(clear || title) && (
              <div className="flex-between-center mb-3">
                {title && <div>{title}</div>}
                {clear && (
                  <span onClick={() => setOpen(false)} className="cursor-pointer">
                    <CloseIcon />
                  </span>
                )}
              </div>
            )}
            {children}
          </div>
        </div>
      </div>,
      document.body
    )
  ) : (
    <></>
  );
};

export default ModalContainer;
