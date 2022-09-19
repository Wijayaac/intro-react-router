import React from "react";
import { Link } from "react-router-dom";

import style from "./style.module.css";

const Navbar = () => {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </nav>
    </header>
  );
};

export default Navbar;
