import { Linkedin, Instagram, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left: Brand */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00FF88] to-[#00C2FF] flex items-center justify-center text-[#0B0B0F] text-[10px] font-bold shadow-[0_0_15px_rgba(0,255,136,0.2)]">
              JV
            </div>
            <span className="text-white font-bold tracking-tight text-xl">João Vitor</span>
          </div>
          <p className="text-white/40 text-sm max-w-xs text-center md:text-left font-light">
            Criando experiências digitais de alto nível para marcas visionárias.
          </p>
        </div>
        
        {/* Right: Social & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex items-center gap-8">
            {[
              { icon: <Linkedin size={18} />, href: "#" },
              { icon: <Instagram size={18} />, href: "#" },
              { icon: <Github size={18} />, href: "#" },
              { icon: <Mail size={18} />, href: "mailto:contato@joaovitor.design" }
            ].map((social, i) => (
              <a 
                key={i}
                href={social.href}
                className="text-white/40 hover:text-[#00FF88] transition-all duration-300 transform hover:scale-110"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <span className="text-white/20 text-[10px] uppercase tracking-[0.3em] font-mono">
            © {new Date().getFullYear()} João Vitor. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
