/** Datos del sitio. Edita aquí dominio, enlace de Play y contacto. */
export const SITE = {
  name: 'Xylia',
  tagline: 'Disciplina diaria que sí se queda.',
  description:
    'Xylia es la app de disciplina para organizar hábitos, objetivos y proyectos, y desconectarte del móvil de verdad. Prueba 7 días gratis.',
  playUrl: 'https://play.google.com/store/apps/details?id=com.setperu.xylia',
  contactEmail: 'soporte@xylia.app',
  company: 'Xylia',
  legalUpdated: '24 de octubre de 2026',
};

export const PLANS = [
  {
    id: 'basic',
    name: 'Básico',
    price: 3,
    blurb: 'Lo esencial para construir tu rutina.',
    features: [
      'Tareas y hábitos diarios',
      'Objetivos y calendario',
      'Hasta 3 proyectos activos',
      'Modo Desconexión',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 5,
    highlight: true,
    blurb: 'Para quien va en serio con su disciplina.',
    features: [
      'Todo lo del plan Básico',
      'Proyectos ilimitados',
      'Reportes y estadísticas completas',
      'Historial de desconexión',
    ],
  },
];
