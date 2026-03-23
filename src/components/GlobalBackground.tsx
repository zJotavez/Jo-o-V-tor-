import { motion } from "motion/react";
import ParticleOverlay from "./ParticleOverlay";

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#0B0B0F]">
      {/* Particles Layer */}
      <ParticleOverlay />
      
      {/* Animated Blobs */}
      <motion.div 
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 left-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#00FF88]/10 rounded-full blur-[120px] mix-blend-screen" 
      />
      
      <motion.div 
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] md:w-[700px] md:h-[700px] bg-[#00C2FF]/10 rounded-full blur-[150px] mix-blend-screen" 
      />
      
      {/* Technological Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      
      {/* Vignette Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0B0B0F]/80" />
    </div>
  );
}
