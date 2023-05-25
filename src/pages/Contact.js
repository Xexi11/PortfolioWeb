import React from "react";
import "./css/Contact.css";
import List from "../components/listLink";
export default function Contact() {
  return (
    <div class="contbox">
      <div className="contContainer">
        <h2 className="title">Contacto</h2>
        <div className="contListContainer">
          <List />
        </div>
      </div>
    </div>
  );
}
