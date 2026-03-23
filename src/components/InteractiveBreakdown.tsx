import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Eye, FileText, X } from "lucide-react";

export default function InteractiveBreakdown() {
  const [activeView, setActiveView] = useState<"none" | "design" | "copy">("none");

  return (
    <section className="py-24 border-t border-white/5 bg-gradient-to-b from-transparent to-[#00FF88]/5 relative">
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-white">
          O que você quer analisar?
        </h2>
        <p className="text-white/60 mb-12 max-w-2xl mx-auto">
          Este portfólio foi construído com dois pilares: Design Visual de alto nível e Copywriting estratégico. Escolha o que deseja explorar.
        </p>

        <div className="flex flex-col items-center justify-center gap-6">
          <button
            onClick={() => setActiveView("design")}
            className="group relative px-8 py-4 rounded-2xl cyber-card w-full max-w-xs overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00FF88]/10 to-[#00C2FF]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-center justify-center gap-3">
              <Eye className="w-5 h-5 text-[#00FF88]" />
              <span className="font-mono text-white">Ver Design</span>
            </div>
          </button>

          <button
            onClick={() => setActiveView("copy")}
            className="group relative px-8 py-4 rounded-2xl cyber-card w-full max-w-xs overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00C2FF]/10 to-[#00FF88]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex items-center justify-center gap-3">
              <FileText className="w-5 h-5 text-[#00C2FF]" />
              <span className="font-mono text-white">Ver Copy</span>
            </div>
          </button>
        </div>

        <AnimatePresence mode="wait">
          {activeView !== "none" && (
            <motion.div
              key={activeView}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-12 text-left"
            >
              <div className="cyber-card rounded-3xl p-8 relative overflow-hidden">
                <button 
                  onClick={() => setActiveView("none")}
                  className="absolute top-6 right-6 p-2 rounded-full hover:bg-white/10 transition-colors"
                >
                  <X className="w-5 h-5 text-white/60" />
                </button>

                {activeView === "design" ? (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-[#00FF88] flex items-center gap-3">
                      <Eye className="w-6 h-6" /> Breakdown Visual
                    </h3>
                    <ul className="space-y-4 text-white/70">
                      <li className="flex gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00FF88] mt-2 shrink-0" />
                        <p><strong>Cyber-Cards:</strong> Uso estratégico de bordas com gradiente e glows neon para criar profundidade e um aspecto tecnológico.</p>
                      </li>
                      <li className="flex gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00FF88] mt-2 shrink-0" />
                        <p><strong>Tipografia Hierárquica:</strong> Fonte Inter para leitura fluida e JetBrains Mono para detalhes técnicos, guiando o olhar.</p>
                      </li>
                      <li className="flex gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00FF88] mt-2 shrink-0" />
                        <p><strong>Microinterações:</strong> Botões e cards respondem ao hover com glows sutis e bordas iluminadas, aumentando a sensação de produto premium.</p>
                      </li>
                      <li className="flex gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00FF88] mt-2 shrink-0" />
                        <p><strong>Tons Escuros e Neon:</strong> Fundo `#0B0B0F` com detalhes em verde neon e ciano transmite autoridade, inovação e sofisticação digital.</p>
                      </li>
                    </ul>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <h3 className="text-2xl font-semibold text-[#00C2FF] flex items-center gap-3">
                      <FileText className="w-6 h-6" /> Estratégia de Copy
                    </h3>
                    <ul className="space-y-4 text-white/70">
                      <li className="flex gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00C2FF] mt-2 shrink-0" />
                        <p><strong>Foco em Resultado:</strong> A copy não fala sobre "fazer telas bonitas", mas sim sobre "transformar ideias em produtos lucrativos".</p>
                      </li>
                      <li className="flex gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00C2FF] mt-2 shrink-0" />
                        <p><strong>Autoridade Imediata:</strong> O tom é confiante e direto. "Eu não crio apenas design. Eu construo experiências que convertem."</p>
                      </li>
                      <li className="flex gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00C2FF] mt-2 shrink-0" />
                        <p><strong>CTAs Claros:</strong> Chamadas para ação orientadas a conversão, como "Falar comigo" em vez de um genérico "Contato".</p>
                      </li>
                      <li className="flex gap-4">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00C2FF] mt-2 shrink-0" />
                        <p><strong>Estrutura Problema-Solução:</strong> A página de serviços foca na dor do cliente antes de apresentar a solução técnica.</p>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
