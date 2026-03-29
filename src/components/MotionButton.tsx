'use client';

import { MoveUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function MotionButton() {
  return (
    <motion.button
      whileHover="hover"
      whileTap="tap"
      className="group bg-muted text-muted-foreground hover:text-foreground outline-border flex items-center justify-center gap-2 rounded-sm px-2 py-1 font-sans text-xs outline-1 outline-offset-2 transition-colors"
    >
      <motion.div
        variants={{
          hover: { scale: 1.2, rotate: 45 },
          tap: { scale: 0.8 },
        }}
        transition={{ duration: 0.2 }}
      >
        <MoveUpRight size={10} />
      </motion.div>
    </motion.button>
  );
}
