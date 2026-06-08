// Database of Events from the Festas de Ourense 2026 program (Bilingual GL / ES)
const EVENTS_DATA = [
  // Multi-day / General events
  {
    id: "g1",
    category: "xerais",
    days: ["all", "17", "18", "19", "20", "21"],
    mapsQuery: "Ponte Romana, Ourense",
    altStyle: false,
    startHour: 17, startMin: 0, startDay: 17,
    endHour: 22, endMin: 0, endDay: 21,
    gl: {
      title: "Mercado Medieval",
      datesText: "Do mércores <strong>17</strong> ao domingo <strong>21</strong>",
      timeText: "Apertura: mércores 17 ás 17.00 h. Horario: 11.00 a 01.00 h (domingo até as 22.00 h)",
      location: "Contorna da Ponte Romana"
    },
    es: {
      title: "Mercado Medieval",
      datesText: "Del miércoles <strong>17</strong> al domingo <strong>21</strong>",
      timeText: "Apertura: miércoles 17 a las 17:00 h. Horario: 11:00 a 01:00 h (domingo hasta las 22:00 h)",
      location: "Entorno del Puente Romano"
    }
  },
  {
    id: "g2",
    category: "xerais",
    days: ["all", "17", "18", "19", "20", "21"],
    mapsQuery: "Parque Barbaña, Ourense",
    altStyle: false,
    startHour: 19, startMin: 0, startDay: 17,
    endHour: 23, endMin: 0, endDay: 21,
    gl: {
      title: "Atraccións",
      datesText: "Do mércores <strong>17</strong> ao domingo <strong>21</strong>",
      timeText: "Mér, xov e ven: 19.00 a 02.00 h. Sáb: 17.00 a 02.00 h. Dom: 17.00 a 23.00 h",
      location: "Parque Barbaña"
    },
    es: {
      title: "Atracciones",
      datesText: "Del miércoles <strong>17</strong> al domingo <strong>21</strong>",
      timeText: "Miér, juev y vier: 19:00 a 02:00 h. Sáb: 17:00 a 02:00 h. Dom: 17:00 a 23:00 h",
      location: "Parque Barbaña"
    }
  },
  {
    id: "g3",
    category: "xerais",
    days: ["all", "17", "18", "19", "20", "21"],
    mapsQuery: "Parque da Ribeira de Canedo, Ourense",
    altStyle: false,
    startHour: 17, startMin: 0, startDay: 17,
    endHour: 20, endMin: 0, endDay: 21,
    gl: {
      title: "Xincana inchables acuáticos",
      datesText: "Do mércores <strong>17</strong> ao domingo <strong>21</strong>",
      timeText: "Mér, xov e ven: 17.00 a 20.00 h. Sáb e dom: 11.30 a 13.00 e 17.00 a 20.00 h",
      location: "Parque da Ribeira de Canedo"
    },
    es: {
      title: "Yincana de hinchables acuáticos",
      datesText: "Del miércoles <strong>17</strong> al domingo <strong>21</strong>",
      timeText: "Miér, juev y vier: 17:00 a 20:00 h. Sáb y dom: 11:30 a 13:00 y 17:00 a 20:00 h",
      location: "Parque de la Ribeira de Canedo"
    }
  },
  // Mércores 17
  {
    id: "c17_1",
    category: "musica",
    days: ["17"],
    mapsQuery: "Ponte Romana, Ourense",
    altStyle: false,
    startHour: 21, startMin: 0, startDay: 17,
    endHour: 22, endMin: 30, endDay: 17,
    gl: {
      title: "Orquestra Magma",
      datesText: "Mércores, <strong>17</strong> de xuño",
      timeText: "De 21.00 a 22.30 h",
      location: "Ponte Romana"
    },
    es: {
      title: "Orquesta Magma",
      datesText: "Miércoles, <strong>17</strong> de junio",
      timeText: "De 21:00 a 22:30 h",
      location: "Puente Romano"
    }
  },
  {
    id: "c17_2",
    category: "pregon",
    days: ["17"],
    mapsQuery: "Ponte Romana, Ourense",
    altStyle: true,
    startHour: 22, startMin: 30, startDay: 17,
    endHour: 23, endMin: 0, endDay: 17,
    gl: {
      title: "Pregón: Rober Bodegas",
      datesText: "Mércores, <strong>17</strong> de xuño",
      timeText: "22.30 h",
      location: "Ponte Romana"
    },
    es: {
      title: "Pregón: Rober Bodegas",
      datesText: "Miércoles, <strong>17</strong> de junio",
      timeText: "22:30 h",
      location: "Puente Romano"
    }
  },
  {
    id: "c17_3",
    category: "espectaculo",
    days: ["17"],
    mapsQuery: "Ponte Romana, Ourense",
    altStyle: true,
    startHour: 23, startMin: 0, startDay: 17,
    endHour: 23, endMin: 20, endDay: 17,
    gl: {
      title: "Espectáculo de Drons",
      datesText: "Mércores, <strong>17</strong> de xuño",
      timeText: "23.00 h",
      location: "Ponte Romana"
    },
    es: {
      title: "Espectáculo de Drones",
      datesText: "Miércoles, <strong>17</strong> de junio",
      timeText: "23:00 h",
      location: "Puente Romano"
    }
  },
  {
    id: "c17_4",
    category: "musica",
    days: ["17"],
    mapsQuery: "Ponte Romana, Ourense",
    altStyle: false,
    startHour: 23, startMin: 20, startDay: 17,
    endHour: 1, endMin: 0, endDay: 18,
    gl: {
      title: "Orquestra Magma",
      datesText: "Mércores, <strong>17</strong> de xuño",
      timeText: "De 23.20 a 01.00 h",
      location: "Ponte Romana"
    },
    es: {
      title: "Orquesta Magma",
      datesText: "Miércoles, <strong>17</strong> de junio",
      timeText: "De 23:20 a 01:00 h",
      location: "Puente Romano"
    }
  },
  // Xoves 18
  {
    id: "c18_1",
    category: "deporte",
    days: ["18"],
    mapsQuery: "Campo Volei Praia Oira, Ourense",
    altStyle: false,
    startHour: 18, startMin: 30, startDay: 18,
    endHour: 20, endMin: 0, endDay: 18,
    gl: {
      title: "Vólei Praia (Xornada portas abertas)",
      subtitle: "Maiores de 15 anos",
      datesText: "Xoves, <strong>18</strong> de xuño",
      timeText: "De 18.30 a 20.00 h",
      location: "Campo Vólei Praia de Oira"
    },
    es: {
      title: "Vóley Playa (Jornada puertas abiertas)",
      subtitle: "Mayores de 15 años",
      datesText: "Jueves, <strong>18</strong> de junio",
      timeText: "De 18:30 a 20:00 h",
      location: "Campo de Vóley Playa de Oira"
    }
  },
  {
    id: "c18_2",
    category: "musica",
    days: ["18"],
    mapsQuery: "Pavillón dos Remedios, Ourense",
    altStyle: true,
    startHour: 23, startMin: 0, startDay: 18,
    endHour: 1, endMin: 0, endDay: 19,
    gl: {
      title: "M-Clan",
      datesText: "Xoves, <strong>18</strong> de xuño",
      timeText: "De 23.00 a 01.00 h",
      location: "Exterior Pavillón dos Remedios"
    },
    es: {
      title: "M-Clan",
      datesText: "Jueves, <strong>18</strong> de junio",
      timeText: "De 23:00 a 01:00 h",
      location: "Exterior Pabellón de los Remedios"
    }
  },
  {
    id: "c18_3",
    category: "musica",
    days: ["18"],
    mapsQuery: "Pavillón dos Remedios, Ourense",
    altStyle: false,
    startHour: 1, startMin: 30, startDay: 19,
    endHour: 3, startMin: 30, endDay: 19,
    gl: {
      title: "A Gramola Sesión DJ’s",
      datesText: "Xoves, <strong>18</strong> de xuño (madrugada)",
      timeText: "De 01.30 a 03.30 h",
      location: "Exterior Pavillón dos Remedios"
    },
    es: {
      title: "A Gramola Sesión DJ's",
      datesText: "Jueves, <strong>18</strong> de junio (madrugada)",
      timeText: "De 01:30 a 03:30 h",
      location: "Exterior Pabellón de los Remedios"
    }
  },
  // Venres 19
  {
    id: "c19_1",
    category: "deporte",
    days: ["19"],
    mapsQuery: "Campo Volei Praia Oira, Ourense",
    altStyle: false,
    startHour: 18, startMin: 30, startDay: 19,
    endHour: 20, endMin: 0, endDay: 19,
    gl: {
      title: "Vólei Praia (Xornada portas abertas)",
      subtitle: "De 6 a 14 anos",
      datesText: "Venres, <strong>19</strong> de xuño",
      timeText: "De 18.30 a 20.00 h",
      location: "Campo Vólei Praia de Oira"
    },
    es: {
      title: "Vóley Playa (Jornada puertas abiertas)",
      subtitle: "De 6 a 14 años",
      datesText: "Viernes, <strong>19</strong> de junio",
      timeText: "De 18:30 a 20:00 h",
      location: "Campo de Vóley Playa de Oira"
    }
  },
  {
    id: "c19_2",
    category: "deporte",
    days: ["19"],
    mapsQuery: "Pavillón dos Remedios, Ourense",
    altStyle: false,
    startHour: 19, startMin: 0, startDay: 19,
    endHour: 22, endMin: 0, endDay: 19,
    gl: {
      title: "2.º Máster de Ourense de Futbolín",
      datesText: "Venres, <strong>19</strong> de xuño",
      timeText: "19.00 h",
      location: "Cancha Central do Pavillón dos Remedios"
    },
    es: {
      title: "2.º Máster de Ourense de Futbolín",
      datesText: "Viernes, <strong>19</strong> de junio",
      timeText: "19:00 h",
      location: "Cancha Central del Pabellón de los Remedios"
    }
  },
  {
    id: "c19_3",
    category: "musica",
    days: ["19"],
    mapsQuery: "Pavillón dos Remedios, Ourense",
    altStyle: true,
    startHour: 23, startMin: 0, startDay: 19,
    endHour: 1, endMin: 0, endDay: 20,
    gl: {
      title: "Miguel Ríos",
      datesText: "Venres, <strong>19</strong> de xuño",
      timeText: "De 23.00 a 01.00 h",
      location: "Exterior Pavillón dos Remedios"
    },
    es: {
      title: "Miguel Ríos",
      datesText: "Viernes, <strong>19</strong> de junio",
      timeText: "De 23:00 a 01:00 h",
      location: "Exterior Pabellón de los Remedios"
    }
  },
  {
    id: "c19_4",
    category: "musica",
    days: ["19"],
    mapsQuery: "Praza de Concepción Arenal, Ourense",
    altStyle: false,
    startHour: 1, startMin: 0, startDay: 20,
    endHour: 3, endMin: 30, endDay: 20,
    gl: {
      title: "América",
      datesText: "Venres, <strong>19</strong> de xuño (madrugada)",
      timeText: "De 01.00 a 03.30 h",
      location: "Praza de Concepción Arenal"
    },
    es: {
      title: "América",
      datesText: "Viernes, <strong>19</strong> de junio (madrugada)",
      timeText: "De 01:00 a 03:30 h",
      location: "Plaza de Concepción Arenal"
    }
  },
  // Sábado 20
  {
    id: "c20_1",
    category: "deporte",
    days: ["20"],
    mapsQuery: "Pavillón dos Remedios, Ourense",
    altStyle: false,
    startHour: 9, startMin: 0, startDay: 20,
    endHour: 1, endMin: 0, endDay: 21,
    gl: {
      title: "2.º Máster de Ourense de Futbolín",
      datesText: "Sábado, <strong>20</strong> de xuño",
      timeText: "De 09.00 a 01.00 h",
      location: "Pavillón Anexo dos Remedios"
    },
    es: {
      title: "2.º Máster de Ourense de Futbolín",
      datesText: "Sábado, <strong>20</strong> de junio",
      timeText: "De 09:00 a 01:00 h",
      location: "Pabellón Anexo de los Remedios"
    }
  },
  {
    id: "c20_2",
    category: "deporte",
    days: ["20"],
    mapsQuery: "Pavillón dos Remedios, Ourense",
    altStyle: false,
    startHour: 17, startMin: 0, startDay: 20,
    endHour: 22, endMin: 0, endDay: 20,
    gl: {
      title: "Breaking",
      datesText: "Sábado, <strong>20</strong> de xuño",
      timeText: "De 17.00 a 22.00 h",
      location: "Pistas exteriores do Pavillón dos Remedios"
    },
    es: {
      title: "Breaking",
      datesText: "Sábado, <strong>20</strong> de junio",
      timeText: "De 17:00 a 22:00 h",
      location: "Pistas exteriores del Pabellón de los Remedios"
    }
  },
  {
    id: "c20_3",
    category: "animacion",
    days: ["20"],
    mapsQuery: "Praza de Concepción Arenal, Ourense",
    altStyle: true,
    startHour: 19, startMin: 30, startDay: 20,
    endHour: 20, endMin: 30, endDay: 20,
    gl: {
      title: "Festa das Cores",
      datesText: "Sábado, <strong>20</strong> de xuño",
      timeText: "19.30 h",
      location: "Praza de Concepción Arenal"
    },
    es: {
      title: "Fiesta de los Colores",
      datesText: "Sábado, <strong>20</strong> de junio",
      timeText: "19:30 h",
      location: "Plaza de Concepción Arenal"
    }
  },
  {
    id: "c20_4",
    category: "infantil",
    days: ["20"],
    mapsQuery: "Praza de Concepción Arenal, Ourense",
    altStyle: true,
    startHour: 20, startMin: 30, startDay: 20,
    endHour: 22, endMin: 0, endDay: 20,
    gl: {
      title: "Cantajuego",
      datesText: "Sábado, <strong>20</strong> de xuño",
      timeText: "20.30 h",
      location: "Praza de Concepción Arenal"
    },
    es: {
      title: "Cantajuegos",
      datesText: "Sábado, <strong>20</strong> de junio",
      timeText: "20:30 h",
      location: "Plaza de Concepción Arenal"
    }
  },
  {
    id: "c20_5",
    category: "musica",
    days: ["20"],
    mapsQuery: "Pavillón dos Remedios, Ourense",
    altStyle: false,
    startHour: 22, startMin: 30, startDay: 20,
    endHour: 23, endMin: 45, endDay: 20,
    gl: {
      title: "Dirty Suc",
      datesText: "Sábado, <strong>20</strong> de xuño",
      timeText: "22.30 h",
      location: "Exterior Pavillón dos Remedios"
    },
    es: {
      title: "Dirty Suc",
      datesText: "Sábado, <strong>20</strong> de junio",
      timeText: "22:30 h",
      location: "Exterior Pabellón de los Remedios"
    }
  },
  {
    id: "c20_6",
    category: "musica",
    days: ["20"],
    mapsQuery: "Pavillón dos Remedios, Ourense",
    altStyle: true,
    startHour: 23, startMin: 45, startDay: 20,
    endHour: 1, endMin: 0, endDay: 21,
    gl: {
      title: "Hard Gz",
      datesText: "Sábado, <strong>20</strong> de xuño",
      timeText: "23.45 h",
      location: "Exterior Pavillón dos Remedios"
    },
    es: {
      title: "Hard Gz",
      datesText: "Sábado, <strong>20</strong> de junio",
      timeText: "23:45 h",
      location: "Exterior Pabellón de los Remedios"
    }
  },
  {
    id: "c20_7",
    category: "musica",
    days: ["20"],
    mapsQuery: "Praza de Concepción Arenal, Ourense",
    altStyle: false,
    startHour: 0, startMin: 0, startDay: 21,
    endHour: 2, startMin: 0, endDay: 21,
    gl: {
      title: "Conductores Suicidas",
      subtitle: "Tributo a Sabina",
      datesText: "Sábado, <strong>20</strong> de xuño",
      timeText: "00.00 h",
      location: "Praza de Concepción Arenal"
    },
    es: {
      title: "Conductores Suicidas",
      subtitle: "Tributo a Sabina",
      datesText: "Sábado, <strong>20</strong> de junio",
      timeText: "00:00 h",
      location: "Plaza de Concepción Arenal"
    }
  },
  {
    id: "c20_8",
    category: "musica",
    days: ["20"],
    mapsQuery: "Pavillón dos Remedios, Ourense",
    altStyle: false,
    startHour: 1, startMin: 30, startDay: 21,
    endHour: 3, startMin: 30, endDay: 21,
    gl: {
      title: "A Gramola Sesión DJ’s",
      datesText: "Sábado, <strong>20</strong> de xuño (madrugada)",
      timeText: "01.30 h",
      location: "Exterior Pavillón dos Remedios"
    },
    es: {
      title: "A Gramola Sesión DJ's",
      datesText: "Sábado, <strong>20</strong> de junio (madrugada)",
      timeText: "01:30 h",
      location: "Exterior Pabellón de los Remedios"
    }
  },
  // Domingo 21
  {
    id: "c21_1",
    category: "musica",
    days: ["21"],
    mapsQuery: "Ponte Romana, Ourense",
    altStyle: false,
    startHour: 21, startMin: 30, startDay: 21,
    endHour: 23, endMin: 50, endDay: 21,
    gl: {
      title: "Orquestra Função Públika",
      datesText: "Domingo, <strong>21</strong> de xuño",
      timeText: "De 21.30 a 23.50 h",
      location: "Ponte Romana"
    },
    es: {
      title: "Orquesta Função Públika",
      datesText: "Domingo, <strong>21</strong> de junio",
      timeText: "De 21:30 a 23:50 h",
      location: "Puente Romano"
    }
  },
  {
    id: "c21_2",
    category: "espectaculo",
    days: ["21"],
    mapsQuery: "Ponte Romana, Ourense",
    altStyle: true,
    startHour: 0, startMin: 0, startDay: 22,
    endHour: 0, endMin: 30, endDay: 22,
    gl: {
      title: "Fogos Artificiais",
      datesText: "Domingo, <strong>21</strong> de xuño",
      timeText: "00.00 h",
      location: "Ponte Romana"
    },
    es: {
      title: "Fuegos Artificiales",
      datesText: "Domingo, <strong>21</strong> de junio",
      timeText: "00:00 h",
      location: "Puente Romano"
    }
  }
];

