import React, { Children, useCallback, useEffect, useMemo, useRef, useState, forwardRef } from "react";
import styles from "../../styles/list.module.css";
import { ChevronDownIcon, DotsIcon } from "@assets/icons/icons";

const CustomList = ({ children, data = [] }) => {
  const ref = useRef();
  const [showIcon, setShowIcon] = useState(false);
  const icons = useRef(children.filter((child) => child?.props.icon));

  useEffect(() => {
    const listIconShowHandler = () => {
      const hasDefaultAccordion = !!children.find(({ props }) => props.accordion && !props.hidden);
      if (hasDefaultAccordion) setShowIcon(true);
      else {
        const hasHiddenItem = [...ref.current.childNodes].find((item) => getComputedStyle(item).display === "none");
        setShowIcon(!!hasHiddenItem);
      }
    };
    listIconShowHandler();
    window.addEventListener("resize", listIconShowHandler);
    return () => window.removeEventListener("resize", listIconShowHandler);
  }, [children, showIcon]);

  return (
    <div className="flex flex-col divide-y border rounded-lg bg-white">
      <ListHeader total={data?.length} showIcon={showIcon} ref={ref} hasIcon={!!icons?.current?.length}>
        {children}
      </ListHeader>
      {data.map((item) => (
        <ListBodyElement key={item.id} item={item} icons={icons.current} showIcon={showIcon}>
          {children}
        </ListBodyElement>
      ))}
    </div>
  );
};

export default CustomList;

const ListHeader = forwardRef(function ListHeader({ children, total, hasIcon, showIcon }, ref) {
  return (
    <div ref={ref} className="flex sticky top-0 bg-white p-3 z-10">
      {Children.map(
        children,
        ({ props: { title, value, hidden, accordion, responsive } }) =>
          title &&
          value &&
          !hidden &&
          !accordion && (
            <div key={value} data-responsive={responsive} className={`flex-1 centering ${styles.title}`}>
              {title}
            </div>
          )
      )}
      {(showIcon || hasIcon) && (
        <div className="centering" style={{ width: hasIcon && showIcon ? 82 : 48 }}>
          {total}
        </div>
      )}
    </div>
  );
});

const ListBodyElement = ({ children, item, icons, showIcon }) => {
  const ref = useRef();
  const [open, setOpen] = useState(false);

  const classes = useMemo(() => {
    return {
      container: `transition ${open && "mt-4"}`,
      headerContainer: "flex p-3",
      itemClick: "transition hover:text-primary-900 cursor-pointer",
      headerItem: `flex-1 centering ${styles.listHeader}`,
      iconsContainer: "flex-start-center gap-1.5 mx-2",
      icon: `w-[30px] h-[30px] centering rounded-full hover:bg-primary-900/20 transition cursor-pointer ${open && "rotate-180"}`,
      bodyContainer: `overflow-hidden transition ${open && "border-t"}`,
      gridContainer: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 p-4",
    };
  }, [open]);

  return (
    <div className={classes.container}>
      {/* Accordion header */}
      <div className={classes.headerContainer}>
        {Children.map(
          children,
          ({ props: { title, value, hidden, accordion, responsive, onClick } }) =>
            title &&
            value &&
            !hidden &&
            !accordion && (
              <div key={title} data-responsive={responsive} className={classes.headerItem}>
                <div onClick={() => onClick && onClick(item)} className={onClick && classes.itemClick}>
                  {value(item)}
                </div>
              </div>
            )
        )}
        {(showIcon || !!icons.length) && (
          <div className={classes.iconsContainer}>
            {!!icons.length && (
              <ListIcons item={item} className={classes.icon}>
                {icons}
              </ListIcons>
            )}
            {showIcon && (
              <button onClick={() => setOpen((prev) => !prev)} className={classes.icon}>
                <ChevronDownIcon />
              </button>
            )}
          </div>
        )}
      </div>
      {/* Accordion body */}
      {showIcon && (
        <div style={{ height: open ? ref?.current?.clientHeight + "px" : 0 }} className={classes.bodyContainer}>
          <div ref={ref} className={classes.gridContainer}>
            {Children.map(
              children,
              ({ props: { title, value, hidden, responsive, accordion, onClick } }) =>
                title &&
                value &&
                !hidden &&
                (responsive || accordion) && (
                  <div key={title} data-responsive={responsive} className={styles.listBody}>
                    <div className={onClick && classes.itemClick} onClick={() => onClick && onClick(item)}>
                      {title} : {value(item)}
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const ListIcons = ({ item, className, children }) => {
  const ref = useRef();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const toggleHandler = ({ target }) => !ref?.current?.contains(target) && setToggle(false);
    Children.count(children) > 1 && toggle && window.addEventListener("click", toggleHandler);
    return () => window.removeEventListener("click", toggleHandler);
  }, [children, toggle]);

  const clickHandler = useCallback(
    (callback) => {
      callback && callback(item);
      setToggle(false);
    },
    [item]
  );

  return Children.count(children) > 1 ? (
    <div ref={ref} className="relative">
      <div onClick={() => setToggle(true)}>
        <DotsIcon className={`rotate-90 ${className}`} />
      </div>
      <div
        className={`absolute top-[calc(100%+10px)] right-0 w-[115px] divide-y shadow-lg transition bg-white z-10 rounded-md overflow-hidden ${
          toggle ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {Children.map(children, ({ props: { title, onClick, icon } }) => (
          <div
            key={title}
            onClick={() => clickHandler(onClick)}
            className="flex-between-center px-3 py-2 cursor-pointer hover:bg-primary-900/20 transition"
          >
            <div className="text-sm">{title}</div>
            <div>{icon}</div>
          </div>
        ))}
      </div>
    </div>
  ) : (
    <div
      className={`w-[30px] overflow-hidden whitespace-nowrap centering ${className}`}
      onClick={() => children[0]?.props?.onClick && children[0]?.props?.onClick(item)}
    >
      {children[0]?.props?.icon}
    </div>
  );
};

export const ListElement = ({ title, accordion, responsive, onClick, value, hidden }) => {
  return null;
};

export const IconElement = ({ title, icon, onClick }) => {
  return null;
};
