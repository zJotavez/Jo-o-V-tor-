import { motion } from "motion/react";

const skills = [
  "UX/UI Design", "Product Design", "Figma", "Webflow", "React", "TypeScript", 
  "User Research", "Prototyping", "Interaction Design", "Design Systems", 
  "Strategy", "Conversion Optimization"
];

export default function SkillsScroll() {
  return (
    <div className="w-full overflow-hidden py-10 bg-[#0B0B0F]">
      <motion.div 
        className="flex gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, ease: "linear", repeat: Infinity }}
      >
        {[...skills, ...skills].map((skill, i) => (
          <span key={i} className="text-4xl md:text-6xl font-display font-bold text-white/10 hover:text-[#00FF88]/50 transition-colors duration-300 cursor-default">
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