// App State Management
let currentTab = 'all';
let searchQuery = '';
let favorites = JSON.parse(localStorage.getItem('ourense_favs')) || [];
let currentLang = localStorage.getItem('ourense_lang') || 'gl';

// Translations Dictionary for UI Elements
const UI_TRANSLATIONS = {
  gl: {
    splashTitle: "Festas de Ourense",
    splashDate: "17 a 21 de xuño 2026",
    btnEnter: "Ver Programa",
    splashFooter: "Máis información en ourense.gal",
    headerTitle: "Festas de Ourense",
    headerDate: "17 a 21 de xuño 2026",
    searchPlaceholder: "Buscar orquestra, concerto, lugar...",
    tabAll: "Xerais",
    tabFav: "Favoritos",
    eventLabel: "evento",
    eventsLabel: "eventos",
    dateHeaderAll: "Eventos Xerais / Varios días",
    dateHeaderFav: "Os meus Favoritos ⭐",
    dateHeaderDay: "{day} de xuño",
    dateHeaderPrefixGl: "",
    dateHeaderPrefixEs: "",
    emptyFavTitle: "Ningún favorito gardado",
    emptyFavDesc: "Preme na estrela dos teus eventos preferidos para atopalos aquí rapidamente.",
    emptySearchTitle: "Sen resultados",
    emptySearchDesc: "Non atopamos eventos que coincidan coa túa busca na pestana actual.",
    labelDate: "Data:",
    labelTime: "Horario:",
    labelPlace: "Lugar:",
    btnMaps: "Google Maps",
    btnShare: "Compartir",
    statusLive: "En directo 🔴",
    statusToday: "Hoxe",
    statusUpcoming: "Próximamente",
    statusPast: "Finalizado",
    toastFavSaved: "⭐ Gardado: ",
    toastFavRemoved: "Eliminado: ",
    toastCopied: "Copiado ao portapapeles! Listo para compartir.",
    toastCopyError: "Erro ao copiar.",
    pwaTitle: "Engadir á pantalla de inicio",
    pwaDesc: "Accede ao programa ao instante, incluso sen internet.",
    pwaCancel: "Agora non",
    pwaInstall: "Instalar",
    shareTextPrefix: "Festas de Ourense 2026: Non te perdas "
  },
  es: {
    splashTitle: "Fiestas de Ourense",
    splashDate: "17 a 21 de junio 2026",
    btnEnter: "Ver Programa",
    splashFooter: "Más información en ourense.gal",
    headerTitle: "Fiestas de Ourense",
    headerDate: "17 a 21 de junio 2026",
    searchPlaceholder: "Buscar orquesta, concierto, lugar...",
    tabAll: "Generales",
    tabFav: "Favoritos",
    eventLabel: "evento",
    eventsLabel: "eventos",
    dateHeaderAll: "Eventos Generales / Varios días",
    dateHeaderFav: "Mis Favoritos ⭐",
    dateHeaderDay: "{day} de junio",
    dateHeaderPrefixGl: "",
    dateHeaderPrefixEs: "",
    emptyFavTitle: "Ningún favorito guardado",
    emptyFavDesc: "Pulsa en la estrella de tus eventos preferidos para encontrarlos aquí rápidamente.",
    emptySearchTitle: "Sin resultados",
    emptySearchDesc: "No encontramos eventos que coincidan con tu búsqueda en la pestaña actual.",
    labelDate: "Fecha:",
    labelTime: "Horario:",
    labelPlace: "Lugar:",
    btnMaps: "Google Maps",
    btnShare: "Compartir",
    statusLive: "En directo 🔴",
    statusToday: "Hoy",
    statusUpcoming: "Próximamente",
    statusPast: "Finalizado",
    toastFavSaved: "⭐ Guardado: ",
    toastFavRemoved: "Eliminado: ",
    toastCopied: "¡Copiado al portapapeles! Listo para compartir.",
    toastCopyError: "Error al copiar.",
    pwaTitle: "Añadir a la pantalla de inicio",
    pwaDesc: "Accede al programa al instante, incluso sin internet.",
    pwaCancel: "Ahora no",
    pwaInstall: "Instalar",
    shareTextPrefix: "Fiestas de Ourense 2026: No te pierdas "
  }
};

