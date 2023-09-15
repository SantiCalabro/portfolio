import React from "react";
import N from "../Styles/Nav.module.css";
import { Link } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { openSection, setLanguage } from "../Redux/Actions";
import { useState } from "react";

export default function Nav() {
  const dispatch = useDispatch();
  const [nav, setNav] = useState(false);
  const handleClick = id => {
    dispatch(openSection(id));
  };
  const lang = useSelector(state => state.lang);

  const ESP = "Español";
  const ENG = "English";

  const handleLanguage = () => {
    if (lang === "Español") {
      dispatch(setLanguage("English"));
    } else {
      dispatch(setLanguage("Español"));
    }
  };

  return (
    <div className={N.Nav}>
      <div className={N.brand}>
        <Link spy={true} smooth={true} offset={50} duration={500} to="header">
          <h3>Santiago Calabró</h3>
        </Link>
      </div>
      <svg
        onClick={() => setNav(!nav)}
        className={N.menuIcon}
        clip-rule="evenodd"
        fill-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m11 16.745c0-.414.336-.75.75-.75h9.5c.414 0 .75.336.75.75s-.336.75-.75.75h-9.5c-.414 0-.75-.336-.75-.75zm-9-5c0-.414.336-.75.75-.75h18.5c.414 0 .75.336.75.75s-.336.75-.75.75h-18.5c-.414 0-.75-.336-.75-.75zm4-5c0-.414.336-.75.75-.75h14.5c.414 0 .75.336.75.75s-.336.75-.75.75h-14.5c-.414 0-.75-.336-.75-.75z"
          fill-rule="nonzero"
        />
      </svg>

      <div className={N.menuContainer}>
        <div className={nav ? N.menu : N.hide}>
          <ul>
            <Link
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              to="header"
            >
              <li className={N.buttonChange}>
                {lang === ENG ? `About me` : "Sobre mí"}
              </li>
            </Link>
            <Link
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              to="section"
            >
              <li
                className={N.buttonChange}
                id="stack"
                onClick={e => handleClick(e.target.id)}
              >
                {lang === ENG ? `My stack` : "Mi stack"}
              </li>
            </Link>
            <Link
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              to="section"
            >
              <li
                className={N.buttonChange}
                id="projects"
                onClick={e => handleClick(e.target.id)}
              >
                {lang === ENG ? `Development` : "Desarrollo"}
              </li>
            </Link>
            <Link
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              to="section"
            >
              <li
                className={N.buttonChange}
                id="fun"
                onClick={e => handleClick(e.target.id)}
              >
                {lang === ENG ? `Design` : "Diseño"}
              </li>
            </Link>
            <Link
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              to="contact"
            >
              <li className={N.buttonChange}>
                {" "}
                {lang === ENG ? `Contact me` : "Contactame"}
              </li>
            </Link>
            <div className={N.icons}>
              <a
                href="https://www.linkedin.com/in/santiago-calabr%C3%B3-70a37a287/"
                target="_blank"
                rel="noreferrer"
              >
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className={N.buttonChange}
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </li>
              </a>
              <a
                href="https://github.com/SantiCalabro"
                target="_blank"
                rel="noreferrer"
              >
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className={N.buttonChange}
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-4.466 19.59c-.405.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.312-1.588-.823-2.147.082-.202.356-1.016-.079-2.117 0 0-.671-.215-2.198.82-.64-.18-1.324-.267-2.004-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z" />
                  </svg>
                </li>
              </a>
            </div>
          </ul>
        </div>
        <button className={N.lang} onClick={() => handleLanguage()}>
          {lang === ENG ? `Traducir` : `Translate`}
        </button>
      </div>

      <div className={nav === true && N.menuBackground}> </div>
    </div>
  );
}
