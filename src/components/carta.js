import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import "./css/card.css";
export default function ActionAreaCard() {
  function visitUdl() {
    window.location.assign("https://grauinteraccioicomputacio.udl.cat/es/");
  }
  return (
    <Card onClick={() => visitUdl()} sx={{ maxWidth: 500, borderRadius: 10 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image="/img/Udl-CampusIgd.png"
          alt="Universidad de lleida"
        />
        <CardContent
          sx={{
            textTransform: "none",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            Grado en Técnicas de Interacción Digital y de Computación
          </Typography>
          <Typography
            className="contenCard"
            variant="body2"
            color="text.secondary"
          >
            Durante mi formación, aprendí las bases de los lenguajes de
            programación, juntamente con las bases de la creación de
            aplicaciones, creación de prototipos o mockups, organización de
            empresas y proyectos multiplataforma.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
