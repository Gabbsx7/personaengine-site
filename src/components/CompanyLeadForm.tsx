import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function CompanyLeadForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    const data = new FormData(formRef.current);
    const payload = Object.fromEntries(data.entries());

    const required = ["name", "email", "company"];
    for (const field of required) {
      if (!payload[field]) {
        setError("Preencha todos os campos obrigatórios.");
        return;
      }
    }

    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/submit-company-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Erro ao enviar");
      setSuccess(true);
      formRef.current.reset();
    } catch {
      setError("Erro ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="text-center text-green-500 font-semibold py-8 flex flex-col items-center justify-center"
      >
        <CheckCircle size={48} className="mb-2 animate-bounce" />
        Obrigado! Sua agenda foi recebida.<br />Entraremos em contato em 24h.
      </motion.div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto prevent-scroll" autoComplete="off">
      <div>
        <input name="name" required placeholder="Nome completo" className="w-full px-4 py-3 rounded-xl bg-zinc-800 text-white border border-zinc-700 focus:border-yellow-400" disabled={loading} />
      </div>
      <div>
        <input name="email" type="email" required placeholder="Email corporativo" className="w-full px-4 py-3 rounded-xl bg-zinc-800 text-white border border-zinc-700 focus:border-yellow-400" disabled={loading} />
      </div>
      <div>
        <input name="company" required placeholder="Empresa" className="w-full px-4 py-3 rounded-xl bg-zinc-800 text-white border border-zinc-700 focus:border-yellow-400" disabled={loading} />
      </div>
      <div>
        <input name="segment" placeholder="Segmento (ex: SaaS Fiscal, Logtech...)" className="w-full px-4 py-3 rounded-xl bg-zinc-800 text-white border border-zinc-700 focus:border-yellow-400" disabled={loading} />
      </div>
      <div>
        <select name="teamSize" className="w-full px-4 py-3 rounded-xl bg-zinc-800 text-white border border-zinc-700 focus:border-yellow-400" disabled={loading}>
          <option value="">Tamanho do time</option>
          <option value="1-5">1-5 pessoas</option>
          <option value="6-20">6-20 pessoas</option>
          <option value="21-50">21-50 pessoas</option>
          <option value="50+">50+ pessoas</option>
        </select>
      </div>
      {error && <div className="text-red-500 text-sm text-center h-6">{error}</div>}
      <button type="submit" className="w-full px-6 py-3 rounded-2xl bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 text-black font-semibold shadow-md hover:from-yellow-300 hover:to-yellow-500 transition-all duration-200 focus:outline-none hover:scale-[1.03] active:scale-95 flex items-center justify-center" disabled={loading}>
        {loading && (
          <span className="animate-spin mr-2 w-5 h-5 border-2 border-yellow-400 border-t-transparent rounded-full inline-block"></span>
        )}
        Agendar diagnóstico gratuito
      </button>
    </form>
  );
} 