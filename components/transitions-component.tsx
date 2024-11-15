"use client"
import { motion } from "framer-motion";
import { fadeIn } from "./motion.transitions";

interface MotionTransitionProps {
    children: React.ReactNode
    position: 'right' | 'bottom'
    className?: string
}

const MotionTransition = (props: MotionTransitionProps) => {
    const { children, position, className } = props
  return (
    <div>
        <motion.div 
        variants={fadeIn(position)}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className={className}
        >    
            {children}   
        </motion.div>
    </div>
  )
}

export default MotionTransition