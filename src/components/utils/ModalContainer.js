"use client";

import { createPortal } from "react-dom";
import { CloseIcon } from "@assets/icons/icons";
import React, { memo, useEffect, useMemo, useState } from "react";

const Modal = ({ children, open, setOpen, width, height, necessary, yesOrNoModal, title, clear, className = "" }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    open ? document.body.classList.add("!overflow-hidden") : document.body.classList.remove("!overflow-hidden");
  }, [open]);

  const classes = useMemo(
    () => ({
      container: `h-[100svh] bg-black/50 fixed inset-0 transition-time z-50 flex ${
        open ? "opacity-100 visible backdrop-blur-sm" : "opacity-0 invisible"
      }`,
      innerWrapper: `transition-time bg-white overflow-auto ${className}`,
      mobileSize: `w-full rounded-[10px_10px_0px_0px] mt-auto p-3 max-h-[90%] ${yesOrNoModal ? "hidden" : "sm:hidden"} ${
        open ? "translate-y-0" : "translate-y-full"
      }`,
      desktopSize: `rounded-[10px] min-w-[310px] sm:min-w-[450px] max-w-[calc(100%-100px)] xl:max-w-[1200px] max-h-[85%] m-auto p-4 ${
        !yesOrNoModal && "hidden sm:block"
      }`,
    }),
    [className, open, yesOrNoModal]
  );

  const preventClosing = (e) => e.stopPropagation();

  return mounted ? (
    createPortal(
      <div className={classes.container} onClick={() => !necessary && setOpen(false)}>
        {/* Mobile size */}
        <div style={{ height }} onClick={preventClosing} className={`${classes.mobileSize} ${classes.innerWrapper}`}>
          <TopHeader clear={clear} title={title} setOpen={setOpen} />
          {children}
        </div>
        {/* Desktop size */}
        <div style={{ width, height }} onClick={preventClosing} className={`${classes.desktopSize} ${classes.innerWrapper}`}>
          <TopHeader clear={clear} title={title} setOpen={setOpen} />
          {children}
        </div>
      </div>,
      document.body
    )
  ) : (
    <></>
  );
};

export default memo(Modal);

const TopHeader = ({ title, clear, setOpen }) => {
  return (
    (clear || title) && (
      <div className={`mb-3 ${title ? "flex-between-center" : "flex-end-center"}`}>
        {title && <div>{title}</div>}
        {clear && (
          <button onClick={() => setOpen && setOpen(false)}>
            <CloseIcon />
          </button>
        )}
      </div>
    )
  );
};
