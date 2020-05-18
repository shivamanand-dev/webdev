import React from "react";
import ReactRain from "react-rain-animation";
import classes from "./footer.css";

// import all the styles
import "react-rain-animation/lib/style.css";

const footer = (props) => {
  return (
    <div className={classes.footerhai}>
      <ReactRain numDrops="500" />
    </div>
  );
};

export default footer;
