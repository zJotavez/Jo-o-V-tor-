import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Sparkles, Target, Zap } from "lucide-react";
import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";
import Skills from "../components/Skills";

export default function Sobre() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacityImage = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <PageTransition>
      <SEO 
        title="Sobre | João Vitor - UX/UI Designer" 
        description="Especialista em UX/UI focado em transformar ideias em produtos digitais reais."
      />
      <main ref={containerRef} className="relative min-h-screen text-white overflow-hidden selection:bg-[#00FF88]/30">
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-24">
          
          {/* Main Content: 2 Columns */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            
            {/* Left: Image with Parallax & Effects */}
            <motion.div 
              style={{ y: yImage, opacity: opacityImage }}
              className="relative w-full aspect-[4/5] max-w-sm mx-auto lg:mx-0"
            >
              {/* Glow Behind Image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00FF88] to-[#00C2FF] blur-2xl opacity-20 rounded-3xl" />
              
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-[#12121A] group">
                {/* Dark Overlay with subtle gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-transparent to-transparent z-10 opacity-80" />
                
                <img 
                  src="https://i.ibb.co/NnpqhYcL/Whats-App-Image-2026-03-16-at-14-29-13.jpg" 
                  alt="João Vitor" 
                  className="w-full h-full object-cover object-center scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                
                {/* Neon Glow Border Effect on Hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#00FF88]/50 rounded-3xl z-20 transition-colors duration-500 shadow-[inset_0_0_20px_rgba(0,255,136,0)] group-hover:shadow-[inset_0_0_20px_rgba(0,255,136,0.2)]" />
                
                {/* Futuristic Details */}
                <div className="absolute top-4 left-4 z-20 flex gap-2 items-center">
                  <span className="w-2 h-2 rounded-full bg-[#00FF88] animate-pulse" />
                  <span className="text-[10px] font-mono text-[#00FF88] tracking-widest uppercase">Online</span>
                </div>
                <div className="absolute bottom-6 left-6 z-20">
                  <p className="text-white/50 font-mono text-xs mb-1 tracking-widest">SYS.UX_UI</p>
                  <p className="text-white text-xl font-medium tracking-tight">João Vitor</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Text Content */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.1] mb-6">
                  Mais do que design. <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF88] to-[#00C2FF]">
                    Eu construo experiências digitais que funcionam.
                  </span>
                </h1>
                
                <div className="space-y-6 text-base md:text-lg text-white/70 font-light leading-relaxed">
                  <p>
                    Eu sou João Vitor, especialista em UX/UI e apaixonado por transformar ideias em <span className="text-white font-medium">produtos digitais reais</span>.
                  </p>
                  <p>
                    Minha jornada começou com a curiosidade por tecnologia e evoluiu para algo maior: a capacidade de pegar uma ideia — muitas vezes apenas no papel — e transformá-la em uma experiência digital completa, <span className="text-[#0A0A0A] font-semibold bg-[#00FF88] px-2 py-0.5 rounded">funcional e estratégica</span>.
                  </p>
                  <p className="text-white font-medium">
                    Hoje, meu foco vai além do visual.
                  </p>
                  <p>Eu penso em:</p>
                  <ul className="space-y-3 pl-4 border-l-2 border-[#00FF88]/30">
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00FF88]" />
                      Como o usuário se sente
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00C2FF]" />
                      Como ele interage
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00FF88]" />
                      <strong className="text-[#0A0A0A] font-semibold bg-[#00FF88] px-2 py-0.5 rounded text-sm md:text-base">E principalmente, como isso gera resultado</strong>
                    </li>
                  </ul>
                  <p>
                    Cada projeto que desenvolvo carrega um objetivo claro: não apenas ser bonito, mas <span className="text-white font-medium">funcionar, converter e gerar valor</span>.
                  </p>
                  <p className="text-lg md:text-xl text-white font-medium pt-4">
                    Se você tem uma ideia, eu posso transformar ela em algo real — da forma certa.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          <Skills />

          {/* Authority Blocks (Animated Lateral Flow) */}
          <div className="mt-24 md:mt-32 overflow-hidden">
            <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-12 md:mb-16">Diferenciais</h2>
            <div className="flex gap-4 md:gap-8">
              <motion.div 
                className="flex gap-4 md:gap-8"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 30, ease: "linear", repeat: Infinity }}
              >
                {[
                  {
                    icon: <Target className="w-6 h-6 md:w-8 md:h-8 text-[#00FF88]" />,
                    title: "UX/UI Estratégico",
                    desc: "Design com propósito, não apenas estética"
                  },
                  {
                    icon: <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-[#00C2FF]" />,
                    title: "Transformação de Ideias",
                    desc: "Tiro projetos do papel e levo para o digital"
                  },
                  {
                    icon: <Zap className="w-6 h-6 md:w-8 md:h-8 text-[#00FF88]" />,
                    title: "Foco em Resultado",
                    desc: "Experiências pensadas para conversão"
                  },
                  {
                    icon: <Target className="w-6 h-6 md:w-8 md:h-8 text-[#00FF88]" />,
                    title: "UX/UI Estratégico",
                    desc: "Design com propósito, não apenas estética"
                  },
                  {
                    icon: <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-[#00C2FF]" />,
                    title: "Transformação de Ideias",
                    desc: "Tiro projetos do papel e levo para o digital"
                  },
                  {
                    icon: <Zap className="w-6 h-6 md:w-8 md:h-8 text-[#00FF88]" />,
                    title: "Foco em Resultado",
                    desc: "Experiências pensadas para conversão"
                  }
                ].map((block, i) => (
                  <div
                    key={i}
                    className="group relative p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-sm w-[280px] md:w-[350px] shrink-0 shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_30px_rgba(0,255,136,0.1)] hover:bg-white/[0.05] hover:border-[#00FF88]/30 transition-all duration-300"
                  >
                    {/* Neon Side Line */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00FF88] to-[#00C2FF] opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10 flex flex-col items-center text-center">
                      <div className="mb-4 md:mb-6 p-3 md:p-4 rounded-2xl bg-white/5 group-hover:scale-110 group-hover:bg-[#00FF88]/10 transition-all duration-300">
                        {block.icon}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-4 group-hover:text-[#00FF88] transition-colors">{block.title}</h3>
                      <p className="text-sm md:text-base text-white/60 group-hover:text-white/80 transition-colors">{block.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Minha Jornada (Static Path Timeline) */}
          <div className="mt-24 md:mt-32 relative">
            <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-12 md:mb-20">Minha Jornada</h2>
            
            <div className="relative max-w-4xl mx-auto px-4">
              {/* Central Path Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00FF88] to-[#00C2FF] -translate-x-1/2 z-0" />

              {[
                { title: "IDEIA", desc: "Transformamos visão em direção. Aqui nasce o conceito que guia todo o projeto." },
                { title: "ESTRATÉGIA", desc: "Planejamento inteligente, decisões orientadas por dados e foco absoluto em performance." },
                { title: "DESIGN", desc: "Interfaces de alto padrão, pensadas para encantar, engajar e converter." },
                { title: "RESULTADO", desc: "Um produto sólido, escalável e preparado para gerar crescimento consistente." },
              ].map((step, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative flex items-center mb-12 md:mb-16 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 md:w-6 md:h-6 rounded-full bg-[#0B0B0F] border-2 border-[#00FF88] shadow-[0_0_15px_rgba(0,255,136,0.5)] -translate-x-1/2 z-10" />

                  {/* Content Card */}
                  <div className="w-full md:w-[45%] ml-10 md:ml-0">
                    <div className="p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-sm shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_30px_rgba(0,255,136,0.1)] hover:bg-white/[0.05] hover:border-[#00FF88]/30 transition-all duration-300 group">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 group-hover:text-[#00FF88] transition-colors">{step.title}</h3>
                      <p className="text-sm md:text-base text-white/60 leading-relaxed group-hover:text-white/80 transition-colors">{step.desc}</p>
                    </div>
                  </div>
                  
                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-[45%]" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24 md:mt-32 text-center max-w-3xl mx-auto relative px-4"
          >
            <div className="absolute inset-0 bg-[#00FF88]/10 blur-[100px] -z-10 rounded-full" />
            <h2 className="text-2xl md:text-4xl font-bold mb-8 text-white">
              Se você chegou até aqui, provavelmente tem uma ideia que merece <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF88] to-[#00C2FF]">sair do papel.</span>
            </h2>
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
              <a 
                href="/contato"
                className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full bg-[#00FF88] text-[#0A0A0A] font-bold text-base md:text-lg hover:shadow-[0_0_30px_rgba(0,255,136,0.4)] hover:scale-105 transition-all duration-300 group"
              >
                Vamos transformar isso em realidade
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

        </div>
      </main>
    </PageTransition>
  );
}
