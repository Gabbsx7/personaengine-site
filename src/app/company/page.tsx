"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  CheckCircle,
  ShieldCheck,
  Users,
  TrendingUp,
  Target,
  Settings,
  BarChart3,
  DollarSign,
} from "lucide-react";
import CompanyLeadForm from "../../components/CompanyLeadForm";
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

export default function CompanyPage() {
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const Section = ({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) => (
    <section id={id} className={`w-full py-24 px-6 md:px-0 ${className}`}>{children}</section>
  );

  /* ------------ content data (seguindo o playbook) ---------- */
  const symptoms = [
    { 
      icon: Settings, 
      symptom: "Founder fazendo demos que não viram contratos", 
      cost: "Burn de tempo C-level + atraso de roadmap" 
    },
    { 
      icon: TrendingUp, 
      symptom: "Leads de inbound estagnados", 
      cost: "CAC sobe 42% quando você liga Ads no escuro" 
    },
    { 
      icon: Target, 
      symptom: "Produto técnico sem 'voz' convincente", 
      cost: "Vendas travam em status-quo bias" 
    },
  ];

  const phases = [
    {
      phase: "01. Diagnose",
      deliverable: "Workshop de ICP + call com 5 clientes-alvo",
      duration: "1 semana",
      cta: "Ver template de roteiro"
    },
    {
      phase: "02. Voice-Market Fit",
      deliverable: "Roteiro + piloto de 3 conteúdos",
      duration: "2 semanas",
      cta: "Ver dashboard demo"
    },
    {
      phase: "03. Growth Loop",
      deliverable: "Always-on Ads + Social Selling + e-mail sequências",
      duration: "8 semanas",
      cta: "Ver métricas reais"
    },
    {
      phase: "04. Handoff / Scale",
      deliverable: "Playbook + treinamento interno ou retainer",
      duration: "Contínuo",
      cta: "Ver playbook exemplo"
    },
  ];

  const services = [
    { receive: "Creator especialista de nicho", avoid: "2-3 contratações sênior fora do core" },
    { receive: "Calendário + produção de conteúdo", avoid: "Flutuação de freelancers" },
    { receive: "Ads & Social Ops gerenciados", avoid: "Gaps de atribuição" },
    { receive: "CRM & dashboards", avoid: "Planilhas manuais" },
    { receive: "Playbook handoff", avoid: "Dependência eterna da agência" },
  ];

  const faqs = [
    {
      q: "Qual o investimento inicial?",
      a: "Projetos iniciam em R$ 10k + % sobre MRR incremental. Fee base garante nossa infraestrutura completa (squad, CRM, analytics). Stop-loss: se não entregar SQL em 60 dias, você pode pausar sem multa."
    },
    {
      q: "Quanto tempo até o 1º SQL?",
      a: "Visamos 4-6 semanas para primeiro SQL qualificado."
    },
    {
      q: "Posso usar meu fundador como rosto?",
      a: "Sim, treinamos ou co-criamos. Se não tiver fit, plugamos um Enginer do nosso pool."
    },
    {
      q: "Trabalham B2C?",
      a: "Foco 100% B2B; exceção se ticket médio ≥ R$300."
    },
  ];

  /* ------------ state ------------- */
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen text-white bg-gradient-hero selection:bg-yellow-300/60">
      <motion.div style={{ width: progressWidth }} className="fixed top-0 left-0 h-1 bg-yellow-400 z-50" />

      {/* NAV */}
      <TopNav navItems={[
        { id: "hero", label: "Início", onClick: () => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' }) },
        { id: "symptoms", label: "Sintomas", onClick: () => document.getElementById('symptoms')?.scrollIntoView({ behavior: 'smooth' }) },
        { id: "system", label: "Sistema", onClick: () => document.getElementById('system')?.scrollIntoView({ behavior: 'smooth' }) },
        { id: "process", label: "Processo", onClick: () => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' }) },
        { id: "cases", label: "Cases", onClick: () => document.getElementById('cases')?.scrollIntoView({ behavior: 'smooth' }) },
        { id: "services", label: "Serviços", onClick: () => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }) },
        { id: "roi", label: "ROI", onClick: () => document.getElementById('roi')?.scrollIntoView({ behavior: 'smooth' }) },
        { id: "faq", label: "FAQ", onClick: () => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' }) },
        { id: "cta", label: "Aplicar", onClick: () => document.getElementById('cta')?.scrollIntoView({ behavior: 'smooth' }) },
      ]} />

      {/* HERO - Problem-Promise */}
      <Section id="hero" className="pt-4 pb-12">
        <div className="max-w-4xl mx-auto text-center pt-32">
          <div className="bg-zinc-900/80 px-4 py-2 rounded-xl text-xs font-semibold text-yellow-400 border border-yellow-400 animate-pulse-glow shadow-lg inline-block mb-6">
            Para Startups & Scale-ups B2B
          </div>
          <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} className="text-5xl md:text-7xl font-extrabold mb-2">
            Sua startup precisa de um <span className="bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 bg-clip-text text-transparent">rosto que o mercado respeite</span>.
          </motion.h1>
          <p className="text-lg md:text-xl text-zinc-300 mb-2 max-w-2xl mx-auto">
            Criamos a presença e autoridade que abrem portas e quebram objeções — com creators especialistas e squad GTM completo.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" onClick={() => document.getElementById('cta')?.scrollIntoView({behavior:'smooth'})}>
              Quero minha presença de autoridade <ArrowRight size={18} className="ml-1 -mr-1"/>
            </Button>
          </div>
        </div>
      </Section>

      {/* SYMPTOMS - Sintoma → Custo escondido */}
      <Section id="symptoms">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">O que acontece se você não agir</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mb-8">
          {symptoms.map((s,i)=> (
            <div key={i} className="p-6 rounded-2xl bg-zinc-800 border border-zinc-700 hover:border-yellow-400/50 transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-zinc-700">
                  <s.icon size={20} className="text-yellow-400"/>
                </div>
                <h3 className="text-lg font-semibold text-yellow-400">{s.symptom}</h3>
              </div>
              <p className="text-sm text-zinc-300">{s.cost}</p>
            </div>
          ))}
        </div>
        <div className="text-center">
          <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-lg font-semibold text-yellow-400">
              Não é falta de produto, é falta de história que o mercado confie.
            </p>
          </div>
        </div>
      </Section>

      {/* SYSTEM - O que é o Persona Engine? */}
      <Section id="system">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">O que é o Persona Engine?</h2>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-lg text-zinc-300 mb-8">
            Sistema GTM composto por Creator Partner (especialista no seu nicho), equipe growth full-stack (conteúdo, paid, ops) e framework de receita (AARRR + dash em tempo real).
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="p-4 rounded-xl bg-zinc-800 border border-zinc-700">
              <Users size={24} className="text-yellow-400 mx-auto mb-2"/>
              <p className="text-sm font-medium">Creator Partner</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-800 border border-zinc-700">
              <BarChart3 size={24} className="text-yellow-400 mx-auto mb-2"/>
              <p className="text-sm font-medium">Growth Full-stack</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-800 border border-zinc-700">
              <TrendingUp size={24} className="text-yellow-400 mx-auto mb-2"/>
              <p className="text-sm font-medium">Pipeline</p>
            </div>
            <div className="p-4 rounded-xl bg-zinc-800 border border-zinc-700">
              <DollarSign size={24} className="text-yellow-400 mx-auto mb-2"/>
              <p className="text-sm font-medium">MRR</p>
            </div>
          </div>
        </div>
      </Section>

      {/* PROCESS - Processo em 4 fases */}
      <Section id="process">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">Processo em 4 fases</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((p,i)=> (
            <div key={i} className="p-6 rounded-2xl bg-zinc-800 border border-zinc-700 hover:border-yellow-400/50 transition-all">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-full bg-yellow-400 text-black flex items-center justify-center text-sm font-bold">
                  {i+1}
                </div>
                <h3 className="text-lg font-semibold text-yellow-400">{p.phase}</h3>
              </div>
              <p className="text-sm text-zinc-300 mb-2">{p.deliverable}</p>
              <p className="text-xs text-zinc-400 mb-4">{p.duration}</p>
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

      {/* SERVICES - Pacote de serviços */}
      <Section id="services">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">Você recebe / Você evita</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s,i)=> (
              <div key={i} className="p-6 rounded-2xl bg-zinc-800 border border-zinc-700">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-green-400 mb-2">✓ Você recebe</h3>
                  <p className="text-sm text-zinc-300">{s.receive}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-red-400 mb-2">✗ Você evita</h3>
                  <p className="text-sm text-zinc-300">{s.avoid}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ROI - ROI & Risk-Reversal */}
      <Section id="roi">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">ROI & Risk-Reversal</h2>
        <div className="max-w-4xl mx-auto">
          <div className="bg-zinc-800/60 border border-zinc-700 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <DollarSign size={32} className="text-yellow-400 mx-auto mb-3"/>
                <h3 className="text-lg font-semibold mb-2">Investimento inicial</h3>
                <p className="text-sm text-zinc-300">R$ 10k + % sobre MRR incremental</p>
              </div>
              <div className="text-center">
                <ShieldCheck size={32} className="text-yellow-400 mx-auto mb-3"/>
                <h3 className="text-lg font-semibold mb-2">Cláusula Stop-loss</h3>
                <p className="text-sm text-zinc-300">Se não entregar SQL em 60 dias, você pode pausar sem multa</p>
              </div>
              <div className="text-center">
                <CheckCircle size={32} className="text-yellow-400 mx-auto mb-3"/>
                <h3 className="text-lg font-semibold mb-2">Custos aprovados</h3>
                <p className="text-sm text-zinc-300">Todos os custos de Ads aprovados previamente</p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <div className="bg-yellow-400/10 border border-yellow-400/30 rounded-xl p-4">
                <p className="text-sm text-yellow-400 font-semibold">
                  Fee base garante infraestrutura completa: squad dedicado, CRM, analytics e suporte full-time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ - FAQ & objeções */}
      <Section id="faq">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-10">FAQ & Objeções</h2>
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

      {/* CTA - CTA final */}
      <Section id="cta">
        <div className="text-center py-16 bg-zinc-900/80 border border-yellow-400 rounded-2xl mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold mb-4 text-yellow-400">Agenda de diagnóstico gratuito</h2>
          <p className="mb-6 text-zinc-300">Escolha seu horário — 15 min via Zoom, sem vender nada.</p>
          <div className="bg-zinc-800/60 px-4 py-2 rounded-xl text-sm font-semibold text-yellow-400 border border-yellow-400/30 inline-block mb-6">
            Disponível esta semana: 2 slots
          </div>
          <CompanyLeadForm />
        </div>
      </Section>

      <Footer />
    </div>
  );
} 