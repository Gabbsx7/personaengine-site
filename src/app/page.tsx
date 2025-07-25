"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ChevronDown, 
  CheckCircle, 
  Users,
  TrendingUp,
  Target,
  Star,
  Zap,
  Brain,
  Rocket,
  Crown,
  Lock,
  Gift
} from "lucide-react";
import Link from "next/link";
import TopNav from "../components/TopNav";
import Footer from "../components/Footer";

/* -------------------------------- Button */
function Button({ 
  children, 
  variant = "primary", 
  size = "md", 
  href,
  ...props 
}: { 
  children: React.ReactNode;
  variant?: "primary" | "outline"; 
  size?: "sm" | "md" | "lg";
  href?: string;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'href'>) {
  const base = "inline-flex items-center justify-center rounded-2xl font-semibold transition-all duration-200 focus:outline-none shadow-md hover:scale-[1.03] active:scale-95";
  const sizes: Record<string, string> = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  const variants: Record<string, string> = {
    primary: "bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 text-black hover:from-yellow-300 hover:to-yellow-500",
    outline: "border-2 border-yellow-400 text-yellow-400 bg-transparent hover:bg-yellow-400 hover:text-black",
  };
  const className = `${base} ${sizes[size]} ${variants[variant]}`;

  if (href) {
    return (
      <Link href={href} className={className} {...(props as Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}

/* -------------------------------- Main Component */
export default function PersonaEngineLanding() {
  const [openStep, setOpenStep] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const Section = ({ id, children, className = "" }: { 
    id: string; 
    children: React.ReactNode;
    className?: string;
  }) => (
    <section id={id} className={`w-full py-20 px-6 md:px-8 ${className}`}>
      {children}
    </section>
  );

  /* ------------ Content Data ---------- */
  const methodology = [
    {
      title: "Voice Market Fit",
      short: "Rosto certo para o nicho certo.",
      long: "Não basta ter um bom produto. Você precisa do porta-voz ideal que já tem autoridade no seu mercado e sabe como quebrar objeções específicas do seu ICP.",
      icon: Target,
      insight: "A maioria falha porque tenta ser o rosto da própria empresa sem ter autoridade no nicho."
    },
    {
      title: "Tração Orgânica + Paid",
      short: "Conteúdo que gera pipeline.",
      long: "Criamos loops de conteúdo que educam, nutrem e convertem. Começamos orgânico para validar messaging, depois escalamos com paid para acelerar aquisição.",
      icon: TrendingUp,
      insight: "Startups queimam budget em ads sem ter messaging validado no orgânico primeiro."
    },
    {
      title: "Handoff Estruturado",
      short: "Playbooks que ficam na sua empresa.",
      long: "Não criamos dependência. Entregamos frameworks, scripts e processos para seu time internalizar ou escolher seguir conosco como growth partner.",
      icon: Users,
      insight: "Agências tradicionais criam caixa-preta. Nós criamos capacidade interna."
    },
  ];

  const differentiators = [
    {
      icon: Brain,
      title: "Não somos agência tradicional",
      desc: "Somos ex-founders que entendemos o lado startup. Falamos a linguagem de runway, CAC, LTV e PMF.",
      problem: "Agências vendem vanity metrics"
    },
    {
      icon: Zap,
      title: "Pool curado de criadores B2B",
      desc: "Não pegamos qualquer influencer. Nosso foco são creators que já dominam nichos técnicos e B2B específicos.",
      problem: "Influencers generalistas não convertem B2B"
    },
    {
      icon: Rocket,
      title: "Framework revenue-first",
      desc: "Cada ação tem que impactar pipeline. Medimos demos agendadas, MQLs e receita - não views ou curtidas.",
      problem: "Marketing sem conexão com vendas"
    },
  ];

  const betaPerks = [
    {
      icon: Crown,
      title: "Acesso exclusivo",
      desc: "Primeiros a testar nossa metodologia com desconto especial para early adopters"
    },
    {
      icon: Gift,
      title: "Investimento reduzido",
      desc: "50% off nos primeiros 3 meses para beta testers que nos ajudem a refinar o processo"
    },
    {
      icon: Star,
      title: "Atenção 1:1",
      desc: "Como somos poucos clientes, você terá acesso direto aos founders e atenção personalizada"
    }
  ];

  const idealProfiles = {
    startups: [
      "Startup B2B entre pre-seed e Series A",
      "Produto pronto, mas falta tração consistente",
      "Fundador técnico que não quer ser o rosto",
      "Budget de marketing mas sem expertise interna",
      "Precisa validar canal antes de escalar team"
    ],
    creators: [
      "Criador de conteúdo B2B com +5k seguidores",
      "Expertise em nicho específico (SaaS, FinTech, etc)",
      "Quer monetizar autoridade além de curso/infoproduto",
      "Interessado em equity/revenue share",
      "Disponível para projetos de 3-6 meses"
    ]
  };

  const faqs = [
    {
      q: "Por que devo ser beta tester?",
      a: "Acesso exclusivo à nossa metodologia com 50% de desconto, atenção 1:1 dos founders e chance de moldar nosso produto junto conosco."
    },
    {
      q: "Qual o investimento para beta testers?",
      a: "R$ 7.500/mês por 3 meses (50% off do valor final). Inclui matching com criador, estratégia completa e execução."
    },
    {
      q: "E se não der resultado?",
      a: "Garantia total: se não gerarmos pelo menos 20 demos qualificadas em 90 dias, devolvemos 100% do investimento."
    },
    {
      q: "Como funciona para criadores?",
      a: "Revenue share de 10-30% dos contratos fechados + fee fixo por projeto. Você mantém sua audiência e ganha nova fonte de receita."
    },
    {
      q: "Quantos beta testers vocês vão aceitar?",
      a: "Máximo 10 startups e 20 criadores para manter qualidade alta. Depois disso, valores sobem e waitlist se abre."
    }
  ];

  return (
    <div className="min-h-screen text-white bg-gradient-hero selection:bg-yellow-300/60 relative overflow-x-hidden">
      {/* Progress Bar */}
      <motion.div 
        style={{ width: progressWidth }} 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 z-50 shadow-lg shadow-yellow-400/50" 
      />

      {/* Beta Badge */}
      <div className="fixed top-20 right-6 z-50">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
        >
          🚀 BETA ABERTO
        </motion.div>
      </div>

      {/* Navigation */}
      <TopNav navItems={[
        { id: "metodologia", label: "Metodologia", onClick: () => scrollTo('metodologia') },
        { id: "diferencial", label: "Por que nós", onClick: () => scrollTo('diferencial') },
        { id: "beta", label: "Beta Program", onClick: () => scrollTo('beta') },
        { id: "faq", label: "FAQ", onClick: () => scrollTo('faq') },
        { id: "cta", label: "Aplicar", onClick: () => scrollTo('cta') },
      ]} />

      {/* Hero Section */}
      <Section id="hero" className="pt-20 pb-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-6 py-2 mb-8">
              <Lock size={16} className="text-purple-400" />
              <span className="text-purple-400 font-medium">Beta Program Exclusivo</span>
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight">
              O elo perdido entre{" "}
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                startup e audiência
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-zinc-300 mb-2 max-w-4xl mx-auto leading-relaxed">
              Conectamos startups B2B com criadores especializados que já dominam seu nicho
            </p>
            <p className="text-lg text-zinc-400 mb-8 max-w-3xl mx-auto">
              Pare de tentar ser o rosto da sua empresa. Encontre quem já tem autoridade no seu mercado e acelere go-to-market.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-6 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Button href="/company/" size="lg" variant="primary">
              <Rocket size={20} className="mr-2" />
              Aplicar como Startup
            </Button>
            <Button href="/creator/" size="lg" variant="outline">
              <Star size={20} className="mr-2" />
              Aplicar como Criador
            </Button>
          </motion.div>

          {/* Value Props */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">Voice Market Fit</div>
              <div className="text-sm text-zinc-400">Rosto certo para seu nicho</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">Revenue First</div>
              <div className="text-sm text-zinc-400">Foco em pipeline, não views</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">Beta Exclusivo</div>
              <div className="text-sm text-zinc-400">50% off + atenção 1:1</div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Methodology Section */}
      <Section id="metodologia" className="bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Nossa <span className="text-yellow-400">metodologia</span>
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              3 pilares que desenvolvemos observando onde a maioria das startups falha
            </p>
          </motion.div>

          <div className="space-y-8">
            {methodology.map((method, i) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={i}
                  layout
                  onClick={() => setOpenStep(openStep === i ? null : i)}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-6 rounded-2xl bg-zinc-800 border border-zinc-700 hover:border-yellow-400/50 transition-all">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="p-4 rounded-2xl bg-yellow-400/10 border border-yellow-400/20">
                          <Icon size={32} className="text-yellow-400" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-2xl font-bold group-hover:text-yellow-400 transition-colors">
                            {method.title}
                          </h3>
                          <ChevronDown 
                            size={20} 
                            className={`transition-transform duration-300 ${openStep === i ? 'rotate-180' : ''}`} 
                          />
                        </div>
                        
                        <p className="text-lg text-zinc-300 mb-4">
                          {method.short}
                        </p>
                        
                        <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-2 mb-4">
                          <span className="text-red-400 text-sm font-medium">⚠️ {method.insight}</span>
                        </div>
                        
                        <motion.div
                          initial={false}
                          animate={{ height: openStep === i ? 'auto' : 0, opacity: openStep === i ? 1 : 0 }}
                          className="overflow-hidden"
                        >
                          <p className="text-zinc-400 leading-relaxed border-t border-zinc-700 pt-4">
                            {method.long}
                          </p>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Differentiators */}
      <Section id="diferencial">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Por que não somos <span className="text-yellow-400">mais uma agência</span>
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto">
              Entendemos startup porque já estivemos do outro lado da mesa
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {differentiators.map((diff, i) => {
              const Icon = diff.icon;
              return (
                <motion.div
                  key={i}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="p-6 rounded-2xl bg-zinc-800 border border-zinc-700 hover:border-yellow-400/50 transition-all h-full">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 mb-6">
                      <Icon size={28} className="text-black" />
                    </div>
                    
                    <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-3 py-1 mb-4">
                      <span className="text-red-400 text-xs font-medium">❌ {diff.problem}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-4 group-hover:text-yellow-400 transition-colors">
                      {diff.title}
                    </h3>
                    <p className="text-zinc-300 leading-relaxed">
                      {diff.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Beta Program */}
      <Section id="beta" className="bg-gradient-to-br from-purple-900/20 to-pink-900/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-6 py-3 mb-6">
              <Lock size={20} className="text-purple-400" />
              <span className="text-purple-400 font-bold">ACESSO LIMITADO</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Beta Program <span className="text-purple-400">Exclusivo</span>
            </h2>
            <p className="text-xl text-zinc-300 max-w-3xl mx-auto mb-8">
              Seja um dos primeiros a testar nossa metodologia. Vagas limitadas para manter qualidade.
            </p>
            
            <div className="inline-flex items-center gap-4 bg-yellow-400/10 border border-yellow-400/20 rounded-2xl px-8 py-4">
              <span className="text-2xl">⏰</span>
              <div className="text-left">
                <div className="font-bold text-yellow-400">Apenas 10 vagas para startups</div>
                <div className="text-sm text-zinc-400">Depois disso, waitlist se abre</div>
              </div>
            </div>
          </motion.div>

          {/* Beta Perks */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {betaPerks.map((perk, i) => {
              const Icon = perk.icon;
              return (
                <motion.div
                  key={i}
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 mb-6">
                    <Icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-purple-400">
                    {perk.title}
                  </h3>
                  <p className="text-zinc-300 leading-relaxed">
                    {perk.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Ideal Profiles */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="p-8 bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-3xl border border-green-500/20"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-green-400 flex items-center gap-3">
                <Rocket size={28} />
                Perfil ideal - Startups
              </h3>
              <ul className="space-y-3">
                {idealProfiles.startups.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="p-8 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-3xl border border-blue-500/20"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-blue-400 flex items-center gap-3">
                <Star size={28} />
                Perfil ideal - Criadores
              </h3>
              <ul className="space-y-3">
                {idealProfiles.creators.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-zinc-300">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="bg-zinc-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Perguntas <span className="text-yellow-400">diretas</span>
            </h2>
            <p className="text-xl text-zinc-300">
              Sem enrolação. As dúvidas mais comuns sobre o beta program.
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="p-6 bg-zinc-800 border border-zinc-700 rounded-2xl cursor-pointer hover:border-yellow-400/50 transition-all duration-300"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex justify-between items-start">
                  <span className="text-lg font-semibold text-white pr-4">{faq.q}</span>
                  <ChevronDown 
                    size={20} 
                    className={`transition-transform duration-300 text-yellow-400 flex-shrink-0 ${openFaq === i ? 'rotate-180' : ''}`} 
                  />
                </div>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <p className="mt-4 text-zinc-300 leading-relaxed border-t border-zinc-600 pt-4">
                    {faq.a}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section id="cta">
        <motion.div
          className="text-center py-20 bg-gradient-to-br from-yellow-400 to-orange-500 text-black rounded-3xl mx-auto max-w-5xl relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-black/10 rounded-full px-6 py-3 mb-6">
              <Lock size={20} className="text-black/70" />
              <span className="font-bold text-black/70">VAGAS LIMITADAS</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Pronto para ser <span className="text-black/80">beta tester</span>?
            </h2>
            <p className="text-xl mb-8 text-black/80 max-w-3xl mx-auto leading-relaxed">
              Processo seletivo rápido. Respondemos em até 48h se você foi aceito no programa.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
              <Button 
                size="lg" 
                onClick={() => window.open('mailto:beta@personaengine.com?subject=Aplicação Beta - Criador', '_blank')}
              >
                <Star size={20} className="mr-2" />
                Aplicar como Criador
              </Button>
            </div>
            
            <div className="text-sm text-black/60">
              💡 Processo seletivo: formulário → call de 15min → decisão em 48h
            </div>
          </div>
        </motion.div>
      </Section>

      {/* Footer */}
      <Footer />
    </div>
  );
}