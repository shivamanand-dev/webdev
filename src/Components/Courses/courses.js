import React from "react";
import classes from "./courses.css";
import reset from "../../reset.css";

const courses = () => {
  return (
    <section
      className={
        classes.wrapper + " " + classes.courses + " " + classes.gradientBorder
      }
    >
      <h3 className={classes.title}>Courses</h3>
    </section>
  );
};

export default courses;
