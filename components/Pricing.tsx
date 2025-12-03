import React from 'react';
import { PRICING, BANK_INFO } from '../constants';
import { Check, Copy, CreditCard, Sparkles, Star } from 'lucide-react';

const Pricing: React.FC = () => {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`Copiado: ${text}`);
  };

  return (
    <section id="inversion" className="py-24 bg-slate-950 scroll-mt-20 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-20">
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Elige tu Nivel de <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-purple-500">Compromiso</span></h2>
           <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
             Desde una iniciación rápida hasta un acompañamiento anual completo. Invierte en tu activo más valioso: tu conocimiento.
           </p>
        </div>

        {/* Grid adjusted for 3 items (1, 2, or 3 columns based on screen) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto mb-24 items-start">
          {PRICING.map((plan, index) => {
             // Logic to highlight the middle card (Monthly) or the VIP (Annual)
             const isMiddle = index === 1;
             const isAnnual = index === 2;
             
             return (
            <div 
              key={index} 
              className={`relative rounded-3xl p-8 flex flex-col h-full border transition-all duration-500 ${
                isMiddle
                  ? 'bg-slate-900 border-purple-500 shadow-[0_0_50px_-10px_rgba(168,85,247,0.2)] md:-mt-8 md:mb-8 z-10' 
                  : isAnnual 
                    ? 'bg-gradient-to-b from-slate-900 to-slate-950 border-orange-500/50 shadow-lg'
                    : 'bg-slate-950 border-slate-800'
              }`}
            >
              {isMiddle && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-lg border border-purple-400">
                  <Star className="w-3 h-3 fill-current"/> Más Popular
                </div>
              )}
              {isAnnual && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-lg">
                  <Sparkles className="w-3 h-3 fill-current"/> Mejor Valor
                </div>
              )}

              <h3 className={`text-xl font-bold mb-2 ${isAnnual ? 'text-orange-400' : isMiddle ? 'text-white' : 'text-slate-300'}`}>{plan.title}</h3>
              <div className="mb-8">
                <span className="text-3xl lg:text-4xl font-black text-white tracking-tight block mb-1">{plan.price}</span>
                <span className="text-xs font-medium text-slate-500 uppercase tracking-widest">{plan.period}</span>
              </div>
              
              <div className="h-px w-full mb-8 bg-slate-800"></div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <div className={`p-0.5 rounded-full mr-3 shrink-0 ${isMiddle ? 'text-purple-400' : isAnnual ? 'text-orange-400' : 'text-slate-500'}`}>
                       <Check className="h-4 w-4" />
                    </div>
                    <span className="text-sm font-medium text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="#contacto"
                className={`block w-full text-center py-4 rounded-xl font-bold transition-all ${
                  isMiddle
                    ? 'bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-900/20' 
                    : isAnnual
                      ? 'bg-orange-500 hover:bg-orange-400 text-white shadow-lg shadow-orange-900/20'
                      : 'bg-slate-800 hover:bg-slate-700 text-white'
                }`}
              >
                Seleccionar
              </a>
            </div>
          )})}
        </div>

        <div id="contacto" className="max-w-4xl mx-auto bg-slate-900/50 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-slate-800 scroll-mt-24 relative overflow-hidden">
          
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3 text-white">
                  <CreditCard className="w-8 h-8 text-purple-500"/>
                  Métodos de Pago
                </h3>
                <p className="text-slate-400 mb-8">
                    Aceptamos transferencias directas sin comisiones adicionales. Tu cupo se reserva inmediatamente al enviar el comprobante.
                </p>
                
                <a 
                    href={`https://wa.me/57${BANK_INFO.nequi.number}?text=Hola,%20Juan%20Carlos,%20quiero%20iniciar%20la%20mentoría%20FENIX%20PRO.`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:bg-[#20bd5a] transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:-translate-y-1 w-full md:w-auto"
                >
                    <span className="mr-2">📲</span> Enviar Comprobante
                </a>
            </div>

            <div className="space-y-4">
              <div className="group flex items-center justify-between p-4 bg-slate-950 rounded-xl border border-slate-800 hover:border-purple-500/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-white font-bold text-[10px]">NQ</div>
                  <div>
                    <p className="text-xs font-bold text-slate-500 uppercase">Nequi</p>
                    <p className="text-lg font-mono font-bold text-white tracking-wide">{BANK_INFO.nequi.number}</p>
                    <p className="text-xs text-slate-400">{BANK_INFO.nequi.name}</p>
                  </div>
                </div>
                <button onClick={() => handleCopy(BANK_INFO.nequi.number)} className="p-2 text-slate-500 hover:text-white transition-colors">
                  <Copy className="h-5 w-5" />
                </button>
              </div>

              <div className="group flex items-center justify-between p-4 bg-slate-950 rounded-xl border border-slate-800 hover:border-purple-500/50 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-purple-900/50 rounded-lg flex items-center justify-center text-white font-bold text-[10px]">NU</div>
                  <div>
                    <p className="text-xs font-bold text-purple-400 uppercase">Cuenta NU</p>
                    <p className="text-lg font-mono font-bold text-white tracking-wide">{BANK_INFO.nu.number}</p>
                    <p className="text-xs text-slate-400">{BANK_INFO.nu.name}</p>
                  </div>
                </div>
                <button onClick={() => handleCopy(BANK_INFO.nu.number)} className="p-2 text-slate-500 hover:text-white transition-colors">
                  <Copy className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;