// DOM Elements
const splashScreen = document.getElementById('splash-screen');
const appContainer = document.getElementById('app-container');
const btnEnter = document.getElementById('btn-enter');
const tabButtons = document.querySelectorAll('.tab-btn');
const tabTitle = document.getElementById('tab-title');
const eventCount = document.getElementById('event-count');
const eventsList = document.getElementById('events-list');
const searchInput = document.getElementById('search-input');
const searchClearBtn = document.getElementById('search-clear-btn');

// Language Buttons
const btnLangGl = document.getElementById('btn-lang-gl');
const btnLangEs = document.getElementById('btn-lang-es');

// Dynamic UI elements for translation
const splashTitleEl = document.querySelector('.splash-title');
const splashDateEl = document.getElementById('splash-date-badge');
const splashFooterEl = document.getElementById('splash-footer-text');
const headerTitleEl = document.querySelector('.header-main-title');
const headerDateEl = document.getElementById('header-date-badge');
const tabBtnAllEl = document.getElementById('tab-btn-all');
const tabBtnFavEl = document.getElementById('tab-btn-fav');
const favTabLabelEl = document.getElementById('fav-tab-label');
const pwaTitleEl = document.getElementById('pwa-banner-title');
const pwaDescEl = document.getElementById('pwa-banner-desc');
const pwaBtnCancel = document.getElementById('pwa-btn-cancel');
const pwaBtnInstall = document.getElementById('pwa-btn-install');
const footerLinkEl = document.getElementById('footer-info-link');

