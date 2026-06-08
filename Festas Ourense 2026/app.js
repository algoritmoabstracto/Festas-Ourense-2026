// Database of Events from the Festas de Ourense 2026 program
const EVENTS_DATA = [
  // Multi-day / General events
  {
    id: "g1",
    title: "Mercado Medieval",
    category: "xerais",
    days: ["all", "17", "18", "19", "20", "21"],
    datesText: "Do mércores <strong>17</strong> ao domingo <strong>21</strong>",
    timeText: "Apertura: mércores 17 ás 17.00 h. Horario: 11.00 a 01.00 h (domingo até as 22.00 h)",
    location: "Contorna da Ponte Romana",
    mapsQuery: "Ponte Romana, Ourense",
    altStyle: false,
    // Date ranges for live state check
    startHour: 17, startMin: 0, startDay: 17,
    endHour: 22, endMin: 0, endDay: 21
  },
  {
    id: "g2",
    title: "Atraccións",
    category: "xerais",
    days: ["all", "17", "18", "19", "20", "21"],
    datesText: "Do mércores <strong>17</strong> ao domingo <strong>21</strong>",
    timeText: "Mér, xov e ven: 19.00 a 02.00 h. Sáb: 17.00 a 02.00 h. Dom: 17.00 a 23.00 h",
    location: "Parque Barbaña",
    mapsQuery: "Parque Barbaña, Ourense",
    altStyle: false,
    startHour: 19, startMin: 0, startDay: 17,
    endHour: 23, endMin: 0, endDay: 21
  },
  {
    id: "g3",
    title: "Xincana inchables acuáticos",
    category: "xerais",
    days: ["all", "17", "18", "19", "20", "21"],
    datesText: "Do mércores <strong>17</strong> ao domingo <strong>21</strong>",
    timeText: "Mér, xov e ven: 17.00 a 20.00 h. Sáb e dom: 11.30 a 13.00 e 17.00 a 20.00 h",
    location: "Parque da Ribeira de Canedo",
    mapsQuery: "Parque da Ribeira de Canedo, Ourense",
    altStyle: false,
    startHour: 17, startMin: 0, startDay: 17,
    endHour: 20, endMin: 0, endDay: 21
  },
  // Mércores 17
  {
    id: "c17_1",
    title: "Orquestra Magma",
    category: "musica",
    days: ["17"],
    datesText: "Mércores, <strong>17</strong> de xuño",
    timeText: "De 21.00 a 22.30 h",
    location: "Ponte Romana",
    mapsQuery: "Ponte Romana, Ourense",
    altStyle: false,
    startHour: 21, startMin: 0, startDay: 17,
    endHour: 22, endMin: 30, endDay: 17
  },
  {
    id: "c17_2",
    title: "Pregón: Rober Bodegas",
    category: "pregon",
    days: ["17"],
    datesText: "Mércores, <strong>17</strong> de xuño",
    timeText: "22.30 h",
    location: "Ponte Romana",
    mapsQuery: "Ponte Romana, Ourense",
    altStyle: true,
    startHour: 22, startMin: 30, startDay: 17,
    endHour: 23, endMin: 0, endDay: 17
  },
  {
    id: "c17_3",
    title: "Espectáculo de Drons",
    category: "espectaculo",
    days: ["17"],
    datesText: "Mércores, <strong>17</strong> de xuño",
    timeText: "23.00 h",
    location: "Ponte Romana",
    mapsQuery: "Ponte Romana, Ourense",
    altStyle: true,
    startHour: 23, startMin: 0, startDay: 17,
    endHour: 23, endMin: 20, endDay: 17
  },
  {
    id: "c17_4",
    title: "Orquestra Magma",
    category: "musica",
    days: ["17"],
    datesText: "Mércores, <strong>17</strong> de xuño",
    timeText: "De 23.20 a 01.00 h",
    location: "Ponte Romana",
    mapsQuery: "Ponte Romana, Ourense",
    altStyle: false,
    startHour: 23, startMin: 20, startDay: 17,
    endHour: 1, endMin: 0, endDay: 18 // Ends June 18 early morning
  },
  // Xoves 18
  {
    id: "c18_1",
    title: "Vólei Praia (Xornada portas abertas)",
    subtitle: "Maiores de 15 anos",
    category: "deporte",
    days: ["18"],
    datesText: "Xoves, <strong>18</strong> de xuño",
    timeText: "De 18.30 a 20.00 h",
    location: "Campo Vólei Praia de Oira",
    mapsQuery: "Campo Volei Praia Oira, Ourense",
    altStyle: false,
    startHour: 18, startMin: 30, startDay: 18,
    endHour: 20, endMin: 0, endDay: 18
  },
  {
    id: "c18_2",
    title: "M-Clan",
    category: "musica",
    days: ["18"],
    datesText: "Xoves, <strong>18</strong> de xuño",
    timeText: "De 23.00 a 01.00 h",
    location: "Exterior Pavillón dos Remedios",
    mapsQuery: "Pavillón dos Remedios, Ourense",
    altStyle: true,
    startHour: 23, startMin: 0, startDay: 18,
    endHour: 1, endMin: 0, endDay: 19
  },
  {
    id: "c18_3",
    title: "A Gramola Sesión DJ’s",
    category: "musica",
    days: ["18"],
    datesText: "Xoves, <strong>18</strong> de xuño (madrugada)",
    timeText: "De 01.30 a 03.30 h",
    location: "Exterior Pavillón dos Remedios",
    mapsQuery: "Pavillón dos Remedios, Ourense",
    altStyle: false,
    startHour: 1, startMin: 30, startDay: 19, // Actually morning of 19th
    endHour: 3, endMin: 30, endDay: 19
  },
  // Venres 19
  {
    id: "c19_1",
    title: "Vólei Praia (Xornada portas abertas)",
    subtitle: "De 6 a 14 anos",
    category: "deporte",
    days: ["19"],
    datesText: "Venres, <strong>19</strong> de xuño",
    timeText: "De 18.30 a 20.00 h",
    location: "Campo Vólei Praia de Oira",
    mapsQuery: "Campo Volei Praia Oira, Ourense",
    altStyle: false,
    startHour: 18, startMin: 30, startDay: 19,
    endHour: 20, endMin: 0, endDay: 19
  },
  {
    id: "c19_2",
    title: "2.º Máster de Ourense de Futbolín",
    category: "deporte",
    days: ["19"],
    datesText: "Venres, <strong>19</strong> de xuño",
    timeText: "19.00 h",
    location: "Cancha Central do Pavillón dos Remedios",
    mapsQuery: "Pavillón dos Remedios, Ourense",
    altStyle: false,
    startHour: 19, startMin: 0, startDay: 19,
    endHour: 22, endMin: 0, endDay: 19
  },
  {
    id: "c19_3",
    title: "Miguel Ríos",
    category: "musica",
    days: ["19"],
    datesText: "Venres, <strong>19</strong> de xuño",
    timeText: "De 23.00 a 01.00 h",
    location: "Exterior Pavillón dos Remedios",
    mapsQuery: "Pavillón dos Remedios, Ourense",
    altStyle: true,
    startHour: 23, startMin: 0, startDay: 19,
    endHour: 1, endMin: 0, endDay: 20
  },
  {
    id: "c19_4",
    title: "América",
    category: "musica",
    days: ["19"],
    datesText: "Venres, <strong>19</strong> de xuño (madrugada)",
    timeText: "De 01.00 a 03.30 h",
    location: "Praza de Concepción Arenal",
    mapsQuery: "Praza de Concepción Arenal, Ourense",
    altStyle: false,
    startHour: 1, startMin: 0, startDay: 20,
    endHour: 3, endMin: 30, endDay: 20
  },
  // Sábado 20
  {
    id: "c20_1",
    title: "2.º Máster de Ourense de Futbolín",
    category: "deporte",
    days: ["20"],
    datesText: "Sábado, <strong>20</strong> de xuño",
    timeText: "De 09.00 a 01.00 h",
    location: "Pavillón Anexo dos Remedios",
    mapsQuery: "Pavillón dos Remedios, Ourense",
    altStyle: false,
    startHour: 9, startMin: 0, startDay: 20,
    endHour: 1, endMin: 0, endDay: 21
  },
  {
    id: "c20_2",
    title: "Breaking",
    category: "deporte",
    days: ["20"],
    datesText: "Sábado, <strong>20</strong> de xuño",
    timeText: "De 17.00 a 22.00 h",
    location: "Pistas exteriores do Pavillón dos Remedios",
    mapsQuery: "Pavillón dos Remedios, Ourense",
    altStyle: false,
    startHour: 17, startMin: 0, startDay: 20,
    endHour: 22, endMin: 0, endDay: 20
  },
  {
    id: "c20_3",
    title: "Festa das Cores",
    category: "animacion",
    days: ["20"],
    datesText: "Sábado, <strong>20</strong> de xuño",
    timeText: "19.30 h",
    location: "Praza de Concepción Arenal",
    mapsQuery: "Praza de Concepción Arenal, Ourense",
    altStyle: true,
    startHour: 19, startMin: 30, startDay: 20,
    endHour: 20, endMin: 30, endDay: 20
  },
  {
    id: "c20_4",
    title: "Cantajuego",
    category: "infantil",
    days: ["20"],
    datesText: "Sábado, <strong>20</strong> de xuño",
    timeText: "20.30 h",
    location: "Praza de Concepción Arenal",
    mapsQuery: "Praza de Concepción Arenal, Ourense",
    altStyle: true,
    startHour: 20, startMin: 30, startDay: 20,
    endHour: 22, endMin: 0, endDay: 20
  },
  {
    id: "c20_5",
    title: "Dirty Suc",
    category: "musica",
    days: ["20"],
    datesText: "Sábado, <strong>20</strong> de xuño",
    timeText: "22.30 h",
    location: "Exterior Pavillón dos Remedios",
    mapsQuery: "Pavillón dos Remedios, Ourense",
    altStyle: false,
    startHour: 22, startMin: 30, startDay: 20,
    endHour: 23, endMin: 45, endDay: 20
  },
  {
    id: "c20_6",
    title: "Hard Gz",
    category: "musica",
    days: ["20"],
    datesText: "Sábado, <strong>20</strong> de xuño",
    timeText: "23.45 h",
    location: "Exterior Pavillón dos Remedios",
    mapsQuery: "Pavillón dos Remedios, Ourense",
    altStyle: true,
    startHour: 23, startMin: 45, startDay: 20,
    endHour: 1, endMin: 0, endDay: 21
  },
  {
    id: "c20_7",
    title: "Conductores Suicidas",
    subtitle: "Tributo a Sabina",
    category: "musica",
    days: ["20"],
    datesText: "Sábado, <strong>20</strong> de xuño",
    timeText: "00.00 h",
    location: "Praza de Concepción Arenal",
    mapsQuery: "Praza de Concepción Arenal, Ourense",
    altStyle: false,
    startHour: 0, startMin: 0, startDay: 21, // midnight Saturday is technically Sunday 21st
    endHour: 2, endMin: 0, endDay: 21
  },
  {
    id: "c20_8",
    title: "A Gramola Sesión DJ’s",
    category: "musica",
    days: ["20"],
    datesText: "Sábado, <strong>20</strong> de xuño (madrugada)",
    timeText: "01.30 h",
    location: "Exterior Pavillón dos Remedios",
    mapsQuery: "Pavillón dos Remedios, Ourense",
    altStyle: false,
    startHour: 1, startMin: 30, startDay: 21,
    endHour: 3, endMin: 30, endDay: 21
  },
  // Domingo 21
  {
    id: "c21_1",
    title: "Orquestra Função Públika",
    category: "musica",
    days: ["21"],
    datesText: "Domingo, <strong>21</strong> de xuño",
    timeText: "De 21.30 a 23.50 h",
    location: "Ponte Romana",
    mapsQuery: "Ponte Romana, Ourense",
    altStyle: false,
    startHour: 21, startMin: 30, startDay: 21,
    endHour: 23, endMin: 50, endDay: 21
  },
  {
    id: "c21_2",
    title: "Fogos Artificiais",
    category: "espectaculo",
    days: ["21"],
    datesText: "Domingo, <strong>21</strong> de xuño",
    timeText: "00.00 h",
    location: "Ponte Romana",
    mapsQuery: "Ponte Romana, Ourense",
    altStyle: true,
    startHour: 0, startMin: 0, startDay: 22, // technically midnight Sunday is June 22nd
    endHour: 0, endMin: 30, endDay: 22
  }
];

