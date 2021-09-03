import React from "react";
import classes from "./Layout.module.css";

const Layout: React.FC = (probs) => {
  return <div className={classes.Container}>{probs.children}</div>;
};

export default Layout;
