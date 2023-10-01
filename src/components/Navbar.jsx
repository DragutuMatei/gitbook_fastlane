import React, { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import "../assets/style/navbar.scss";
import useWindowSize from "./WindowSize";
import { HashLink } from "react-router-hash-link";

function Navbar({ width, widthh, setWidth }) {
  const choseId = (id) => {
    if (id == "#info") {
      return 0;
    } else if (id == "#comunity-building") {
      return 1;
    } else if (id == "#campain-board") {
      return 2;
    } else if (id == "#integrations") {
      return 4;
    } else if (id == "#roles") {
      return 5;
    } else if (id == "#types") {
      return 3;
    }
  };

  useEffect(() => {
    const link = window.location.pathname;
    const id = window.location.hash;

    if (link.includes("fs-token")) click(1, true);
    else if (link.includes("comunity")) click(2, true);
    else if (link.includes("faq")) click(6, true);
    else if (link.includes("contact")) click(7, true);
    else click(0, true);
  }, [window.location.pathname, window]);

  const click = (index, another) => {
    if (width < 1030) {
      setWidth(0);
    }
    const sections = document.querySelectorAll("aside section");
    sections.forEach((section, i) => {
      if (i == index) {
        if (!section.classList.contains("active"))
          section.classList.add("active");
      } else if (section.classList.contains("active")) {
        section.classList.remove("active");
      }
    });
    subclick(choseId(window.location.hash), false);
  };

  const subclick = (index, another) => {
    if (width < 1030) {
      setWidth(0);
    }
    const hashLinks = document.querySelectorAll(".hashLink");
    if (another) {
      const active_hashLinks = document.querySelectorAll(".active .hashLink");

      hashLinks.forEach((hashLink, i) => {
        if (hashLink.classList.contains("sub_active")) {
          hashLink.classList.remove("sub_active");
        }
      });

      active_hashLinks.forEach((hashLink, i) => {
        if (i == index) {
          if (!hashLink.classList.contains("sub_active"))
            hashLink.classList.add("sub_active");
        } else if (hashLink.classList.contains("sub_active")) {
          hashLink.classList.remove("sub_active");
        }
      });
    } else {
      const active_hashLinks = document.querySelectorAll(".active .hashLink");

      active_hashLinks.forEach((hashLink, i) => {
        if (i == index) {
          if (!hashLink.classList.contains("sub_active"))
            hashLink.classList.add("sub_active");
        } else if (hashLink.classList.contains("sub_active")) {
          hashLink.classList.remove("sub_active");
        }
      });
      hashLinks.forEach((hashLink, i) => {
        if (i == index) {
          if (!hashLink.classList.contains("sub_active"))
            hashLink.classList.add("sub_active");
        } else if (hashLink.classList.contains("sub_active")) {
          hashLink.classList.remove("sub_active");
        }
      });
    }
  };

  return (
    <>
      <nav>
        <RxHamburgerMenu
          className="hamb"
          onClick={() => {
            if (width < 1030) setWidth(widthh == 0 ? 320 : 0);
          }}
        />
        <img
          src={require("../assets/images/text_logo.svg").default}
          alt=""
          className="logo"
        />
        <div className="search">
          <BiSearch className="search_icon" />
          <input type="text" placeholder="Search..." />
        </div>
      </nav>
      <aside style={{ maxWidth: width < 1030 && widthh }}>
        <section onClick={() => click(0)}>
          <HashLink to="/#info" className="title">
            Intro
          </HashLink>
          <HashLink
            className="hashLink"
            onClick={() => subclick(0)}
            to="/#info"
          >
            Platform info
          </HashLink>
        </section>
        <section onClick={() => click(1)}>
          <HashLink to="/comunity/#comunity-building" className="title">
            community building
          </HashLink>
          <HashLink
            className="hashLink"
            onClick={() => subclick(1)}
            to="/comunity/#comunity-building"
          >
            create your community
          </HashLink>
          <HashLink
            className="hashLink"
            to="/comunity/#campain-board"
            onClick={() => subclick(2)}
          >
            campaign board
          </HashLink>
          <HashLink
            className="hashLink"
            to="/comunity/#types"
            onClick={() => subclick(3)}
          >
            types of missions/tasks
          </HashLink>
          <HashLink
            className="hashLink"
            to="/comunity/#integrations"
            onClick={() => subclick(4)}
          >
            integrations (with discord/telegram/twitter)
          </HashLink>
          <HashLink
            className="hashLink"
            to="/comunity/#roles"
            onClick={() => subclick(5)}
          >
            roles (admins/reviewers/users)
          </HashLink>
        </section>{" "}
        <section onClick={() => click(2)}>
          <HashLink to="/fs-token/#info2" className="title">
            fs token
          </HashLink>
        </section>
        <section onClick={() => click(3)}>
          <Link to="/usecase/#usecase" className="title">
            use cases
          </Link>
        </section>
        {/* <section onClick={() => click(4)}>
          <Link to="/" className="title">
            changelogs
          </Link>
        </section> */}
        {/* <section onClick={() => click(5)}>
          <Link to="/" className="title">
            team
          </Link>
        </section> */}
        <section onClick={() => click(4)}>
          <HashLink to="/faq/#top" className="title">
            faq
          </HashLink>
        </section>
        <section onClick={() => click(5)}>
          <HashLink to="/contact/#top" className="title">
            contact
          </HashLink>
        </section>
      </aside>
    </>
  );
}

export default Navbar;
