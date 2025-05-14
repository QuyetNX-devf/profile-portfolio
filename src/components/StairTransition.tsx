"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

const reverseStairIndex = (index) => {
  const total = 6;
  return total - index - 1;
};
export const StairTransition = () => {
  const pathName = usePathname();
  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathName}>
          <div className="h-screen w-screen left-0 top-0 pointer-events-none fixed flex z-50">
            {[...Array(6)].map((_, index) => (
              <motion.div
                key={index}
                variants={stairAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                  delay: reverseStairIndex(index) * 0.1,
                }}
                className="h-full w-full bg-secondary relative"
              ></motion.div>
            ))}
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};
