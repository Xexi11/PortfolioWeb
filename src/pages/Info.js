import React from "react";
import "./css/Info.css";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import CartaUDL from "../components/carta.js";
import GridJob from "../components/Grid.js";
import GridUX from "../components/GridUX.js";

export default function Info() {
  return (
    <div class="infoBox">
      <div class="infoText">
        <div className="fondoIMG">
          <div class="boxImg">
            <Avatar
              alt="Sergi Alsina Caldera"
              src="/img/uniSergi.jpg"
              sx={{ width: 200, height: 200 }}
            />
          </div>
        </div>
        <h2>Acerca de</h2>
        <p>
          Joven desarrollador, apasionado por aprender tecnologías nuevas,
          especializado en diseñar páginas Web, desarrollo Front-end, en UX/UI y
          en aplicaciones móviles. Lo que más me gusta de este mundo es poder
          analizar el problema para ofrecer al usuario la mejor solución posible
        </p>
        <div className="background">
          <div class="infoTextBody">
            <h3>Estudios</h3>
            <CartaUDL />
            <h3>Experiencia</h3>
            <div class="tittleDiv">
              <h4>Programador</h4>
            </div>
            <GridJob />
            <div class="tittleDiv">
              <h4>Diseñador UI/UX</h4>
            </div>
            <GridUX />
          </div>
        </div>
      </div>
    </div>
  );
}
