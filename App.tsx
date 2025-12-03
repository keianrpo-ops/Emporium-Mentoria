import React from 'react';
import NavBar from './components/NavBar';
import Modules from './components/Modules';
import Pricing from './components/Pricing';
import GrowthChart from './components/GrowthChart';
import { HERO_DATA, METHODOLOGY, OBJECTIVE } from './constants';
import { Video, Clock, Calendar, ShieldCheck, ArrowRight, CheckCircle, Zap } from 'lucide-react';

const App: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // 🔹 Config de las 4 tarjetas de metodología (más profesional)
  const methodologyCards = [
    {
      icon: Video,
      title: 'Virtual & En Vivo',
      desc: 'Interacción real, nada grabado.',
      accent: 'from-blue-500/60 via-purple-500/40 to-cyan-500/20',
      iconColor: 'text-blue-300',
      badge: 'bg-blue-500/10 text-blue-200 border-blue-400/40',
      tag: 'Sesiones en directo',
    },
    {
      icon: Clock,
      title: 'Intensidad',
      desc: '6 horas semanales de pura práctica.',
      accent: 'from-purple-500/60 via-fuchsia-500/30 to-slate-900',
      iconColor: 'text-purple-300',
      badge: 'bg-purple-500/10 text-purple-200 border-purple-400/40',
      tag: 'Enfoque Deep Work',
    },
    {
      icon: Calendar,
      title: 'Duración',
      desc: '4 semanas de transformación.',
      accent: 'from-emerald-500/60 via-teal-500/30 to-slate-900',
      iconColor: 'text-emerald-300',
      badge: 'bg-emerald-500/10 text-emerald-200 border-emerald-400/40',
      tag: 'Sprint Intensivo',
    },
    {
      icon: ShieldCheck,
      title: 'Garantía',
      desc: 'Material de apoyo vitalicio.',
      accent: 'from-orange-500/60 via-amber-500/30 to-slate-900',
      iconColor: 'text-orange-300',
      badge: 'bg-orange-500/10 text-orange-200 border-orange-400/40',
      tag: 'Soporte Permanente',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-200 selection:bg-purple-500 selection:text-white">
      <NavBar />

      {/* Hero */}
      <section id="inicio" className="relative pt-32 pb-40 flex items-center overflow-hidden bg-slate-950 scroll-mt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center py-1 px-3 rounded-full bg-slate-900 border border-purple-500/50 text-purple-300 text-xs font-bold tracking-wider uppercase mb-8 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                <Zap className="w-3 h-3 mr-2 text-yellow-400 fill-yellow-400" />
                Mentoría Estratégica 1 a 1
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-tight text-white">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400">
                  FENIX PRO
                </span>
                <br />
                {HERO_DATA.title}
              </h1>
              <p className="text-lg sm:text-xl text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
                {HERO_DATA.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
                <a
                  href="#inversion"
                  onClick={(e) => scrollToSection(e, 'inversion')}
                  className="cursor-pointer inline-flex items-center justify-center px-8 py-4 border-0 text-base font-bold rounded-full text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)] transform hover:-translate-y-1"
                >
                  {HERO_DATA.cta} <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a
                  href="#programa"
                  onClick={(e) => scrollToSection(e, 'programa')}
                  className="cursor-pointer inline-flex items-center justify-center px-8 py-4 border border-slate-700 bg-slate-900/50 backdrop-blur-sm text-base font-bold rounded-full text-slate-300 hover:text-white hover:bg-slate-800 transition-all"
                >
                  Ver Programa
                </a>
              </div>
            </div>

            <div className="hidden lg:block relative">
              <div className="relative z-10 bg-gradient-to-b from-slate-800 to-slate-900 p-1 rounded-3xl shadow-2xl border border-slate-700/50">
                <div className="bg-slate-950 rounded-[22px] overflow-hidden">
                  <GrowthChart />
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-orange-500/30 blur-3xl rounded-full" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-500/30 blur-3xl rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* Objetivo */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1 group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-orange-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500" />
              <img
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop"
                alt="Cyberpunk Brain Technology"
                className="relative rounded-2xl shadow-2xl w-full h-auto object-cover z-10 grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                {OBJECTIVE.title}
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed mb-8 border-l-4 border-purple-500 pl-6">
                {OBJECTIVE.description}
              </p>
              <ul className="space-y-4">
                {['Mentalidad Estratégica', 'Dominio Técnico de Plataformas', 'Independencia de Agencias'].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-300">
                    <div className="bg-slate-800 p-1.5 rounded-full mr-3 shrink-0 border border-slate-700">
                      <CheckCircle className="w-4 h-4 text-purple-400" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Metodología FENIX */}
      <section id="metodologia" className="py-24 bg-slate-950 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Metodología <span className="text-purple-500">FENIX</span>
            </h2>
            <p className="text-slate-400 text-lg">Aprendizaje acelerado mediante inmersión práctica.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* 🔥 TARJETAS SUPER PROFESIONALES */}
            <div className="grid sm:grid-cols-2 gap-6">
              {methodologyCards.map((item, idx) => {
                const Icon = item.icon;
                const isPrimary = idx === 0;

                return (
                  <div
                    key={idx}
                    className={`group relative ${isPrimary ? 'sm:col-span-2' : ''}`}
                  >
                    {/* Glow exterior */}
                    <div
                      className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.accent} opacity-0 group-hover:opacity-70 blur-2xl transition duration-500`}
                    />
                    {/* Borde degradado */}
                    <div className={`relative rounded-3xl p-[1px] bg-gradient-to-br ${item.accent}`}>
                      <div className="rounded-3xl bg-slate-950/90 border border-slate-800/80 px-6 py-5 flex flex-col gap-4 shadow-xl group-hover:border-slate-100/30 transition-all duration-300">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <div className="shrink-0 rounded-2xl bg-slate-900/90 border border-slate-800 p-3 group-hover:scale-105 group-hover:-translate-y-0.5 transition-transform duration-300">
                              <Icon className={`w-6 h-6 ${item.iconColor}`} />
                            </div>
                            <div>
                              <p className="text-[11px] uppercase tracking-[0.2em] text-slate-500 mb-1">
                                {item.tag}
                              </p>
                              <h3 className="font-semibold text-white text-base sm:text-lg">
                                {item.title}
                              </h3>
                            </div>
                          </div>
                          <span
                            className={`text-[10px] font-semibold uppercase tracking-[0.18em] px-2.5 py-1 rounded-full border ${item.badge}`}
                          >
                            FENIX
                          </span>
                        </div>

                        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                          {item.desc}
                        </p>

                        <div className="flex items-center justify-between pt-1">
                          <div className="flex items-center text-[11px] font-semibold tracking-[0.18em] uppercase text-slate-500 group-hover:text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mr-2 group-hover:bg-blue-400 transition-colors" />
                            Enfoque Clave
                          </div>
                          {isPrimary && (
                            <span className="text-[10px] font-semibold text-slate-400 group-hover:text-slate-100 transition">
                              Ideal para arrancar →
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Imagen lateral */}
            <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
              <img
                src="/metodologia.png"
                alt="Conexión Neuronal"
                className="absolute inset-0 w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <p className="font-bold text-2xl text-white mb-2">Conexión Neuronal</p>
                <p className="text-slate-300 text-sm">
                  Conectamos los puntos entre tu producto y tu cliente ideal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modules />
      <Pricing />

      <footer className="bg-black text-slate-500 py-16 border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h4 className="text-white text-xl font-bold mb-6 tracking-wider">FENIX PRO</h4>
              <p className="text-sm leading-relaxed max-w-xs">
                La evolución de la educación digital. Estrategias reales para el mercado actual.
              </p>
            </div>
            <div>
              <h4 className="text-white text-lg font-bold mb-6">Contacto Directo</h4>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-slate-300">Juan Carlos Restrepo</span>
              </div>
              <p className="text-xs">Mentoría Estratégica Personalizada</p>
            </div>
            <div>
              <h4 className="text-white text-lg font-bold mb-6">Enlaces</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#inicio" className="hover:text-purple-400 transition-colors">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#programa" className="hover:text-purple-400 transition-colors">
                    Programa
                  </a>
                </li>
                <li>
                  <a href="#inversion" className="hover:text-purple-400 transition-colors">
                    Planes VIP
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-slate-900 text-center text-xs text-slate-600">
            &copy; {new Date().getFullYear()} FENIX PRO. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
