
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedGroupProps {
  children: React.ReactNode;
  variants?: any;
  className?: string;
}

export const AnimatedGroup: React.FC<AnimatedGroupProps> = ({ children, variants, className }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};
