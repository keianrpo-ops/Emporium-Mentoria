import React from 'react';
import { MODULES } from '../constants';
import { CheckCircle2, Share2 } from 'lucide-react';

const Modules: React.FC = () => {
  console.log('✅ Modules.tsx cargado correctamente');

  // Colores sólidos para los módulos A–F
  const badgeColors = [
    'bg-orange-500',
    'bg-blue-500',
    'bg-pink-500',
    'bg-green-500',
    'bg-cyan-500',
    'bg-red-500',
  ];

  return (
    <section id="programa" className="py-24 bg-slate-950 scroll-mt-20 relative">
      {/* Glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-800/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado */}
        <div className="relative rounded-3xl overflow-hidden mb-16 bg-slate-900 border border-slate-800 shadow-2xl">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-purple-900/20" />
            <img
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop"
              alt="Fondo abstracto IA"
              className="w-full h-full object-cover opacity-20 mix-blend-overlay"
              loading="lazy"
            />
          </div>
          <div className="relative z-10 p-8 md:p-16 max-w-3xl">
            <div className="inline-flex items-center text-purple-400 font-bold tracking-widest uppercase text-xs mb-4 border border-purple-500/30 px-3 py-1 rounded-full bg-purple-500/10">
              <Share2 className="w-4 h-4 mr-2" />
              Plan de Estudios Estratégico
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Programa{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                Intensivo
              </span>
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl">
              Diseñado para construir activos digitales reales. No solo aprenderás herramientas: aprenderás a pensar como estratega.
            </p>
          </div>
        </div>

        {/* Imagen */}
        <div className="mb-24 w-full relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
          <img
            src="/metodologia-final-fenix.png"
            alt="Ilustración del método FENIX"
            className="w-full h-[500px] object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/80" />
        </div>

        {/* Módulos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MODULES.map((module, index) => {
            const Icon = module.icon;
            const badgeColor = badgeColors[index % badgeColors.length];

            return (
              <div
                key={module.id}
                className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-purple-500 transition-all duration-300 shadow-md group hover:-translate-y-1 hover:shadow-[0_8px_30px_-10px_rgba(168,85,247,0.3)]"
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-slate-800 border border-slate-700">
                    <Icon className="h-6 w-6 text-purple-400" />
                  </div>
                  <span
                    className={`text-xs font-semibold uppercase tracking-wider text-white ${badgeColor} px-3 py-1 rounded-full border border-white/10 shadow-md`}
                  >
                    Módulo {module.id}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-3">{module.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-5">
                  {module.description}
                </p>

                <ul className="space-y-2 border-t border-slate-800 pt-4">
                  {module.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-200">
                      <CheckCircle2 className="h-4 w-4 text-green-400 mr-2 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Modules;
