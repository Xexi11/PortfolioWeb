import { Avatar, Divider } from "antd";
import { Card } from "antd";
import React from "react";
import "./css/list.css";

function visitUdl() {
  window.location.assign("https://grauinteraccioicomputacio.udl.cat/es/");
}
const App = () => (
  <div className="listBox">
    <p>
      <div className="listRow">
        <Avatar
          alt="mail icon"
          src="/img/icons/mail.png"
          sx={{ width: 800, height: 800 }}
        />
        <h4 className="link">sergialsinacaldera@gmail.com</h4>
      </div>
    </p>
    <Divider />
    <p>
      <div className="listRow">
        <Avatar
          alt="tel icon"
          src="/img/icons/tel.png"
          sx={{ width: 800, height: 800 }}
        />
        <h4 className="link">+34 622 93 18 04</h4>
      </div>
    </p>
    <Divider dashed />
    <p>
      <div className="listRow">
        <Avatar
          alt="home icon"
          src="/img/icons/casa.png"
          sx={{ width: 800, height: 800 }}
        />
        <h4 className="link">
          c/Sant Jordi, nº 32 2o, Santa Margarida de Montbui, Barcelona
        </h4>
      </div>
    </p>
    <Divider dashed />
    <p>
      <div className="listRow">
        <Avatar
          alt="home icon"
          src="/img/icons/casa.png"
          sx={{ width: 800, height: 800 }}
        />
        <h4 className="link">Sergi Alsina Caldera</h4>
      </div>
    </p>
    <Divider dashed />
    <p>
      <div className="listRow">
        <Avatar
          alt="home icon"
          src="/img/icons/casa.png"
          sx={{ width: 800, height: 800 }}
        />
        <h4 className="link">sergi_part0n</h4>
      </div>
    </p>
    <Divider dashed />
    <p>
      <div className="listRow">
        <Avatar
          alt="home icon"
          src="/img/icons/casa.png"
          sx={{ width: 800, height: 800 }}
        />
        <h4 className="link">Xexi11</h4>
      </div>
    </p>
  </div>
);
export default App;
