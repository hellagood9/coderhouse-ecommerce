import React from "react";

import Avatar from "../../Avatar/Avatar";
import Cart from "../../CartIcon/CartIcon";
import Logo from "../../Logo/Logo";
import Search from "../../Search/Search";

import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <header className={styles["top-nav"]}>
      <Logo />
      <div className={styles["top-nav__middle"]}>
        <Search />
      </div>
      <div className={styles["top-nav__right"]}>
        <Avatar />
        <Cart />
      </div>
    </header>
  );
};

export default NavBar;
