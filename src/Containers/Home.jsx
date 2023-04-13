import React from "react";
import H from "../Styles/Home.module.css";
import { Link } from "react-scroll";
import me from "../Images/me.jpg";
import resume from "../Images/Resume.pdf";
import { useSelector } from "react-redux";

export default function Home() {
  const lang = useSelector(state => state.lang);

  const ESP = "Español";
  const ENG = "English";

  return (
    <div className={H.body} id="home">
      <div className={H.AboutMe}>
        <div className={H.title}>
          <img src={me} alt="" />
          <h4 className={H.strong}>
            {lang === ENG
              ? `I’m Santiago Calabró, a web developer and graphic designer from
            Argentina.`
              : "Soy Santiago Calabró, Desarrollador Web y Diseño Gráfico de Argentina"}
          </h4>
        </div>
        <div className={H.description}>
          <p>
            {lang === ENG
              ? `I love to spare my free time learning new technologies and coding
            projects. I’m very curious and everything I don’t know (yet)
            represents a challenge for me. Welcome to my portfolio, hope you
            enjoy it!`
              : "Amo pasar mi tiempo libre aprendiendo nuevas tecnologías y codeando proyectos. Soy muy curioso, y todo aquello aún no conozco, representa un desafío para mí. Bienvenido/a a mi portfolio, espero que lo disfrutes!"}
          </p>

          <div className={H.CV}>
            <a href={resume} download="Resume">
              <button>
                {lang === ENG ? ` Download my CV` : "Descargar mi CV"}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 11h5l-9 10-9-10h5v-11h8v11zm3 8v3h-14v-3h-2v5h18v-5h-2z" />
                </svg>
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className={H.downBtn}>
        <Link spy={true} smooth={true} offset={50} duration={500} to="section">
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm5.247 8l-5.247 6.44-5.263-6.44-.737.678 6 7.322 6-7.335-.753-.665z" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
