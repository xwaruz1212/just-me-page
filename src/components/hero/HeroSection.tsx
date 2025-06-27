import { useEffect } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import myImage from "../../assets/justMe.webp"
import { useAnimatedText } from "../utils/AnimatedText";

const COLORS_TOP = ["#F5F5F5", "#B0B0B0", "#404040", "#1A1A1A"];


const HeroSection = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #121212 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  const animatedHi = useAnimatedText("Hi", 0.1, 0);
  const animatedName = useAnimatedText("I am Kacper", 0.5, 0.2);
  const animatedActionText = useAnimatedText("scroll and learn something about me!", 1.5, 0.7);

  return (
    <motion.section
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
    >
      <div className="relative z-10 flex flex-col items-center">
        <motion.img
        src={myImage}
          style={{
            border,
            boxShadow,
          }}
          whileHover={{
            scale: 1.015,
          }}
          className="group relative flex max-w-96 items-center rounded-full transition-colors hover:bg-gray-950/50"
        />
        <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 py-4 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
          {animatedHi} <br /> {animatedName}
        </h1>
        <h2 className="max-w-2xl text-2xl bg-gradient-to-br text-center from-white to-gray-400 bg-clip-text">{animatedActionText}</h2>
      </div>
    </motion.section>
  );
};

export default HeroSection;