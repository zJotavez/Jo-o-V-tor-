import { motion } from "motion/react";

const skills = [
  "UX/UI Design", "Product Strategy", "Figma", "Webflow", "React", "TypeScript", 
  "Tailwind CSS", "Motion Design", "Prototyping", "User Research", "Design Systems"
];

export default function SkillsMarquee() {
  return (
    <div className="py-12 overflow-hidden bg-white/[0.02] border-y border-white/5">
      <div className="flex gap-8 animate-marquee whitespace-nowrap">
        {[...skills, ...skills].map((skill, i) => (
          <span key={i} className="text-2xl font-mono text-white/40 hover:text-accent transition-colors">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
