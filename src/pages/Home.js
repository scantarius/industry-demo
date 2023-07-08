import "./Home.css";
import HomePageImage from "../pictures/firstimage.svg";
import { motion } from "framer-motion";

function Home() {
  return (
    <>
      <section id="homePage">
        <motion.div
          initial={{ x: "-50%" }}
          animate={{ x: 0, transition: { duration: 0.5 } }}
          className="companyMotto"
        >
          <h1>Creating metal products </h1>
          <h1>best way possible!</h1>
        </motion.div>

        <motion.img
          initial={{ y: "-100%" }}
          animate={{ y: 0, transition: { duration: 0.5 } }}
          className="homePageImage"
          src={HomePageImage}
          alt="homePageImage"
        />
      </section>
    </>
  );
}

export default Home;
