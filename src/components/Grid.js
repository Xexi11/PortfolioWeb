import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Card } from "antd";

import "./css/grid.css";

const { Meta } = Card;

function visitMpm() {
  window.location.assign("https://www.mpmsoftware.com/es/inicio/");
}
function visitEngisoft() {
  window.location.assign("https://www.engisoftcloud.com/");
}
function visitPlay() {
  window.location.assign("https://playmotiv.com/");
}

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: "70%" }}>
      <Grid className="cardsBox" container rowSpacing={1} columnSpacing={1}>
        <Grid container item xs={4} onClick={() => visitMpm()}>
          <Card
            hoverable
            style={{ width: "220px", borderRadius: 10 }}
            cover={
              <img
                alt="MPM Software"
                className="LogosEnterprise"
                src="/img/mpm.png"
              />
            }
          >
            <Meta
              title="Programador Junior"
              description="C#, JS, ASP.NET, SQL, Microsoft Azure"
            />
          </Card>
        </Grid>
        <Grid container item xs={4} onClick={() => visitEngisoft()}>
          <Card
            hoverable
            style={{ width: "220px", borderRadius: 10 }}
            cover={
              <img
                className="LogosEnterprise"
                alt="Engisoft Software"
                src="/img/engisoft.png"
              />
            }
          >
            <Meta
              title="Programador Web / Apps"
              description="JS, HTML, CSS, Android, Swift, Kotlin, SQL, AWS"
            />
          </Card>
        </Grid>
        <Grid container item xs={4} onClick={() => visitPlay()}>
          <Card
            hoverable
            style={{ width: "220px", borderRadius: 10 }}
            cover={
              <img
                alt="Playmotive.com"
                className="LogosEnterprise"
                src="/img/playmotiv.png"
              />
            }
          >
            <Meta
              title="Programador FullStack"
              description="React, Node, Figma, Microsoft Sharepoint"
            />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
