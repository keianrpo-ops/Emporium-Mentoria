import { 
  BookOpen, 
  Facebook, 
  Smartphone, 
  ShoppingBag, 
  MessageSquare, 
  Zap, 
  Users,
  Crown
} from 'lucide-react';
import { CourseModule, PricingPlan } from './types';

export const HERO_DATA = {
  title: "Estrategia, Publicidad y E-commerce",
  subtitle: "Deja de quemar dinero en anuncios. Domina la estrategia digital con una mentoría 1 a 1 diseñada para escalar tu negocio.",
  cta: "Ver Planes y Precios",
};

export const OBJECTIVE = {
  title: "Tu Renacimiento Digital",
  description: "Nuestro objetivo es instalar en tu negocio un 'cerebro digital' propio. Te formamos paso a paso para que domines las plataformas publicitarias y tu tienda online sin depender de terceros."
};

export const METHODOLOGY = {
  duration: "4 Semanas (Ciclo Inicial)",
  sessions: "3 Sesiones Semanales",
  hours: "2 Horas por sesión (6h semanales)",
  mode: "Virtual (Google Meet / Zoom)",
  level: "Principiante a Avanzado",
  extras: [
    "Grabaciones de por vida",
    "Auditoría de activos digitales",
    "Soporte directo por WhatsApp"
  ]
};

export const MODULES: CourseModule[] = [
  {
    id: 'A',
    title: 'Mindset & Fundamentos',
    icon: BookOpen,
    description: 'La psicología detrás de la venta online.',
    details: [
      'Tráfico pago vs. tráfico orgánico.',
      'Algoritmos: Cómo "piensan" las plataformas.',
      'Estructura de campañas ganadoras.',
      'Interpretación de métricas clave.'
    ]
  },
  {
    id: 'B',
    title: 'Meta Ads (FB & IG)',
    icon: Facebook,
    description: 'Domina la red publicitaria más potente.',
    details: [
      'Configuración profesional del Business Manager.',
      'Pixel, API de Conversiones y Dominios.',
      'Estrategias de Escalamiento (CBO vs ABO).',
      'Retargeting Avanzado.'
    ]
  },
  {
    id: 'C',
    title: 'TikTok Ads',
    icon: Smartphone,
    description: 'Viralidad y ventas masivas.',
    details: [
      'Configuración de TikTok Business.',
      'Creativos UGC que convierten.',
      'Estrategias de puja y segmentación.',
      'Análisis de tendencias.'
    ]
  },
  {
    id: 'D',
    title: 'E-commerce Master',
    icon: ShoppingBag,
    description: 'Tu tienda, tu máquina de ventas.',
    details: [
      'Optimización de Shopify/Woocommerce.',
      'Páginas de producto de alta conversión.',
      'Recuperación de carritos y Checkout.',
      'Apps secretas para aumentar el ticket medio.'
    ]
  },
  {
    id: 'E',
    title: 'Automatización (CRM)',
    icon: MessageSquare,
    description: 'Ventas 24/7 sin esfuerzo manual.',
    details: [
      'Flujos de WhatsApp y Email Marketing.',
      'Seguimiento automático de clientes.',
      'Fidelización post-compra.'
    ]
  },
  {
    id: 'F',
    title: 'IA & Ads Automáticos',
    icon: Zap,
    description: 'El futuro es hoy.',
    details: [
      'Uso de IA para copies y creativos.',
      'Campañas Advantage+ y PMAX.',
      'Cuándo automatizar y cuándo intervenir.'
    ]
  },
  {
    id: 'G',
    title: 'Mentoría en Vivo',
    icon: Users,
    description: 'Sin teoría aburrida, pura práctica.',
    details: [
      'Lanzamiento de campañas en tiempo real.',
      'Auditoría y corrección de errores.',
      'Solución de bloqueos publicitarios.'
    ]
  }
];

export const PRICING: PricingPlan[] = [
  {
    title: "Plan Semanal",
    price: "$350.000",
    period: "COP / semana",
    features: [
      "Iniciación Rápida",
      "6 horas personalizadas",
      "3 sesiones prácticas",
      "Grabaciones incluidas",
      "Soporte básico"
    ],
    recommended: false
  },
  {
    title: "Plan Mensual",
    price: "$1.200.000",
    period: "COP / mes",
    features: [
      "Programa Completo (4 Semanas)",
      "24 horas de entrenamiento",
      "Ahorras $200.000 COP",
      "Soporte prioritario WhatsApp",
      "Estrategia integral multicanal",
      "Auditoría de tienda incluida"
    ],
    recommended: true
  },
  {
    title: "Plan Anual VIP",
    price: "$10.080.000",
    period: "COP / año",
    features: [
      "Partner de Crecimiento (12 Meses)",
      "Ahorras 30% ($4.3M COP)",
      "Consultoría estratégica mensual",
      "Acceso a todas las actualizaciones",
      "Línea directa de emergencia",
      "Monitoría de resultados mensual"
    ],
    recommended: false
  }
];

export const BANK_INFO = {
  nequi: {
    name: "Juan Carlos Restrepo",
    number: "3244490660"
  },
  nu: {
    name: "Juan Carlos Restrepo",
    number: "58079912"
  }
};