"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import TopNav from "../../components/TopNav";
import Footer from "../../components/Footer";

export default function ApplyPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    
    const formData = new FormData(e.currentTarget);
    const data = {
      nome: formData.get("nome"),
      telefone: formData.get("telefone"),
      empresa: formData.get("empresa"),
      email: formData.get("email"),
      _subject: "Novo lead - Aplicação Reveniee",
      _captcha: "false" // Desabilita o captcha para melhor experiência do usuário
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/gabriel@antz.studio", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  const navItems = [
    { id: "voltar", label: "Voltar ao Início", href: "/" }
  ];

  const surface = "#111111";
  const border = "#1e1e1e";
  const gold = "#8b5cf6"; // Cor roxa da Reveniee
  const muted = "#6b7280";

  return (
    <div style={{ minHeight: "100vh", background: "#0a0a0a", color: "#e8e8e8", fontFamily: "'Geist', 'Inter', sans-serif" }}>
      <TopNav navItems={navItems} />

      <main className="pt-32 pb-20 px-6 max-w-xl mx-auto min-h-[calc(100vh-80px)] flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-10">
            <span style={{ 
              display: "inline-block", 
              padding: "6px 16px", 
              background: `${gold}15`, 
              border: `1px solid ${gold}30`, 
              borderRadius: "999px",
              color: gold, 
              fontSize: "12px", 
              letterSpacing: "0.1em", 
              textTransform: "uppercase", 
              fontWeight: 600,
              marginBottom: "24px"
            }}>
              Aplicação
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
              Vamos construir sua <span style={{ color: gold }}>máquina</span>.
            </h1>
            <p className="text-gray-400 text-lg">
              Preencha os dados abaixo para aplicarmos a infraestrutura Reveniee na sua operação comercial.
            </p>
          </div>

          <div
            style={{
              background: surface,
              border: `1px solid ${border}`,
              borderRadius: "24px",
              padding: "40px 32px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {status === "success" ? (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="text-center py-8"
              >
                <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/40 flex items-center justify-center text-green-500 text-3xl mx-auto mb-6">
                  ✓
                </div>
                <h3 className="text-2xl font-bold mb-4">Aplicação recebida!</h3>
                <p className="text-gray-400 mb-8">Nossa equipe vai analisar seus dados e entraremos em contato muito em breve.</p>
                <Link href="/" className="inline-block py-3 px-8 rounded-lg font-bold text-black uppercase tracking-wider transition-all" style={{ background: gold }}>
                  Voltar ao site
                </Link>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
                <div className="flex flex-col gap-2">
                  <label htmlFor="nome" className="text-sm font-semibold text-gray-300">Nome Completo</label>
                  <input 
                    type="text" 
                    id="nome" 
                    name="nome" 
                    required 
                    className="bg-[#0a0a0a] border border-[#2a2a2a] focus:border-purple-500 rounded-lg px-4 py-3 outline-none transition-colors text-white"
                    placeholder="Ex: João Silva"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="telefone" className="text-sm font-semibold text-gray-300">WhatsApp / Telefone</label>
                  <input 
                    type="tel" 
                    id="telefone" 
                    name="telefone" 
                    required 
                    className="bg-[#0a0a0a] border border-[#2a2a2a] focus:border-purple-500 rounded-lg px-4 py-3 outline-none transition-colors text-white"
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="empresa" className="text-sm font-semibold text-gray-300">Sua Empresa</label>
                  <input 
                    type="text" 
                    id="empresa" 
                    name="empresa" 
                    required 
                    className="bg-[#0a0a0a] border border-[#2a2a2a] focus:border-purple-500 rounded-lg px-4 py-3 outline-none transition-colors text-white"
                    placeholder="Ex: TechCorp"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-semibold text-gray-300">E-mail Corporativo</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="bg-[#0a0a0a] border border-[#2a2a2a] focus:border-purple-500 rounded-lg px-4 py-3 outline-none transition-colors text-white"
                    placeholder="joao@empresa.com.br"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-sm mt-2 text-center">Ocorreu um erro ao enviar. Tente novamente.</p>
                )}

                <button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="mt-4 py-4 rounded-lg font-bold text-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 hover:brightness-110 disabled:hover:brightness-100"
                  style={{ background: status === "loading" ? "#a78bfa" : gold, opacity: status === "loading" ? 0.7 : 1 }}
                >
                  {status === "loading" ? "Enviando..." : "Enviar Aplicação →"}
                </button>
              </form>
            )}

            {/* Subtle glow decoration */}
            <div
              style={{
                position: "absolute",
                top: "-20%",
                right: "-20%",
                width: "300px",
                height: "300px",
                background: `radial-gradient(circle, ${gold}15 0%, transparent 70%)`,
                pointerEvents: "none",
                zIndex: 0
              }}
            />
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
