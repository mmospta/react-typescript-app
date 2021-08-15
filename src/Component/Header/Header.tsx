import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";
// import "./Header.css";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>React World</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
