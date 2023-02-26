import { AnimatePresence, motion } from "framer-motion";

interface FormErrorType {
  children?: React.ReactNode;
}

const errorVariant = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 25,
      duration: 1,
    },
  },
};

export const FormError = ({ children }: FormErrorType) => {
  return (
    <div className="m-1 text-red-500">
      <AnimatePresence>
        <motion.div
          key={children?.toString()}
          variants={errorVariant}
          initial="hidden"
          animate="visible"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
