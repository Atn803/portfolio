import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { motion } from "framer-motion";

interface ISection { 
  children: any;
  delay?: any;
}

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === "transition";
  },
});

const Section = ({ children, delay = 0 }:ISection) => {
  return (
    <StyledDiv
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transitionDuration="0.8"
      transitionDelay={delay}
      mb={6}
    >
      {children}
    </StyledDiv>
  );
};

export default Section;
