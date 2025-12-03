import React from 'react';
import { MODULES } from '../constants';
import { CheckCircle2, BrainCircuit } from 'lucide-react';

const Modules: React.FC = () => {
  return (
    <section id="programa" className="py-24 bg-slate-950 scroll-mt-20 relative">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="relative rounded-3xl overflow-hidden mb-16 bg-slate-900 border border-slate-800 shadow-2xl">
          <div className="absolute inset-0">
             <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-purple-900/20"></div>
             <img 
               src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop" 
               alt="AI Background" 
               className="w-full h-full object-cover opacity-20 mix-blend-overlay"
             />
          </div>
          <div className="relative z-10 p-8 md:p-16 max-w-3xl">
            <div className="inline-flex items-center text-purple-400 font-bold tracking-widest uppercase text-xs mb-4 border border-purple-500/30 px-3 py-1 rounded-full bg-purple-500/10">
              <BrainCircuit className="w-4 h-4 mr-2" />
              Plan de Estudios Estratégico
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Programa <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">Intensivo</span></h2>
            <p className="text-lg text-slate-400 mb-0 max-w-2xl">
              Diseñado para construir activos digitales reales. No solo aprenderás a usar las herramientas, aprenderás a pensar como un estratega.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MODULES.map((module) => {
            const Icon = module.icon;
            return (
              <div 
                key={module.id} 
                className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-800 hover:border-purple-500/50 hover:bg-slate-800 transition-all duration-300 group flex flex-col h-full hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(168,85,247,0.2)]"
              >
                <div className="flex items-center justify-between mb-6">
                   <div className="w-12 h-12 bg-slate-950 rounded-xl flex items-center justify-center border border-slate-800 group-hover:border-purple-500/50 transition-colors">
                     <Icon className="h-6 w-6 text-slate-400 group-hover:text-purple-400 transition-colors" />
                   </div>
                   <span className="text-xs font-bold uppercase tracking-wider text-slate-500 bg-slate-950 px-3 py-1 rounded border border-slate-800">
                    Módulo {module.id}
                   </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">{module.title}</h3>
                <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">{module.description}</p>
                
                <div className="pt-6 border-t border-slate-800 mt-auto">
                   <ul className="space-y-3">
                    {module.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-300">
                        <CheckCircle2 className="h-4 w-4 text-purple-500 mr-3 mt-0.5 shrink-0" />
                        <span className="leading-snug">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Modules;