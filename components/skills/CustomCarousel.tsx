import React, { useEffect, useRef } from "react";
import classes from "./customCarousel.module.css";

const CustomCarousel = ({ children }: { children: React.ReactNode }) => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const addAnimation = () => {
    if (scrollerRef.current) {
      const scroller = scrollerRef.current;

      scroller.setAttribute("data-animated", "true");

      const scrollerInner = scroller.querySelector(".scroller__inner");
      if (scrollerInner) {
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true) as HTMLElement;
          duplicatedItem.setAttribute("aria-hidden", "true");
          duplicatedItem.setAttribute("aria-hidden", "true");
          if (scrollerInner) {
            scrollerInner.appendChild(duplicatedItem);
          }
        });
      }
    }
  };

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }
  }, []);

  return (
    <div
      ref={scrollerRef}
      className={classes.scroller}
      data-direction="left"
      data-speed="fast"
    >
      <div className={classes.scroller__inner}>{children}</div>
    </div>
  );
};

export default CustomCarousel;
