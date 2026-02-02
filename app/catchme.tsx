'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function RunButton() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const moveButton = () => {
    const x = Math.random() * 300 - 150;
    const y = Math.random() * 200 - 100;
    setPosition({ x, y });
  };

  return (
    <motion.button
      onMouseEnter={moveButton}
      animate={position}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="
        px-6 py-3
        bg-[#BD1516] text-white
        rounded-xl font-semibold
        shadow-lg
        cursor-pointer
      "
    >
      No 😜
    </motion.button>
  );
}