// PWA Install Prompt state
let deferredPrompt;
const pwaBanner = document.getElementById('pwa-install-banner');

// 1. Initialize App (Language and Render)
initApp();

function initApp() {
  setLanguage(currentLang);
  renderEvents();
}

// 2. Language Selection Handler
btnLangGl.addEventListener('click', () => setLanguage('gl'));
btnLangEs.addEventListener('click', () => setLanguage('es'));

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('ourense_lang', lang);
  
  // Update Selector Button styles
  if (lang === 'gl') {
    btnLangGl.classList.add('active');
    btnLangEs.classList.remove('active');
  } else {
    btnLangEs.classList.add('active');
    btnLangGl.classList.remove('active');
  }
  
  // Translate static HTML texts
  const t = UI_TRANSLATIONS[lang];
  
  splashTitleEl.textContent = t.splashTitle;
  splashDateEl.textContent = t.splashDate;
  btnEnter.textContent = t.btnEnter;
  splashFooterEl.textContent = t.splashFooter;
  
  headerTitleEl.textContent = t.headerTitle;
  headerDateEl.textContent = t.headerDate;
  tabBtnAllEl.textContent = t.tabAll;
  favTabLabelEl.textContent = t.tabFav;
  searchInput.placeholder = t.searchPlaceholder;
  
  pwaTitleEl.textContent = t.pwaTitle;
  pwaDescEl.textContent = t.pwaDesc;
  pwaBtnCancel.textContent = t.pwaCancel;
  pwaBtnInstall.textContent = t.pwaInstall;
  
  footerLinkEl.innerHTML = `${lang === 'gl' ? 'Máis' : 'Más'} información en <a href="https://ourense.gal" target="_blank" rel="noopener">ourense.gal</a>`;

  updateTabTitle();
  renderEvents();
}

