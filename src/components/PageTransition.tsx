"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
export const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  // return <>{children}</>;
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { duration: 0.4, delay: 1, ease: "easeInOut" },
          }}
          className="h-screen w-screen bg-primary top-0 pointer-events-none fixed z-20"
        ></motion.div>
        {children}
      </div>
    </AnimatePresence>
  );
};
