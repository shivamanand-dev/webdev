import React from "react";
import classes from "./courses.css";
import reset from "../../reset.css";

const courses = () => {
  return (
    <section className={classes.wrapper + " " + classes.courses}>
      <div class="circles">
        <div class="circle-multiple">
          <div class="circle"></div>
          <div class="circle"></div>
          <div class="circle"></div>
        </div>
      </div>
    </section>
  );
};

export default courses;