// App State Management
let currentTab = 'all';
let searchQuery = '';
let favorites = JSON.parse(localStorage.getItem('ourense_favs')) || [];

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

// PWA Install Prompt state
let deferredPrompt;
const pwaBanner = document.getElementById('pwa-install-banner');
const pwaBtnInstall = document.getElementById('pwa-btn-install');
const pwaBtnCancel = document.getElementById('pwa-btn-cancel');

// 1. Splash Screen Fade Out Logic
btnEnter.addEventListener('click', () => {
  splashScreen.classList.add('fade-out');
  setTimeout(() => {
    splashScreen.classList.add('hidden');
    appContainer.classList.remove('hidden');
    // Force a redraw and load the active tab
    renderEvents();
  }, 600);
});

// 2. Navigation Tab Click Handler
tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    tabButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    currentTab = button.getAttribute('data-tab');
    
    // Update active tab header title
    updateTabTitle();
    // Render
    renderEvents();
  });
});

// Update Header Title depending on current tab
function updateTabTitle() {
  const titles = {
    'all': 'Eventos Xerais / Varios días',
    '17': 'Mércores, 17 de xuño',
    '18': 'Xoves, 18 de xuño',
    '19': 'Venres, 19 de xuño',
    '20': 'Sábado, 20 de xuño',
    '21': 'Domingo, 21 de xuño',
    'favorites': 'Os meus Favoritos ⭐'
  };
  tabTitle.textContent = titles[currentTab] || 'Eventos';
}

