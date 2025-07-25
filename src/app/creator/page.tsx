"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Users,
  TrendingUp,
  Target,
  Zap,
  Award,
  Video,
  DollarSign,
} from "lucide-react";
import TopNav from "../../components/TopNav";
import Footer from "../../components/Footer";

function Button({ 
  children, 
  variant = "primary", 
  size = "md", 
  ...props 
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { 
  variant?: "primary" | "outline"; 
  size?: "sm" | "md" | "lg"; 
}) {
  const base = "rounded-2xl font-semibold transition-all duration-200 focus:outline-none shadow-md hover:scale-[1.03] active:scale-95";
  const sizes: Record<string, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  const variants: Record<string, string> = {
    primary: "bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 text-black hover:from-yellow-300 hover:to-yellow-500",
    outline: "border-2 border-yellow-400 text-yellow-400 bg-transparent hover:bg-yellow-400 hover:text-black",
  };
  return (
    <button className={`${base} ${sizes[size]} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}

export default function CreatorPage() {
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const Section = ({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) => (
    <section id={id} className={`w-full py-24 px-6 md:px-0 ${className}`}>{children}</section>
  );

  /* ------------ content data (foco em criadores) ---------- */
  const creatorPains = [
    { 
      icon: DollarSign, 
      pain: "Monetização limitada a publiposts", 
      impact: "Renda instável, dependência de marcas" 
    },
    { 
      icon: Users, 
      pain: "Audience não converte em vendas", 
      impact: "Engajamento alto, mas receita baixa" 
    },
    { 
      icon: Target, 
      pain: "Nichos saturados, competição feroz", 
      impact: "Dificuldade para se destacar e crescer" 
    },
  ];

  const niches = [
    {
      name: "Tech & Dev",
      description: "SaaS, ferramentas, APIs, infraestrutura",
      demand: "Alta demanda, ticket médio alto",
      examples: "React, Python, DevOps, Cloud"
    },
    {
      name: "Data & Analytics",
      description: "BI, analytics, machine learning, automação",
      demand: "Mercado em crescimento exponencial",
      examples: "SQL, Python, Power BI, Tableau"
    },
    {
      name: "Compliance & Fiscal",
      description: "Regulamentações, impostos, auditoria",
      demand: "Obrigatório, renovação garantida",
      examples: "LGPD, eSocial, SPED, auditoria"
    },
    {
      name: "Logística & Supply Chain",
      description: "Frete, estoque, rastreamento, otimização",
      demand: "Setor em transformação digital",
      examples: "WMS, TMS, rastreamento, last-mile"
    },
  ];

  const benefits = [
    {
      icon: DollarSign,
      title: "Revenue Share Real",
      description: "15-25% sobre receita gerada. Só lucramos quando você lucra.",
      highlight: "Sem fee fixo, sem risco"
    },
    {
      icon: Users,
      title: "Audience Qualificada",
      description: "Acesso a decisores B2B que já confiam no seu nicho.",
      highlight: "Leads prontos para converter"
    },
    {
      icon: Zap,
      title: "Infraestrutura Completa",
      description: "Squad de growth, CRM, analytics — você foca no conteúdo.",
      highlight: "Tudo pronto para escalar"
    },
    {
      icon: Award,
      title: "Autoridade Amplificada",
      description: "Transforme sua expertise em autoridade de mercado.",
      highlight: "Posicionamento premium"
    },
  ];

  const requirements = [
    {
      icon: Users,
      title: "Engajamento ≥ 5%",
      description: "Audience ativa e engajada com seu conteúdo"
    },
    {
      icon: Video,
      title: "Comfort on-camera",
      description: "Disposição para vídeos, lives e webinars"
    },
    {
      icon: Target,
      title: "Nichos estratégicos",
      description: "Foco em tech, data, compliance ou logística"
    },
    {
      icon: TrendingUp,
      title: "Crescimento consistente",
      description: "Histórico de crescimento orgânico"
    },
  ];

  const process = [
    {
      step: "01. Aplicação",
      action: "Preencha o formulário com seu perfil",
      duration: "5 min"
    },
    {
      step: "02. Avaliação",
      action: "Análise de fit estratégico e potencial",
      duration: "48h"
    },
    {
      step: "03. Entrevista",
      action: "Call para alinhar expectativas e oportunidades",
      duration: "30 min"
    },
    {
      step: "04. Onboarding",
      action: "Treinamento e conexão com startups",
      duration: "1 semana"
    },
  ];

  const faqs = [
    {
      q: "Preciso ter muitos seguidores?",
      a: "Foco na qualidade, não quantidade. Engajamento ≥5% e nicho estratégico são mais importantes que números absolutos."
    },
    {
      q: "Como funciona o revenue share?",
      a: "15-25% sobre receita gerada através do seu conteúdo. Sem fee fixo, sem risco. Só ganhamos quando você ganha."
    },
    {
      q: "Posso manter meus outros projetos?",
      a: "Sim! Incentivamos diversificação. Apenas pedimos exclusividade para o nicho específico que trabalhamos juntos."
    },
    {
      q: "Que tipo de conteúdo preciso criar?",
      a: "Vídeos educacionais, webinars, lives, posts técnicos. Foco em resolver problemas reais do seu nicho."
    },
  ];

  /* ------------ state ------------- */
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [lead, setLead] = useState({ 
    name: "", 
    email: "", 
    niche: "", 
    followers: "", 
    engagement: "", 
    platforms: "",
    experience: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleLeadChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setLead({ ...lead, [e.target.name]: e.target.value });
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!lead.name || !lead.email || !lead.niche || !lead.followers) {
      setError("Preencha todos os campos obrigatórios.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen text-white bg-gradient-hero selection:bg-yellow-300/60">
      <motion.div style={{ width: progressWidth }} className="fixed top-0 left-0 h-1 bg-yellow-400 z-50" />

      {/* NAV */}
      <TopNav navItems={[
        { id: "hero", label: "Início", onClick: () => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }) },
        { id: "pains", label: "Dores", onClick: () => document.getElementById('pains')?.scrollIntoView({ behavior: 'smooth' }) },
        { id: "niches", label: "Nichos", onClick: () => document.getElementById('niches')?.scrollIntoView({ behavior: 'smooth' }) },
        { id: "benefits", label: "Benefícios", onClick: () => document.getElementById('benefits')?.scrollIntoView({ behavior: 'smooth' }) },
        { id: "stories", label: "Histórias", onClick: () => document.getElementById('stories')?.scrollIntoView({ behavior: 'smooth' }) },
        { id: "requirements", label: "Requisitos", onClick: () => document.getElementById('requirements')?.scrollIntoView({ behavior: 'smooth' }) },
        { id: "process", label: "Processo", onClick: () => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' }) },
        { id: "faq", label: "FAQ", onClick: () => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' }) },
        { id: "cta", label: "Aplicar", onClick: () => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' }) },
      ]} />

      {/* HERO - Problem-Promise */}
      <Section id="hero" className="pt-4 pb-12">
        <div className="max-w-4xl mx-auto text-center pt-32">
          <div className="bg-zinc-900/80 px-4 py-2 rounded-xl text-xs font-semibold text-yellow-400 border border-yellow-400 animate-pulse-glow shadow-lg inline-block mb-6">
            Para Criadores de Nicho
          </div>
          <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-5xl md:text-7xl font-extrabold mb-2">
            Transforme sua <span className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 bg-clip-text text-transparent">expertise</span> em receita recorrente.
          </motion.h1>
          <p className="text-lg md:text-xl text-zinc-300 mb-2 max-w-2xl mx-auto">
            Seja um Enginer certificado. Revenue share real com startups B2B que precisam da sua autoridade para quebrar objeções de compra.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" onClick={() => document.getElementById('cta')?.scrollIntoView({behavior:'smooth'})}>
              Quero ser um Enginer <ArrowRight size={18} className="ml-1 -mr-1"/>
            </Button>
          </div>
        </div>
      </Section>

      {/* PAINS - Dores dos criadores */}
      <Section id="pains">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">Por que criadores estão mudando</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mb-8">
          {creatorPains.map((p,i)=> (
            <div key={i} className="p-6 rounded-2xl bg-zinc-800 border border-zinc-700 hover:border-yellow-400/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-zinc-700">
                  <p.icon size={20} className="text-yellow-400"/>
                </div>
                <h3 className="text-lg font-semibold text-yellow-400">{p.pain}</h3>
              </div>
              <p className="text-sm text-zinc-300">{p.impact}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-lg font-semibold text-yellow-400">
              Não é falta de talento, é falta de modelo de negócio escalável.
            </p>
          </div>
        </div>
      </Section>

      {/* NICHES - Nichos estratégicos */}
      <Section id="niches">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">Nichos com maior potencial</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {niches.map((n,i)=> (
            <div key={i} className="p-6 rounded-2xl bg-zinc-800 border border-zinc-700 hover:border-yellow-400/50 transition-all">
              <h3 className="text-lg font-semibold text-yellow-400 mb-2">{n.name}</h3>
              <p className="text-sm text-zinc-300 mb-3">{n.description}</p>
              <div className="space-y-2 text-xs">
                <div className="flex items-center gap-2">
                  <TrendingUp size={12} className="text-green-400"/>
                  <span className="text-zinc-300">{n.demand}</span>
                </div>
                <div className="text-zinc-400">
                  <span className="font-medium">Exemplos:</span> {n.examples}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* BENEFITS - Benefícios do programa */}
      <Section id="benefits">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">O que você ganha como Enginer</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {benefits.map((b,i)=> (
            <div key={i} className="p-6 rounded-2xl bg-zinc-800 border border-zinc-700 hover:border-yellow-400/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-zinc-700">
                  <b.icon size={20} className="text-yellow-400"/>
                </div>
                <h3 className="text-lg font-semibold text-yellow-400">{b.title}</h3>
              </div>
              <p className="text-sm text-zinc-300 mb-3">{b.description}</p>
              <div className="bg-yellow-400/10 px-3 py-1 rounded-lg inline-block">
                <span className="text-xs font-semibold text-yellow-400">{b.highlight}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CASES - Startups em processo de recrutamento */}
      <Section id="cases">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">Startups em processo de recrutamento</h2>
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-6">
          {/* Frete Fácil */}
          <a href="https://www.fretefacil.co" target="_blank" rel="noopener noreferrer" className="p-6 rounded-2xl bg-zinc-800 border border-zinc-700 hover:border-yellow-400/70 transition-all flex flex-col gap-3 items-start cursor-pointer">
            <img src="/fretefacil-logo.svg" alt="Frete Fácil logo" className="h-8 mb-2" />
            <h3 className="text-xl font-bold mb-1 text-yellow-400">Frete Fácil</h3>
            <p className="text-xs uppercase tracking-wide text-zinc-400 mb-2">Eficiência logística como serviço</p>
            <p className="text-sm text-zinc-300 mb-2">O Frete Fácil é uma plataforma SaaS de intermediação de cargas e gestão de transportes, desenvolvida para modernizar e automatizar a logística de empresas brasileiras. Conectando embarcadores a motoristas e transportadoras em um ambiente digital, oferece um ecossistema completo: cadastro de cargas, pagamento, rastreamento, automação e inteligência operacional.</p>
            <ul className="text-xs text-zinc-400 mb-2 list-disc pl-4">
              <li><b>Proposta de valor:</b> Reduz fricções, centraliza operações e acelera processos críticos de transporte.</li>
              <li><b>Diferenciais:</b> IA para alocação, rastreamento em tempo real, split payment, otimização de rotas, modelo freemium.</li>
              <li><b>Público-alvo:</b> Embarcadores, transportadoras, motoristas autônomos.</li>
            </ul>
            <span className="text-xs text-yellow-400 mt-auto">Clique para conhecer</span>
          </a>
          {/* DocHub */}
          <a href="https://www.dochub.app.br" target="_blank" rel="noopener noreferrer" className="p-6 rounded-2xl bg-zinc-800 border border-zinc-700 hover:border-yellow-400/70 transition-all flex flex-col gap-3 items-start cursor-pointer">
            <img src="/dochub-logo.svg" alt="DocHub logo" className="h-8 mb-2" />
            <h3 className="text-xl font-bold mb-1 text-yellow-400">DocHub</h3>
            <p className="text-xs uppercase tracking-wide text-zinc-400 mb-2">Gestão Fiscal Inteligente</p>
            <p className="text-sm text-zinc-300 mb-2">O DocHub automatiza e organiza todo o fluxo de documentos fiscais da sua empresa (NF-e, NFS-e, CT-e), centralizando tudo em um só lugar — simples, seguro e integrado.</p>
            <ul className="text-xs text-zinc-400 mb-2 list-disc pl-4">
              <li><b>O que faz:</b> Coleta automática de notas, organização, relatórios em tempo real, alertas e conferências automáticas.</li>
              <li><b>Diferenciais:</b> Acompanhamento consultivo, implantação rápida, acesso compartilhado entre empresa, contador e financeiro.</li>
              <li><b>Público-alvo:</b> Empresas com alto volume fiscal, contabilidades, times financeiros.</li>
            </ul>
            <span className="text-xs text-yellow-400 mt-auto">Clique para conhecer</span>
          </a>
          {/* PhaVo */}
          <a href="https://www.phavo.co" target="_blank" rel="noopener noreferrer" className="p-6 rounded-2xl bg-zinc-800 border border-zinc-700 hover:border-yellow-400/70 transition-all flex flex-col gap-3 items-start cursor-pointer">
            <img src="/phavo-logo.svg" alt="PhaVo logo" className="h-8 mb-2" />
            <h3 className="text-xl font-bold mb-1 text-yellow-400">PhaVo</h3>
            <p className="text-xs uppercase tracking-wide text-zinc-400 mb-2">Comunidades e conteúdos whitelabel</p>
            <p className="text-sm text-zinc-300 mb-2">A PhaVo é uma plataforma inteligente para criadores, educadores e produtores digitais reunirem, engajarem e monetizarem suas audiências de forma profissional, moderna e automatizada.</p>
            <ul className="text-xs text-zinc-400 mb-2 list-disc pl-4">
              <li><b>Como funciona:</b> Área personalizada, cursos, eventos, integração WhatsApp, gamificação, vídeo ao vivo.</li>
              <li><b>Diferenciais:</b> Integra tudo em um só lugar, experiência gamificada, reduz custos e aumenta engajamento.</li>
              <li><b>Público-alvo:</b> Criadores, professores, comunidades pagas, infoprodutores.</li>
            </ul>
            <span className="text-xs text-yellow-400 mt-auto">Clique para conhecer</span>
          </a>
        </div>
      </Section>

      {/* REQUIREMENTS - Requisitos */}
      <Section id="requirements">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">Requisitos para se candidatar</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {requirements.map((r,i)=> (
            <div key={i} className="p-6 rounded-2xl bg-zinc-800 border border-zinc-700">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-zinc-700">
                  <r.icon size={20} className="text-yellow-400"/>
                </div>
                <h3 className="text-lg font-semibold text-yellow-400">{r.title}</h3>
              </div>
              <p className="text-sm text-zinc-300">{r.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PROCESS - Processo de seleção */}
      <Section id="process">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">Processo de seleção</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((p,i)=> (
            <div key={i} className="p-6 rounded-2xl bg-zinc-800 border border-zinc-700 hover:border-yellow-400/50 transition-all">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-yellow-400 text-black flex items-center justify-center text-sm font-bold">
                  {i+1}
                </div>
                <h3 className="text-lg font-semibold text-yellow-400">{p.step}</h3>
              </div>
              <p className="text-sm text-zinc-300 mb-2">{p.action}</p>
              <p className="text-xs text-zinc-400">{p.duration}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ - Perguntas frequentes */}
      <Section id="faq">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">Perguntas frequentes</h2>
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((f,i)=>(
            <div key={i} onClick={()=>setOpenFaq(openFaq===i?null:i)} className="p-4 bg-zinc-800 border border-zinc-700 rounded-xl cursor-pointer hover:border-yellow-400/50">
              <div className="flex justify-between items-center">
                <span className="font-medium">{f.q}</span>
                <ChevronDown size={18} className={`transition-transform ${openFaq===i?'rotate-180':''}`}/>
              </div>
              {openFaq===i && <p className="mt-2 text-sm text-zinc-400">{f.a}</p>}
            </div>
          ))}
        </div>
      </Section>

      {/* CTA - Candidatura */}
      <Section id="cta">
        <div className="text-center py-16 bg-zinc-900/80 border border-yellow-400 rounded-2xl mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold mb-4 text-yellow-400">Candidatura para Enginer</h2>
          <p className="mb-6 text-zinc-300">Preencha o formulário e vamos avaliar seu fit estratégico.</p>
          <div className="bg-zinc-800/60 px-4 py-2 rounded-xl text-sm font-semibold text-yellow-400 border border-yellow-400/30 inline-block mb-6">
            Seleção criteriosa • 5 vagas por trimestre
          </div>
          {submitted ? (
            <div className="text-center text-green-500 font-semibold py-8">
              Obrigado! Sua candidatura foi recebida.<br/>Entraremos em contato em 48h.
            </div>
          ) : (
            <form className="space-y-4 max-w-md mx-auto" onSubmit={handleLeadSubmit}>
              <div>
                <input name="name" value={lead.name} onChange={handleLeadChange} required placeholder="Nome completo" className="w-full px-4 py-3 rounded-xl bg-zinc-800 text-white border border-zinc-700 focus:border-yellow-400" />
              </div>
              <div>
                <input name="email" type="email" value={lead.email} onChange={handleLeadChange} required placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-zinc-800 text-white border border-zinc-700 focus:border-yellow-400" />
              </div>
              <div>
                <select name="niche" value={lead.niche} onChange={handleLeadChange} required className="w-full px-4 py-3 rounded-xl bg-zinc-800 text-white border border-zinc-700 focus:border-yellow-400">
                  <option value="">Seu nicho principal</option>
                  <option value="tech-dev">Tech & Dev</option>
                  <option value="data-analytics">Data & Analytics</option>
                  <option value="compliance-fiscal">Compliance & Fiscal</option>
                  <option value="logistica">Logística & Supply Chain</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              <div>
                <input name="followers" value={lead.followers} onChange={handleLeadChange} required placeholder="Total de seguidores (aproximado)" className="w-full px-4 py-3 rounded-xl bg-zinc-800 text-white border border-zinc-700 focus:border-yellow-400" />
              </div>
              <div>
                <input name="engagement" value={lead.engagement} onChange={handleLeadChange} placeholder="Taxa de engajamento (%)" className="w-full px-4 py-3 rounded-xl bg-zinc-800 text-white border border-zinc-700 focus:border-yellow-400" />
              </div>
              <div>
                <input name="platforms" value={lead.platforms} onChange={handleLeadChange} placeholder="Principais plataformas" className="w-full px-4 py-3 rounded-xl bg-zinc-800 text-white border border-zinc-700 focus:border-yellow-400" />
              </div>
              <div>
                <textarea name="experience" value={lead.experience} onChange={handleLeadChange} placeholder="Conte brevemente sobre sua experiência e por que quer ser um Enginer" className="w-full px-4 py-3 rounded-xl bg-zinc-800 text-white border border-zinc-700 focus:border-yellow-400 h-20 resize-none" />
              </div>
              {error && <div className="text-red-500 text-sm text-center">{error}</div>}
              <Button size="lg" type="submit" className="w-full">
                Enviar candidatura
              </Button>
            </form>
          )}
        </div>
      </Section>

      <Footer />
    </div>
  );
} 