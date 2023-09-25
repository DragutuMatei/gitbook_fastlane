import React from "react";
import "../assets/style/page.scss";
import { Link } from "react-router-dom";
import Links from "../components/Links";

function Intro({ width, setWidth, must, setmust }) {
  return (
    <div
      className="page"
      onClick={() => {
        if (width < 1030) {
          setWidth(0);
        }
      }}
      id="info"
    >
      <div className="content">
        <h3 className="title">Intro</h3>
        <p className="p1">
          Thank you for diving into{" "}
          <Link to="/" className="link">
            FastLane
          </Link>
          , your platform for community engagement in the ever-evolving digital
          landscape. Our platform is tailored to empower creators with tools for
          incentivized engagement, ensuring communities not only grow but
          thrive. Within these pages, you'll discover an overview of{" "}
          <Link to="/" className="link">
            FastLane
          </Link>
          .
        </p>
        <h3 className="title" id="introfast">
          Intro{" "}
          <Link to="/" className="link green">
            FastLane
          </Link>
        </h3>
        <p className="p1">
          <span className="special green">
            Engage, Reward, Accelerate with{" "}
            <Link to="/" className="link">
              FastLane
            </Link>
          </span>
        </p>
        <p className="p1">
          <span className="special purple">Engage:</span>
          In our increasingly digital world, genuine interaction forms the
          cornerstone of thriving communities.{" "}
          <Link to="/" className="link">
            FastLane
          </Link>{" "}
          is designed to deepen this bond between creators and their
          communities, a bridge, connecting creators directly with their
          communities.
        </p>
        <p className="p1">
          <span className="special purple">Reward:</span>
          We're not just offering tokens; we're giving a clear signal of
          appreciation. By providing tangible token rewards,{" "}
          <Link to="/" className="link">
            FastLane
          </Link>{" "}
          ensures that every member feels recognized for their contributions,
          enhancing overall community participation.
        </p>
        <p className="p1">
          <span className="special purple">Accelerate:</span>
          An engaged and rewarded community isn't just happier, it's more
          active. As members feel the direct impact of their involvement,
          communities grow more vibrant.
        </p>
        <Links
          must={must}
          setmust={setmust}
          notBack={true}
          forw={"/fs-token/#info2"}
        />
      </div>
    </div>
  );
}

export default Intro;
