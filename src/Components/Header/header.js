import React from "react";
import classes from "./header.css";
import reset from "../../reset.css";

const header = () => {
  return (
    <div className={classes.head}>
      <div className={classes.wrapper + " " + classes.flex + " " + classes.nav}>
        <div>
          <h1 className={classes.logo}>
            <span className={classes.webdev}>Webdev</span> <br /> tutorials
          </h1>
        </div>
        <div className={classes.hide}>
          <ul className={classes.flex}>
            <li className={classes.menuList}>Home</li>
            <li className={classes.menuList}>Courses</li>
            <li className={classes.menuList}>Contact US</li>
            <li className={classes.menuList}>About Us</li>
            <li className={classes.menuList}>Sign UP</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default header;
