import React from "react";
import F from "../Styles/Footer.module.css";

export default function Footer() {
  return (
    <div>
      <div className={F.container}>
        <div className={F.brandContainer}>
          <h3>Santiago Calabró</h3>
          <p>Full Stack Web Developer - Graphic Designer</p>
        </div>
      </div>
    </div>
  );
}
