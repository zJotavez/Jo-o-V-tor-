import { useParams, Navigate, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Calendar, User, Wrench } from "lucide-react";
import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";
import { projectsData } from "../data/projects";

export default function ProjetoDetalhe() {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projetos" replace />;
  }

  return (
    <PageTransition>
      <SEO 
        title={`${project.name} | Estudo de Caso - João Vitor`} 
        description={project.overview || project.problem}
        type="article"
      />
      <article className="min-h-screen pb-24 grid-bg relative">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0F] via-[#12121A] to-[#0B0B0F] -z-10" />
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 blur-3xl -z-10`} />
          
          <div className="max-w-4xl mx-auto relative z-10">
            <Link 
              to="/projetos" 
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 font-mono text-sm"
            >
              <ArrowLeft className="w-4 h-4" /> Voltar para Projetos
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#00FF88] text-sm font-mono tracking-widest uppercase mb-4 block">
                {project.category}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-white">
                {project.name}
              </h1>
              <p className="text-xl text-white/60 font-light leading-relaxed">
                {project.overview}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Project Meta */}
        <section className="px-6 mb-20 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-3xl cyber-card border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
              <div>
                <div className="flex items-center gap-2 text-white/60 mb-2">
                  <Calendar className="w-4 h-4 text-[#00FF88]" />
                  <span className="text-xs font-mono uppercase tracking-wider">Timeline</span>
                </div>
                <p className="font-medium text-white">{project.timeline}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-white/60 mb-2">
                  <User className="w-4 h-4 text-[#00C2FF]" />
                  <span className="text-xs font-mono uppercase tracking-wider">Role</span>
                </div>
                <p className="font-medium text-white">{project.role}</p>
              </div>
              <div className="col-span-2 md:col-span-2">
                <div className="flex items-center gap-2 text-white/60 mb-2">
                  <Wrench className="w-4 h-4 text-[#00FF88]" />
                  <span className="text-xs font-mono uppercase tracking-wider">Ferramentas</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tools?.map((tool, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-[#12121A] border border-white/10 text-xs font-mono text-white/80">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Image */}
        <section className="px-6 mb-24 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="aspect-video w-full rounded-3xl bg-[#12121A] border border-white/10 flex items-center justify-center relative overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
            >
              {project.heroImage ? (
                <img src={project.heroImage} alt={project.name} className="w-full h-full object-cover" />
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="text-white/40 font-mono tracking-widest uppercase">Hero Image</span>
                </>
              )}
            </motion.div>
          </div>
        </section>

        {/* The Challenge & Solution */}
        <section className="px-6 mb-24 relative z-10">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-white">O Desafio</h2>
              <div className="p-6 rounded-2xl bg-[#FF3366]/5 border border-[#FF3366]/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
                <p className="text-white/80 leading-relaxed">
                  {project.problem}
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-white">A Solução</h2>
              <div className="p-6 rounded-2xl bg-[#00C2FF]/5 border border-[#00C2FF]/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)]">
                <p className="text-white/80 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Results & Metrics */}
        {project.metrics && (
          <section className="px-6 mb-24 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center text-white">Resultados Alcançados</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {project.metrics.map((metric, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 rounded-3xl cyber-card border border-[#00FF88]/20 text-center relative overflow-hidden group shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_30px_rgba(0,255,136,0.1)] transition-shadow duration-500"
                  >
                    <div className="absolute inset-0 bg-gradient-to-b from-[#00FF88]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10">
                      <h3 className="text-4xl md:text-5xl font-bold text-[#00FF88] mb-2">{metric.value}</h3>
                      <p className="text-white/60 font-mono uppercase tracking-wider text-xs">{metric.label}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Gallery */}
        {project.gallery && project.gallery.length > 0 && (
          <section className="px-6 mb-24 relative z-10">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center text-white">Preview do Projeto</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {project.gallery.map((img, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`rounded-3xl overflow-hidden border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)] ${i === 0 && project.gallery!.length % 2 !== 0 ? 'md:col-span-2 aspect-video' : 'aspect-[4/3]'}`}
                  >
                    <img src={img} alt={`${project.name} preview ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                  </motion.div>
                ))}
              </div>
              
              {project.slug === 'canil-franfortal' && (
                <div className="mt-12 text-center">
                  <a 
                    href="https://www.canilfranfortal.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-[#0B0B0F] font-bold hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                  >
                    Ver filhotes disponíveis (Website)
                  </a>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Final CTA */}
        <section className="px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="p-12 rounded-[2rem] cyber-card border border-[#00C2FF]/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00FF88]/10 to-[#00C2FF]/10" />
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-6 text-white">Gostou deste projeto?</h2>
                <p className="text-white/60 mb-8 max-w-lg mx-auto">
                  Vamos conversar sobre como podemos aplicar estratégias semelhantes para transformar o seu produto digital.
                </p>
                <Link 
                  to="/contato"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-[#00FF88] text-[#0B0B0F] font-bold hover:bg-[#00FF88]/90 transition-all shadow-[0_0_20px_rgba(0,255,136,0.2)] hover:shadow-[0_0_30px_rgba(0,255,136,0.4)]"
                >
                  Iniciar um Projeto
                </Link>
              </div>
            </div>
          </div>
        </section>
      </article>
    </PageTransition>
  );
}
