import React from "react";
import "../assets/style/page.scss";
import { Link } from "react-router-dom";
import Links from "../components/Links";

function FsToken({ width, setWidth }) {
  return (
    <div
      className="page"
      onClick={() => {
        if (width < 1030) {
          setWidth(0);
        }
      }}
      id="info2"
    >
      <div className="content">
        <h3 className="title">FS Token</h3>
        <p className="p1">
          The FS Token is a central element of the{" "}
          <Link className="link" to="/">
            FastLane platform
          </Link>
          . Designed for transparency and security, it incentivizes active
          community participation across various social networks. FS Token is
          building robust, connected, and thriving digital communities.
        </p>
        <h3 className="title" id="token-utility">
          Token Utility
        </h3>
        <p className="p1">
          <span className="special purple">Incentivized Engagement:</span>{" "}
          Through the <span className="special green">FS Tokens</span>, we aim
          to boost genuine interaction and participation. By rewarding active
          members with <span className="special green">FS Tokens</span>, we
          recognize and encourage constructive involvement in projects.
        </p>
        <p className="p1">
          <span className="special purple">Customized Rewards:</span> Tailored
          to suit specific community needs, leaders can set tasks that align
          with their objectives. Completion of these tasks earns members{" "}
          <span className="special green">FS Tokens</span>, providing a clear
          incentive to participate and contribute.
        </p>
        <p className="p1">
          <span className="special purple">Delayed Release Mechanism:</span> Our
          token release strategy ensures commitment. By releasing{" "}
          <span className="special green">FS Tokens</span> to users' wallets
          after a predetermined duration, we promote sustained interest and
          dedication to the community's goals.{" "}
        </p>
        <p className="p1">
          <span className="special purple">Trust and Transparency:</span> The{" "}
          <span className="special green">FS Token</span> distribution system is
          built on fairness and transparency. Users can trust that their
          contributions will be recognized and rewarded appropriately.
        </p>
        <Links back={"/#info"} forw={"/comunity/#comunity-building"} />
      </div>
    </div>
  );
}

export default FsToken;