// 3. Search Bar Logic
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

// 4. Calculate Event Real-time Status Badge
// Note: Compare with June 2026. If current time is not June 2026, we mock the current year
// so that when June 2026 comes, it works perfectly live.
function getEventStatus(event) {
  const now = new Date();
  
  // Create Date objects representing the event limits in 2026
  // Months are 0-indexed (5 = June)
  const eventStart = new Date(2026, 5, event.startDay, event.startHour, event.startMin);
  const eventEnd = new Date(2026, 5, event.endDay, event.endHour, event.endMin);

  // If we are currently in June 2026, do live checks
  // Otherwise, we can mock it by comparing only the days/hours for demonstration purposes,
  // but to be clean, let's compare dates directly.
  if (now > eventStart && now < eventEnd) {
    return { class: 'status-live', text: 'En directo 🔴' };
  }
  
  // If it's today (mocked to 2026-06-17 to 21 for checking, or live if in June 2026)
  const isToday = now.getFullYear() === 2026 && 
                  now.getMonth() === 5 && 
                  now.getDate() === event.startDay;
                  
  if (isToday && now < eventStart) {
    return { class: 'status-today', text: 'Hoxe' };
  }
  
  if (now > eventEnd) {
    return { class: 'status-past hidden', text: 'Finalizado' }; // Hide past events to keep screen clean
  }
  
  return { class: 'status-upcoming', text: 'Próximamente' };
}

