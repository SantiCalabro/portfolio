import React from "react";
import H from "../Styles/Header.module.css";
import headerDesktop from "../Images/Logo desktop.png";
import headerResponsive from "../Images/Logo responsive.png";
export default function Header() {
  return (
    <div id="header" className={H.headerContainer}>
      <div className={H.header}>
        <img className={H.headerDesktop} src={headerDesktop} alt="" />
        <img className={H.headerResponsive} src={headerResponsive} alt="" />
      </div>
    </div>
  );
}
