import "./Offer.css";
import Design from "../pictures/design.svg";
import Production from "../pictures/production.svg";
import Realization from "../pictures/realization.svg";
import { motion } from "framer-motion";

function Offer() {
  return (
    <>
      <section id="offer">
        <div id="engineering">
          <motion.img
            initial={{ y: "-50%" }}
            animate={{ y: 0, transition: { duration: 1 } }}
            src={Design}
            alt="Design"
          />
          <motion.span
            initial={{ x: "-50%" }}
            animate={{ x: 0, transition: { duration: 1 } }}
          >
            Engineering
          </motion.span>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 2 } }}
          >
            Our team consists of skilled and experienced professionals, who are
            leading in development of all projects and solutions. In addition to
            technical development We offer existing projects and project
            development of new products with certain needs of clients. We follow
            the process from planning project, concept design, 3D modeling to
            complete technical development and preparation for production.
          </motion.h1>
        </div>

        <div id="production">
          <motion.img
            initial={{ y: "-50%" }}
            animate={{ y: 0, transition: { duration: 1 } }}
            src={Production}
            alt="Design"
          />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.5 } }}
          >
            Products
          </motion.span>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 3 } }}
          >
            A place where handwork meets technology - creates extraordinary
            products. Our large machinery park includes a wide spectrum of
            machinery and CNC processing of metal products. Thanks to high
            technology and with our capabilities, we are able to process metals
            for various purposes construction and industry.
          </motion.h1>
        </div>

        <div id="realization">
          <motion.img
            initial={{ y: "-50%" }}
            animate={{ y: 0, transition: { duration: 1 } }}
            src={Realization}
            alt="Design"
          />
          <motion.span
            initial={{ x: "50%" }}
            animate={{ x: 0, transition: { duration: 1 } }}
          >
            Finalization
          </motion.span>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 4 } }}
          >
            In addition to design, engineering and production, the company also
            offers finishing product processing such as surface treatment and
            painting as desired colors at the customer's request.
          </motion.h1>
        </div>
      </section>
    </>
  );
}

export default Offer;
