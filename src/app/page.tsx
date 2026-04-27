"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";

/* ─── TYPES ─── */
interface NavItem {
  id: string;
  label: string;
  onClick: () => void;
}

/* ─── TERMINAL LOG ANIMATION ─── */
function TerminalLog() {
  const lines = [
    { text: "→ inicializando reveniee v2.1", color: "#6b7280", delay: 0 },
    { text: "✓ ICP carregado · 847 empresas no funil", color: "#a855f7", delay: 0.4 },
    { text: "✓ Lead identificado: TechCorp Ltda", color: "#a855f7", delay: 0.9 },
    { text: "  score_fit: 91/100 · sinal: expansão latam", color: "#9ca3af", delay: 1.2 },
    { text: "✓ Enriquecimento concluído · dor mapeada", color: "#a855f7", delay: 1.7 },
    { text: "✓ Abordagem gerada · WhatsApp · tom: consultivo", color: "#a855f7", delay: 2.3 },
    { text: "✓ Resposta recebida · status: interessado", color: "#34d399", delay: 3.0 },
    { text: "→ BANT score: 78 · urgência detectada", color: "#9ca3af", delay: 3.5 },
    { text: "✓ Reunião agendada · Gabriel notificado", color: "#34d399", delay: 4.1 },
    { text: "✓ CRM atualizado · pipeline +R$24k", color: "#34d399", delay: 4.6 },
  ];

  const [visible, setVisible] = useState<number[]>([]);

  useEffect(() => {
    lines.forEach((line, i) => {
      const t = setTimeout(() => {
        setVisible(prev => [...prev, i]);
      }, line.delay * 1000);
      return () => clearTimeout(t);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        background: "#0d0d0d",
        border: "1px solid #1f1f1f",
        borderRadius: "12px",
        padding: "20px 24px",
        fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
        fontSize: "13px",
        lineHeight: "1.8",
        minHeight: "280px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Window dots */}
      <div style={{ display: "flex", gap: "6px", marginBottom: "16px" }}>
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
        <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
        <span style={{ marginLeft: "auto", color: "#4b5563", fontSize: "11px" }}>outbound-machine.log</span>
      </div>

      {lines.map((line, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -8 }}
          animate={visible.includes(i) ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.25 }}
          style={{ color: line.color, whiteSpace: "pre" }}
        >
          {line.text}
        </motion.div>
      ))}

      {/* Blinking cursor */}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 1, repeat: Infinity }}
        style={{ color: "#a855f7", display: "inline-block" }}
      >
        ▌
      </motion.span>

      {/* Subtle glow */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "80px",
          background: "linear-gradient(to top, #0d0d0d, transparent)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

/* ─── ANIMATED COUNTER ─── */
/* function Counter({ target, suffix = "", prefix = "" }: { target: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const duration = 1500;
        const steps = 50;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            setCount(target);
            clearInterval(timer);
          } else {
            setCount(Math.floor(current));
          }
        }, duration / steps);
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
} */

/* ─── MAIN PAGE ─── */
export default function OutboundMachineLanding() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems: NavItem[] = [
    { id: "problema", label: "O Problema", onClick: () => scrollTo("problema") },
    { id: "sistema", label: "Como Funciona", onClick: () => scrollTo("sistema") },
    { id: "escopo", label: "O Escopo", onClick: () => scrollTo("escopo") },
    { id: "case", label: "Case Real", onClick: () => scrollTo("case") },
    { id: "implementacao", label: "Implementação", onClick: () => scrollTo("implementacao") },
    { id: "cta", label: "Começar", onClick: () => scrollTo("cta") },
  ];

  const steps = [
    {
      number: "01",
      title: "Lista Inteligente",
      tagline: "Score 0–100. Só entra quem encaixa.",
      detail:
        "A IA analisa firmografia, sinais de mercado e comportamento digital para priorizar os prospects com maior probabilidade de conversão. Sem listas frias compradas no mercado.",
    },
    {
      number: "02",
      title: "Enriquecimento",
      tagline: "Contexto real. Dor mapeada.",
      detail:
        "Scraping inteligente + análise semântica identifica o momento exato do prospect: expansão, troca de ferramenta, contratação, crise. Cada abordagem começa com contexto específico.",
    },
    {
      number: "03",
      title: "Abordagem",
      tagline: "Personalizada. Não parece automação.",
      detail:
        "Mensagens geradas por LLM com tom calibrado, gancho específico e variação por canal. Cada mensagem soa como foi escrita por um humano que pesquisou a empresa.",
    },
    {
      number: "04",
      title: "Qualificação BANT",
      tagline: "Neurociência + SPIN Selling.",
      detail:
        "O agente conduz a conversa aplicando BANT de forma invisível. Detecta gatilhos de Cialdini, estado emocional (Kahneman), objeções ocultas e nível de urgência. Pré-venda automática.",
    },
    {
      number: "05",
      title: "Agendamento",
      tagline: "Você entra quando vale a pena.",
      detail:
        "Quando o score de qualificação é atingido, o SchedulingAgent propõe a reunião no seu Calendly e confirma. Você recebe o lead pronto — com briefing completo da conversa.",
    },
  ];

  const metrics = [
    { before: "4,5%", after: "21,25%", label: "Taxa de resposta", gain: "+372%" },
    { before: "30", after: "145", label: "Decision-makers", gain: "+383%" },
    { before: "5", after: "21", label: "Calls agendadas", gain: "+320%" },
    { before: "R$4.500", after: "R$480", label: "Custo mensal", gain: "−89%" },
    { before: "0", after: "5", label: "Fechamentos", gain: "∞" },
    { before: "8h/dia", after: "<3h/dia", label: "Tempo operacional", gain: "−62%" },
  ];

  const segments = [
    {
      label: "Consultorias & Advisory",
      headline: "Pare de depender de indicação.",
      body: "Tenha pipeline ativo rodando enquanto você entrega para os clientes atuais. Nenhum SDR necessário.",
    },
    {
      label: "Agências & SaaS",
      headline: "Outbound inteligente como canal.",
      body: "Complementa o inbound. Menor CAC, leads mais qualificados, sem headcount extra.",
    },
    {
      label: "Incubadoras & Aceleradoras",
      headline: "Qualifique candidatos em escala.",
      body: "Menos reuniões desnecessárias. Mais foco nos fundadores com potencial real.",
    },
  ];

  const implementation = [
    {
      week: "Semana 1",
      title: "Setup",
      desc: "Infraestrutura configurada. ICP definido. Bases de dados ativadas.",
    },
    {
      week: "Semana 2",
      title: "Pipeline de Dados",
      desc: "500+ empresas pontuadas. Sinais de mercado detectados. Base pronta para disparo.",
    },
    {
      week: "Semana 3",
      title: "Calibração",
      desc: "Mensagens personalizadas por nicho testadas e validadas com você antes do go-live.",
    },
    {
      week: "Semana 4",
      title: "Go-Live",
      desc: "Pipelines operacionais. Inbox gerenciado. CRM atualizado em tempo real.",
    },
  ];

  /* ─── STYLES ─── */
  const sectionBase: React.CSSProperties = {
    width: "100%",
    
    maxWidth: "100%",
    boxSizing: "border-box",
  };

  const container: React.CSSProperties = {
    maxWidth: "1120px",
    margin: "0 auto",
  };

  const gold = "#8b5cf6";
  // const goldDim = "#c4851c"; // Unused
  const bg = "#0a0a0a";
  const surface = "#111111";
  const surface2 = "#161616";
  const border = "#1e1e1e";
  const text = "#e8e8e8";
  const muted = "#6b7280";
  const green = "#34d399";

  return (
    <div
      style={{
        minHeight: "100vh",
        background: bg,
        color: text,
        fontFamily: "'Geist', 'Inter', sans-serif",
        overflowX: "hidden",
      }}
    >
      {/* ── Scroll Progress ── */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "2px",
          background: gold,
          zIndex: 100,
          width: progressWidth,
          boxShadow: `0 0 8px ${gold}88`,
        }}
      />

      {/* ── Nav ── */}
      <TopNav navItems={navItems} />

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6" style={{ ...sectionBase, paddingTop: "140px", paddingBottom: "80px" }}>
        <div style={container}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 12 }}
            transition={{ duration: 0.5 }}
            style={{ marginBottom: "40px" }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: `${gold}14`,
                border: `1px solid ${gold}30`,
                borderRadius: "999px",
                padding: "6px 16px",
                fontSize: "12px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: gold,
                fontWeight: 500,
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: green, display: "inline-block" }} />
              Outbound Machine · Reveniee v2
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 24 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h1
                style={{
                  fontSize: "clamp(32px, 6vw, 64px)",
                  fontWeight: 800,
                  lineHeight: 1.05,
                  marginBottom: "24px",
                  letterSpacing: "-0.03em",
                }}
              >
                Seu time deveria estar{" "}
                <span
                  style={{
                    color: gold,
                    fontStyle: "italic",
                    display: "block",
                  }}
                >
                  fechando,
                </span>
                não prospectando.
              </h1>

              <p
                style={{
                  fontSize: "18px",
                  lineHeight: 1.7,
                  color: muted,
                  maxWidth: "480px",
                  marginBottom: "40px",
                }}
              >
                Infraestrutura de outbound com IA que identifica, aborda e qualifica leads B2B — do primeiro contato ao agendamento. Sem SDR. Sem esforço manual.
              </p>

              <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                <button
                  onClick={() => window.open("https://wa.me/5547999085741?text=Olá Gabriel, quero saber mais sobre a Outbound Machine", "_blank")}
                  style={{
                    background: gold,
                    color: "#000",
                    border: "none",
                    borderRadius: "8px",
                    padding: "14px 28px",
                    fontSize: "14px",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                  onMouseOver={e => (e.currentTarget.style.background = "#fbbf24")}
                  onMouseOut={e => (e.currentTarget.style.background = gold)}
                >
                  Ver Como Funciona →
                </button>
                <button
                  onClick={() => scrollTo("case")}
                  style={{
                    background: "transparent",
                    color: text,
                    border: `1px solid ${border}`,
                    borderRadius: "8px",
                    padding: "14px 28px",
                    fontSize: "14px",
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                  onMouseOver={e => {
                    e.currentTarget.style.borderColor = gold + "44";
                    e.currentTarget.style.color = gold;
                  }}
                  onMouseOut={e => {
                    e.currentTarget.style.borderColor = border;
                    e.currentTarget.style.color = text;
                  }}
                >
                  Ver Case Real
                </button>
              </div>

              {/* Trust signals */}
              <div
                className="flex flex-wrap gap-6 sm:gap-8 mt-12 pt-8"
                style={{ borderTop: `1px solid ${border}` }}
              >
                {[
                  { n: "21%+", l: "taxa de resposta" },
                  { n: "89%", l: "redução de custo" },
                  { n: "4 sem.", l: "para go-live" },
                ].map((item, i) => (
                  <div key={i}>
                    <div style={{ fontSize: "22px", fontWeight: 700, color: gold }}>{item.n}</div>
                    <div style={{ fontSize: "12px", color: muted, marginTop: "2px" }}>{item.l}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right – Terminal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.97 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <TerminalLog />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PROBLEMA
      ══════════════════════════════════════ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6" id="problema" style={{ ...sectionBase, background: surface }}>
        <div style={container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span style={{ color: gold, fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 600 }}>
              O Problema
            </span>
            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 800,
                lineHeight: 1.1,
                marginTop: "16px",
                marginBottom: "16px",
                letterSpacing: "-0.02em",
              }}
            >
              O modelo antigo está te custando
              <br />
              mais do que você pensa.
            </h2>
            <p style={{ color: muted, fontSize: "18px", maxWidth: "560px", marginBottom: "64px", lineHeight: 1.7 }}>
              Um SDR humano custa R$4.500/mês, trabalha 8h em tarefas repetitivas e entrega 4,5% de taxa de resposta. Isso não é operação. É gasto disfarçado de processo.
            </p>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "2px",
              background: border,
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            {[
              {
                icon: "⏱",
                label: "Tempo desperdiçado",
                stat: "8h/dia",
                desc: "Um SDR passa a maior parte do dia em tarefas que uma IA executa em segundos: pesquisa, enriquecimento, personalização.",
              },
              {
                icon: "📉",
                label: "Taxa de resposta real",
                stat: "4,5%",
                desc: "667 touchpoints para falar com 30 decision-makers. 95,5% do esforço vai para o lixo.",
              },
              {
                icon: "💸",
                label: "Custo sem retorno",
                stat: "R$4.500",
                desc: "Por mês. Sem garantia de resultado. Sem escalabilidade. E ainda com turnover alto.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                style={{
                  background: surface2,
                  padding: "40px 36px",
                }}
              >
                <div style={{ fontSize: "28px", marginBottom: "16px" }}>{item.icon}</div>
                <div style={{ fontSize: "11px", color: muted, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>
                  {item.label}
                </div>
                <div style={{ fontSize: "42px", fontWeight: 800, color: "#ef4444", marginBottom: "16px", letterSpacing: "-0.02em" }}>
                  {item.stat}
                </div>
                <p style={{ color: muted, fontSize: "14px", lineHeight: 1.7 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.blockquote
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              marginTop: "56px",
              borderLeft: `3px solid ${gold}`,
              paddingLeft: "28px",
              fontStyle: "italic",
              fontSize: "20px",
              color: "#d1d5db",
              lineHeight: 1.6,
            }}
          >
            &quot;A vantagem competitiva não é o produto.
            <br />É quem descobre o cliente certo, na hora certa.&quot;
          </motion.blockquote>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SISTEMA / COMO FUNCIONA
      ══════════════════════════════════════ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6" id="sistema" style={{ ...sectionBase }}>
        <div style={container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span style={{ color: gold, fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 600 }}>
              A Solução
            </span>
            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 800,
                lineHeight: 1.1,
                marginTop: "16px",
                marginBottom: "16px",
                letterSpacing: "-0.02em",
              }}
            >
              Infraestrutura comercial com IA.
              <br />
              <span style={{ color: gold }}>Do primeiro contato ao agendamento.</span>
            </h2>
            <p style={{ color: muted, fontSize: "18px", maxWidth: "560px", marginBottom: "64px", lineHeight: 1.7 }}>
              Não é uma ferramenta. É um sistema completo de agentes autônomos orquestrado enquanto você dorme.
            </p>
          </motion.div>

          {/* Steps */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                onClick={() => setActiveStep(activeStep === i ? null : i)}
                style={{
                  background: activeStep === i ? surface2 : surface,
                  border: `1px solid ${activeStep === i ? gold + "30" : border}`,
                  borderRadius: "10px",
                  padding: "28px 32px",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  display: "grid",
                  alignItems: "center",
                }}
                className="grid-cols-[60px_1fr_20px] md:grid-cols-[80px_1fr_auto] gap-4 md:gap-6"
                onMouseOver={e => {
                  if (activeStep !== i) {
                    (e.currentTarget as HTMLElement).style.borderColor = gold + "20";
                  }
                }}
                onMouseOut={e => {
                  if (activeStep !== i) {
                    (e.currentTarget as HTMLElement).style.borderColor = border;
                  }
                }}
              >
                <div
                  style={{
                    fontSize: "36px",
                    fontWeight: 800,
                    color: activeStep === i ? gold : "#2a2a2a",
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                    transition: "color 0.2s",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {step.number}
                </div>

                <div>
                  <div
                    style={{
                      fontSize: "18px",
                      fontWeight: 700,
                      color: text,
                      marginBottom: "4px",
                    }}
                  >
                    {step.title}
                  </div>
                  <div style={{ fontSize: "14px", color: muted }}>{step.tagline}</div>

                  <AnimatePresence>
                    {activeStep === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0 }}
                        animate={{ opacity: 1, height: "auto", marginTop: "16px" }}
                        exit={{ opacity: 0, height: 0, marginTop: 0 }}
                        transition={{ duration: 0.25 }}
                        style={{
                          fontSize: "14px",
                          color: "#9ca3af",
                          lineHeight: 1.8,
                          maxWidth: "600px",
                          overflow: "hidden",
                        }}
                      >
                        {step.detail}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div
                  style={{
                    color: activeStep === i ? gold : muted,
                    fontSize: "20px",
                    transform: activeStep === i ? "rotate(180deg)" : "rotate(0)",
                    transition: "all 0.2s",
                  }}
                >
                  ↓
                </div>
              </motion.div>
            ))}
          </div>

          {/* Behavioral layer callout */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              marginTop: "48px",
              background: `linear-gradient(135deg, ${gold}0a 0%, transparent 60%)`,
              border: `1px solid ${gold}20`,
              borderRadius: "12px",
              padding: "32px 36px",
              display: "grid",
              gap: "32px",
              alignItems: "center",
            }}
            className="grid-cols-1 md:grid-cols-2"
          >
            <div>
              <div
                style={{
                  fontSize: "11px",
                  color: gold,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  marginBottom: "12px",
                }}
              >
                Diferencial técnico
              </div>
              <h3 style={{ fontSize: "22px", fontWeight: 700, marginBottom: "12px", lineHeight: 1.3 }}>
                Behavioral Layer
              </h3>
              <p style={{ color: muted, fontSize: "14px", lineHeight: 1.8 }}>
                Não é apenas um ChatGPT conectado ao WhatsApp. A camada comportamental detecta gatilhos de Cialdini, vieses cognitivos (Kahneman), objeções ocultas e estado emocional — e calibra cada resposta em tempo real.
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gap: "8px",
              }}
              className="grid-cols-2 sm:grid-cols-3 lg:grid-cols-2"
            >
              {["BANT", "SPIN Selling", "Cialdini", "Chris Voss", "Kahneman", "Reciprocidade"].map(tag => (
                <div
                  key={tag}
                  style={{
                    background: surface2,
                    border: `1px solid ${border}`,
                    borderRadius: "6px",
                    padding: "8px 12px",
                    fontSize: "12px",
                    color: "#9ca3af",
                    textAlign: "center",
                  }}
                >
                  {tag}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          O ESCOPO (REDESIGN PREMIUM)
      ══════════════════════════════════════ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6" id="escopo" style={{ ...sectionBase, position: "relative" }}>
        {/* Decorative background glow */}
        <div style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "800px",
          background: `radial-gradient(circle, ${gold}08 0%, transparent 60%)`,
          pointerEvents: "none",
          zIndex: 0
        }} />

        <div style={{ ...container, position: "relative", zIndex: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: "64px" }}
          >
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
              Operation as a Service
            </span>
            <h2
              style={{
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: "24px",
                letterSpacing: "-0.03em",
              }}
            >
              Não entregamos ferramenta.<br/>
              <span style={{ color: muted, fontWeight: 400 }}>Entregamos o motor rodando.</span>
            </h2>
            <p style={{ color: "#9ca3af", fontSize: "18px", maxWidth: "720px", margin: "0 auto", lineHeight: 1.7 }}>
              O <strong style={{color: text}}>Reveniee</strong> é um serviço com IA onde assumimos a sua operação comercial de originação e prospecção. Resolvemos a dor de não ter equipe ativa ou previsibilidade, criando um pipeline de vendas altamente qualificado.
            </p>
          </motion.div>

          {/* Cards Encantadores */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
              gap: "32px",
            }}
          >
            {/* Card 1: Setup RevOps */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{
                background: `linear-gradient(145deg, ${surface} 0%, ${surface2} 100%)`,
                border: `1px solid ${border}`,
                borderRadius: "24px",
                padding: "48px",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 24px 48px rgba(0,0,0,0.4)"
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "1px", background: `linear-gradient(90deg, transparent, ${gold}40, transparent)` }} />
              
              <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: `${gold}15`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", marginBottom: "32px", border: `1px solid ${gold}30` }}>
                🏗️
              </div>
              <h3 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "16px", letterSpacing: "-0.02em" }}>Engenharia de RevOps</h3>
              <p style={{ color: muted, fontSize: "16px", lineHeight: 1.8, marginBottom: "24px" }}>
                A inteligência precisa de estrutura. Nós construímos toda a fundação antes de ligar a máquina:
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, color: text, fontSize: "15px", lineHeight: 2 }}>
                {[
                  "Definição cirúrgica de ICP",
                  "Arquitetura de funis de venda",
                  "Estruturação da esteira de produtos/serviços",
                  "Playbooks de originação e qualificação"
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: gold }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Card 2: Outbound IA */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              style={{
                background: `linear-gradient(145deg, ${surface} 0%, ${surface2} 100%)`,
                border: `1px solid ${border}`,
                borderRadius: "24px",
                padding: "48px",
                position: "relative",
                overflow: "hidden",
                boxShadow: "0 24px 48px rgba(0,0,0,0.4)"
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "1px", background: `linear-gradient(90deg, transparent, #3b82f640, transparent)` }} />
              
              <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: `#3b82f615`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", marginBottom: "32px", border: `1px solid #3b82f630` }}>
                🧠
              </div>
              <h3 style={{ fontSize: "28px", fontWeight: 700, marginBottom: "16px", letterSpacing: "-0.02em" }}>Infraestrutura Autônoma</h3>
              <p style={{ color: muted, fontSize: "16px", lineHeight: 1.8, marginBottom: "24px" }}>
                Com a base pronta, ativamos nossa infraestrutura para operar o outbound de forma invisível:
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, color: text, fontSize: "15px", lineHeight: 2 }}>
                {[
                  "Agentes de IA especializados em prospecção",
                  "Aplicação contínua de vieses cognitivos",
                  "Abordagem multicanal humanizada",
                  "Oportunidades mapeadas e qualificadas"
                ].map((item, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                     <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#3b82f6" }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CASE REAL
      ══════════════════════════════════════ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6" id="case" style={{ ...sectionBase, background: surface }}>
        <div style={container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span style={{ color: gold, fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 600 }}>
              Case Real
            </span>
            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 800,
                lineHeight: 1.1,
                marginTop: "16px",
                marginBottom: "8px",
                letterSpacing: "-0.02em",
              }}
            >
              Mesmo período. Mesmo volume.
            </h2>
            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                marginBottom: "16px",
                color: gold,
              }}
            >
              Resultados completamente diferentes.
            </h2>
            <p style={{ color: muted, fontSize: "16px", marginBottom: "56px" }}>
              Advisory financeiro · 29 dias · mesmo ICP
            </p>
          </motion.div>

          <div
            style={{
              display: "grid",
              gap: "2px",
              background: border,
              borderRadius: "12px",
              overflow: "hidden",
              marginBottom: "2px",
            }}
            className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
          >
            {metrics.slice(0, 3).map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ background: surface2, padding: "32px" }}
              >
                <div style={{ fontSize: "12px", color: muted, marginBottom: "20px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  {m.label}
                </div>
                <div style={{ display: "flex", alignItems: "flex-end", gap: "16px", marginBottom: "8px" }}>
                  <div>
                    <div style={{ fontSize: "12px", color: "#ef444480", marginBottom: "4px" }}>antes</div>
                    <div style={{ fontSize: "28px", fontWeight: 700, color: "#ef4444", letterSpacing: "-0.02em" }}>{m.before}</div>
                  </div>
                  <div style={{ color: muted, fontSize: "20px", paddingBottom: "4px" }}>→</div>
                  <div>
                    <div style={{ fontSize: "12px", color: green + "80", marginBottom: "4px" }}>depois</div>
                    <div style={{ fontSize: "28px", fontWeight: 700, color: green, letterSpacing: "-0.02em" }}>{m.after}</div>
                  </div>
                </div>
                <div
                  style={{
                    display: "inline-block",
                    background: green + "15",
                    border: `1px solid ${green}30`,
                    borderRadius: "999px",
                    padding: "3px 10px",
                    fontSize: "12px",
                    color: green,
                    fontWeight: 600,
                  }}
                >
                  {m.gain}
                </div>
              </motion.div>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gap: "2px",
              background: border,
              borderRadius: "12px",
              overflow: "hidden",
            }}
            className="grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
          >
            {metrics.slice(3).map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 3) * 0.1 }}
                style={{ background: surface2, padding: "32px" }}
              >
                <div style={{ fontSize: "12px", color: muted, marginBottom: "20px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  {m.label}
                </div>
                <div style={{ display: "flex", alignItems: "flex-end", gap: "16px", marginBottom: "8px" }}>
                  <div>
                    <div style={{ fontSize: "12px", color: "#ef444480", marginBottom: "4px" }}>antes</div>
                    <div style={{ fontSize: "28px", fontWeight: 700, color: "#ef4444", letterSpacing: "-0.02em" }}>{m.before}</div>
                  </div>
                  <div style={{ color: muted, fontSize: "20px", paddingBottom: "4px" }}>→</div>
                  <div>
                    <div style={{ fontSize: "12px", color: green + "80", marginBottom: "4px" }}>depois</div>
                    <div style={{ fontSize: "28px", fontWeight: 700, color: green, letterSpacing: "-0.02em" }}>{m.after}</div>
                  </div>
                </div>
                <div
                  style={{
                    display: "inline-block",
                    background: green + "15",
                    border: `1px solid ${green}30`,
                    borderRadius: "999px",
                    padding: "3px 10px",
                    fontSize: "12px",
                    color: green,
                    fontWeight: 600,
                  }}
                >
                  {m.gain}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              marginTop: "32px",
              textAlign: "center",
              padding: "20px",
              background: surface2,
              borderRadius: "10px",
              border: `1px solid ${border}`,
            }}
          >
            <span style={{ color: muted, fontSize: "14px" }}>
              Custo por deal com SDR:{" "}
              <span style={{ color: "#ef4444", fontWeight: 700 }}>∞ (zero fechamentos)</span>
              {"  ·  "}
              Custo por deal com Outbound Machine:{" "}
              <span style={{ color: green, fontWeight: 700 }}>R$3.152</span>
            </span>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SEGMENTOS
      ══════════════════════════════════════ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6" style={{ ...sectionBase }}>
        <div style={container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span style={{ color: gold, fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 600 }}>
              Para quem é
            </span>
            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 800,
                lineHeight: 1.1,
                marginTop: "16px",
                marginBottom: "16px",
                letterSpacing: "-0.02em",
              }}
            >
              Funciona para quem vende B2B
              <br />
              <span style={{ color: muted, fontWeight: 400 }}>e quer crescer sem aumentar equipe.</span>
            </h2>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "16px",
              marginTop: "48px",
            }}
          >
            {segments.map((seg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{
                  background: surface,
                  border: `1px solid ${border}`,
                  borderRadius: "12px",
                  padding: "36px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "2px",
                    background: gold,
                  }}
                />
                <div
                  style={{
                    fontSize: "11px",
                    color: gold,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontWeight: 600,
                    marginBottom: "20px",
                  }}
                >
                  {seg.label}
                </div>
                <h3 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "12px", lineHeight: 1.3 }}>
                  {seg.headline}
                </h3>
                <p style={{ color: muted, fontSize: "15px", lineHeight: 1.7 }}>{seg.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          IMPLEMENTAÇÃO
      ══════════════════════════════════════ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6" id="implementacao" style={{ ...sectionBase, background: surface }}>
        <div style={container}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span style={{ color: gold, fontSize: "11px", letterSpacing: "0.14em", textTransform: "uppercase", fontWeight: 600 }}>
              Implementação
            </span>
            <h2
              style={{
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 800,
                lineHeight: 1.1,
                marginTop: "16px",
                marginBottom: "16px",
                letterSpacing: "-0.02em",
              }}
            >
              Operacional em 4 semanas.
            </h2>
            <p style={{ color: muted, fontSize: "18px", maxWidth: "520px", marginBottom: "64px", lineHeight: 1.7 }}>
              Da configuração da inteligência ao go-live com leads chegando no seu CRM.
            </p>
          </motion.div>

          {/* Timeline */}
          <div style={{ position: "relative" }}>
            {/* Connecting line */}
            <div
              style={{
                position: "absolute",
                top: "32px",
                left: "31px",
                bottom: "32px",
                width: "2px",
                background: `linear-gradient(to bottom, ${gold}, ${gold}20)`,
              }}
            />

            <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
              {implementation.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    padding: "24px 0",
                  }}
                  className="gap-4 md:gap-8 flex-row"
                >
                  {/* Dot */}
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      borderRadius: "50%",
                      background: i < 2 ? gold : surface2,
                      border: `2px solid ${i < 2 ? gold : border}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "18px",
                      fontWeight: 800,
                      color: i < 2 ? "#000" : muted,
                      flexShrink: 0,
                      zIndex: 1,
                    }}
                  >
                    {i + 1}
                  </div>

                  <div style={{ paddingTop: "16px" }}>
                    <div style={{ fontSize: "12px", color: gold, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "6px" }}>
                      {item.week}
                    </div>
                    <div style={{ fontSize: "20px", fontWeight: 700, marginBottom: "8px" }}>{item.title}</div>
                    <p style={{ color: muted, fontSize: "15px", lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{
              marginTop: "48px",
              background: `${gold}10`,
              border: `1px solid ${gold}25`,
              borderRadius: "10px",
              padding: "20px 28px",
              fontSize: "16px",
              fontWeight: 600,
              color: gold,
            }}
          >
            A partir da semana 5 — leads qualificados chegam continuamente.
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA
      ══════════════════════════════════════ */}
      <section className="py-16 lg:py-24 px-4 sm:px-6" id="cta" style={{ ...sectionBase }}>
        <div style={{ ...container, textAlign: "center" }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div
              style={{
                background: surface,
                border: `1px solid ${border}`,
                borderRadius: "20px",
                position: "relative",
                overflow: "hidden",
              }}
              className="py-12 px-6 sm:py-16 sm:px-12 md:py-20 md:px-16"
            >
              {/* Background glow */}
              <div
                style={{
                  position: "absolute",
                  top: "-40%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "600px",
                  height: "300px",
                  background: `radial-gradient(ellipse, ${gold}12 0%, transparent 70%)`,
                  pointerEvents: "none",
                }}
              />

              {/* Corner lines */}
              <div style={{ position: "absolute", top: 0, left: 0, width: "60px", height: "2px", background: gold }} />
              <div style={{ position: "absolute", top: 0, left: 0, width: "2px", height: "60px", background: gold }} />
              <div style={{ position: "absolute", bottom: 0, right: 0, width: "60px", height: "2px", background: gold }} />
              <div style={{ position: "absolute", bottom: 0, right: 0, width: "2px", height: "60px", background: gold }} />

              <div style={{ position: "relative", zIndex: 1 }}>
                <h2
                  style={{
                    fontSize: "clamp(28px, 4vw, 52px)",
                    fontWeight: 800,
                    lineHeight: 1.1,
                    marginBottom: "20px",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Seu pipeline não deveria
                  <br />
                  depender de você estar online.
                </h2>

                <p
                  style={{
                    color: muted,
                    fontSize: "18px",
                    maxWidth: "520px",
                    margin: "0 auto 48px",
                    lineHeight: 1.7,
                  }}
                >
                  Enquanto você lê isso, a Outbound Machine poderia estar qualificando seus próximos clientes.
                </p>

                <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
                  <button
                    onClick={() =>
                      window.open(
                        "https://wa.me/5547999085741?text=Olá Gabriel, quero saber mais sobre a Outbound Machine",
                        "_blank"
                      )
                    }
                    style={{
                      background: gold,
                      color: "#000",
                      border: "none",
                      borderRadius: "8px",
                      padding: "16px 36px",
                      fontSize: "15px",
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                    onMouseOver={e => (e.currentTarget.style.background = "#fbbf24")}
                    onMouseOut={e => (e.currentTarget.style.background = gold)}
                  >
                    Quero Ver Funcionando →
                  </button>

                  <button
                    onClick={() =>
                      window.open("https://wa.me/5547999085741?text=Olá Gabriel, quero saber mais sobre a Outbound Machine", "_blank")
                    }
                    style={{
                      background: "transparent",
                      color: text,
                      border: `1px solid ${border}`,
                      borderRadius: "8px",
                      padding: "16px 36px",
                      fontSize: "15px",
                      fontWeight: 500,
                      cursor: "pointer",
                      transition: "all 0.2s",
                    }}
                    onMouseOver={e => {
                      e.currentTarget.style.borderColor = gold + "40";
                      e.currentTarget.style.color = gold;
                    }}
                    onMouseOut={e => {
                      e.currentTarget.style.borderColor = border;
                      e.currentTarget.style.color = text;
                    }}
                  >
                    Falar com um Consultor
                  </button>
                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "24px",
                    justifyContent: "center",
                    marginTop: "48px",
                    paddingTop: "32px",
                    borderTop: `1px solid ${border}`,
                    flexWrap: "wrap",
                  }}
                >
                  {["Consultorias & Advisory", "Agências & SaaS", "Incubadoras & Aceleradoras"].map((seg, i) => (
                    <span key={i} style={{ color: muted, fontSize: "13px" }}>
                      · {seg}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ── */}
      <Footer />
    </div>
  );
}