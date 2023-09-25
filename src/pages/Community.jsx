import React from "react";
import Links from "../components/Links";
import { Link } from "react-router-dom";
import "../assets/style/page.scss";

function Community({ width, setWidth}) {
  return (
    <div
      className="page"
      onClick={() => {
        if (width < 1030) {
          setWidth(0);
        }
      }}
      id="comunity-building"
    >
      <div className="content">
        <h3 className="title">Community Building</h3>
        <p className="p1">
          At every successful digital venture lies a strong community.{" "}
          <Link to={"/"} className="link">
            FastLane
          </Link>{" "}
          recognizes this essence and provides tools that prioritize meaningful
          engagements over mere numbers. Let’s delve into the features that make
          community building on{" "}
          <Link to={"/"} className="link">
            FastLane
          </Link>{" "}
          a seamless experience.
        </p>
        <div className="text_box">
          <h3 className="h3  s-sub">Create Your Community:</h3>
          <h3 style={{ margin: 0 }} className="title special s-sub">
            Purpose:
          </h3>
          <p className="p1">
            Establishing a vision and direction is the starting point of any
            community.{" "}
            <Link to="/" className="link green">
              FastLane
            </Link>{" "}
            offers tools to initiate this journey, setting the stage for
            long-lasting and profound connections.
          </p>
        </div>

        <div className="note">
          <h3 className="title s-sub">Implementation:</h3>
          <p className="p1">
            Using{" "}
            <Link to="/" className="link green">
              FastLane
            </Link>
            ’s user-centric interface, project founders can:
          </p>
          <ul>
            <li>Set up their dedicated community space.</li>
            <li>Define overarching objectives and values.</li>
            <li>Extend invitations to potential members.</li>
          </ul>
        </div>
        <h3 className="title s-sub">Benefits:</h3>
        <div id="campain-board"></div>
        <p className="p1">
          A dedicated enclave ensures members resonate deeply with your
          project’s mission, fostering focused interactions and building a
          foundational base for genuine growth.
        </p>
        <h3 className="title">Campaign Board</h3>
        <div className="text_box">
          <h3 className="title s-sub">Purpose:</h3>
          <p className="p1">
            Direct and shape your community's engagement with the campaign
            board, a centralized space for tasks that mirror the project’s
            aspirations.
          </p>
        </div>
        <div className="note">
          <h3 className="title s-sub" style={{ margin: 0, marginBottom: 20 }}>
            Implementation:
          </h3>
          <p className="p1">Founders and community managers can:</p>
          <ul>
            <li>
              Design and list tasks, specifying clear instructions and
              deadlines.
            </li>
            <li>
              Allocate token-based rewards for each task, ensuring motivation
              and fair compensation for contributors.
            </li>
          </ul>
        </div>
        <h3 className="title s-sub">Benefits:</h3>
        <p className="p1">
          The campaign board offers a transparent and organized roadmap for
          community members, highlighting avenues for participation and
          potential <span className="special green">rewards</span>. This clarity
          boosts contributions and ensures alignment with the project’s vision.
        </p>
        <div id="types"></div>
        <p className="p1">
          <Link to="/" className="link">
            FastLane
          </Link>
          ’s community building features not only encourage the formation of
          communities but also nurture their growth and evolution. The emphasis
          is always on genuine interactions and shared objectives. With tools
          like <span className="special green">community creation</span> and{" "}
          <span className="special green">the campaign board</span>, FastLane
          promises a thriving, engaged, and rewarded community.
        </p>

        <h3 className="title">Types of Missions/Tasks</h3>
        <p className="p1">
          <Link to="/" className="link">
            FastLane
          </Link>
          ’s customizable engagement offers a variety of mission or task types
          tailored to the unique needs and objectives of each community project.
        </p>
        <h3 className="title s-sub green_text">Project Creation Tasks:</h3>
        <p className="p1">
          Community founders have the opportunity to initiate boards which
          detail specific missions relevant to their project's growth.
        </p>
        <h3 className="title s-sub green_text">Engagement Tasks:</h3>
        <p className="p1">
          From sharing content on{" "}
          <span className="special purple">social media platforms</span> to
          initiating meaningful interactions on forums, there's an array of
          tasks that users can opt for.
        </p>
        <h3 className="title s-sub green_text">Detailed Task Instructions:</h3>
        <div id="integrations"></div>
        <p className="p1">
          Each task comes with comprehensive instructions, defined deadlines,
          and a set token reward.{" "}
          <span className="special purple">
            Ensuring clarity and transparency
          </span>
          , these detailed guidelines enable users to fully understand the
          expectations and the rewards at stake.
        </p>
        <h3 className="title">
          Integrations with Discord, Telegram and Twitter
        </h3>
        <p className="p1">
          Leveraging popular social platforms can greatly enhance{" "}
          <Link to="/" className="link">
            FastLane
          </Link>
          's community-building capabilities. By integrating with{" "}
          <span className="special purple">Discord, Telegram, and Twitter</span>
          , FastLane not only streamlines the process of task validation and
          engagement but also expands its reach and effectiveness.
        </p>
        <div className="note">
          <h3 className="title ">Discord Integration</h3>
          <h3 className="title s-sub green_text">Purpose</h3>
          <p className="p1">
            {" "}
            Discord is renowned for fostering communities, particularly in the
            crypto and tech realms. It offers channels, voice chats, and direct
            messaging, providing an immersive environment for community
            interactions.
          </p>
          <h3 className="title s-sub green_text">Implementation</h3>
          <p className="p1">
            by integrating{" "}
            <Link to="/" className="link">
              FastLane
            </Link>{" "}
            with Discord, users can directly engage with tasks, receive
            real-time notifications, and validate task completions seamlessly
            within the Discord environment.
          </p>
          <h3 className="title s-sub green_text">Benefits</h3>
          <p className="p1">
            This integration promotes continuous and organic interactions, and
            community admins can oversee activities and reward distribution
            effectively.
          </p>
        </div>

        <div className="note">
          <h3 className="title ">Telegram Integration</h3>
          <h3 className="title s-sub green_text">Purpose</h3>
          <p className="p1">
            Telegram is a go-to platform for many crypto projects for its quick
            communication capabilities and large user base.
          </p>
          <h3 className="title s-sub green_text">Implementation</h3>
          <p className="p1">
            Integrating{" "}
            <Link to="/" className="link">
              FastLane
            </Link>{" "}
            with Telegram enables project founders to push timely updates,
            assign tasks, and engage with the community directly through
            Telegram chats.
          </p>
          <h3 className="title s-sub green_text">Benefits</h3>
          <p className="p1">
            Real-time discussions, immediate feedback loops, and a simplified
            onboarding process for new community members.
          </p>
        </div>

        <div className="note">
          <h3 className="title ">Twitter Integration</h3>
          <h3 className="title s-sub green_text">Purpose</h3>
          <p className="p1">
            Twitter stands as a primary news and update source in the crypto
            world. It's vital for visibility and engagement.
          </p>
          <h3 className="title s-sub green_text">Implementation</h3>
          <p className="p1">
            With{" "}
            <Link to="/" className="link">
              FastLane
            </Link>
            's integration, community members can engage in tasks directly
            linked to Twitter actions, such as tweets, retweets, or likes. Task
            completions can be automatically verified through linked Twitter
            accounts.
          </p>
          <h3 className="title s-sub green_text">Benefits</h3>
          <p className="p1">
            Real-time discussions, immediate feedback loops, and a simplified
            onboarding process for new community members.
          </p>
        </div>
        <br />
        <br />
        <div id="roles"></div>
        <p className="p1">
          The integration of{" "}
          <Link to="/" className="link">
            FastLane
          </Link>{" "}
          with these platforms amplifies the community's voice, broadens reach,
          and streamlines engagement tracking. It not only makes the user
          experience smoother but also reinforces{" "}
          <Link to="/" className="link">
            FastLane
          </Link>
          's commitment to fostering genuine, transparent, and effective
          community engagement.
        </p>

        <h3 className="title">Roles</h3>
        <p className="p1">
          <Link to="/" className="link">
            FastLane
          </Link>{" "}
          recognizes the importance of structured community management. Hence,
          different roles with varied responsibilities have been established:
        </p>
        <div className="text_box">
          <h3 className="h3">Admins</h3>
          <p className="p1">
            Admins are the backbone of a community board. They have the rights
            to set up tasks, allocate FS token rewards, and oversee the entire
            project's operations on{" "}
            <Link to="/" className="link green">
              FastLane
            </Link>
            . Their primary responsibility is to ensure the smooth functioning
            and growth of the community.
          </p>
        </div>
        <div className="text_box">
          <h3 className="h3">Reviewers</h3>
          <p className="p1">
            Reviewers play a pivotal role in validating task completions. Once a
            user completes a task, it's the reviewer's duty to verify the
            authenticity of the task, cross-checking with connected social
            accounts and ensuring that community standards are met. Their input
            is essential in preventing abuse and ensuring genuine contributions.{" "}
          </p>
        </div>
        <div className="text_box">
          <h3 className="h3">Users</h3>
          <p className="p1">
            Users are community members who actively participate in various
            tasks. They bring vibrancy to the community by actively engaging,
            contributing, and helping achieve the project's goals. After task
            completion and subsequent verification, users receive FS tokens as
            rewards, which get released to their wallets after a predefined time
            set by the project founder.{" "}
          </p>
        </div>
        <Links
          back={"/fs-token/#info2"}
          forw={"/usecase/#usecase"}
        />
      </div>
    </div>
  );
}

export default Community;
