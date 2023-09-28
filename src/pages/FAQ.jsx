import React from "react";
import Links from "../components/Links";
import { Link } from "react-router-dom";
import "../assets/style/page.scss";

function FAQ({ width, setWidth }) {
  return (
    <div
      className="page"
      onClick={() => {
        if (width < 1030) {
          setWidth(0);
        }
      }}
      id="top"
    >
      <div className="content">
        <h3 className="title">FAQ</h3>
        <h3 className="title s-sub">
          <span className="special green">Q:</span> What is FastLane?
        </h3>
        <div className="ans">
          <h3 className="title s-sub">
            <span className="special purple">A:</span>
          </h3>
          <p className="p1">
            FastLane is an innovative platform designed to incentivize community
            engagement by offering FS Tokens as rewards. Itt bridges the gap
            between creators and their communities, fostering a dynamic
            ecosystem where meaningful contributions are acknowledged and
            rewarded.
          </p>
        </div>
        <div className="line" />
        <h3 className="title s-sub">
          <span className="special green">Q:</span>How does the reward system
          work in FastLane?
        </h3>
        <div className="ans">
          <h3 className="title s-sub">
            <span className="special purple">A:</span>
          </h3>
          <p className="p1">
            Community creators set up tailored tasks aligned with their
            project's goals. Upon task completion, community members are
            rewarded with FS tokens. FastLane ensures a transparent token
            distribution via smart contracts, reducing the risk of fraud.
          </p>
        </div>
        <div className="line" />
        <h3 className="title s-sub">
          <span className="special green">Q:</span>How do I get started with
          FastLane?
        </h3>
        <div className="ans">
          <h3 className="title s-sub">
            <span className="special purple">A:</span>
          </h3>
          <p className="p1">
            Users can connect their Metamask wallets, link their social
            accounts, and then browse available tasks. After selecting a task,
            they engage with the community, complete the task (e.g., tweets,
            Discord interactions), and then await token rewards after
            verification.
          </p>
        </div>
        <div className="line" />
        <h3 className="title s-sub">
          <span className="special green">Q:</span>Is FastLane's token
          distribution trustworthy?
        </h3>
        <div className="ans">
          <h3 className="title s-sub">
            <span className="special purple">A:</span>
          </h3>
          <p className="p1">
            Absolutely! Users can trust in the fairness of the FS Token
            distribution system. The transparent nature of the blockchain,
            combined with the verifiable actions through smart contracts,
            assures users that their efforts will be justly rewarded.
          </p>
        </div>
        <div className="line" />
        <h3 className="title s-sub">
          <span className="special green">Q:</span>Can I customize tasks for my
          community on FastLane?
        </h3>
        <div className="ans">
          <h3 className="title s-sub">
            <span className="special purple">A:</span>
          </h3>
          <p className="p1">
            Yes, FastLane offers a high level of customization. Creators can
            design tasks to cater specifically to their project's needs,
            ensuring that every interaction is meaningful and aligns with their
            objectives.
          </p>
        </div>
        <div className="line" />
        <h3 className="title s-sub">
          <span className="special green">Q:</span> Is there a way to monitor
          community engagement on FastLane?
        </h3>
        <div className="ans">
          <h3 className="title s-sub">
            <span className="special purple">A:</span>
          </h3>
          <p className="p1">
            Yes, project founders can actively track engagement levels and
            oversee task completion, ensuring their community remains vibrant
            and continues to grow.
          </p>
        </div>
        <div className="line" />
        <h3 className="title s-sub">
          <span className="special green">Q:</span>I have more questions about
          FastLane. Where can I reach out?
        </h3>
        <div className="ans">
          <h3 className="title s-sub">
            <span className="special purple">A:</span>
          </h3>
          <p className="p1">
            For any additional queries or support, you can connect with us
            through our official channels. We're always eager to assist and
            provide you with the best FastLane experience!
          </p>
        </div>
        <Links back={"/usecase/#usecase"} forw={"/contact"} />
      </div>
    </div>
  );
}

export default FAQ;
