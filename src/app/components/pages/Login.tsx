import React from "react";
import SignIn from "../ui/molecules/Login";
import { motion } from 'framer-motion';
import { cardTransition, transit} from '../../utils/animate'


const  Login = () => {
  return (
    <motion.div
    initial='out'
    animate='in'
    exit='out'
    variants={cardTransition}
    transition={transit}
  >
      <SignIn />
    </motion.div>
  );
}

export default Login
