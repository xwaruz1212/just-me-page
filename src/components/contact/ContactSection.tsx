import { motion } from "framer-motion";

export const ContactSection = () => {
  return (
    <motion.section 
        className="flex flex-col lg:flex-row justify-center items-center gap-16 bg-bg px-8 lg:pt-24 pt-64 pb-24 text-text-primary"
        initial={{opacity: 0, y: 75}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.7}}
    >
      <FlipLink href="https://github.com/xwaruz1212">Github</FlipLink>
      <FlipLink href="https://www.linkedin.com/in/kacper-zurawski22/">Linkedin</FlipLink>
    </motion.section>
  );
};

const DURATION = 0.25;
const STAGGER = 0.025;

const FlipLink = ({ children, href }: { children: string; href: string }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      target="_blank"
      className="relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      style={{
        lineHeight: 0.75,
        color: "#4CAF50"
      }}
    >
      <div>
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {children.split("").map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};