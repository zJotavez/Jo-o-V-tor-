import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Zap, Layout as LayoutIcon, ShieldCheck, Cpu, Globe } from "lucide-react";
import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";
import { projectsData } from "../data/projects";

export default function Home() {
  const metodoRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: metodoRef,
    offset: ["start center", "end center"]
  });
  const pathLength = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <PageTransition>
      <SEO 
        title="João Vitor | Design que performa." 
        description="Portfólio de design e desenvolvimento de alto nível. Focado em performance, estética premium e resultados reais."
      />
      
      <div className="text-white selection:bg-[#00FF88]/30 selection:text-[#00FF88] overflow-x-hidden">
        
        {/* 1. HERO SECTION */}
        <section className="relative min-h-screen flex flex-col justify-center items-center px-6 pt-20 overflow-hidden">
          
          {/* Background Image */}
          <div 
            className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none"
          >
            <div className="relative w-full h-full max-w-7xl mx-auto">
              <img 
                src="https://i.ibb.co/5x9L7GjB/Whats-App-Image-2026-03-20-at-09-54-36-removebg-preview.png" 
                alt="João Vitor" 
                className="absolute bottom-0 right-0 md:right-[-10%] w-full md:w-[80%] h-auto object-contain drop-shadow-[0_0_50px_rgba(0,255,136,0.15)]"
                referrerPolicy="no-referrer"
              />
              {/* Overlay and Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/20 to-transparent opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-transparent opacity-60" />
              <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#00FF88]/10 blur-[120px] rounded-full" />
            </div>
          </div>

          <div className="max-w-5xl mx-auto text-center relative z-10 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[11px] uppercase tracking-[0.2em] font-mono text-[#00FF88] shadow-[0_0_20px_rgba(0,255,136,0.1)]"
              >
                <Cpu className="w-3 h-3" />
                <span>Product Design Architect</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              >
                Design que <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF88] to-[#00C2FF]">performa.</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-lg sm:text-xl text-[#A1A1AA] font-light max-w-xl mx-auto leading-relaxed drop-shadow-md"
              >
                Interfaces futuristas, minimalistas e de <span className="text-[#0A0A0A] font-semibold bg-[#00FF88] px-2 py-0.5 rounded">alto impacto visual</span>. <br className="hidden md:block" />
                Transformando complexidade em <span className="text-white font-medium">autoridade digital</span>.
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4"
            >
              <Link
                to="/projetos"
                className="group relative px-10 py-5 rounded-full bg-[#00FF88] text-[#0A0A0A] font-bold overflow-hidden transition-all hover:shadow-[0_0_40px_rgba(0,255,136,0.4)] hover:scale-105 flex items-center gap-3"
              >
                <span className="relative z-10">Ver Projetos</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
              </Link>
              
              <Link
                to="/contato"
                className="px-10 py-5 rounded-full border border-white/10 text-white font-mono text-sm hover:bg-white/5 transition-all hover:border-[#00FF88]/50 hover:scale-105"
              >
                Iniciar Projeto
              </Link>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-mono">Scroll</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-[#00FF88] to-transparent" />
          </motion.div>
        </section>

        {/* 2. SHOWCASE (PROJETOS) - MANUAL HORIZONTAL SCROLL */}
        <section className="py-32 relative">
          <div className="flex flex-col justify-center overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 mb-12 w-full">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div className="space-y-4">
                  <span className="text-[#00FF88] font-mono text-xs uppercase tracking-[0.3em]">Showcase</span>
                  <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Projetos Selecionados</h2>
                </div>
                <p className="text-[#A1A1AA] max-w-sm font-light">
                  Uma curadoria de trabalhos que unem <span className="text-white font-medium">estética refinada</span> e <span className="text-[#0A0A0A] font-semibold bg-[#00FF88] px-2 py-0.5 rounded">performance técnica</span>.
                </p>
              </div>
            </div>

            <div className="relative">
              {/* Gradient Masks */}
              <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-[#0A0A0A] to-transparent z-20 pointer-events-none" />
              <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-[#0A0A0A] to-transparent z-20 pointer-events-none" />
              
              <div className="flex gap-8 md:gap-12 px-[10%] overflow-x-auto snap-x snap-mandatory no-scrollbar pb-12 pt-4">
                {projectsData.map((project, i) => (
                  <motion.div 
                    key={`${project.slug}-${i}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.8 }}
                    className="w-[320px] md:w-[550px] shrink-0 snap-center group/card relative"
                    whileHover={{ y: -10, scale: 1.02 }}
                  >
                    <Link to={`/projeto/${project.slug}`}>
                      <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden bg-[#111111] border border-white/5 shadow-[0_8px_30px_rgba(0,0,0,0.4)] transition-all duration-700 group-hover:border-[#00FF88]/30 group-hover:shadow-[0_8px_30px_rgba(0,255,136,0.15)]">
                        {/* Grid Background inside card */}
                        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-0 group-hover:opacity-20 transition-opacity duration-700" />
                        
                        {/* Background Gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700`} />
                        
                        {/* Glow Blobs inside card */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#00FF88]/5 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#00C2FF]/5 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        
                        {/* Visual Preview Placeholder */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          {project.heroImage ? (
                            <img src={project.heroImage} alt={project.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                          ) : (
                            <div className="text-center space-y-4">
                              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center mx-auto group-hover:border-[#00FF88]/50 transition-colors">
                                <LayoutIcon className="w-5 h-5 text-white/20 group-hover:text-[#00FF88] transition-colors" />
                              </div>
                              <span className="block text-white/10 font-mono text-[10px] uppercase tracking-[0.4em] group-hover:text-[#00FF88]/30 transition-colors">
                                Case Study View
                              </span>
                            </div>
                          )}
                        </div>
                        
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-[2px]">
                          <div className="flex flex-col items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-[#00FF88] flex items-center justify-center text-[#0A0A0A] scale-50 group-hover:scale-100 transition-transform duration-500 shadow-[0_0_30px_rgba(0,255,136,0.5)]">
                              <ArrowRight className="w-6 h-6" />
                            </div>
                            <span className="text-white font-mono text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity delay-200">Explorar Projeto</span>
                          </div>
                        </div>

                        {/* Project Tag */}
                        <div className="absolute top-6 left-6">
                          <span className="px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white/60 uppercase tracking-widest">
                            {project.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="mt-8 flex justify-between items-end px-2">
                        <div className="space-y-1">
                          <h3 className="text-2xl md:text-3xl font-bold group-hover:text-[#00FF88] transition-colors tracking-tight">{project.name}</h3>
                          <p className="text-[#A1A1AA] text-sm font-light leading-relaxed max-w-[90%] line-clamp-1">
                            {project.overview || project.solution}
                          </p>
                        </div>
                        <div className="text-[#00FF88] opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
                          <ArrowRight className="w-6 h-6" />
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3. MÉTODO - ESTRATÉGIA E EXECUÇÃO */}
        <section className="py-32 border-y border-white/5 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 mb-16">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-[#00FF88] font-mono text-xs uppercase tracking-[0.3em]">O Método</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mt-4 mb-6">Estratégia, Execução e Resultados</h2>
              <p className="text-[#A1A1AA] text-lg font-light leading-relaxed">
                Nosso processo é simples, transparente e totalmente colaborativo, sempre mantendo você no centro das decisões.
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6">
            <div ref={metodoRef} className="relative pl-8 md:pl-24 max-w-5xl mx-auto">
              {/* Traced Path Line */}
              <div className="absolute left-[15px] md:left-[47px] top-0 bottom-0 w-[2px] bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  className="absolute top-0 left-0 w-full bg-[#00FF88] origin-top" 
                  style={{ scaleY: pathLength }} 
                />
              </div>

              {[
                {
                  step: "01",
                  title: "Conversa Estratégica",
                  img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                },
                {
                  step: "02",
                  title: "Design & Prototipagem",
                  img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop"
                },
                {
                  step: "03",
                  title: "Desenvolvimento Extremo",
                  img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
                },
                {
                  step: "04",
                  title: "Performance Real",
                  img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  className="mb-16 relative"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  {/* Node on the line */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="absolute -left-8 md:-left-[5.5rem] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#0A0A0A] border-2 border-[#00FF88] flex items-center justify-center z-20 shadow-[0_0_15px_rgba(0,255,136,0.5)]"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#00FF88]" />
                  </motion.div>

                  {/* Step Number Indicator */}
                  <div className="absolute -left-8 md:-left-[8.5rem] top-1/2 -translate-y-1/2 hidden md:block">
                    <span className="font-mono text-2xl font-bold text-white/20">{item.step}</span>
                  </div>

                  {/* Card with Image Shrink & Text Reveal */}
                  <motion.div
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative w-full h-[30vh] md:h-[40vh] rounded-[2rem] overflow-hidden group shadow-[0_8px_30px_rgba(0,0,0,0.4)] border border-white/5"
                  >
                    {/* Shrinking Image */}
                    <motion.img 
                      src={item.img} 
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover origin-center opacity-40 group-hover:opacity-30 transition-opacity duration-700"
                      initial={{ scale: 1.4 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                      viewport={{ once: true, margin: "-100px" }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />
                    <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] pointer-events-none" />
                    
                    {/* Text Content */}
                    <motion.div 
                      initial={{ y: 60, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="absolute bottom-0 left-0 p-6 md:p-10 w-full"
                    >
                      <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight leading-tight drop-shadow-lg">{item.title}</h3>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <Link to="/metodo" className="inline-flex items-center gap-2 text-[#00FF88] font-mono text-sm uppercase tracking-widest hover:text-white transition-colors group">
                Conheça o método completo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* 5. CTA FINAL */}
        <section className="py-24 px-6 relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 z-0">
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00FF88]/10 blur-[120px] rounded-full" 
            />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          </div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10 space-y-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]"
            >
              Vamos construir algo <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF88] to-[#00C2FF]">de alto nível?</span>
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(0,255,136,0.2)",
                    "0 0 50px rgba(0,255,136,0.5)",
                    "0 0 20px rgba(0,255,136,0.2)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block rounded-full"
              >
                <Link
                  to="/contato"
                  className="inline-flex items-center gap-4 px-12 py-6 rounded-full bg-[#00FF88] text-[#0A0A0A] font-bold text-lg hover:shadow-[0_0_60px_rgba(0,255,136,0.6)] hover:scale-105 transition-all duration-300 group"
                >
                  Iniciar Projeto
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
