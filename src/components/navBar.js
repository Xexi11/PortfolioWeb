import React, { useState } from "react";
import "./css/navBar.css";
export default function navBar() {
  return (
    <nav>
      <div class="logo">
        S.A<b>.</b>
      </div>
      <ul class="navItems">
        <li>
          <a href="/">home</a>
        </li>
        <li>
          <a href="/info">info</a>
        </li>
        <li>
          <a href="/skills">skills</a>
        </li>
        <li>
          <a href="/contact">contact</a>
        </li>
      </ul>
      <div class="links">
        <a href="#">
          <i class="fab fa-linkedin"></i>
        </a>
        <a href="#">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="#">
          <i class="fab fa-github"></i>
        </a>
      </div>
    </nav>
  );
}
