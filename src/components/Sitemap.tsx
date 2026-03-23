import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Compass, ExternalLink, Home, User, Briefcase, FolderGit2, ShieldCheck, Mail, GitPullRequest } from "lucide-react";
import SEO from "./SEO";

export default function Sitemap() {
  const routes = [
    { path: "/home", name: "Home", icon: <Home className="w-5 h-5" /> },
    { path: "/sobre", name: "Sobre", icon: <User className="w-5 h-5" /> },
    { path: "/servicos", name: "Serviços", icon: <Briefcase className="w-5 h-5" /> },
    { path: "/projetos", name: "Projetos", icon: <FolderGit2 className="w-5 h-5" /> },
    { path: "/processo", name: "Processo", icon: <GitPullRequest className="w-5 h-5" /> },
    { path: "/diferenciais", name: "Diferenciais", icon: <ShieldCheck className="w-5 h-5" /> },
    { path: "/contato", name: "Contato", icon: <Mail className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white/80 flex flex-col items-center justify-center p-8 font-sans">
      <SEO 
        title="Mapa do Site | João Vitor - UX/UI Designer" 
        description="Ambiente de preview e mapa do site."
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-2xl bg-[#12121A] border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl backdrop-blur-xl"
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-[#00FF88]/10 flex items-center justify-center border border-[#00FF88]/20">
            <Compass className="w-6 h-6 text-[#00FF88]" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-white tracking-tight">Ambiente de Preview</h1>
            <p className="text-sm text-white/60 mt-1">Navegação via HashRouter</p>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-white/70 leading-relaxed mb-8">
            Você está em um ambiente de desenvolvimento em nuvem. O roteamento híbrido detectou o proxy e ativou o <strong>HashRouter</strong> para garantir a navegação sem erros 404.
          </p>

          <div className="grid gap-4">
            {routes.map((route) => (
              <Link
                key={route.path}
                to={route.path}
                className="group flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#00FF88]/20 transition-colors text-white/70 group-hover:text-[#00FF88]">
                    {route.icon}
                  </div>
                  <div>
                    <h3 className="font-medium text-white">{route.name}</h3>
                    <p className="text-xs text-white/60">{route.path}</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-white/60 group-hover:text-[#00FF88] transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