// 3. Splash Screen Fade Out Logic
btnEnter.addEventListener('click', () => {
  splashScreen.classList.add('fade-out');
  setTimeout(() => {
    splashScreen.classList.add('hidden');
    appContainer.classList.remove('hidden');
    renderEvents();
  }, 600);
});

// 4. Navigation Tab Click Handler
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    tabButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    currentTab = button.getAttribute('data-tab');
    
    updateTabTitle();
    renderEvents();
  });
});

// Update Header Title depending on current tab
function updateTabTitle() {
  const t = UI_TRANSLATIONS[currentLang];
  if (currentTab === 'all') {
    tabTitle.textContent = t.dateHeaderAll;
  } else if (currentTab === 'favorites') {
    tabTitle.textContent = t.dateHeaderFav;
  } else {
    const dayNames = {
      '17': currentLang === 'gl' ? 'Mércores, 17' : 'Miércoles, 17',
      '18': currentLang === 'gl' ? 'Xoves, 18' : 'Jueves, 18',
      '19': currentLang === 'gl' ? 'Venres, 19' : 'Viernes, 19',
      '20': currentLang === 'gl' ? 'Sábado, 20' : 'Sábado, 20',
      '21': currentLang === 'gl' ? 'Domingo, 21' : 'Domingo, 21'
    };
    const formatted = t.dateHeaderDay.replace('{day}', dayNames[currentTab] || currentTab);
    tabTitle.textContent = formatted;
  }
}

