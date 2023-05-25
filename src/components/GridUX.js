import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { Card } from "antd";
import "./css/grid.css";

const { Meta } = Card;

export default function RowAndColumnSpacing() {
  return (
    <Box sx={{ width: "70%" }}>
      <Grid
        className="webDesigns"
        container
        justifyContent="center"
        rowSpacing={{ xs: 1, sm: 2, md: 3 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        <Grid item xs={4}>
          <Card style={{ width: 240, borderRadius: 10 }}>
            <img
              alt="Fibbo"
              className="LogosEnterprise"
              src="/img/figmaCapt/fibbo1.png"
            />
            <img
              alt="Fibbo"
              className="LogosEnterprise"
              src="/img/figmaCapt/fibbo2.png"
            />
            <Meta style={{ margin: 10 }} title="Fibbo: NFT Project" />
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card style={{ width: 240, borderRadius: 10 }}>
            <img
              alt="Origin"
              className="LogosEnterprise"
              src="/img/figmaCapt/origin1.png"
            />
            <img
              alt="Origin"
              className="LogosEnterprise"
              src="/img/figmaCapt/origin2.png"
            />
            <Meta style={{ margin: 10 }} title="Origin: Marketplace NFT" />
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card style={{ width: 240, borderRadius: 10 }}>
            <img
              alt="Kuestion"
              className="LogosEnterprise"
              src="/img/figmaCapt/kuestion1.png"
            />
            <img
              alt="Kuestion"
              className="LogosEnterprise"
              src="/img/figmaCapt/kuestion2.png"
            />
            <Meta style={{ margin: 10 }} title="Kuestion: Web App Test's" />
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card style={{ width: 240, borderRadius: 10 }}>
            <img
              alt="Slotmachine"
              className="LogosEnterprise"
              src="/img/figmaCapt/tfg1.png"
            />
            <img
              alt="Slotmachine"
              className="LogosEnterprise"
              src="/img/figmaCapt/tfg2.png"
            />
            <Meta style={{ margin: 10 }} title="TFG: Slotmachine" />
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card style={{ width: 240, borderRadius: 10 }}>
            <img
              alt="Playmotiv"
              className="LogosEnterprise"
              src="/img/figmaCapt/play1.png"
            />
            <img
              alt="Playmotiv"
              className="LogosEnterprise"
              src="/img/figmaCapt/play2.png"
            />
            <Meta style={{ margin: 10 }} title="Playmotiv: Recruiting" />
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
