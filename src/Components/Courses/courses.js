import React, { useEffect } from "react";
import classes from "./courses.css";
import reset from "../../reset.css";

const courses = () => {
  return (
    <section
      data-aos="flip-left"
      data-aos-duration="1500"
      className={classes.wrapper + " " + classes.coursesParent}
    >
      <h3 id="courses" className={classes.title} data-aos="fade-down">
        Courses
      </h3>
      <div className={classes.courses}>
        <article className={classes.gridCol2}>
          <div className={classes.htmlCircle}>
            <div className={classes.htmlCircleText}>
              <h2 className={classes.htmlCircleTitle}>
                <a
                  href="https://www.youtube.com/watch?v=yUo-sSO8Ynk&list=PL3g2rnYkcEYHybP6tADZ11U_wzTx-RZ0y"
                  target="_blank"
                >
                  HTML
                </a>
              </h2>
            </div>
          </div>
          <div className={classes.about}>
            <p className={classes.aboutText}>
              <span className={classes.aboutTextTitle}>
                <a
                  href="https://www.youtube.com/watch?v=yUo-sSO8Ynk&list=PL3g2rnYkcEYHybP6tADZ11U_wzTx-RZ0y"
                  target="_blank"
                >
                  HTML Tutorials in Hindi
                </a>
              </span>{" "}
              <ul className={classes.aboutTextUl}>
                <li>learn html basics</li>
                <li>task and solutions provided</li>
                <li>build you own website</li>
              </ul>
            </p>
          </div>
        </article>
        <div className={classes.goTo}>
          <button className={classes.btn}>
            <a
              href="https://www.youtube.com/watch?v=yUo-sSO8Ynk&list=PL3g2rnYkcEYHybP6tADZ11U_wzTx-RZ0y"
              target="_blank"
            >
              Go To HTML Tutorials in Hindi
            </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default courses;
