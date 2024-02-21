import React, { useEffect, useState } from "react";

export const ScrollUpBtn = () => {
  const [scrollUpButton, setScrollUpButton] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setScrollUpButton(true);
      } else {
        setScrollUpButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {scrollUpButton && (
        <button className="scrollUpBtn" onClick={scrollUp}>
          <i className="fa fa-angle-up"></i>
        </button>
      )}
    </>
  );
};
