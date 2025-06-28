import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useAnimatedText } from "../utils/AnimatedText";

const AboutMeSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const animatedHeading = useAnimatedText(
    isInView
      ? "Few words about myself"
      : "",
    0.7,
    0.5
  );

  const animatedText = useAnimatedText(
    isInView
      ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
      : "",
    6,
    1.4
  );

  return (
    <div
      ref={ref}
      className="flex flex-col text-center h-[100vh] w-full justify-center lg:py-18 gap-6"
    >
      <motion.h1
        className="text-5xl font-medium"
      >
        {animatedHeading}
      </motion.h1>

      <motion.span
        className="text-xl lg:px-48 px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {animatedText}
      </motion.span>
    </div>
  );
};

export default AboutMeSection;
