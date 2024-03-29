import React, { useRef } from "react";
import C from "../Styles/Contact.module.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useSelector } from "react-redux";

export default function Contact() {
  const [input, setInput] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [error, setError] = useState({});
  const [disable, setDisable] = useState(true);
  const [msg, setMsg] = useState(false);
  const lang = useSelector(state => state.lang);

  const ESP = "Español";
  const ENG = "English";

  const handleChange = e => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const errorSetting = e => {
    setError(
      handleValidate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleValidate = input => {
    const errors = {};
    const regexEmail = /[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+\.[a-zA-Z]{2,4}/;
    if (!input.user_name) {
      errors.user_name = "*A name is required";
    }
    if (!input.user_email) {
      errors.user_email = "*An email is required";
    } else if (!regexEmail.test(input.user_email)) {
      errors.user_email = "*Please give us a valid email";
    }
    if (!input.message) {
      errors.message = "*A message is required";
    }

    if (
      !error.user_name &&
      !error.user_email &&
      !error.message &&
      input.message.length > 0 &&
      input.user_name.length > 0 &&
      input.user_email.length > 0
    ) {
      setDisable(false);
    } else {
      setDisable(true);
    }
    return errors;
  };

  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
    setMsg(true);
  };

  return (
    <>
      <div className={C.msgContainer}>
        <div className={msg ? C.msg : C.hiddenMsg}>
          <h1>{lang === ENG ? `Message sent!` : "Mensaje enviado!"}</h1>
          <p>
            {lang === ENG
              ? `You'll get my response as soon as I read it!`
              : "Recibirás mi respuesta a penas lo haya leído!"}
          </p>
          <div className={C.btnCont}>
            <button onClick={() => setMsg(false)}>Ok!</button>
          </div>
        </div>
      </div>
      <div className={msg && C.background}></div>
      <div>
        <div id="contact" className={C.formContainer}>
          <div className={C.headerForm}>
            <h1>{lang === ENG ? `Contact me` : "Contáctame"}</h1>
            <p>
              {lang === ENG
                ? ` If you have any questions, a project in mind or a comment, you can
            write to me by completing the following form.`
                : `Si tenés alguna pregunta, un proyecto en mente o algún comentario, podés escribirme completando el siguiente formulario `}
            </p>
          </div>
          <div className={C.contactForm}>
            <form ref={form} autocomplete="off" onSubmit={sendEmail}>
              <label>{lang === ENG ? `Name` : "Nombre"}</label>
              <input
                type="text"
                name="user_name"
                onChange={e => {
                  handleChange(e);
                  errorSetting(e);
                }}
                onBlur={e => errorSetting(e)}
              />
              <label htmlFor="" className={C.errorLabel}>
                {error.user_name && error.user_name}
              </label>

              <label>Email</label>
              <input
                type="email"
                name="user_email"
                onChange={e => {
                  handleChange(e);
                  errorSetting(e);
                }}
                onBlur={e => errorSetting(e)}
              />
              <label htmlFor="" className={C.errorLabel}>
                {error.user_email && error.user_email}
              </label>
              <label>{lang === ENG ? `Message` : "Mensaje"}</label>
              <textarea
                name="message"
                onChange={e => {
                  handleChange(e);
                  errorSetting(e);
                }}
                onBlur={e => errorSetting(e)}
              />
              <label htmlFor="" className={C.errorLabel}>
                {error.message && error.message}
              </label>
              <button
                className={disable ? C.inactive : C.active}
                type="submit"
                value="Send"
                onClick={e => {
                  disable && e.preventDefault();
                }}
              >
                {lang === ENG ? `Send message` : "Enviar mensaje"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
