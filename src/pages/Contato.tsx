import { motion } from "motion/react";
import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";
import { MessageCircle, Mail, MapPin, Send } from "lucide-react";

export default function Contato() {
  return (
    <PageTransition>
      <SEO 
        title="Contato | João Vitor - UX/UI Designer" 
        description="Pronto para dominar o mercado? Entre em contato ou assine nossa newsletter."
      />
      <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <span className="text-[#00FF88] font-mono text-xs uppercase tracking-[0.3em]">Contato</span>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 mb-6 tracking-tight">
            Sua próxima grande jogada começa <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF88] to-[#00C2FF]">aqui.</span>
          </h1>
          <p className="text-[#A1A1AA] text-lg font-light leading-relaxed">
            Seja para iniciar um projeto transformador ou para receber insights exclusivos sobre design e conversão. Escolha como quer se conectar.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start relative">
          
          {/* Left Column: Copy & Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-12 lg:sticky lg:top-32"
          >
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                Não construímos apenas sites, criamos <span className="text-[#0A0A0A] font-semibold bg-[#00FF88] px-2 py-0.5 rounded">experiências que convertem</span>.
              </h2>
              <p className="text-[#A1A1AA] text-lg font-light leading-relaxed">
                Se você busca um parceiro estratégico para elevar o nível do seu produto digital, você está no lugar certo. Nosso foco é entregar <span className="text-white font-medium">design de alto padrão</span> aliado a uma <span className="text-[#0A0A0A] font-semibold bg-[#00FF88] px-2 py-0.5 rounded">performance extrema</span>.
              </p>
            </div>

            <div className="space-y-6 pt-8 border-t border-white/10">
              <div className="flex items-center gap-4 text-white/80 group">
                <div className="w-14 h-14 rounded-2xl bg-[#00FF88]/10 flex items-center justify-center border border-[#00FF88]/20 group-hover:bg-[#00FF88]/20 transition-colors shadow-[0_0_15px_rgba(0,255,136,0.1)]">
                  <Mail className="w-6 h-6 text-[#00FF88]" />
                </div>
                <div>
                  <p className="text-sm text-[#A1A1AA] font-mono mb-1">E-mail Direto</p>
                  <p className="font-medium text-lg">joaotrjano.v@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-white/80 group">
                <div className="w-14 h-14 rounded-2xl bg-[#00C2FF]/10 flex items-center justify-center border border-[#00C2FF]/20 group-hover:bg-[#00C2FF]/20 transition-colors shadow-[0_0_15px_rgba(0,194,255,0.1)]">
                  <MapPin className="w-6 h-6 text-[#00C2FF]" />
                </div>
                <div>
                  <p className="text-sm text-[#A1A1AA] font-mono mb-1">Localização</p>
                  <p className="font-medium text-lg">Atendimento Global (Remoto)</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Actions (WhatsApp & Newsletter) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* WhatsApp Card */}
            <div className="relative p-1 rounded-[2.5rem] overflow-hidden group shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_30px_rgba(0,255,136,0.1)] transition-shadow duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00FF88]/40 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-[#0A0A0A] rounded-[2.4rem] p-8 md:p-10 border border-white/10 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#00FF88]/10 blur-[80px] rounded-full pointer-events-none" />
                
                <div className="relative z-10 space-y-6">
                  <div className="w-16 h-16 rounded-2xl bg-[#25D366]/20 flex items-center justify-center border border-[#25D366]/30 mb-6 shadow-[0_0_20px_rgba(37,211,102,0.2)]">
                    <MessageCircle className="w-8 h-8 text-[#25D366]" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Inicie seu Projeto Agora</h3>
                  <p className="text-[#A1A1AA] font-light leading-relaxed">
                    A forma mais rápida de falar comigo. Me mande um <span className="text-white font-medium">WhatsApp</span> e vamos discutir como podemos escalar o seu negócio.
                  </p>
                  <a
                    href="https://wa.me/5511999999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full gap-3 px-8 py-4 rounded-xl bg-[#25D366] text-[#0A0A0A] font-bold text-lg hover:bg-[#25D366]/90 hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:scale-[1.02] transition-all duration-300"
                  >
                    <MessageCircle className="w-6 h-6" />
                    Chamar no WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Newsletter Card */}
            <div className="relative p-1 rounded-[2.5rem] overflow-hidden group shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_30px_rgba(0,194,255,0.1)] transition-shadow duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-[#00C2FF]/30 to-transparent opacity-30 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="relative bg-[#0A0A0A] rounded-[2.4rem] p-8 md:p-10 border border-white/10 overflow-hidden">
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00C2FF]/10 blur-[80px] rounded-full pointer-events-none" />
                
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-14 h-14 rounded-2xl bg-[#00C2FF]/20 flex items-center justify-center border border-[#00C2FF]/30 shadow-[0_0_20px_rgba(0,194,255,0.2)]">
                      <Mail className="w-6 h-6 text-[#00C2FF]" />
                    </div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">Assine a Newsletter</h3>
                  </div>
                  <p className="text-[#A1A1AA] font-light leading-relaxed text-base">
                    Junte-se a outros líderes e receba insights semanais sobre <span className="text-white font-medium">UX/UI, conversão e tendências digitais</span> diretamente na sua caixa de entrada.
                  </p>
                  
                  <form className="space-y-4 pt-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-1.5">
                      <label htmlFor="news-name" className="text-xs font-mono text-white/50 uppercase tracking-wider">Seu Nome</label>
                      <input
                        type="text"
                        id="news-name"
                        className="w-full bg-[#12121A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#00C2FF]/50 transition-all"
                        placeholder="Como quer ser chamado?"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="news-email" className="text-xs font-mono text-white/50 uppercase tracking-wider">Seu Melhor E-mail</label>
                      <input
                        type="email"
                        id="news-email"
                        className="w-full bg-[#12121A] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-[#00C2FF]/50 transition-all"
                        placeholder="exemplo@email.com"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-white text-[#0A0A0A] font-bold text-lg hover:bg-gray-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] mt-4"
                    >
                      Quero fazer parte
                      <Send className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
}
