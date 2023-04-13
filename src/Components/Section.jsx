import React from "react";
import S from "../Styles/Section.module.css";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Section() {
  const [active, setActive] = useState({
    stack: false,
    projects: false,
    fun: false,
  });

  const section = useSelector(state => state.section);
  const lang = useSelector(state => state.lang);

  const ESP = "Español";
  const ENG = "English";

  const devTech = [
    {
      tech: "HTML",
      img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1676596778/HTML_tzymgp.png",
    },
    {
      tech: "CSS",
      img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1676596778/CSS_q9ivxb.png",
    },
    {
      tech: "JavaScript",
      img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1676596778/JS_evuksn.png",
    },
    {
      tech: "React JS",
      img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1676596779/React_ena8dt.png",
    },
    {
      tech: "Redux",
      img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1676596779/Redux_iyrbu9.png  ",
    },
    {
      tech: "Express",
      img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1676596778/Express_x6omdq.png",
    },
    {
      tech: "Node JS",
      img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1676596779/node_ra3ck1.png",
    },
    {
      tech: "PostgreSQL",
      img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1676596779/posgre_debnn7.png",
    },
    {
      tech: "Sequelize",
      img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1676596779/sequelize_mebl3e.png",
    },
    {
      tech: "Git",
      img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1676596778/git_wnjgwl.png",
    },
  ];

  const designTech = [
    {
      tech: "Adobe Photoshop",
      img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1676602768/PS_p9ak06.png",
    },
    {
      tech: "Adobe Illustrator",
      img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1676602768/AI_iqjjv7.png",
    },
    {
      tech: "Adobe Indesign",
      img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1676602768/ID_hthhka.png",
    },
    {
      tech: "Adobe Premiere",
      img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1676602768/PR_ohcdf4.png",
    },
    {
      tech: "Adobe After Effects",
      img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1676602768/AE_n7xzcq.png",
    },
    {
      tech: "Figma",
      img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1676602768/Figma_ldemnd.png",
    },
  ];

  const projects = [
    {
      name: "Play Expert",
      img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1676649954/1674495812337_x24in1.jpg",
      link: "https://www.youtube.com/watch?v=XF-85eYLBoc",
    },
    {
      name: "Pet Planet",
      img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1677798863/petplanet_ccwmyf.jpg",
      link: "https://youtu.be/y4CIjsheJDA",
    },
    {
      name: "Catálogo Rocambole Art",
      img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1681084359/Rocamboleweb_jm8n92.jpg",
      link: "https://rocamboleart-1-qaq6.vercel.app/",
    },
  ];

  const designProjects = [
    {
      name: "La Costa Viral",
      img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1681175015/lcv_pic_pw0hvy.jpg",
      link: "https://www.behance.net/gallery/168089317/La-Costa-Viral",
    },
    {
      name: "Sexbox",
      img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1681182952/nico_pic_fe2whi.jpg",
      link: "https://www.behance.net/gallery/168094383/Sexbox-Sex-Shop?",
    },
    {
      name: "Biosense - Manual normativo",
      img: "https://res.cloudinary.com/dcbswyqrd/image/upload/v1681233991/biosense_qhs93c.jpg",
      link: "https://issuu.com/santicalabro/docs/manual_normativo_-_biosense",
    },
  ];

  React.useEffect(() => {
    if (section === "stack") {
      setActive({ stack: true, fun: false, projects: false });
    } else if (section === "projects") {
      setActive({ projects: true, fun: false, stack: false });
    } else if (section === "fun") {
      setActive({ fun: true, projects: false, stack: false });
    }
  }, [section]);

  const handleOpen = id => {
    if (id === "stack") {
      setActive({ ...active, stack: !active.stack });
    }
    if (id === "projects") {
      setActive({ ...active, projects: !active.projects });
    }
    if (id === "fun") {
      setActive({ ...active, fun: !active.fun });
    }
  };

  return (
    <div id="section" className={S.section}>
      <div
        id="stack"
        className={S.container}
        onClick={e => handleOpen(e.target.id)}
      >
        <h1 id="stack" onClick={e => handleOpen(e.target.id)}>
          {lang === ENG ? `My stack` : "Mi stack"}

          <svg
            id="stack"
            onClick={e => handleOpen(e.target.id)}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className={active.stack && S.close}
          >
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
          </svg>
        </h1>
      </div>
      <div className={active.stack ? S.active : S.dropdown}>
        <div className={S.container}>
          <h3>{lang === ENG ? `Developement` : "Desarrollo"}</h3>
          <div className={S.devTech}>
            {devTech.length &&
              devTech.map((el, i) => (
                <div key={i} className={S.techContainer}>
                  <div className={S.imgCont}>
                    <img src={el.img} alt="" />
                  </div>
                  <h6>{el.tech}</h6>
                </div>
              ))}
          </div>
          <div className={S.designCont}>
            <h3>{lang === ENG ? `Design` : "Diseño"}</h3>
            <div className={S.devTech}>
              {designTech.length &&
                designTech.map((el, i) => (
                  <div key={i} className={S.techContainer}>
                    <div className={S.imgCont}>
                      <img src={el.img} alt="" />
                    </div>
                    <h6>{el.tech}</h6>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div
        id="projects"
        className={S.container}
        onClick={e => handleOpen(e.target.id)}
      >
        <h1 id="projects" onClick={e => handleOpen(e.target.id)}>
          {lang === ENG ? `Development` : "Desarrollo"}

          <svg
            id="projects"
            onClick={e => handleOpen(e.target.id)}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className={active.projects && S.close}
          >
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
          </svg>
        </h1>
      </div>
      <div className={active.projects ? S.activeProject : S.dropdown}>
        <div className={S.container}>
          <div className={S.projects}>
            {projects.length &&
              projects.map((el, i) => (
                <div key={i} className={S.projectContainer}>
                  <div className={S.projectImgCont}>
                    <a href={el.link} target="_blank" rel="noreferrer">
                      <img src={el.img} alt="" />{" "}
                    </a>
                  </div>
                  <h6>{el.name}</h6>
                </div>
              ))}
          </div>
          {projects.length > 3 && (
            <div className={S.seeMore}>
              <button>{lang === ENG ? `See more` : "Ver más"}</button>
            </div>
          )}
        </div>
      </div>

      <div
        className={S.container}
        id="fun"
        onClick={e => handleOpen(e.target.id)}
      >
        <h1 id="fun" onClick={e => handleOpen(e.target.id)}>
          {lang === ENG ? `Design` : "Diseño"}

          <svg
            id="fun"
            onClick={e => handleOpen(e.target.id)}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className={active.fun && S.close}
          >
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
          </svg>
        </h1>
      </div>
      <div className={active.fun ? S.activeProject : S.dropdown}>
        <div className={S.container}>
          <div className={S.projects}>
            {designProjects.length &&
              designProjects.map((el, i) => (
                <div key={i} className={S.projectContainer}>
                  <div className={S.projectImgCont}>
                    <a href={el.link} target="_blank" rel="noreferrer">
                      <img src={el.img} alt="" />
                    </a>
                  </div>
                  <h6>{el.name}</h6>
                </div>
              ))}
          </div>
          {designProjects.length > 3 && (
            <div className={S.seeMore}>
              <button> {lang === ENG ? `See more` : "Ver más"}</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
