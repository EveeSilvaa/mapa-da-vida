import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
}

export const AnimatedText = ({ text, className, delay = 0 }: AnimatedTextProps) => {
  const words = text.split(' ')

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: 0.1, 
        delayChildren: delay + i * 0.04 
      },
    }),
  }

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      } as const, // Usamos 'as const' para fixar o tipo literal
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      } as const,
    },
  }

  return (
    <motion.div
      className={`flex flex-wrap overflow-hidden ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          className="mr-1.5 inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}
