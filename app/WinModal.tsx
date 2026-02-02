'use client';

import { motion, AnimatePresence } from 'framer-motion';

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function WinModal({ open, onClose }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50"
          onClick={onClose}
        >
          {/* VIDEO */}
          <video
            src="/videos/flying-kiss.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />

          {/* Optional overlay (remove if not needed) */}
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
