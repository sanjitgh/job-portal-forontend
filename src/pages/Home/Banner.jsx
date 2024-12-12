import React from "react";
import { motion } from "framer-motion";
import team1 from "../../assets/team1.jpg";
import team2 from "../../assets/team2.jpg";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="flex-1 text-end">
            <motion.img
              animate={{ y: [50, 100, 50] }}
              transition={{ duration: 10, repeat: Infinity }}
              className="w-9/12 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-blue-500"
              src={team1}
            />
            <motion.img
              animate={{ x: [100, 150, 100] }}
              transition={{
                duration: 10,
                delay: 5,
                repeat: Infinity,
                ease: "linear",
              }}
              className="w-9/12 rounded-bl-[40px] rounded-t-[40px] border-r-4 border-b-4 border-blue-500"
              src={team2}
            />
          </div>
          <div className="flex-1">
            <motion.h1
              animate={{ y: -20 }}
              transition={{ duration: 1, ease: "linear" }}
              className="text-5xl font-bold"
            >
              Latest job for you.
            </motion.h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
