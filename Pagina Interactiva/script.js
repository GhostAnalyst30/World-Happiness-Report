// script.js

// Datos de ejemplo para la línea de tiempo
const timelineData = {
    2011: {
        stats: {
            poblacion: '46.5M',
            pib: '2.5%',
            desempleo: '10.8%'
        },
        news: [
            {
                title: 'Ley de Víctimas y Restitución de Tierras',
                description: 'Se aprueba la Ley 1448 para reparar a las víctimas del conflicto armado.',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt21EQmr73VE15wbBGj_SG6zd_YC9ai7zqpA&s',
                date: '10 Junio 2011',
                url: 'https://github.com/GhostAnalyst30'
            },
            {
                title: 'Juan Manuel Santos presidente',
                description: 'Inicio del primer período presidencial de Juan Manuel Santos.',
                image: 'https://via.placeholder.com/300x200',
                date: '7 Agosto 2011'
            },
            {
                title: 'Selección Colombia Sub-20',
                description: 'Tercer lugar en el Mundial Sub-20 realizado en Colombia.',
                image: 'https://via.placeholder.com/300x200',
                date: 'Agosto 2011'
            }
        ],
        events: [
            'Inicio de diálogos exploratorios con las FARC',
            'Crecimiento económico del 6.6%'
        ]
    },
    2012: {
        stats: {
            poblacion: '47.1M',
            pib: '4.0%',
            desempleo: '10.4%'
        },
        news: [
            {
                title: 'Inicio de Diálogos de Paz',
                description: 'Comienzan formalmente los diálogos de paz con las FARC en Oslo, Noruega.',
                image: 'https://via.placeholder.com/300x200',
                date: '18 Octubre 2012'
            },
            {
                title: 'TLC con Estados Unidos',
                description: 'Entra en vigencia el Tratado de Libre Comercio con Estados Unidos.',
                image: 'https://via.placeholder.com/300x200',
                date: '15 Mayo 2012'
            }
        ],
        events: [
            'Colombia anfitriona de la Cumbre de las Américas',
            'Firma de la Ley de Formalización y Generación de Empleo'
        ]
    },
    // Continuar con más años hasta 2024...
    2024: {
        stats: {
            poblacion: '52.2M',
            pib: '2.1%',
            desempleo: '10.3%'
        },
        news: [
            {
                title: 'Gobierno de Gustavo Petro',
                description: 'Segundo año del primer gobierno de izquierda en Colombia.',
                image: 'https://via.placeholder.com/300x200',
                date: '2024'
            },
            {
                title: 'COP16 en Colombia',
                description: 'Colombia sede de la Conferencia de Biodiversidad de la ONU.',
                image: 'https://via.placeholder.com/300x200',
                date: 'Octubre 2024'
            }
        ],
        events: [
            'Reformas sociales en debate',
            'Transición energética'
        ]
    }
};

// Configuración del mapa de Plotly
function initMap() {
    const data = [{
        type: 'choropleth',
        locations: ['COL'],
        locationmode: 'country names',
        z: [1],
        text: ['Colombia'],
        colorscale: [
            [0, 'rgb(255, 255, 255)'],
            [1, 'rgb(255, 107, 107)']
        ],
        showscale: false,
        marker: {
            line: {
                color: 'rgb(180, 180, 180)',
                width: 0.5
            }
        }
    }];

    const layout = {
        geo: {
            projection: {
                type: 'natural earth'
            },
            showcountries: true,
            countrycolor: 'rgb(200, 200, 200)',
            bgcolor: 'rgba(0,0,0,0)'
        },
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        margin: {
            l: 0,
            r: 0,
            t: 0,
            b: 0
        }
    };

    Plotly.newPlot('world-map', data, layout, { displayModeBar: false, responsive: true });
}

