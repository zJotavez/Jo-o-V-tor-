import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import { MessageSquare, Code2, RefreshCw, TrendingUp, CheckCircle2, ArrowRight } from "lucide-react";

export default function Metodo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathLength = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const steps = [
    {
      icon: <MessageSquare className="w-6 h-6 text-[#0A0A0A]" />,
      title: "Conversa Estratégica & Imersão",
      desc: (
        <>
          Tudo começa com uma <span className="text-[#0A0A0A] font-semibold bg-[#00FF88] px-2 py-0.5 rounded">imersão no seu universo</span>. Não fazemos apenas perguntas; analisamos seu mercado, seus concorrentes e o comportamento do seu cliente ideal. Definimos <span className="text-white font-medium">KPIs claros</span> e estruturamos uma arquitetura de informação que guia o usuário exatamente para a <span className="text-[#00FF88] font-semibold">conversão</span>.
        </>
      ),
      img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <Code2 className="w-6 h-6 text-[#0A0A0A]" />,
      title: "Design & Prototipagem de Alta Fidelidade",
      desc: (
        <>
          Com a estratégia definida, criamos a primeira versão visual. Apresentamos um <span className="text-[#0A0A0A] font-semibold bg-[#00FF88] px-2 py-0.5 rounded">protótipo interativo</span> onde você pode navegar antes mesmo de uma linha de código ser escrita. Aqui, você avalia a estética e a usabilidade. Seu <span className="text-white font-medium">feedback é o nosso guia</span> para o refinamento.
        </>
      ),
      img: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop"
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-[#0A0A0A]" />,
      title: "Desenvolvimento & Otimização Extrema",
      desc: (
        <>
          Transformamos o design em um produto digital de <span className="text-[#0A0A0A] font-semibold bg-[#00FF88] px-2 py-0.5 rounded">alta performance</span>. Utilizamos tecnologias de ponta para garantir carregamento ultrarrápido, animações fluidas e responsividade perfeita em qualquer dispositivo. Cada detalhe é polido para <span className="text-white font-medium">reter a atenção do usuário</span>.
        </>
      ),
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-[#0A0A0A]" />,
      title: "Lançamento & Performance Real",
      desc: (
        <>
          Não entregamos apenas um site, entregamos uma <span className="text-[#0A0A0A] font-semibold bg-[#00FF88] px-2 py-0.5 rounded">máquina de vendas</span>. Implementamos SEO técnico, integramos pixels de rastreamento e configuramos dashboards de analytics. Acompanhamos os resultados para garantir que o <span className="text-white font-medium">ROI seja maximizado</span>.
        </>
      ),
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <PageTransition>
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <span className="text-[#00FF88] font-mono text-xs uppercase tracking-[0.3em]">O Método</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6 tracking-tight">
            Estratégia, Execução e <span className="text-gradient-accent">Resultados</span>
          </h1>
          <p className="text-[#A1A1AA] text-lg font-light leading-relaxed">
            Nosso processo é desenhado para transformar visitantes em clientes. Acompanhe o caminho traçado para o sucesso do seu projeto digital.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative pl-8 md:pl-24 max-w-5xl mx-auto">
          {/* Traced Path Line */}
          <div className="absolute left-[15px] md:left-[47px] top-0 bottom-0 w-[2px] bg-white/10 rounded-full overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-[#00FF88] origin-top" 
              style={{ scaleY: pathLength }} 
            />
          </div>

          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className="mb-32 relative"
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
                <span className="font-mono text-2xl font-bold text-white/20">0{index + 1}</span>
              </div>

              {/* Card with Image Shrink & Text Reveal */}
              <motion.div
                initial={{ opacity: 0, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative w-full h-[60vh] md:h-[70vh] rounded-[2rem] overflow-hidden group shadow-[0_8px_30px_rgba(0,0,0,0.4)] border border-white/5"
              >
                {/* Shrinking Image */}
                <motion.img 
                  src={step.img} 
                  alt={step.title}
                  className="absolute inset-0 w-full h-full object-cover origin-center opacity-40 group-hover:opacity-30 transition-opacity duration-700"
                  initial={{ scale: 1.4 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true, margin: "-100px" }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-[#0A0A0A]/30" />
                <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] pointer-events-none" />
                
                {/* Text Content */}
                <motion.div 
                  initial={{ y: 60, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="absolute bottom-0 left-0 p-6 md:p-12 w-full max-w-3xl"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#00FF88] flex items-center justify-center shadow-[0_0_30px_rgba(0,255,136,0.3)] shrink-0">
                      {step.icon}
                    </div>
                    <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight leading-tight drop-shadow-lg">{step.title}</h3>
                  </div>
                  <p className="text-white/90 text-base md:text-lg leading-relaxed font-light backdrop-blur-sm drop-shadow-md">
                    {step.desc}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 p-1 relative rounded-[3rem] overflow-hidden group max-w-5xl mx-auto"
        >
          {/* Animated Gradient Border */}
          <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,#0A0A0A_0%,#00FF88_50%,#0A0A0A_100%)] animate-[spin_4s_linear_infinite] opacity-20 group-hover:opacity-50 transition-opacity duration-500" />
          
          <div className="relative bg-[#0A0A0A] rounded-[2.8rem] p-8 md:p-16 overflow-hidden border border-white/5">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#00FF88]/20 blur-[120px] rounded-full group-hover:bg-[#00FF88]/30 transition-colors duration-700" />
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#00C2FF]/10 blur-[120px] rounded-full group-hover:bg-[#00C2FF]/20 transition-colors duration-700" />
            
            <div className="relative z-10 flex flex-col items-center text-center space-y-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00FF88] to-[#00C2FF] p-[1px] shadow-[0_0_30px_rgba(0,255,136,0.3)]">
                <div className="w-full h-full bg-[#0A0A0A] rounded-full flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-[#00FF88]" />
                </div>
              </div>
              
              <div className="space-y-4 max-w-3xl">
                <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                  Pronto para <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF88] to-[#00C2FF]">dominar o mercado?</span>
                </h3>
                <p className="text-[#A1A1AA] text-lg md:text-xl font-light leading-relaxed">
                  Sua presença digital não deve ser apenas um cartão de visitas. Deve ser o seu <span className="text-white font-medium">melhor vendedor</span>, trabalhando 24/7. Vamos construir um sistema completo, focado em <span className="text-[#0A0A0A] font-medium bg-[#00FF88] px-2 py-0.5 rounded">performance real e conversão</span>.
                </p>
              </div>

              <div className="pt-8 flex flex-col sm:flex-row items-center gap-6">
                <Link
                  to="/contato"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#00FF88] text-[#0A0A0A] font-bold text-lg hover:shadow-[0_0_40px_rgba(0,255,136,0.4)] hover:scale-105 transition-all duration-300"
                >
                  Iniciar meu projeto
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <div className="flex items-center gap-3 text-sm text-[#A1A1AA] font-mono uppercase tracking-widest">
                  <CheckCircle2 className="w-4 h-4 text-[#00FF88]" />
                  Vagas limitadas
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
