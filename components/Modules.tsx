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

  // Colores sólidos para los módulos base (núcleo del programa)
  const badgeColors = [
    'bg-orange-500',
    'bg-blue-500',
    'bg-pink-500',
    'bg-green-500',
    'bg-cyan-500',
    'bg-red-500',
  ];
// 🔥 Módulos avanzados / Add-ons Premium
const PREMIUM_MODULES = [
  {
    id: 1,
    title: 'Automatización con ChateaPro',
    icon: Bot,
    description:
      'Implementación de flujos inteligentes en ChateaPro para captar, calificar y nutrir leads 24/7 sin depender de respuestas manuales.',
    details: [
      'Diseño de flujos conversacionales enfocados en venta',
      'Segmentación automática de leads según intención',
      'Integración con tu CRM o Google Sheets',
      'Buenas prácticas para no destruir la experiencia del usuario',
    ],
    tag: 'Add-on Premium',
    label: 'ChateaPro',
    price: '$180.000',
    priceLabel: 'Pago único por implementación',
    accent: 'from-cyan-500/60 via-blue-500/40 to-slate-900',
    iconColor: 'text-cyan-300',
    badgeColor: 'bg-cyan-500/10 text-cyan-200 border-cyan-400/50',
    buttonColor: 'bg-cyan-500 hover:bg-cyan-400 text-slate-900',
    shadowClass:
      'hover:border-cyan-500/70 hover:shadow-[0_18px_45px_-18px_rgba(34,211,238,0.8)]',
  },
  {
    id: 2,
    title: 'Dashboards Automáticos & Reporting',
    icon: LineChart,
    description:
      'Dashboards en tiempo real para ver ROAS, CPA, embudos y tomar decisiones con datos, no intuición.',
    details: [
      'Conexión a Meta, TikTok, Google Ads y CRM',
      'Reportes automáticos semanales/mensuales',
      'Visualizaciones claras para clientes y equipo',
      'Plantillas reutilizables para otros proyectos',
    ],
    tag: 'Add-on Premium',
    label: 'Dashboards',
    price: '$125.000',
    priceLabel: 'Setup + plantillas listas para usar',
    accent: 'from-emerald-500/60 via-teal-500/40 to-slate-900',
    iconColor: 'text-emerald-300',
    badgeColor: 'bg-emerald-500/10 text-emerald-200 border-emerald-400/50',
    buttonColor: 'bg-emerald-500 hover:bg-emerald-400 text-slate-900',
    shadowClass:
      'hover:border-emerald-500/70 hover:shadow-[0_18px_45px_-18px_rgba(16,185,129,0.8)]',
  },
  {
    id: 3,
    title: 'Agentes de WhatsApp & Automatización',
    icon: MessageCircle,
    description:
      'Configuración de agentes y automatizaciones en WhatsApp usando Zapier, Make o VAPI para escalar sin perder el toque humano.',
    details: [
      'Secuencias post-registro y post-compra',
      'Disparadores desde anuncios, formularios y landings',
      'Integraciones low-code (Zapier, Make, VAPI)',
      'Estrategias para no ser marcado como spam',
    ],
    tag: 'Add-on Premium',
    label: 'WhatsApp Agents',
    price: '$220.000',
    priceLabel: 'Implementación por flujo principal',
    accent: 'from-teal-400/60 via-cyan-500/40 to-slate-900',
    iconColor: 'text-teal-300',
    badgeColor: 'bg-teal-500/10 text-teal-200 border-teal-400/50',
    buttonColor: 'bg-teal-500 hover:bg-teal-400 text-slate-900',
    shadowClass:
      'hover:border-teal-500/70 hover:shadow-[0_18px_45px_-18px_rgba(20,184,166,0.8)]',
  },
  {
    id: 4,
    title: 'Planes de Contingencia Meta & TikTok',
    icon: ShieldAlert,
    description:
      'Diseño de planes B y C cuando tu cuenta se cae, se bloquea o cambian las reglas del juego en Meta y TikTok.',
    details: [
      'Mapa de riesgos por plataforma (bans, bloqueos, rechazos)',
      'Cuentas espejo, BM alternas y backups de activos',
      'Estructuras listas para reactivación rápida',
      'Guía paso a paso ante crisis reales',
    ],
    tag: 'Add-on Premium',
    label: 'Contingencias',
    price: '$250.000',
    priceLabel: 'Plan completo por marca/proyecto',
    accent: 'from-amber-500/70 via-orange-500/40 to-slate-900',
    iconColor: 'text-amber-300',
    badgeColor: 'bg-amber-500/10 text-amber-200 border-amber-400/60',
    buttonColor: 'bg-amber-500 hover:bg-amber-400 text-slate-900',
    shadowClass:
      'hover:border-amber-500/80 hover:shadow-[0_18px_45px_-18px_rgba(245,158,11,0.9)]',
  },
];
  return (
    <section id="programa" className="py-24 bg-slate-950 scroll-mt-20 relative">
      {/* Efecto Glow decorativo */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-800/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado */}
        <div className="relative rounded-3xl overflow-hidden mb-16 bg-slate-900 border border-slate-800 shadow-2xl">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-purple-900/20" />
            <img
              src="/metodologia-final-fenix.png"
              alt="Fondo encabezado FENIX"
              className="w-full h-full object-cover opacity-10 mix-blend-overlay"
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
              Diseñado para construir activos digitales reales. No solo
              aprenderás herramientas: aprenderás a pensar como estratega.
            </p>
          </div>
        </div>

        {/* Imagen protagonista */}
        <div className="mb-24 w-full relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
          <img
            src="/metodologia-final-fenix.png"
            alt="Ilustración del método FENIX"
            className="w-full h-[500px] object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950/80" />
        </div>

        {/* Módulos base */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500 mb-2">
                Núcleo del Programa
              </p>
              <h3 className="text-2xl font-bold text-white">Módulos Principales</h3>
            </div>
            <p className="text-xs text-slate-500 max-w-sm">
              Estos módulos vienen incluidos en todos los planes de la mentoría FENIX
              PRO.
            </p>
          </div>

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
                      className={`text-xs font-semibold uppercase tracking-wider text-white px-3 py-1 rounded-full ${badgeColor}`}
                    >
                      Módulo {module.id}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3">
                    {module.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed mb-5">
                    {module.description}
                  </p>

                  <ul className="space-y-2 border-t border-slate-800 pt-4">
                    {module.details.map((detail: string, idx: number) => (
                      <li
                        key={idx}
                        className="flex items-start text-sm text-slate-200"
                      >
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

        {/* 🔥 Add-ons Premium */}
        <div className="border-t border-slate-800 pt-16">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-amber-400 mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                Módulos Extra Premium
              </p>
              <h3 className="text-2xl font-bold text-white">Add-ons Estratégicos</h3>
            </div>
            <p className="text-xs text-slate-500 max-w-sm">
              Estos módulos se agregan sobre tus planes premium según el nivel de
              implementación que requieras.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PREMIUM_MODULES.map((module) => {
              const Icon = module.icon;

              return (
                <div
                  key={module.id}
                  className={`relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/80 p-6 shadow-xl transition-all duration-300 group ${module.shadowClass}`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${module.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="relative flex flex-col h-full gap-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-start gap-3">
                        <div className="w-11 h-11 rounded-2xl bg-slate-900 border border-slate-700 flex items-center justify-center">
                          <Icon
                            className={`w-6 h-6 ${module.iconColor}`}
                          />
                        </div>

                        <div>
                          <span
                            className={`inline-flex items-center text-[10px] font-semibold uppercase tracking-[0.18em] px-2 py-0.5 rounded-full border ${module.badgeColor}`}
                          >
                            {module.tag}
                          </span>
                          <h4 className="text-base sm:text-lg font-semibold text-white mt-2">
                            {module.title}
                          </h4>
                        </div>
                      </div>

                      {/* 💥 PRECIO GRANDE EN BLANCO */}
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
                        <li
                          key={idx}
                          className="flex items-start text-xs text-slate-200"
                        >
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
                        href="#inversion"
                        className={`inline-flex items-center justify-center px-4 py-2 rounded-full text-[11px] font-semibold uppercase tracking-[0.18em] shadow-md ${module.buttonColor}`}
                      >
                        Agregar a mi plan
                        <ArrowRight className="w-3.5 h-3.5 ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modules;
