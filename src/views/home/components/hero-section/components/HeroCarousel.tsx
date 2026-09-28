"use client";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = ["/images/hero1.jpg", "/images/hero1.jpg", "/images/hero1.jpg"];

export const HeroCarousel = () => {
  const currentImage = useMotionValue(0);
  const [currentIndex, setCurrentIndex] = useState(0)
  const rawX = useTransform(currentImage, [0, 1, 2], ["0%", "-33%", "-66%"]);
  const x = useSpring(rawX, { stiffness: 100, damping: 30 });

  const handleNext = () => {
    currentImage.set(currentIndex < 2 ? currentIndex + 1 : 0);
    setCurrentIndex(currentIndex < 2 ? currentIndex + 1 : 0);
  }

  const handlePrev = () => {
    currentImage.set(currentIndex > 0 ? currentIndex - 1 : 2);
    setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : 2);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(currentImage.get() < 2 ? currentImage.get() + 1 : 0);
      currentImage.set(currentImage.get() < 2 ? currentImage.get() + 1 : 0);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, [currentImage]);

  return (
    <div className="relative flex flex-col items-end w-full h-full">
      <div className="relative max-w-350 h-full overflow-hidden">
        <motion.div style={{ x }} className="flex w-[300%] h-full">
          {images.map((image, index) => (
            <Image
              key={image + "-image-" + index}
              className="w-[33.4%] max-w-350 h-full object-cover"
              loading="eager"
              src={image}
              alt="hero"
              width="1920"
              height="1080"
            />
          ))}
        </motion.div>
        <div className="top-0 left-0 absolute shadow-hero-carousel w-full h-full" />
      </div>
      <div className="right-0 bottom-3 md:bottom-5 left-0 absolute flex justify-between items-center px-4 md:px-8 w-full">
        <div className="flex gap-3 md:gap-5 h-1">
          {images.map((_, index) => (
            <div key={index + '-carousel-line'} className={`w-8 md:w-13 h-full ${currentIndex === index ? "bg-logo-red" : "bg-border-gray"}`} />
          ))}
        </div>
        <div className="hidden md:flex items-center gap-7 text-pure-white">
            <ArrowBackIcon onClick={handlePrev} fontSize={"small"} />
            <div className="flex gap-3 text-[20px]">
                <span className="text-pure-white">0{currentIndex + 1}</span>
                <span className="text-muted-gray">/</span>
                <span className="text-muted-gray">0{images.length}</span>
            </div>
            <ArrowForwardIcon onClick={handleNext} fontSize={"small"} />
        </div>
      </div>
    </div>
  );
};
