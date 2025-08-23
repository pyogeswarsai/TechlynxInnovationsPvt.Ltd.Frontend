import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import backgroundImage from '../assets/n2.jpeg';

const PageOne = () => {
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      className="contact-section d-flex align-items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "88vh",
        width: "100vw",
        color: "white",
      }}
    >
      <div className="container px-5">
        <div className="row text-light">
          <div className="col-lg-6">
            <motion.h1
              className="display-1 fw-bold"
              variants={sentence}
              initial="hidden"
              animate="visible"
            >
              {"Start a Conversation".split("").map((char, index) => (
                <motion.span key={index} variants={letter}>
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            <motion.p
              className="lead mt-3"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2, duration: 1 }}
            >
              Have a query? Our team is here and ready to assist.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageOne;