// 5. Search Bar Logic
searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value.toLowerCase().trim();
  if (searchQuery.length > 0) {
    searchClearBtn.classList.remove('hidden');
  } else {
    searchClearBtn.classList.add('hidden');
  }
  renderEvents();
});

searchClearBtn.addEventListener('click', () => {
  searchInput.value = '';
  searchQuery = '';
  searchClearBtn.classList.add('hidden');
  renderEvents();
  searchInput.focus();
});

// 6. Calculate Event Real-time Status Badge
function getEventStatus(event) {
  const now = new Date();
  const t = UI_TRANSLATIONS[currentLang];
  
  // Event Date representations
  const eventStart = new Date(2026, 5, event.startDay, event.startHour, event.startMin);
  const eventEnd = new Date(2026, 5, event.endDay, event.endHour, event.endMin);

  if (now > eventStart && now < eventEnd) {
    return { class: 'status-live', text: t.statusLive };
  }
  
  const isToday = now.getFullYear() === 2026 && 
                  now.getMonth() === 5 && 
                  now.getDate() === event.startDay;
                  
  if (isToday && now < eventStart) {
    return { class: 'status-today', text: t.statusToday };
  }
  
  if (now > eventEnd) {
    return { class: 'status-past hidden', text: t.statusPast };
  }
  
  return { class: 'status-upcoming', text: t.statusUpcoming };
}

