import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../pictures/logo.png";

function Navbar() {
  return (
    <>
      <nav id="nav">
        <div className="navWrapper">
          <img
            src={Logo}
            alt="Logo"
            className="logo"
            height="30px"
            width="25px"
          />
          <NavLink to="/">
            <motion.div whileTap={{ y: "-40%", transition: "0.5s" }}>
              Home
            </motion.div>
          </NavLink>

          <NavLink to="/about">
            <motion.div whileTap={{ y: "-40%", transition: "0.5s" }}>
              About
            </motion.div>
          </NavLink>

          <NavLink to="/offer">
            <motion.div whileTap={{ y: "-40%", transition: "0.5s" }}>
              What We Offer
            </motion.div>
          </NavLink>

          <NavLink to="/inovations">
            <motion.div whileTap={{ y: "-40%", transition: "0.5s" }}>
              Inovations
            </motion.div>
          </NavLink>

          <NavLink to="/contact">
            <motion.div whileTap={{ y: "-40%", transition: "0.5s" }}>
              Contact
            </motion.div>
          </NavLink>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
