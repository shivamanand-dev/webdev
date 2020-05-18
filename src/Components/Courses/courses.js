import React, { useEffect } from "react";
import classes from "./courses.css";
import reset from "../../reset.css";

import Aos from "aos";
import "aos/dist/aos.css";

const courses = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <section
      data-aos="flip-left"
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
              <br /> The course focuses on HTML basics which is the backbone of
              any website. The course is suitable for the beginner in web
              development. It carries an explanation of all the basic elements
              of HTML in Hindi. The explanation is followed by tasks and
              solution which leads to building a strong foundation of the
              subject.
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
