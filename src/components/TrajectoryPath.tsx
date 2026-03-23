import { motion } from "motion/react";

const steps = [
  { title: "Ideia", desc: "Entendimento do problema e público." },
  { title: "Estratégia", desc: "Mapeamento da jornada e objetivos." },
  { title: "Design", desc: "Criação da interface e protótipos." },
  { title: "Desenvolvimento", desc: "Transformação em produto real." },
  { title: "Resultado", desc: "Lançamento e otimização." }
];

export default function TrajectoryPath() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16 text-white tracking-tight">
        Minha Trajetória de <span className="text-gradient-accent">Sucesso</span>
      </h2>
      <div className="relative">
        <svg className="absolute top-0 left-1/2 w-px h-full -translate-x-1/2 hidden md:block" viewBox="0 0 2 100" preserveAspectRatio="none">
          <motion.path
            d="M 1 0 V 100"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeDasharray="10 10"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="opacity-20"
          />
        </svg>
        <div className="space-y-12">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`flex flex-col md:flex-row gap-6 items-center ${i % 2 === 0 ? 'md:text-right' : 'md:text-left md:flex-row-reverse'}`}
            >
              <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent flex items-center justify-center font-bold text-accent shrink-0">
                {i + 1}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <p className="text-white/60">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
