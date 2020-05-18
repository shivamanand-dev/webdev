import React from "react";
import classes from "./hero.css";
import reset from "../../reset.css";
import blb from "../../images/bulb-on.png";
import ReactRain from "react-rain-animation";

// import all the styles
import "react-rain-animation/lib/style.css";

const hero = () => {
  return (
    <div className={classes.hero}>
      <div className={classes.wrapper + " " + classes.light}>
        <div className={classes.tag}>
          <div className={classes.gridColTwo}>
            <div className={classes.sloganContainer}>
              <h2 className={classes.slogan}>
                <strong className={classes.strong}>we</strong> are the one who{" "}
                <strong className={classes.strong}>help you</strong> in making
                your ideas <strong className={classes.strong}>go online</strong>
                .
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
