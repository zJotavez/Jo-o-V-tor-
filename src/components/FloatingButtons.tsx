import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-4">
      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
        href="#"
        className="w-14 h-14 rounded-full bg-[#00FF88] hover:scale-110 flex items-center justify-center text-[#0A0A0A] shadow-[0_0_20px_rgba(0,255,136,0.4)] transition-all"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={24} />
      </motion.a>
    </div>
  );
}
