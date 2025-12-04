import React from 'react';
import { MODULES } from '../constants';
import {
  CheckCircle2,
  Share2,
  Bot,
  LineChart,
  MessageCircle,
  ShieldAlert,
  ArrowRight,
} from 'lucide-react';

const Modules: React.FC = () => {
  console.log('✅ Modules.tsx cargado correctamente');

  const badgeColors = [
    'bg-orange-500',
    'bg-blue-500',
    'bg-pink-500',
    'bg-green-500',
    'bg-cyan-500',
    'bg-red-500',
  ];

  const PREMIUM_MODULES = [
    {
      id: 1,
      title: 'Automatización con ChateaPro',
      icon: Bot,
      description: 'Curso intensivo: 2h diarias, 3 veces por semana durante 5 semanas.',
      details: [
        'Diseño de flujos conversacionales enfocados en venta',
        'Segmentación automática de leads según intención',
        'Integración con tu CRM o Google Sheets',
        'Buenas prácticas para no destruir la experiencia del usuario',
      ],
      tag: 'Add-on Premium',
      label: 'ChateaPro',
      price: '$180.000',
      priceLabel: 'Suscripción semanal · 5 semanas',
      link: 'https://mpago.li/1tZVfWZ',
      accent: 'from-cyan-500/60 via-blue-500/40 to-slate-900',
      iconColor: 'text-cyan-300',
      badgeColor: 'bg-cyan-500/10 text-cyan-200 border-cyan-400/50',
      buttonColor: 'bg-cyan-500 hover:bg-cyan-400 text-slate-900',
      shadowClass: 'hover:border-cyan-500/70 hover:shadow-[0_18px_45px_-18px_rgba(34,211,238,0.8)]',
    },
    {
      id: 2,
      title: 'Dashboards Automáticos & Reporting',
      icon: LineChart,
      description: 'Curso intensivo: 2h diarias, 3 veces por semana durante 5 semanas.',
      details: [
        'Conexión a Meta, TikTok, Google Ads y CRM',
        'Reportes automáticos semanales/mensuales',
        'Visualizaciones claras para clientes y equipo',
        'Plantillas reutilizables para otros proyectos',
      ],
      tag: 'Add-on Premium',
      label: 'Dashboards',
      price: '$125.000',
      priceLabel: 'Suscripción semanal · 5 semanas',
      link: 'https://mpago.li/14datpK',
      accent: 'from-emerald-500/60 via-teal-500/40 to-slate-900',
      iconColor: 'text-emerald-300',
      badgeColor: 'bg-emerald-500/10 text-emerald-200 border-emerald-400/50',
      buttonColor: 'bg-emerald-500 hover:bg-emerald-400 text-slate-900',
      shadowClass: 'hover:border-emerald-500/70 hover:shadow-[0_18px_45px_-18px_rgba(16,185,129,0.8)]',
    },
    {
      id: 3,
      title: 'Agentes de WhatsApp & Automatización',
      icon: MessageCircle,
      description: 'Curso intensivo: 2h diarias, 3 veces por semana durante 5 semanas.',
      details: [
        'Secuencias post-registro y post-compra',
        'Disparadores desde anuncios, formularios y landings',
        'Integraciones low-code (Zapier, Make, VAPI)',
        'Estrategias para no ser marcado como spam',
      ],
      tag: 'Add-on Premium',
      label: 'WhatsApp Agents',
      price: '$220.000',
      priceLabel: 'Suscripción semanal · 5 semanas',
      link: 'https://mpago.li/1Vp8nw2',
      accent: 'from-teal-400/60 via-cyan-500/40 to-slate-900',
      iconColor: 'text-teal-300',
      badgeColor: 'bg-teal-500/10 text-teal-200 border-teal-400/50',
      buttonColor: 'bg-teal-500 hover:bg-teal-400 text-slate-900',
      shadowClass: 'hover:border-teal-500/70 hover:shadow-[0_18px_45px_-18px_rgba(20,184,166,0.8)]',
    },
    {
      id: 4,
      title: 'Planes de Contingencia Meta & TikTok',
      icon: ShieldAlert,
      description: 'Curso intensivo: 2h diarias, 3 veces por semana durante 5 semanas.',
      details: [
        'Mapa de riesgos por plataforma (bans, bloqueos, rechazos)',
        'Cuentas espejo, BM alternas y backups de activos',
        'Estructuras listas para reactivación rápida',
        'Guía paso a paso ante crisis reales',
      ],
      tag: 'Add-on Premium',
      label: 'Contingencias',
      price: '$250.000',
      priceLabel: 'Suscripción semanal · 5 semanas',
      link: 'https://mpago.li/2nL2494',
      accent: 'from-amber-500/70 via-orange-500/40 to-slate-900',
      iconColor: 'text-amber-300',
      badgeColor: 'bg-amber-500/10 text-amber-200 border-amber-400/60',
      buttonColor: 'bg-amber-500 hover:bg-amber-400 text-slate-900',
      shadowClass: 'hover:border-amber-500/80 hover:shadow-[0_18px_45px_-18px_rgba(245,158,11,0.9)]',
    },
  ];

  return (
    <section id="programa" className="py-24 bg-slate-950 scroll-mt-20 relative">
      {/* ... otras secciones ... */}

      {/* 🔥 Módulos Premium */}
      <div className="border-t border-slate-800 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PREMIUM_MODULES.map((module) => {
            const Icon = module.icon;
            return (
              <div
                key={module.id}
                className={`relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 p-6 shadow-xl transition-all duration-300 group ${module.shadowClass}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${module.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative flex flex-col h-full gap-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <div className="w-11 h-11 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center">
                        <Icon className={`w-6 h-6 ${module.iconColor}`} />
                      </div>
                      <div>
                        <span className={`inline-flex items-center text-[10px] font-semibold uppercase tracking-[0.18em] px-2 py-0.5 rounded-full border ${module.badgeColor}`}>
                          {module.tag}
                        </span>
                        <h4 className="text-base sm:text-lg font-semibold text-white mt-2">
                          {module.title}
                        </h4>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500 mb-1">
                        Desde
                      </p>
                      <p className="text-3xl font-extrabold text-white leading-none drop-shadow-[0_0_8px_rgba(0,0,0,0.5)]">
                        {module.price}
                      </p>
                      <p className="text-[11px] text-slate-400 mt-1">
                        {module.priceLabel}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-200 leading-relaxed">
                    {module.description}
                  </p>

                  <ul className="space-y-2 border-t border-slate-800 pt-3">
                    {module.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-xs text-slate-200">
                        <CheckCircle2 className="h-3.5 w-3.5 text-amber-300 mr-2 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-3 flex items-center justify-between gap-3">
                    <p className="text-[11px] text-slate-400 italic">
                      * Se suma como extra a tu plan actual de mentoría.
                    </p>
                    <a
                      href={module.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center justify-center px-4 py-2 rounded-full text-[11px] font-semibold uppercase tracking-[0.18em] shadow-md ${module.buttonColor}`}
                    >
                      Pagar ahora
                      <ArrowRight className="w-3.5 h-3.5 ml-2" />
                    </a>
                  </div>
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
