import { useInView } from "framer-motion";
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
      ? "I have been programming since 2019. At the beginning I had a short episode with C and C++ just to see if I like to code. After some time I have found out about JavaScript and Web Development and well… a lot has changed since then. I have enrolled in a few programming courses and did many hours of coding exercises. At some point I made decision to quit law studies and focus fully on my programming career. I have few smaller and bigger freelance projects on my account and currently I am working for Evolution Company as a Frontend Developer. Besides programming I am person, who loves contact with others. That is why I find working with other more experienced developers (and not only developers) very fascinating and it brings me a lot of joy and motivation at the same time. I believe that with the right people, we can do absolutely amazing things and it also brings a lot of drive and satisfaction. Outside work I am very sport oriented person. I like to play almost every sport which brings me to play football at one time and the second I find myself at chessboard trying to find the best outcome for my game"
      : "",
    6,
    1.4
  );

  return (
    <div
      ref={ref}
      className="flex flex-col text-center lg:h-[70vh] w-full justify-center lg:py-18 gap-6"
    >
      <h1 className="text-5xl font-medium">{animatedHeading}</h1>
      <span className="text-xl lg:px-48 px-8">{animatedText}</span>
    </div>
  );
};

export default AboutMeSection;
