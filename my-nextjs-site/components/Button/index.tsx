import { motion } from "framer-motion";

interface ButtonType {
  text: string;
  onClick: () => void;
}

const Button = ({ text, onClick }: ButtonType) => {
  const buttonVariants = {
    rest: {
      scale: 1,
      boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
      color: "#000",
    },
    hover: {
      scale: 1.1,
      boxShadow: "0px 0px 0px 10px rgba(0,0,0,0.2)",
      color: "#fff",
    },
    pressed: {
      scale: 0.9,
      boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
      color: "#fff",
    },
  };

  return (
    <motion.button
      variants={buttonVariants}
      initial="rest"
      whileHover="hover"
      whileTap="pressed"
      onClick={onClick}
      style={{
        backgroundColor: "#0d47a9",
        color: "#000",
        borderRadius: "8px",
        padding: "10px 20px",
        fontSize: "1.2rem",
        border: "none",
        cursor: "pointer",
        height: "50px",
      }}
    >
      {text}
    </motion.button>
  );
};

export default Button;
