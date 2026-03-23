import { motion } from "motion/react";
import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projectsData } from "../data/projects";

export default function Projetos() {
  return (
    <PageTransition>
      <SEO 
        title="Projetos | João Vitor - UX/UI Designer" 
        description="Veja casos reais onde o design estratégico transformou problemas complexos em resultados mensuráveis. Portfólio de UX/UI Design."
      />
      <section className="py-24 px-6 min-h-screen grid-bg relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-white">
              Projetos que <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF88] to-[#00C2FF]">convertem</span>.
            </h1>
            <p className="text-xl text-white/60 font-light max-w-2xl mx-auto">
              Casos reais onde o design estratégico transformou problemas complexos em <span className="text-[#0A0A0A] font-semibold bg-[#00FF88] px-2 py-0.5 rounded">resultados mensuráveis</span>.
            </p>
          </div>

          <div className="grid gap-12">
            {projectsData.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group relative rounded-[2rem] overflow-hidden cyber-card shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_30px_rgba(0,255,136,0.1)] transition-shadow duration-500"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700`} />
                
                <div className="relative p-8 md:p-12 flex flex-col gap-8">
                  {/* Title (Before Photo) */}
                  <div className="text-center">
                    <span className="text-[#00FF88] text-xs font-mono tracking-widest uppercase mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-4xl font-bold text-white">{project.name}</h3>
                  </div>

                  {/* Image (Middle) */}
                  <div className="w-full aspect-video rounded-2xl bg-[#12121A] border border-white/10 overflow-hidden relative flex items-center justify-center">
                    {project.heroImage ? (
                      <img src={project.heroImage} alt={project.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        <span className="text-white/40 font-mono text-sm tracking-widest uppercase">Preview do Projeto</span>
                      </>
                    )}
                  </div>

                  {/* Content (After Photo) */}
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-3 gap-4 text-sm">
                      <div className="p-4 rounded-xl bg-[#12121A] border border-white/5">
                        <span className="text-white/50 font-mono text-xs uppercase tracking-wider block mb-1">Problema</span>
                        <p className="text-white/80">{project.problem}</p>
                      </div>
                      <div className="p-4 rounded-xl bg-[#12121A] border border-white/5">
                        <span className="text-white/50 font-mono text-xs uppercase tracking-wider block mb-1">Solução</span>
                        <p className="text-white/80">{project.solution}</p>
                      </div>
                      <div className="p-4 rounded-xl bg-[#00FF88]/10 border border-[#00FF88]/20">
                        <span className="text-[#00FF88]/80 font-mono text-xs uppercase tracking-wider block mb-1">Resultado</span>
                        <p className="text-[#00FF88] font-medium">{project.result}</p>
                      </div>
                    </div>

                    <div className="text-center">
                      <Link to={`/projetos/${project.slug}`} className="inline-flex items-center gap-2 text-white font-mono text-sm hover:text-[#00FF88] transition-colors mt-4">
                        Ver estudo de caso completo <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* Neon Side Line */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