// Generar secciones de años
function generateYearSections() {
    const container = document.getElementById('timeline-container');
    const years = Object.keys(timelineData).sort((a, b) => a - b);
    
    years.forEach(year => {
        const yearData = timelineData[year];
        const section = document.createElement('section');
        section.className = 'year-section';
        section.dataset.year = year;
        
        section.innerHTML = `
            <div class="year-header">${year}</div>
            <div class="year-content">
                <h2 class="animate-on-scroll">Colombia en ${year}</h2>
                
                <!-- Estadísticas -->
                <div class="stats-container animate-on-scroll">
                    <div class="stat-item">
                        <div class="stat-number">
                            <span class="stat-number-gradient">${yearData.stats.poblacion}</span>
                        </div>
                        <div class="stat-label">Población</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">
                            <span class="stat-number-gradient">${yearData.stats.pib}</span>
                        </div>
                        <div class="stat-label">Crecimiento PIB</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-number">
                            <span class="stat-number-gradient">${yearData.stats.desempleo}</span>
                        </div>
                        <div class="stat-label">Desempleo</div>
                    </div>
                </div>
                
                <!-- Noticias con scroll horizontal -->
                <h3 class="animate-on-scroll">Noticias destacadas</h3>
                <a href= "https://github.com/GhostAnalyst30">
                <div class="news-horizontal-scroll animate-on-scroll">
                    ${yearData.news.map(news => `
                        <div class="news-card">
                            <a href = "${news.url}"> 
                                <img src="${news.image}" alt="${news.title}">
                                <h3>${news.title}</h3>
                                <p>${news.description}</p>
                                <span class="news-date">${news.date}</span>
                            </a>
                        </div>
                    `).join('')}
                </div>
                </a>
                
                <!-- Eventos adicionales -->
                <div class="events-list animate-on-scroll">
                    <h4>Eventos importantes:</h4>
                    <ul>
                        ${yearData.events.map(event => `<li>${event}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
        
        container.appendChild(section);
    });
}

// Intersection Observer para animaciones
function initScrollAnimations() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Si es una sección de año, agregar efecto especial
                if (entry.target.closest('.year-section')) {
                    entry.target.closest('.year-section').style.opacity = '1';
                }
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px'
    });
    
    elements.forEach(element => observer.observe(element));
}

// Efecto parallax en el scroll
function initParallaxEffect() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const introSection = document.querySelector('.intro-section');
        const mapSection = document.querySelector('.map-section');
        
        // Efecto parallax para el fondo
        if (introSection) {
            introSection.style.backgroundPositionY = `${scrolled * 0.5}px`;
        }
        
        // Opacidad dinámica para las secciones
        const yearSections = document.querySelectorAll('.year-section');
        yearSections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const opacity = 1 - (rect.top / window.innerHeight);
            if (opacity > 0 && opacity < 1) {
                section.style.opacity = opacity;
            }
        });
    });
}

// Navegación por scroll horizontal con rueda del mouse
function initHorizontalScroll() {
    document.querySelectorAll('.news-horizontal-scroll').forEach(scrollContainer => {
        scrollContainer.addEventListener('wheel', (e) => {
            if (e.deltaY !== 0) {
                e.preventDefault();
                scrollContainer.scrollLeft += e.deltaY;
            }
        });
    });
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    initMap();
    generateYearSections();
    initScrollAnimations();
    initParallaxEffect();
    initHorizontalScroll();
    
    // Resaltar sección actual en el scroll
    window.addEventListener('scroll', () => {
        const yearSections = document.querySelectorAll('.year-section');
        yearSections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
                section.classList.add('active-year');
                document.title = `Colombia ${section.dataset.year} - Historytelling`;
            } else {
                section.classList.remove('active-year');
            }
        });
    });
});

// Efecto de revelación progresiva
class ProgressiveReveal {
    constructor() {
        this.scrollPositions = new Map();
        this.init();
    }
    
    init() {
        window.addEventListener('scroll', () => this.revealContent());
    }
    
    revealContent() {
        const sections = document.querySelectorAll('.year-section');
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const revealPoint = window.innerHeight * 0.8;
            
            if (rect.top < revealPoint) {
                section.classList.add('revealed');
            }
        });
    }
}

new ProgressiveReveal();