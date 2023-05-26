import React from "react";
import ReactTypingEffect from "react-typing-effect";
import "./css/Home.css";
import dowloadPDF from "../cvSergi.pdf";

export default function Home() {
  const TextDynamic = ["Designer UX/UI", "Programmer", "Web Developer"];

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
          <a href={dowloadPDF} download="Cv_SergiAlsina">
            <button>Dowload CV</button>
          </a>
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
