import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

const links = [
  { name: "Home", path: "/" },
  { name: "Sobre", path: "/sobre" },
  { name: "Método", path: "/metodo" },
  { name: "Projetos", path: "/projetos" },
  { name: "Contato", path: "/contato" },
];

const menuVars = {
  initial: { opacity: 0, filter: "blur(10px)" },
  animate: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.3, ease: "easeOut" } },
  exit: { opacity: 0, filter: "blur(10px)", transition: { duration: 0.2, ease: "easeIn" } },
};

const containerVars = {
  initial: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  open: { transition: { delayChildren: 0.1, staggerChildren: 0.05, staggerDirection: 1 } },
};

const linkVars = {
  initial: { opacity: 0, y: 10 },
  open: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 pointer-events-none ${
          scrolled ? "py-4" : "py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo Fixada */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group pointer-events-auto"
          >
            <div className="w-10 h-10 rounded-full bg-[#00FF88] flex items-center justify-center text-[#0A0A0A] text-xs font-bold shadow-[0_0_20px_rgba(0,255,136,0.3)] group-hover:scale-110 transition-transform">
              JV
            </div>
            <span className="text-white font-display font-bold tracking-tight text-xl drop-shadow-md">João Vitor</span>
          </Link>

          {/* Botão Hambúrguer Flutuante */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="pointer-events-auto w-12 h-12 rounded-full flex flex-col items-center justify-center gap-1.5 bg-[#0A0A0A]/80 backdrop-blur-md border border-white/10 hover:border-[#00FF88]/50 transition-all duration-300 group shadow-[0_4px_20px_rgba(0,0,0,0.5)]"
            aria-label="Toggle Menu"
          >
            <span className={`block h-[1px] bg-white transition-all duration-300 ${menuOpen ? 'w-6 rotate-45 translate-y-[4px] bg-[#00FF88]' : 'w-6'}`} />
            <span className={`block h-[1px] bg-white transition-all duration-300 ${menuOpen ? 'opacity-0 w-6' : 'w-4'}`} />
            <span className={`block h-[1px] bg-white transition-all duration-300 ${menuOpen ? 'w-6 -rotate-45 -translate-y-[4px] bg-[#00FF88]' : 'w-5'}`} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-2xl flex flex-col items-center justify-center pointer-events-auto"
          >
            <motion.nav 
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex flex-col items-center gap-6 text-center px-6"
            >
              {links.map((link) => (
                <div key={link.path} className="overflow-hidden">
                  <motion.div variants={linkVars}>
                    <Link
                      to={link.path}
                      className={`text-3xl md:text-5xl font-display font-bold tracking-tighter uppercase transition-all hover:text-[#00FF88] block ${
                        location.pathname === link.path ? "text-[#00FF88]" : "text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
