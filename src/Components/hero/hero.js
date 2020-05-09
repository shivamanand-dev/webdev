import React from "react";
import classes from "./hero.css";
import reset from "../../reset.css";
import blb from "../../images/bulb-on.png";

const hero = () => {
  return (
    <div className={classes.hero}>
      <div className={classes.wrapper + " " + classes.light}>
        <div className={classes.tag}>
          <div className={classes.gridColTwo}>
            <div className={classes.sloganContainer}>
              <h2 className={classes.slogan}>
                we are the one who help you in making your ideas go online
              </h2>
            </div>
            <div className={classes.signUP}></div>
          </div>
        </div>
        <div className={classes.box}>
          <h1 className={classes.logo}>
            <span className={classes.webdev}>Webdev</span> <br /> tutorials
          </h1>
        </div>
        <div className={classes.bulbContainer}>
          <button className={classes.bulb}>
            <div className={classes.bulbImage}>
              <img className={classes.bolbOn} src={blb} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default hero;
