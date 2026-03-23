import { motion } from "motion/react";

const skills = [
  "UX/UI Design", "Product Strategy", "Figma", "React", "TypeScript", 
  "Tailwind CSS", "Framer Motion", "Design Systems", "Prototyping", "User Research"
];

export default function Skills() {
  return (
    <section className="py-24 overflow-hidden">
      <h2 className="text-3xl font-semibold text-white text-center mb-16">Skills</h2>
      <div className="flex gap-8">
        <motion.div 
          className="flex gap-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity }}
        >
          {[...skills, ...skills].map((skill, i) => (
            <div key={i} className="px-8 py-4 rounded-full border border-white/10 bg-white/[0.02] text-white/80 font-mono whitespace-nowrap">
              {skill}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
