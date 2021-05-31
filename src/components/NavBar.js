import React from "react";
import { Menu } from "react-feather";

const NavBar = ({ pageHandler, currentPage, sideDrawerHandler }) => {
  return (
    <nav className="absolute right-0 py-6 px-4 top-0">
      <Menu
        size="35"
        fill="white"
        className="menu-btn cursor-pointer hover:opacity-90 transition-all ease-out"
        onClick={sideDrawerHandler}
        strokeWidth="1.2"
      />

      <ul>
        <li className="mx-5 hover:text-red-500 transition-all ease-out cursor-pointer">
          <a
            href="https://docs.google.com/document/d/1hYbdfFH7KJWDOZ5vgYn_l_WXEOc_d5HP1yXfdjCO5fQ/edit?usp=sharing"
            rel="noreferrer"
            target="_blank"
          >
            Résumé
          </a>
        </li>
        <li
          className={
            currentPage === "projects"
              ? "mx-5 hover:text-red-500 transition-all ease-out cursor-pointer text-red-500"
              : "mx-5 hover:text-red-500 transition-all ease-out cursor-pointer"
          }
          onClick={() => pageHandler("projects")}
        >
          Projects
        </li>
        <li
          className={
            currentPage === "about"
              ? "mx-5 hover:text-red-500 transition-all ease-out cursor-pointer text-red-500"
              : "mx-5 hover:text-red-500 transition-all ease-out cursor-pointer"
          }
          onClick={() => pageHandler("about")}
        >
          About
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
