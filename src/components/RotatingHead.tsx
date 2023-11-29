import React, { useState, useEffect } from "react";

import {
  AnimatePresence,
  motion,
} from "framer-motion"

const ImageRotator: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imageList = [
    "images/dg/dg1.png",
    "images/dg/dg2.png",
    "images/dg/dg3.png",
    "images/dg/dg4.png",
    "images/dg/dg5.png",
    "images/dg/dg6.png",
    "images/dg/dg7.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const randNum = Math.floor(Math.random() * 7);
      setCurrentImageIndex(randNum);
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 3250); // 4 seconds

    return () => clearInterval(interval);
  }, [imageList.length]);

  return (
    <motion.div className='head-rotator'
      animate={{
        scale: [1, 1.25, 1.25, 1, 1],
        rotate: [0, 0, 180, 180, 0],
        borderRadius: ["50%", "30%", "50%", "30%", "50%"]
      }}
      // transition={{
      //   duration: 2,
      //   ease: "easeInOut",
      //   times: [0, 0.2, 0.5, 0.8, 1],
      //   repeat: Infinity,
      //   repeatDelay: 1.25
      // }}
      // style={{
      //   width: "150px",
      //   height: "150px",
      //   borderRadius: "50%",
      //   overflow: "hidden",
      //   backgroundColor: "white",
      //   margin: "25px",
      // }}
    >
      <AnimatePresence>
        <motion.img className='head-rotator'
          // style={{
          //   width: "150px",
          //   height: "150px",
          //   borderRadius: "50%",
          //   overflow: "hidden",
          //   backgroundColor: "white",
          // }}
          // animate={{ scale: [1.25, 1, 1, 1.25] }}
          // transition={{
          //   duration: 2,
          //   ease: "easeInOut",
          //   times: [0, 0.2, 0.5, 0.8, 1],
          //   repeat: Infinity,
          //   repeatDelay: 1.25
          // }}
          key={currentImageIndex}
          src={imageList[currentImageIndex]}
          alt=""
        />
      </AnimatePresence>
    </motion.div>
  );
};

export default ImageRotator;