// 7. Render Events List
function renderEvents() {
  eventsList.innerHTML = '';
  const t = UI_TRANSLATIONS[currentLang];
  
  // Filter events by tab
  let filtered = EVENTS_DATA.filter(event => {
    if (currentTab === 'favorites') {
      return favorites.includes(event.id);
    }
    return event.days.includes(currentTab);
  });
  
  // Filter events by search query
  if (searchQuery.length > 0) {
    filtered = filtered.filter(event => {
      const data = event[currentLang];
      const matchTitle = data.title.toLowerCase().includes(searchQuery);
      const matchSubtitle = data.subtitle && data.subtitle.toLowerCase().includes(searchQuery);
      const matchLocation = data.location.toLowerCase().includes(searchQuery);
      return matchTitle || matchSubtitle || matchLocation;
    });
  }
  
  // Update count badge
  const label = filtered.length === 1 ? t.eventLabel : t.eventsLabel;
  eventCount.textContent = `${filtered.length} ${label}`;
  
  if (filtered.length === 0) {
    renderEmptyState();
    return;
  }
  
  // Render cards
  filtered.forEach(event => {
    const isFav = favorites.includes(event.id);
    const status = getEventStatus(event);
    
    // Skip rendering past events if they are marked hidden
    if (status.class.includes('hidden')) {
      return;
    }
    
    // Get bilingual content
    const data = event[currentLang];
    
    const card = document.createElement('div');
    card.className = `event-card ${event.altStyle ? 'styled-alt' : ''}`;
    
    card.innerHTML = `
      <button class="btn-favorite-float ${isFav ? 'is-active' : ''}" data-id="${event.id}" aria-label="${currentLang === 'gl' ? 'Engadir a favoritos' : 'Añadir a favoritos'}">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
      </button>
      
      <span class="event-status-badge ${status.class}">${status.text}</span>
      
      <div class="event-info">
        <h4 class="event-title">${data.title}</h4>
        ${data.subtitle ? `<p style="font-weight:600; color:var(--color-text-muted); margin-top:-4px; margin-bottom:8px; font-size:0.95rem;">${data.subtitle}</p>` : ''}
        
        <hr class="event-divider">
        
        <div class="event-detail-row">
          <span class="detail-label">${t.labelDate}</span>
          <span class="detail-value dates">${data.datesText}</span>
        </div>
        
        <div class="event-detail-row">
          <span class="detail-label">${t.labelTime}</span>
          <span class="detail-value time">${data.timeText}</span>
        </div>
        
        <div class="event-detail-row">
          <span class="detail-label">${t.labelPlace}</span>
          <span class="detail-value location">${data.location}</span>
        </div>
      </div>
      
      <div class="event-actions">
        <button class="btn-card-action btn-map" onclick="openMap('${event.mapsQuery}')">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          ${t.btnMaps}
        </button>
        <button class="btn-card-action btn-share" onclick="shareEvent('${data.title}', '${data.location}', '${data.timeText}')">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
          ${t.btnShare}
        </button>
      </div>
    `;
    
    eventsList.appendChild(card);
  });
  
  // Add listeners for the favorite buttons
  const favButtons = eventsList.querySelectorAll('.btn-favorite-float');
  favButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.getAttribute('data-id');
      toggleFavorite(id);
    });
  });
}

