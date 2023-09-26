import React from "react";
import { Link } from "react-router-dom";
import Links from "../components/Links";

function UseCase({ width, setWidth }) {
  return (
    <div
      className="page"
      onClick={() => {
        if (width < 1030) {
          setWidth(0);
        }
      }}
      id="usecase"
    >
      <div className="content">
        <h3 className="title">Use Cases</h3>
        <p className="p1">
          <Link className="link" to="/">
            FastLane
          </Link>{" "}
          is more than just a community engagement platform; it's a{" "}
          <span className="special green">tool</span> that can be leveraged in a
          multitude of ways to foster genuine interactions, reward active
          participation, and accelerate community growth. Below are some of the
          primary use cases that highlight the versatility and potential of{" "}
          <Link className="link" to="/">
            FastLane
          </Link>
          :
        </p>
        <h3 className="title s-sub">Communities and Crypto Projects:</h3>
        <p className="p1">
          <span className="special green">Engagement Campaigns:</span> Launch
          campaigns to promote new content, gather feedback, or simply engage
          with the audience.
        </p>
        <p className="p1">
          <span className="special green">Reward Loyal Followers:</span>{" "}
          Distribute tokens to active and loyal followers, encouraging more
          consistent interaction and feedback.
        </p>
        <p className="p1">
          <span className="special green">Collaborate with community:</span> Use{" "}
          <Link className="link" to="/">
            FastLane
          </Link>{" "}
          to source ideas, run polls, or even co-create content with the
          community.
        </p>
        <h3 className="title s-sub">Content Creators and Genuine Users:</h3>
        <div className="note">
          <h3 className="h3 s-sub green_text">Direct Rewards</h3>
          <p>
            For every piece of content shared, creators can receive tokens based
            on engagement metrics such as likes, shares, and comments. This
            direct correlation between engagement and rewards ensures that
            quality content is always recognized.
          </p>
        </div>
        <div className="note">
          <h3 className="h3 s-sub green_text">Brand Partnerships</h3>
          <p>
            FastLane facilitates collaborations between creators and brands.
            Creators can be rewarded in tokens for promoting a brand, reviewing
            products, or creating branded content.
          </p>
        </div>
        <div className="note">
          <h3 className="h3 s-sub green_text">Joint Ventures</h3>
          <p>
            Creators can team up with other influencers for collaborative
            content, and the resulting engagement can lead to shared token
            rewards.
          </p>
        </div>
        <div className="note">
          <h3 className="h3 s-sub green_text">Early Access</h3>
          <p>
            Top creators might get early access to new FastLane features or
            partner offerings, allowing them to stay ahead of the curve.
          </p>
        </div>
        <br />
        <br />
        <p className="p1">
          <Link to="/" className="link ">
            FastLane
          </Link>
          ’s reward system for content creators and influencers is not just
          about monetary incentives. It's about recognizing the value they bring
          to the platform and the community. By ensuring that their efforts are
          adequately rewarded, FastLane fosters a thriving ecosystem where
          creators are motivated to produce{" "}
          <span className="special green">quality content,</span> and the
          community is eager to engage.
        </p>

          <Links back={"/comunity/#comunity-building"} forw={"/faq/#top"} />
      </div>
    </div>
  );
}

export default UseCase;
