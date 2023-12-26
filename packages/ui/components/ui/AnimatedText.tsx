"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

const quote: Variants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 1,
      staggerChildren: 0.1,
    },
  },
};

const singleWord: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = "",
}) => {
  return (
    <div className="mx-auto flex w-full items-center justify-center  overflow-hidden py-2 text-center sm:py-0">
      <motion.h1
        className={`inline-block w-full text-7xl font-medium capitalize text-dark dark:text-light ${className}`}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            key={word + "-" + index}
            className="inline-block !font-clashgrotesk"
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