// 8. Empty States Render
function renderEmptyState() {
  const t = UI_TRANSLATIONS[currentLang];
  if (currentTab === 'favorites') {
    eventsList.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
        </div>
        <h4>${t.emptyFavTitle}</h4>
        <p>${t.emptyFavDesc}</p>
      </div>
    `;
  } else {
    eventsList.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </div>
        <h4>${t.emptySearchTitle}</h4>
        <p>${t.emptySearchDesc}</p>
      </div>
    `;
  }
}

// 9. Toggle Favorite Logic
function toggleFavorite(id) {
  const index = favorites.indexOf(id);
  const event = EVENTS_DATA.find(e => e.id === id);
  const t = UI_TRANSLATIONS[currentLang];
  const title = event[currentLang].title;
  
  if (index > -1) {
    favorites.splice(index, 1);
    showToast(`${t.toastFavRemoved}${title}`);
  } else {
    favorites.push(id);
    showToast(`${t.toastFavSaved}${title}`);
  }
  
  localStorage.setItem('ourense_favs', JSON.stringify(favorites));
  renderEvents();
}

// 10. Open Google Maps search in new tab
window.openMap = function(query) {
  const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  window.open(url, '_blank');
};

// 11. Share Event Logic
window.shareEvent = function(title, location, time) {
  const t = UI_TRANSLATIONS[currentLang];
  const shareText = `${t.shareTextPrefix}"${title}" en "${location}" (${time}). ${currentLang === 'gl' ? 'Consulta o programa oficial no móbil!' : '¡Consulta el programa oficial en el móvil!'}`;
  
  if (navigator.share) {
    navigator.share({
      title: title,
      text: shareText,
      url: window.location.href
    }).catch(console.error);
  } else {
    // Copy to clipboard fallback
    navigator.clipboard.writeText(shareText).then(() => {
      showToast(t.toastCopied);
    }).catch(() => {
      showToast(t.toastCopyError);
    });
  }
};

// 12. Toast Notification Helper
function showToast(message) {
  let toast = document.querySelector('.toast-msg');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast-msg';
    document.body.appendChild(toast);
  }
  
  toast.textContent = message;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

// -------------------------------------------------------------
// PWA INSTALLATION BANNER & SERVICE WORKER REGISTER
// -------------------------------------------------------------

// Register Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Service Worker registrado con éxito', reg))
      .catch(err => console.warn('Error al registrar el Service Worker', err));
  });
}

// Capture PWA Install trigger
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  pwaBanner.classList.remove('hidden');
});

pwaBtnInstall.addEventListener('click', () => {
  pwaBanner.classList.add('hidden');
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('Usuario aceptó la instalación de la PWA');
      } else {
        console.log('Usuario rechazó la instalación de la PWA');
      }
      deferredPrompt = null;
    });
  }
});

pwaBtnCancel.addEventListener('click', () => {
  pwaBanner.classList.add('hidden');
});
