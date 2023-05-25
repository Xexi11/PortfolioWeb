import React from "react";
import ReactTypingEffect from "react-typing-effect";
import "./css/Home.css";

export default function Home() {
  const TextDynamic = ["Programmer", "Web Developer", "Designer UX/UI"];
  return (
    <div class="wrapper">
      <div class="cols cols0">
        <span class="topline">Hello</span>
        <h1>
          I'm{" "}
          <ReactTypingEffect
            class="multiText"
            cursor="."
            text={TextDynamic}
          ></ReactTypingEffect>
          {/* <span class="multiText"></span> */}
        </h1>
        <p>
          Mi nombre es Sergi Alsina Caldera, tengo 22 años y soy de Barcelona.
          Actualmente estoy graduado del Grado de Técnicas de Interacción
          digital y Computación, de la Universidad de Lérida (UDL).
        </p>
        <div class="btns">
          <button>Dowload CV</button>
          <a href="/contact">
            <button>Contact</button>
          </a>
        </div>
      </div>
      <div class="cols cols1">
        <div class="imgbox">
          <img
            src="/img/splash.png"
            id="splash"
            alt="Imagen Background Splash Blue"
          />
          <img src="img/imgSergiBeach.png" alt="Imagen Perfil HomePage" />
        </div>
      </div>
    </div>
  );
}
