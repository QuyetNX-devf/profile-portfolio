"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export const Photo = () => {
  return (
    <div className="width-full h-full relative">
      <motion.div
        className="flex items-center justify-center w-full h-full"
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.4,
            delay: 2,
          },
        }}
      >
        <div className="w-[298px] h-[298px] rounded-full overflow-hidden relative">
          <div className="absolute w-full h-full top-0 left-0 bottom-0 right-0 object-cover">
            <Image
              width={298}
              height={298}
              src="/assets/avata.png"
              alt="avatar"
              className="block w-full h-auto"
            />
          </div>
        </div>
      </motion.div>

      <motion.svg
        className="w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] "
        fill="transparent"
        viewBox="0 0 350 350"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="175"
          cy="175"
          r="150"
          stroke="#00ff99"
          strokeWidth={4}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
          }}
          transition={{
            duration: 20,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.svg>
    </div>
  );
};
