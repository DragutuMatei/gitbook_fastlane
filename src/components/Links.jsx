import React from "react";
import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";
import { HashLink } from "react-router-hash-link";

function Links({ back, forw, notBack, notForw, setmust, must }) {
  return (
    <>
      <div className="links" style={notBack && { justifyContent: "flex-end" }}>
        {!notBack && (
          <HashLink to={back} className="c" onClick={() => setmust(must++)}>
            <BsArrowBarLeft />
            <span id="back">Back</span>
          </HashLink>
        )}
        {!notForw && (
          <HashLink to={forw} className="c" onClick={() => setmust(must++)}>
            <span id="forw">Forward</span>
            <BsArrowBarRight />
          </HashLink>
        )}
      </div>
    </>
  );
}

export default Links;
