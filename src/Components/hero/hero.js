import React from "react";
import classes from "./hero.css";
import reset from "../../reset.css";
import bulb from "./../../images/bulb-on.png";

const hero = () => {
  return (
    <div className={classes.hero}>
      <div className={classes.wrapper + " " + classes.light}>
        <div className={classes.box}></div>
        <div className={classes.thread}>
          <div className={classes.bulb}>
            <img className={classes.bulbOn} src={bulb} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default hero;
