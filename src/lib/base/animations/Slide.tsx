import { AnimatePresence, motion } from "motion/react";
import { PropsWithChildren } from "react";

type IAnimationSlide = {
  to?: "top" | "bottom" | "left" | "right";
  children?: React.ReactNode;
};

export const AnimationBox = ({ children }: PropsWithChildren) => {
  return <AnimatePresence>{children}</AnimatePresence>;
};

export const AnimationSlide = (props: IAnimationSlide) => {
  const { to = "right", children } = props;
  const translate = {
    left: "translate3d(5%, 0, 0)",
    right: "translate3d(-5%, 0, 0)",
    top: "translate3d(0, 5%, 0)",
    bottom: "translate3d(0, -5%, 0)",
  }[to];

  return (
    <motion.div
      layout
      className={`w-full`}
      animate={{ opacity: 1, transform: "translate3d(0, 0, 0)" }}
      initial={{ opacity: 0, transform: translate }}
      exit={{ opacity: 0, transform: translate }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