// 5. Render Events List
function renderEvents() {
  eventsList.innerHTML = '';
  
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
      const matchTitle = event.title.toLowerCase().includes(searchQuery);
      const matchSubtitle = event.subtitle && event.subtitle.toLowerCase().includes(searchQuery);
      const matchLocation = event.location.toLowerCase().includes(searchQuery);
      return matchTitle || matchSubtitle || matchLocation;
    });
  }
  
  // Update count badge
  eventCount.textContent = `${filtered.length} ${filtered.length === 1 ? 'evento' : 'eventos'}`;
  
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
    
    const card = document.createElement('div');
    card.className = `event-card ${event.altStyle ? 'styled-alt' : ''}`;
    
    card.innerHTML = `
      <button class="btn-favorite-float ${isFav ? 'is-active' : ''}" data-id="${event.id}" aria-label="Engadir a favoritos">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
      </button>
      
      <span class="event-status-badge ${status.class}">${status.text}</span>
      
      <div class="event-info">
        <h4 class="event-title">${event.title}</h4>
        ${event.subtitle ? `<p style="font-weight:600; color:var(--color-text-muted); margin-top:-4px; margin-bottom:8px; font-size:0.95rem;">${event.subtitle}</p>` : ''}
        
        <hr class="event-divider">
        
        <div class="event-detail-row">
          <span class="detail-label">Data:</span>
          <span class="detail-value dates">${event.datesText}</span>
        </div>
        
        <div class="event-detail-row">
          <span class="detail-label">Horario:</span>
          <span class="detail-value time">${event.timeText}</span>
        </div>
        
        <div class="event-detail-row">
          <span class="detail-label">Lugar:</span>
          <span class="detail-value location">${event.location}</span>
        </div>
      </div>
      
      <div class="event-actions">
        <button class="btn-card-action btn-map" onclick="openMap('${event.mapsQuery}')">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          Google Maps
        </button>
        <button class="btn-card-action btn-share" onclick="shareEvent('${event.title}', '${event.location}', '${event.timeText}')">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
          Compartir
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

// 6. Empty States Render
function renderEmptyState() {
  if (currentTab === 'favorites') {
    eventsList.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
        </div>
        <h4>Ningún favorito gardado</h4>
        <p>Preme na estrela dos teus eventos preferidos para atopalos aquí rapidamente.</p>
      </div>
    `;
  } else {
    eventsList.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        </div>
        <h4>Sen resultados</h4>
        <p>Non atopamos eventos que coincidan coa túa busca na pestana actual.</p>
      </div>
    `;
  }
}

// 7. Toggle Favorite Logic
function toggleFavorite(id) {
  const index = favorites.indexOf(id);
  const event = EVENTS_DATA.find(e => e.id === id);
  
  if (index > -1) {
    favorites.splice(index, 1);
    showToast(`Eliminado: ${event.title}`);
  } else {
    favorites.push(id);
    showToast(`⭐ Gardado: ${event.title}`);
  }
  
  localStorage.setItem('ourense_favs', JSON.stringify(favorites));
  
  // Re-render
  renderEvents();
}

// 8. Open Google Maps search in new tab
window.openMap = function(query) {
  const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
  window.open(url, '_blank');
};

// 9. Share Event Logic (Web Share API fallback to Copy Link)
window.shareEvent = function(title, location, time) {
  const shareText = `Festas de Ourense 2026: Non te perdas "${title}" en "${location}" (${time}). Consulta o programa oficial no móbil!`;
  
  if (navigator.share) {
    navigator.share({
      title: title,
      text: shareText,
      url: window.location.href
    }).catch(console.error);
  } else {
    // Copy to clipboard fallback
    navigator.clipboard.writeText(shareText).then(() => {
      showToast("Copiado ao portapapeles! Listo para compartir.");
    }).catch(() => {
      showToast("Erro ao copiar.");
    });
  }
};

// 10. Toast Notification Helper
function showToast(message) {
  // Check if active toast exists
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
      .then(reg => console.log('Service Worker rexistrado con éxito', reg))
      .catch(err => console.warn('Erro ao rexistrar o Service Worker', err));
  });
}

// Capture PWA Install trigger
window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Show the install banner
  pwaBanner.classList.remove('hidden');
});

pwaBtnInstall.addEventListener('click', () => {
  // Hide the banner
  pwaBanner.classList.add('hidden');
  // Show the prompt
  if (deferredPrompt) {
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('Usuario aceptou a instalación da PWA');
      } else {
        console.log('Usuario rexeitou a instalación da PWA');
      }
      deferredPrompt = null;
    });
  }
});

pwaBtnCancel.addEventListener('click', () => {
  pwaBanner.classList.add('hidden');
});
