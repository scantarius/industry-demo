import "./Inovations.css";
import Ino from "../pictures/ino.svg";
import { motion } from "framer-motion";

function Inovations() {
  return (
    <>
      <section id="inovations">
        <motion.h1 initial={{ y: "-100%" }} animate={{ y: 0, duration: 2 }}>
          What sets us apart and invests a lot is our innovations. The
          possibilities of our company are great and always give us room for
          something new.
        </motion.h1>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 4 } }}
          src={Ino}
          alt="Ino"
        />
      </section>
    </>
  );
}

export default Inovations;
