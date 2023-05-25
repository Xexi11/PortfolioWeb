import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Divider } from "@mui/material";
import "./css/skillBox.css";

import { Rate } from "antd";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicStack() {
  return (
    <Box
      sx={{
        height: "auto",
        width: "auto",
        padding: "7rem",
        borderRadius: "15rem",
        display: "flex",
        justifyContent: "center",
        justifyItems: "center",
        alignItems: "center",
        backgroundColor: "white",
      }}
    >
      <Stack
        direction="column"
        divider={<Divider orientation="row" flexItem />}
        spacing={2}
      >
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          <div className="boxMedia">
            <Avatar
              alt="React Icon"
              src="/img/icons/react.png"
              sx={{ width: 50, height: 50 }}
            />
            <Rate disabled defaultValue={5} />
          </div>
          <div className="boxMedia">
            <Avatar
              alt="Phyton Icon"
              src="/img/icons/python.png"
              sx={{ width: 50, height: 50 }}
            />
            <Rate disabled defaultValue={3} />
          </div>
          <div className="boxMedia">
            <Avatar
              alt="C# Icon"
              src="/img/icons/csharp.png"
              sx={{ width: 50, height: 50 }}
            />
            <Rate disabled defaultValue={3} />
          </div>
          <div className="boxMedia">
            <Avatar
              alt="Js Icon"
              src="/img/icons/js.png"
              sx={{ width: 50, height: 50 }}
            />
            <Rate disabled defaultValue={4} />
          </div>
          <div className="boxMedia">
            <Avatar
              alt="HTML Icon"
              src="/img/icons/html.png"
              sx={{ width: 50, height: 50 }}
            />
            <Rate disabled defaultValue={4} />
          </div>
          <div className="boxMedia">
            <Avatar
              alt="CSS Icon"
              src="/img/icons/css.png"
              sx={{ width: 50, height: 50 }}
            />
            <Rate disabled defaultValue={5} />
          </div>
          <div className="boxMedia">
            <Avatar
              alt="Solidity Icon"
              src="/img/icons/solidity.png"
              sx={{ width: 50, height: 50 }}
            />
            <Rate disabled defaultValue={3} />
          </div>
          <div className="boxMedia">
            <Avatar
              alt="Kotlin Icon"
              src="/img/icons/kotlin.png"
              sx={{ width: 50, height: 50 }}
            />
            <Rate disabled defaultValue={3} />
          </div>
          <div className="boxMedia">
            <Avatar
              alt="Swift Icon"
              src="/img/icons/swift.png"
              sx={{ width: 50, height: 50 }}
            />
            <Rate disabled defaultValue={2} />
          </div>
        </Stack>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
          justifyContent={"center"}
        >
          <div className="boxMedia">
            <Avatar
              alt="Node Icon"
              src="/img/icons/node.png"
              sx={{ width: 50, height: 50 }}
            />
            <Rate disabled defaultValue={3} />
          </div>
          <div className="boxMedia">
            <Avatar
              alt="Sql Icon"
              src="/img/icons/sql.png"
              sx={{ width: 50, height: 50 }}
            />
            <Rate disabled defaultValue={5} />
          </div>
          <div className="boxMedia">
            <Avatar
              alt="MongoDb Icon"
              src="/img/icons/mongo.png"
              sx={{ width: 50, height: 50 }}
            />
            <Rate disabled defaultValue={3} />
          </div>
          <div className="boxMedia">
            <Avatar
              alt="AWS Icon"
              src="/img/icons/aws.png"
              sx={{ width: 50, height: 50 }}
            />
            <Rate disabled defaultValue={2} />
          </div>
          <div className="boxMedia">
            <Avatar
              alt="ASP.NET Icon"
              src="/img/icons/ASP.png"
              sx={{ width: 50, height: 50 }}
            />
            <Rate disabled defaultValue={2} />
          </div>
          <div className="boxMedia">
            <Avatar
              alt="Django Icon"
              src="/img/icons/django.png"
              sx={{ width: 50, height: 50 }}
            />
            <Rate disabled defaultValue={3} />
          </div>
          <div className="boxMedia">
            <Avatar
              alt="Firebase Icon"
              src="/img/icons/firebase.png"
              sx={{ width: 50, height: 50 }}
            />
            <Rate disabled defaultValue={3} />
          </div>
        </Stack>
        <Stack
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
          justifyContent={"center"}
        >
          <div className="boxMedia">
            <Avatar
              alt="Figma Icon"
              src="/img/icons/figma.png"
              sx={{ width: 50, height: 50 }}
            />
            <Rate disabled defaultValue={5} />
          </div>
          <div className="boxMedia">
            <Avatar
              alt="XD Icon"
              src="/img/icons/xd.png"
              sx={{ width: 50, height: 50 }}
            />{" "}
            <Rate disabled defaultValue={3} />
          </div>
          <div className="boxMedia">
            <Avatar
              alt="Photoshop Icon"
              src="/img/icons/photoshop.png"
              sx={{ width: 50, height: 50 }}
            />{" "}
            <Rate disabled defaultValue={4} />
          </div>
          <div className="boxMedia">
            <Avatar
              alt="AWS Icon"
              src="/img/icons/webflow.png"
              sx={{ width: 50, height: 50 }}
            />
            <Rate disabled defaultValue={3} />
          </div>
        </Stack>
      </Stack>
    </Box>
  );
}
