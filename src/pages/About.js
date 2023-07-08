import "./About.css";
import Education from "../pictures/education.svg";
import Silhouette from "../pictures/silhouette.svg";
import Women from "../pictures/women.svg";
import Diagram from "../pictures/diagram.svg";
import { motion } from "framer-motion";

function About() {
  return (
    <>
      <section id="about">
        <motion.div
          initial={{ x: "-50%" }}
          animate={{ x: 0, transition: { duration: 0.5 } }}
          className="education"
        >
          <h1>Educations</h1>
          <img src={Education} alt="Education" />
          <p>
            We have great connection with high schools in our city. Students
            after finished practice in our company with learned skills and
            knowledge stay working for us and they get chance of improvements!
          </p>
        </motion.div>

        <motion.div
          initial={{ x: "50%" }}
          animate={{ x: 0, transition: { duration: 0.5 } }}
          className="employment"
        >
          <h1>Young Employment</h1>
          <img src={Silhouette} alt="Silhouette" />
          <p>
            Our company has accent on young people. Most of our workers are
            young, even 75%. Starting at CNC Operators, Welders, Technologist
            and Engineers, as well as management.
          </p>
        </motion.div>
      </section>

      <section id="about-addon">
        <motion.div
          initial={{ x: "-50%" }}
          animate={{ x: 0, transition: { duration: 0.5 } }}
          className="femaleEmployment"
        >
          <h1>Women Employment</h1>
          <img src={Women} alt="Women" />
          <p>
            Even though we are machine company, women are an integral part. 15%
            of total workers. They work on departments such as Administration,
            Finance, Logistics and Productions.
          </p>
        </motion.div>

        <motion.div
          initial={{ x: "50%" }}
          animate={{ x: 0, transition: { duration: 0.5 } }}
          className="export"
        >
          <h1>Export</h1>
          <img src={Diagram} alt="Diagram" />
          <p>
            More than 80% of our products are available for world-wide market.
            And only 40% we sell in our own country.
          </p>
        </motion.div>
      </section>
    </>
  );
}

export default About;
