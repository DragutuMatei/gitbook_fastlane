import React from "react";
import Links from "../components/Links";
import { Link } from "react-router-dom";
import "../assets/style/page.scss";
import { MdEmail } from "react-icons/md";
import { BsTelegram } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";

function Contact({ width, setWidth }) {
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
        <h3 className="title">Contact</h3>
        <p className="p1">
          <span className="special green">Reach out to us</span> for any
          queries, feedback, or support. We're here to help you every step of
          the way.
        </p>
        <div className="center_links">
          <a href={"mailto: twitter@fastlane.buzz"}>
            <MdEmail />
          </a>
          <Link to={"https://t.me/fastlaneportal"}>
            <BsTelegram />
          </Link>
          <Link to={"https://twitter.com/fstlaneapp"}>
            <FaTwitter />
          </Link>
        </div>
        <Links back={"/faq/#top"} notForw={true} />
      </div>
    </div>
  );
}

export default Contact;
