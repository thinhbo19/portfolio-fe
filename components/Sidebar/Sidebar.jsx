"use client";
import React, { useState } from "react";
import "../../Styles/Sidebar.css";
import Logo from "../../assets/logo.svg";
import Link from "next/link";
import Image from "next/image";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import LayersIcon from "@mui/icons-material/Layers";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import EditNoteIcon from "@mui/icons-material/EditNote";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const Sidebar = () => {
  const [isToggle, showMenu] = useState(false);

  return (
    <>
      <aside className={isToggle ? "aside show-menu" : "aside"}>
        <Link href="#Home" className="nav__logo">
          <Image src={Logo} alt="img" width={60} height={60} />
        </Link>

        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <Link href="#Home" className="nav__link">
                  <HomeIcon fontSize="large" />
                </Link>
              </li>

              <li className="nav__item">
                <Link href="#About" className="nav__link">
                  <AccountCircleIcon fontSize="large" />
                </Link>
              </li>

              <li className="nav__item">
                <Link href="#Services" className="nav__link">
                  <WorkIcon fontSize="large" />
                </Link>
              </li>

              <li className="nav__item">
                <Link href="#Resume" className="nav__link">
                  <SchoolIcon fontSize="large" />
                </Link>
              </li>

              <li className="nav__item">
                <Link href="#Portfolio" className="nav__link">
                  <LayersIcon fontSize="large" />
                </Link>
              </li>

              <li className="nav__item">
                <Link href="#Testimonials" className="nav__link">
                  <ChatBubbleIcon fontSize="large" />
                </Link>
              </li>

              {/* <li className="nav__item">
                <Link href="#Blog" className="nav__link">
                  <EditNoteIcon fontSize="large"/>
                </Link>
              </li> */}

              <li className="nav__item">
                <Link href="#Contact" className="nav__link">
                  <LocalPhoneIcon fontSize="large" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>

        <div className="nav__footer">
          <span className="copyright">&copy; 2024 - 2025.</span>
        </div>
      </aside>
      <div
        className={isToggle ? "nav__toggle nav__toggle-open" : "nav__toggle"}
        onClick={() => showMenu(!isToggle)}
      >
        <i className={isToggle ? "icon-close" : "icon-menu"}></i>
      </div>
    </>
  );
};

export default Sidebar;
