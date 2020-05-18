import React from "react";
import classes from "./courses.css";
import reset from "../../reset.css";

const courses = () => {
  return (
    <section className={classes.wrapper + " " + classes.courses}>
      <h3 className={classes.title}>Courses</h3>

      <article className={classes.gridCol2}>
        <div className={classes.htmlCircle}>
          <div className={classes.htmlCircleText}>
            <h2 className={classes.htmlCircleTitle}>HTML</h2>
          </div>
        </div>
        <div className={classes.about}>
          <p className={classes.aboutText}>
            <span className={classes.aboutTextTitle}>
              HTML Tutorials in Hindi
            </span>{" "}
            <br /> The course focuses on HTML basics which is the backbone of
            any website. The course is suitable for the beginner in web
            development. It carries an explanation of all the basic elements of
            HTML in Hindi. The explanation is followed by tasks and solution
            which leads to building a strong foundation of the subject.
          </p>
        </div>
      </article>
    </section>
  );
};

export default courses;
