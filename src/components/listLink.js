import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import { Avatar } from "antd";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
function visitLinkedIn() {
  window.location.assign("https://www.linkedin.com/in/sergialsinacaldera/");
}
function visitInstagram() {
  window.location.assign("https://www.mpmsoftware.com/es/inicio/");
}
function visitGithub() {
  window.location.assign("https://github.com/Xexi11");
}

export default function BasicList() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 500,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Avatar
                  alt="icon mail"
                  src="/img/icons/mail.png"
                  sx={{ width: 200, height: 200 }}
                />
              </ListItemIcon>
              <ListItemText primary="sergialsinacaldera@gmail.com" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Avatar
                  alt="icon phone"
                  src="/img/icons/tel.png"
                  sx={{ width: 200, height: 200 }}
                />
              </ListItemIcon>
              <ListItemText primary="+34 622 93 18 04" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Avatar
                  alt="icon home"
                  src="/img/icons/casa.png"
                  sx={{ width: 200, height: 200 }}
                />
              </ListItemIcon>
              <ListItemText primary="c/Sant Jordi, nº 32 2o, Santa Margarida de Montbui, Barcelona" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Avatar
                  alt="icon linkedIn"
                  src="/img/icons/linkedIn.png"
                  sx={{ width: 200, height: 200 }}
                />
              </ListItemIcon>
              <ListItemText primary="Sergi Alsina Caldera" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Avatar
                  alt="icon instagram"
                  src="/img/icons/instagram.png"
                  sx={{ width: 200, height: 200 }}
                />
              </ListItemIcon>
              <ListItemText primary="Sergi_part0n" />
            </ListItemButton>
          </ListItem>
          <Divider />
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Avatar
                  alt="icon gitHub"
                  src="/img/icons/github.png"
                  sx={{ width: 200, height: 200 }}
                />
              </ListItemIcon>
              <ListItemText primary="Xexi11" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
