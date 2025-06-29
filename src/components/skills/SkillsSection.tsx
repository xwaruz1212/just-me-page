import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const SkillsSection = () => {
  return (
    <motion.div className="flex flex-col">
      <div className="flex h-48 items-center justify-center px-8">
        <span className="font-semibold uppercase text-2xl text-center from-white to-gray-400">
          What can I do when it comes to tech...
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center px-8">
        <motion.span 
            className="font-semibold uppercase text-5xl text-center text-green-500 from-white to-gray-400"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: -250 }}
            transition={{ duration: 0.7 }}
        >
          At least this is what I think I can do :) 
        </motion.span>
      </div>
    </motion.div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-100%"]);

  return (
    <motion.section initial={{opacity: 0, x: 200}} whileInView={{opacity: 1, x: 0}} transition={{duration: 1.3}} ref={targetRef} className="relative h-[250vh]">
      <div className="sticky top-60 flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-8">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </motion.section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[40svh] w-[75svw] lg:h-[20svh] lg:w-[20vw] overflow-hidden rounded-2xl"
      style={{backgroundColor: `${card.bgColor}`, color: `${card.textColor}`}}
    >
      <div
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="text-4xl md:text-4xl lg:text-4xl font-extrabold uppercase">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default SkillsSection;

type CardType = {
  title: string;
  id: number;
  textColor: string,
  bgColor: string;
};

const cards: CardType[] = [
  {
    title: "Javascript",
    id: 1,
    textColor: "#121212",
    bgColor: "#FFDE21"
  },
  {
    title: "Typescript",
    id: 2,
    textColor: "#FFFFFF",
    bgColor: "#3178C6"
  },
  {
    title: "Pixijs",
    id: 3,
    textColor: "#FFFFFF",
    bgColor: "#be0461"
  },
  {
    title: "React",
    id: 4,
    textColor: "#61DAFB",
    bgColor: "#20232A"
  },
  {
    title: "Nextjs",
    id: 5,
    textColor: "#888888",
    bgColor: "#000000"
  },
  {
    title: "Scala",
    id: 6,
    textColor: "#DC322F",
    bgColor: "#FFFFFF"
  },
  {
    title: "WORDPRESS",
    id: 7,
    textColor: "#21759B",
    bgColor: "#FFFFFF"
  },
  {
    title: "HTML",
    id: 8,
    textColor: "#E34F26",
    bgColor: "#FFFFFF"
  },
  {
    title: "CSS",
    id: 9,
    textColor: "#FFFFFF",
    bgColor: "#264DE4"
  },
];