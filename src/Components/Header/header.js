import React from "react";
import classes from "./header.css";
import reset from "../../reset.css";

const header = () => {
  return (
    <div className={classes.head}>
      <div className={classes.wrapper}>
        <h1 className={classes.logo}>webdev</h1>
      </div>
    </div>
  );
};

export default header;
