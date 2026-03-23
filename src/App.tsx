/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Suspense, lazy } from "react";
import { BrowserRouter, HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Sitemap from "./components/Sitemap";
import Layout from "./components/Layout";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const Sobre = lazy(() => import("./pages/Sobre"));
const Projetos = lazy(() => import("./pages/Projetos"));
const ProjetoDetalhe = lazy(() => import("./pages/ProjetoDetalhe"));
const Contato = lazy(() => import("./pages/Contato"));
const Metodo = lazy(() => import("./pages/Metodo"));

/**
 * Função utilitária para detectar ambientes de preview (proxies de nuvem).
 * Retorna true se o hostname ou href contiver strings indicadoras de proxy.
 */
function checkPreviewEnvironment(): boolean {
  if (typeof window === "undefined") return false;
  
  const href = window.location.href.toLowerCase();
  const hostname = window.location.hostname.toLowerCase();
  
  const proxyIndicators = [
    'googleusercontent',
    'webcontainer',
    'shim',
    '.goog',
    'scf.usercontent',
    'stackblitz',
    'codesandbox'
  ];

  return proxyIndicators.some(indicator => 
    hostname.includes(indicator) || href.includes(indicator)
  );
}

export default function App() {
  const isPreview = checkPreviewEnvironment();
  
  // Seleção dinâmica do Router
  const Router = isPreview ? HashRouter : BrowserRouter;

  return (
    <Router>
      <Routes>
        {/* Redirecionamento Inteligente da Raiz */}
        <Route 
          path="/" 
          element={<Navigate to={isPreview ? "/sitemap" : "/home"} replace />} 
        />
        
        {/* Rotas da Aplicação */}
        <Route path="/sitemap" element={<Sitemap />} />
        
        <Route element={<Layout />}>
          <Route path="/home" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-2 border-[#00FF88] border-t-transparent rounded-full animate-spin"></div></div>}>
              <Home />
            </Suspense>
          } />
          <Route path="/sobre" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-2 border-[#00FF88] border-t-transparent rounded-full animate-spin"></div></div>}>
              <Sobre />
            </Suspense>
          } />
          <Route path="/metodo" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-2 border-[#00FF88] border-t-transparent rounded-full animate-spin"></div></div>}>
              <Metodo />
            </Suspense>
          } />
          <Route path="/projetos" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-2 border-[#00FF88] border-t-transparent rounded-full animate-spin"></div></div>}>
              <Projetos />
            </Suspense>
          } />
          <Route path="/projetos/:slug" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-2 border-[#00FF88] border-t-transparent rounded-full animate-spin"></div></div>}>
              <ProjetoDetalhe />
            </Suspense>
          } />
          <Route path="/contato" element={
            <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-2 border-[#00FF88] border-t-transparent rounded-full animate-spin"></div></div>}>
              <Contato />
            </Suspense>
          } />
        </Route>
        
        {/* Fallback para rotas não encontradas */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
