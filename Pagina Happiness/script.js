// script.js
document.addEventListener('DOMContentLoaded', () => {
    initMap();
    generateYearCards();
    initMenu();
    initScrollAnimations();
    initOverlay();
    initHorizontalScroll();
    initRuletasInfinitas();
    initParallaxEffect();
    createParticles();
    initGraficasComparativas()
});

// ===== MAPA MUNDI CON TODOS LOS PAÍSES =====
// ===== MAPA MUNDI CON PAÍSES SIN DATOS =====
function initMap() {
    // Extraer datos del diccionario proporcionado
    const countriesWithData = [
        { name: 'Finland', code: 'FIN', score: 7.736 },
        { name: 'Denmark', code: 'DNK', score: 7.521 },
        { name: 'Iceland', code: 'ISL', score: 7.515 },
        { name: 'Sweden', code: 'SWE', score: 7.345 },
        { name: 'Netherlands', code: 'NLD', score: 7.306 },
        { name: 'Costa Rica', code: 'CRI', score: 7.274 },
        { name: 'Norway', code: 'NOR', score: 7.262 },
        { name: 'Israel', code: 'ISR', score: 7.234 },
        { name: 'Luxembourg', code: 'LUX', score: 7.122 },
        { name: 'Mexico', code: 'MEX', score: 6.979 },
        { name: 'Australia', code: 'AUS', score: 6.974 },
        { name: 'New Zealand', code: 'NZL', score: 6.952 },
        { name: 'Switzerland', code: 'CHE', score: 6.935 },
        { name: 'Belgium', code: 'BEL', score: 6.910 },
        { name: 'Ireland', code: 'IRL', score: 6.889 },
        { name: 'Lithuania', code: 'LTU', score: 6.829 },
        { name: 'Austria', code: 'AUT', score: 6.810 },
        { name: 'Canada', code: 'CAN', score: 6.803 },
        { name: 'Slovenia', code: 'SVN', score: 6.792 },
        { name: 'Czechia', code: 'CZE', score: 6.775 },
        { name: 'United Arab Emirates', code: 'ARE', score: 6.759 },
        { name: 'Germany', code: 'DEU', score: 6.753 },
        { name: 'United Kingdom', code: 'GBR', score: 6.728 },
        { name: 'United States', code: 'USA', score: 6.724 },
        { name: 'Belize', code: 'BLZ', score: 6.711 },
        { name: 'Poland', code: 'POL', score: 6.673 },
        { name: 'Taiwan', code: 'TWN', score: 6.669 },
        { name: 'Uruguay', code: 'URY', score: 6.661 },
        { name: 'Kosovo', code: 'XKX', score: 6.659 },
        { name: 'Kuwait', code: 'KWT', score: 6.629 },
        { name: 'Serbia', code: 'SRB', score: 6.606 },
        { name: 'Saudi Arabia', code: 'SAU', score: 6.600 },
        { name: 'France', code: 'FRA', score: 6.593 },
        { name: 'Singapore', code: 'SGP', score: 6.565 },
        { name: 'Romania', code: 'ROU', score: 6.563 },
        { name: 'Brazil', code: 'BRA', score: 6.494 },
        { name: 'El Salvador', code: 'SLV', score: 6.492 },
        { name: 'Spain', code: 'ESP', score: 6.466 },
        { name: 'Estonia', code: 'EST', score: 6.417 },
        { name: 'Italy', code: 'ITA', score: 6.415 },
        { name: 'Panama', code: 'PAN', score: 6.407 },
        { name: 'Argentina', code: 'ARG', score: 6.397 },
        { name: 'Kazakhstan', code: 'KAZ', score: 6.378 },
        { name: 'Guatemala', code: 'GTM', score: 6.362 },
        { name: 'Chile', code: 'CHL', score: 6.361 },
        { name: 'Viet Nam', code: 'VNM', score: 6.352 },
        { name: 'Nicaragua', code: 'NIC', score: 6.330 },
        { name: 'Malta', code: 'MLT', score: 6.316 },
        { name: 'Thailand', code: 'THA', score: 6.222 },
        { name: 'Slovakia', code: 'SVK', score: 6.221 },
        { name: 'Latvia', code: 'LVA', score: 6.207 },
        { name: 'Oman', code: 'OMN', score: 6.197 },
        { name: 'Uzbekistan', code: 'UZB', score: 6.193 },
        { name: 'Paraguay', code: 'PRY', score: 6.172 },
        { name: 'Japan', code: 'JPN', score: 6.147 },
        { name: 'Bosnia and Herzegovina', code: 'BIH', score: 6.136 },
        { name: 'Philippines', code: 'PHL', score: 6.107 },
        { name: 'South Korea', code: 'KOR', score: 6.038 },
        { name: 'Bahrain', code: 'BHR', score: 6.030 },
        { name: 'Portugal', code: 'PRT', score: 6.013 },
        { name: 'Colombia', code: 'COL', score: 6.004 },
        { name: 'Ecuador', code: 'ECU', score: 5.965 },
        { name: 'Honduras', code: 'HND', score: 5.964 },
        { name: 'Malaysia', code: 'MYS', score: 5.955 },
        { name: 'Peru', code: 'PER', score: 5.947 },
        { name: 'Russia', code: 'RUS', score: 5.945 },
        { name: 'Cyprus', code: 'CYP', score: 5.942 },
        { name: 'China', code: 'CHN', score: 5.921 },
        { name: 'Hungary', code: 'HUN', score: 5.915 },
        { name: 'Trinidad and Tobago', code: 'TTO', score: 5.905 },
        { name: 'Montenegro', code: 'MNE', score: 5.877 },
        { name: 'Croatia', code: 'HRV', score: 5.870 },
        { name: 'Jamaica', code: 'JAM', score: 5.870 },
        { name: 'Bolivia', code: 'BOL', score: 5.868 },
        { name: 'Kyrgyzstan', code: 'KGZ', score: 5.858 },
        { name: 'Dominican Republic', code: 'DOM', score: 5.846 },
        { name: 'Mongolia', code: 'MNG', score: 5.833 },
        { name: 'Mauritius', code: 'MUS', score: 5.832 },
        { name: 'Libya', code: 'LBY', score: 5.820 },
        { name: 'Moldova', code: 'MDA', score: 5.819 },
        { name: 'Greece', code: 'GRC', score: 5.776 },
        { name: 'Venezuela', code: 'VEN', score: 5.683 },
        { name: 'Indonesia', code: 'IDN', score: 5.617 },
        { name: 'Algeria', code: 'DZA', score: 5.571 },
        { name: 'Bulgaria', code: 'BGR', score: 5.554 },
        { name: 'North Macedonia', code: 'MKD', score: 5.503 },
        { name: 'Armenia', code: 'ARM', score: 5.494 },
        { name: 'Hong Kong', code: 'HKG', score: 5.491 },
        { name: 'Albania', code: 'ALB', score: 5.411 },
        { name: 'Tajikistan', code: 'TJK', score: 5.411 },
        { name: 'Georgia', code: 'GEO', score: 5.400 },
        { name: 'Nepal', code: 'NPL', score: 5.311 },
        { name: 'Laos', code: 'LAO', score: 5.301 },
        { name: 'Turkey', code: 'TUR', score: 5.262 },
        { name: 'South Africa', code: 'ZAF', score: 5.213 },
        { name: 'Mozambique', code: 'MOZ', score: 5.190 },
        { name: 'Gabon', code: 'GAB', score: 5.120 },
        { name: 'Ivory Coast', code: 'CIV', score: 5.102 },
        { name: 'Iran', code: 'IRN', score: 5.093 },
        { name: 'Congo', code: 'COG', score: 5.030 },
        { name: 'Iraq', code: 'IRQ', score: 4.976 },
        { name: 'Guinea', code: 'GIN', score: 4.929 },
        { name: 'Namibia', code: 'NAM', score: 4.911 },
        { name: 'Cameroon', code: 'CMR', score: 4.887 },
        { name: 'Nigeria', code: 'NGA', score: 4.885 },
        { name: 'Azerbaijan', code: 'AZE', score: 4.875 },
        { name: 'Senegal', code: 'SEN', score: 4.856 },
        { name: 'Palestine', code: 'PSE', score: 4.780 },
        { name: 'Pakistan', code: 'PAK', score: 4.768 },
        { name: 'Niger', code: 'NER', score: 4.725 },
        { name: 'Ukraine', code: 'UKR', score: 4.680 },
        { name: 'Morocco', code: 'MAR', score: 4.622 },
        { name: 'Tunisia', code: 'TUN', score: 4.552 },
        { name: 'Mauritania', code: 'MRT', score: 4.542 },
        { name: 'Kenya', code: 'KEN', score: 4.510 },
        { name: 'Uganda', code: 'UGA', score: 4.461 },
        { name: 'Gambia', code: 'GMB', score: 4.423 },
        { name: 'India', code: 'IND', score: 4.389 },
        { name: 'Chad', code: 'TCD', score: 4.384 },
        { name: 'Burkina Faso', code: 'BFA', score: 4.383 },
        { name: 'Benin', code: 'BEN', score: 4.357 },
        { name: 'Somalia', code: 'SOM', score: 4.347 },
        { name: 'Mali', code: 'MLI', score: 4.345 },
        { name: 'Cambodia', code: 'KHM', score: 4.341 },
        { name: 'Ghana', code: 'GHA', score: 4.340 },
        { name: 'Myanmar', code: 'MMR', score: 4.321 },
        { name: 'Togo', code: 'TGO', score: 4.315 },
        { name: 'Jordan', code: 'JOR', score: 4.310 },
        { name: 'Liberia', code: 'LBR', score: 4.277 },
        { name: 'Madagascar', code: 'MDG', score: 4.157 },
        { name: 'Zambia', code: 'ZMB', score: 3.912 },
        { name: 'Ethiopia', code: 'ETH', score: 3.898 },
        { name: 'Sri Lanka', code: 'LKA', score: 3.891 },
        { name: 'Bangladesh', code: 'BGD', score: 3.851 },
        { name: 'Egypt', code: 'EGY', score: 3.817 },
        { name: 'Tanzania', code: 'TZA', score: 3.800 },
        { name: 'Eswatini', code: 'SWZ', score: 3.774 },
        { name: 'Lesotho', code: 'LSO', score: 3.757 },
        { name: 'Comoros', code: 'COM', score: 3.754 },
        { name: 'Yemen', code: 'YEM', score: 3.561 },
        { name: 'DR Congo', code: 'COD', score: 3.469 },
        { name: 'Botswana', code: 'BWA', score: 3.438 },
        { name: 'Zimbabwe', code: 'ZWE', score: 3.396 },
        { name: 'Malawi', code: 'MWI', score: 3.260 },
        { name: 'Lebanon', code: 'LBN', score: 3.188 },
        { name: 'Sierra Leone', code: 'SLE', score: 2.998 },
        { name: 'Afghanistan', code: 'AFG', score: 1.364 }
    ];

    // Lista de todos los códigos ISO-3 posibles (puedes expandir esta lista)
    const allCountryCodes = [
        'AFG', 'ALB', 'DZA', 'AND', 'AGO', 'ATG', 'ARG', 'ARM', 'AUS', 'AUT', 'AZE',
        'BHS', 'BHR', 'BGD', 'BRB', 'BLR', 'BEL', 'BLZ', 'BEN', 'BTN', 'BOL', 'BIH',
        'BWA', 'BRA', 'BRN', 'BGR', 'BFA', 'BDI', 'CPV', 'KHM', 'CMR', 'CAN', 'CAF',
        'TCD', 'CHL', 'CHN', 'COL', 'COM', 'COD', 'COG', 'CRI', 'CIV', 'HRV', 'CUB',
        'CYP', 'CZE', 'DNK', 'DJI', 'DMA', 'DOM', 'ECU', 'EGY', 'SLV', 'GNQ', 'ERI',
        'EST', 'SWZ', 'ETH', 'FJI', 'FIN', 'FRA', 'GAB', 'GMB', 'GEO', 'DEU', 'GHA',
        'GRC', 'GRD', 'GTM', 'GIN', 'GNB', 'GUY', 'HTI', 'HND', 'HKG', 'HUN', 'ISL',
        'IND', 'IDN', 'IRN', 'IRQ', 'IRL', 'ISR', 'ITA', 'JAM', 'JPN', 'JOR', 'KAZ',
        'KEN', 'KIR', 'PRK', 'KOR', 'XKX', 'KWT', 'KGZ', 'LAO', 'LVA', 'LBN', 'LSO',
        'LBR', 'LBY', 'LIE', 'LTU', 'LUX', 'MDG', 'MWI', 'MYS', 'MDV', 'MLI', 'MLT',
        'MHL', 'MRT', 'MUS', 'MEX', 'FSM', 'MDA', 'MCO', 'MNG', 'MNE', 'MAR', 'MOZ',
        'MMR', 'NAM', 'NRU', 'NPL', 'NLD', 'NZL', 'NIC', 'NER', 'NGA', 'MKD', 'NOR',
        'OMN', 'PAK', 'PLW', 'PSE', 'PAN', 'PNG', 'PRY', 'PER', 'PHL', 'POL', 'PRT',
        'QAT', 'ROU', 'RUS', 'RWA', 'KNA', 'LCA', 'VCT', 'WSM', 'SMR', 'STP', 'SAU',
        'SEN', 'SRB', 'SYC', 'SLE', 'SGP', 'SVK', 'SVN', 'SLB', 'SOM', 'ZAF', 'SSD',
        'ESP', 'LKA', 'SDN', 'SUR', 'SWE', 'CHE', 'SYR', 'TWN', 'TJK', 'TZA', 'THA',
        'TLS', 'TGO', 'TON', 'TTO', 'TUN', 'TUR', 'TKM', 'TUV', 'UGA', 'UKR', 'ARE',
        'GBR', 'USA', 'URY', 'UZB', 'VUT', 'VAT', 'VEN', 'VNM', 'YEM', 'ZMB', 'ZWE'
    ];

    // Crear arrays completos con null para países sin datos
    const locations = [];
    const scores = [];
    const texts = [];

    allCountryCodes.forEach(code => {
        const countryWithData = countriesWithData.find(c => c.code === code);
        locations.push(code);
        
        if (countryWithData) {
            scores.push(countryWithData.score);
            texts.push(`${countryWithData.name}: ${countryWithData.score}`);
        } else {
            scores.push(null); // null indica sin datos
            texts.push(`Sin datos disponibles`);
        }
    });

    const data = [{
        type: 'choropleth',
        locationmode: 'ISO-3',
        locations: locations,
        z: scores,
        text: texts,
        colorscale: [
            [0, 'rgb(206, 17, 38)'],           // Rojo para muy infeliz
            [0.2, 'rgb(255, 140, 0)'],         // Naranja
            [0.4, 'rgb(255, 215, 0)'],         // Amarillo
            [0.6, 'rgb(144, 238, 144)'],       // Verde claro
            [0.8, 'rgb(0, 128, 0)'],           // Verde
            [1, 'rgb(0, 100, 0)']               // Verde oscuro para muy feliz
        ],
        // Configurar color para valores nulos (sin datos)
        autocolorscale: false,
        showscale: true,
        colorbar: {
            title: 'Índice de Felicidad',
            titleside: 'right',
            tickvals: [1, 2, 3, 4, 5, 6, 7, 8],
            ticktext: ['1', '2', '3', '4', '5', '6', '7', '8']
        },
        marker: {
            line: {
                color: 'rgba(255,255,255,0.2)',
                width: 0.5
            }
        },
        // Definir color para valores nulos (gris oscuro)
        zmin: 1,
        zmax: 8,
        zauto: false,
        // Los valores null aparecerán en gris por defecto
        hoverinfo: 'location+text',
        showlegend: false
    }];

    const layout = {
        geo: {
            projection: { type: 'natural earth' },
            showcountries: true,
            countrycolor: 'rgba(255,255,255,0.3)',
            coastlinecolor: 'rgba(255,255,255,0.3)',
            showocean: true,
            oceancolor: 'rgba(0,0,0,0.3)',
            showland: true,
            landcolor: 'rgba(30,30,30,0.5)',
            bgcolor: 'rgba(0,0,0,0)'
        },
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        margin: { l: 0, r: 0, t: 0, b: 0 },
        width: undefined,
        height: 500,
        font: {
            color: '#ffffff'
        }
    };

    Plotly.newPlot('world-map', data, layout, { 
        displayModeBar: false, 
        responsive: true 
    });
}

// ===== TIMELINE DATA =====
const timelineData = {
    2011: {
        stats: { poblacion: '45.3M', rank: '41',  usd: '$1848,02', felicidad: '6.2' },
        news: [
            { title: 'No todo lo que brilla es oro', description: 'Este texto revela algunas prácticas mineras en Chocó. Lea además la postura de la Corporación Oro Verde y Fundación Amigos del Chocó sobre este tema.', image: 'https://images.unsplash.com/photo-1589802829985-817e600a3b3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', date: '21 diciembre 2011', url: 'https://www.eltiempo.com/don-juan/historias/no-todo-lo-que-brilla-es-oro+articulo+10913289' },
            { title: 'Colombia: Santos sale fortalecido de las elecciones regionales', description: 'Inicio del primer período presidencial.', image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', date: '31 Octubre 2011', url: 'https://www.bbc.com/mundo/noticias/2011/10/111031_colombia_elecciones_regionales_resultados_analisis_aw' }
        ],
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLf20Z3UsEEsBDRuSYG532qXJde3SmdwdujQ&s'
    },
    2012: {
        stats: { poblacion: '45.7M', rank: '35',  usd: '$1798,01', felicidad: '6.42' },
        news: [
            { title: 'Qué dijeron el gobierno y las FARC en el inicio de las negociaciones', description: 'Comienzan formalmente los diálogos de paz con las FARC en Oslo.', image: 'https://images.unsplash.com/photo-1575505586569-4c6d2b4f9b3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', date: '18 Octubre 2012', url: 'https://www.bbc.com/mundo/noticias/2012/10/121018_resumen_rueda_prensa_colombia_yv' },
            { title: 'Colombia: la reforma que generó una tormenta política', description: 'fin a los procesos judiciales en contra de legisladores y altos funcionarios públicos', image: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', date: '15 Mayo 2012', url: 'https://www.bbc.com/mundo/noticias/2012/06/120622_colombia_reforma_justicia_crisis_aw' }
        ],
        img: 'https://estaticos.elcolombiano.com/documents/10157/0/640x321/0c0/0d0/none/11101/LUJC/collage-santiago-cardenas-640x320-14122012.jpg'
    },
    2013: {
        stats: { poblacion: '46.2M', rank: 'N.A.',  usd: '$1868,89', felicidad: 'N.A.' },
        news: [
            { title: 'El 2013 ha sido uno de los mejores años para Colombia” — Presidente Juan Manuel Santos', description: 'El presidente Juan Manuel Santos afirmó que 2013 fue uno de los mejores años en la historia reciente del país, destacando crecimiento económico, disminución de desempleo y avances sociales, además de mayores logros deportivos y apoyo internacional.', image: 'https://images.unsplash.com/photo-1589802829985-817e600a3b3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', date: '31 Diciembre 2013', url: 'https://www.eluniversal.com.co/colombia/2013/el-2013-ha-sido-uno-de-los-mejores-anos-de-colombia-presidente-santos' },
            { title: 'Grandes historias 2013: Colombia sacudida por un paro "inexistente"', description: 'Las ruanas -los ponchos de lana cruda que emplean los campesinos de las tierras frías de Colombia- se convirtieron en el símbolo del paro agrario.', image: 'https://www.bbc.com/mundo/noticias/2013/12/131206_grandes_historias_2013_colombia_paro_agrario_aw' }
        ],
        img: 'https://ichef.bbci.co.uk/ace/ws/640/amz/worldservice/live/assets/images/2013/12/06/131206042708_ruanas.jpg.webp'
    },
    2014: {
    stats: { poblacion: '46.6M', rank: '33',  usd: '$2001,11', felicidad: '6.48' },
    news: [
        { 
            title: 'Juan Manuel Santos gana la reelección presidencial en Colombia', 
            description: 'Juan Manuel Santos es reelegido presidente en una votación cerrada, lo que fortalece su plan de continuar las negociaciones de paz con las FARC.', 
            image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', 
            date: '15 Junio 2014', 
            url: 'https://www.aljazeera.com/news/2014/6/16/santos-wins-colombias-presidential-vote' 
        },
        { 
            title: 'Tragedia en Fundación: autobús escolar se incendia y deja decenas de muertos', 
            description: 'Un autobús que trasladaba niños se incendia en el departamento de Magdalena, causando la muerte de al menos 31 personas en una de las peores tragedias viales del año.', 
            image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', 
            date: '18 Mayo 2014', 
            url: 'https://www.infobae.com/2014/05/18/1565486-se-incendio-un-autobus-colombia-que-trasladaba-ninos-confirman-31-muertos/' 
        },
        { 
            title: 'Negociaciones de paz entre el Gobierno y las FARC se reanudan tras crisis', 
            description: 'Después de suspender el diálogo por el secuestro de un general, el Gobierno colombiano y las FARC anuncian que han superado la crisis y retomarán las conversaciones de paz.', 
            image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', 
            date: '3 Diciembre 2014', 
            url: 'https://www.emol.com/noticias/internacional/2014/12/03/692945/gobierno-de-santos-y-farc-dan-por-superada-la-crisis-y-retoman-negociaciones-de-paz.html' 
        }
    ],
    img: 'https://img.olympics.com/images/image/private/t_s_16_9_g_auto/t_s_w1460/f_auto/primary/karcufr9kdsujks2eut9'
},
2015: {
    stats: { poblacion: '47M', rank: '31', usd: '$2741,78', felicidad: '6.48' },
    news: [
        {
            title: 'Producción de carbón cae un 3,5% en Colombia en 2015',
            description: 'La producción de carbón de Colombia disminuyó un 3,5% en 2015 debido a problemas técnicos y cierres de pasos fronterizos que dificultaron las exportaciones.',
            image: 'https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            date: '16 Febrero 2016',
            url: 'https://www.noticiasrcn.com/colombia/produccion-de-carbon-cayo-un-35-en-el-2015-informo-el-gobierno-267445' 
        },
        {
            title: 'Rescatan seis cuerpos de mineros atrapados en Colombia',
            description: 'Bomberos y socorristas recuperan los primeros cuerpos de mineros atrapados tras la inundación de una veta en el departamento de Caldas.',
            image: 'https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            date: '15 Mayo 2015',
            url: 'https://www.dw.com/es/rescatan-seis-cuerpos-de-mineros-atrapados-en-colombia/a-18453141' 
        },
        {
            title: 'Colombia reconoce aumento de cultivos de coca en 2014',
            description: 'El Ministerio de Defensa informa que el cultivo de coca aumentó entre un 15% y 20% en el país, lo que preocupa a autoridades por el impacto en producción de cocaína.',
            image: 'https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            date: '4 Mayo 2015',
            url: 'https://www.europapress.es/internacional/noticia-colombia-reconoce-aumento-15-20-cultivo-coca-2014-20150504135007.html' 
        }
    ],
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6oPcQmp4h90bZtVbfzrqowPP0c3flgLp5HA&s'
},

2016: {
    stats: { poblacion: '47.4M', rank: '36', usd: '$3055.26', felicidad: '6.36' },
    news: [
        {
            title: 'Juan Manuel Santos recibe el Premio Nobel de la Paz',
            description: 'El presidente colombiano Juan Manuel Santos es galardonado con el Premio Nobel de la Paz por sus esfuerzos en el proceso para poner fin al conflicto armado con las FARC.',
            image: 'https://images.unsplash.com/photo-1575505586569-4c6d2b4f9b3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            date: '7 Octubre 2016',
            url: 'https://www.elpais.com.co/proceso-de-paz/presidente-juan-manuel-santos-gana-el-premio-nobel-de-paz.html' 
        },
        {
            title: 'Referéndum sobre el acuerdo de paz en Colombia',
            description: 'Los colombianos votan en un referéndum para aprobar o rechazar el acuerdo de paz con las FARC; la opción “No” se impone por un estrecho margen.',
            image: 'https://images.unsplash.com/photo-1575505586569-4c6d2b4f9b3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            date: '2 Octubre 2016',
            url: 'https://www.bbc.com/mundo/noticias-america-latina-37537187' 
        },
        {
            title: 'Gobierno colombiano y FARC firman nuevo acuerdo de paz',
            description: 'El presidente Juan Manuel Santos y el jefe de las FARC firman un nuevo acuerdo de paz en Bogotá que sustituye el previo y busca culminar formalmente la terminación del conflicto armado.',
            image: 'https://images.unsplash.com/photo-1575505586569-4c6d2b4f9b3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            date: '25 Noviembre 2016',
            url: 'https://p.dw.com/p/2TBrK' // Acuerdo final firmado en Bogotá :contentReference[oaicite:0]{index=0}
           
        }
    ],
    img: 'https://www.hrw.org/sites/default/files/styles/embed_xxl/public/multimedia_images_2016/colombiapresser0824.jpg?itok=EI4lmiqu'
},
2017: {
    stats: { poblacion: '48.1M', rank: '37',  usd: '$2951,49', felicidad: '6.26' },
    news: [
        { 
            title: 'Avalancha en Mocoa deja cientos de víctimas', 
            description: 'El desbordamiento de ríos en Mocoa, Putumayo, arrasa barrios enteros y deja cientos de muertos y desaparecidos en marzo de 2017.', 
            image: 'https://images.unsplash.com/photo-1589802829985-817e600a3b3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', 
            date: '31 Marzo 2017', 
            url: 'https://www.elcolombiano.com/colombia/mocoa-putumayo-avalancha-2017-BG7910388' 
        },
        {
            title: 'Visita del papa Francisco a Colombia genera impacto social',
            description: 'El papa Francisco visita Colombia para encuentros con víctimas del conflicto y celebraciones religiosas en diversas ciudades.', 
            image: 'https://images.unsplash.com/photo-1589802829985-817e600a3b3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', 
            date: '6–10 Septiembre 2017', 
            url: 'https://www.aa.com.tr/es/mundo/el-papa-francisco-lleg%C3%B3-a-colombia-/903181' 
        },
        {
            title: 'El Espectador reporta violencia contra la prensa en Colombia',
            description: 'La Fundación para la Libertad de Prensa (FLIP) reporta que 2017 fue un año con numerosos casos de agresión y amenazas contra periodistas en Colombia.', 
            image: 'https://images.unsplash.com/photo-1589802829985-817e600a3b3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', 
            date: '7 Febrero 2019', 
            url: 'https://www.elespectador.com/colombia-20/conflicto/2018-el-ano-mas-violento-para-la-prensa-en-los-ultimos-15-anos-flip-article/' 
        }
    ],
    img: 'https://cloudfront-us-east-1.images.arcpublishing.com/vanguardiaeluniversal/XHTBICC7UJFMRLP23T36AXUK2I.jpg'
},

2018: {
    stats: { poblacion: '49M', rank: '43',  usd: '$2955,7', felicidad: '6.13' },
    news: [
        { 
            title: 'Marchas estudiantiles recorren Colombia durante paro universitario', 
            description: 'Estudiantes de universidades públicas realizan un paro nacional de más de 60 días exigiendo mayor financiación y atención estatal.', 
            image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', 
            date: '29 Noviembre 2018', 
            url: 'https://www.france24.com/es/20181129-colombia-protesta-estudiantes-contra-gobierno' 
        },
        {
            title: 'Violencia contra líderes sociales en Colombia alcanza récord en 2018',
            description: 'Organizaciones civiles reportan un incremento significativo de agresiones y asesinatos de líderes sociales durante el año.', 
            image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80', 
            date: '11 Diciembre 2019', 
            url: 'https://www.dejusticia.org/publication/asesinato-a-lideres-sociales-en-colombia-en-2018-una-estimacion-de-la-magnitud-del-problema/' 
        }
    ],
    img: 'https://imagenes2.eltiempo.com/files/image_414_314/uploads/2018/08/07/5b6a143862e85.jpeg'
},

2019: {
    stats: { poblacion: '49.9M', rank: '44',  usd: '$3281,62', felicidad: '6.16' },
    news: [
        {
            title: 'Explosión con carro bomba en la Escuela de Policía General Santander',
            description: 'Un carro bomba detonó dentro de la Escuela de Policía General Santander en Bogotá, dejando decenas de muertos y heridos y generando alerta nacional sobre seguridad y terrorismo.',
            image: 'https://images.unsplash.com/photo-1589802829985-817e600a3b3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            date: '17 Enero 2019',
            url: 'https://www.noticiascaracol.com/colombia/bogota/carro-bomba-en-la-escuela-general-santander-deja-11-muertos-y-87-heridos' 
        },
        {
            title: 'Colombia vive un paro nacional de protesta social',
            description: 'Miles de colombianos participan en un paro nacional convocado el 21 de noviembre, con marchas y movilizaciones contra políticas del gobierno de Iván Duque y descontento ciudadano por reformas y violencia.',
            image: 'https://images.unsplash.com/photo-1589802829985-817e600a3b3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            date: '21 Noviembre 2019',
            url: 'https://es.euronews.com/2019/11/21/el-estallido-social-latinoamericano-llega-a-colombia-en-forma-de-paro-nacional' 
        },
        {
            title: '2019, el año con más agresiones a líderes sociales en una década',
            description: 'Informes de derechos humanos y organizaciones civiles muestran que 2019 fue uno de los peores años para los líderes sociales en Colombia, con cientos de agresiones registradas en diversas regiones.',
            image: 'https://images.unsplash.com/photo-1589802829985-817e600a3b3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            date: '23 Mayo 2020',
            url: 'https://www.elespectador.com/colombia-20/conflicto/2019-el-ano-con-mas-agresiones-a-lideres-sociales-en-una-decada-article/' 
        }
    ],
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvt53rZXDaOdJFWyubmCOTT4_2ddVmWw7trA&s'
},
2020: {
    stats: { poblacion: '50.6M', rank: '53', usd: '$3693,28', felicidad: '6.01' },
    news: [
        {
            title: 'Estas fueron las noticias más importantes de Colombia en 2020',
            description: 'La pandemia de COVID-19 marca el año con aislamiento obligatorio, crisis sanitaria y reconfiguración de actividades económicas y sociales.',
            image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            date: 'Marzo 2020',
            url: 'https://www.eltiempo.com/colombia/otras-ciudades/hechos-y-noticias-mas-importantes-del-2020-en-colombia-554335'  // artículo con hechos claves de 2020
        },
        {
            title: 'Colombia, uno de los países más peligrosos para defender el ambiente en 2020',
            description: 'El Espectador reporta que en 2020 Colombia fue uno de los territorios más letales para líderes ambientales, con decenas de ataques y amenazas.',
            image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            date: '13 Septiembre 2021',
            url: 'https://www.elespectador.com/ambiente/2020-colombia-es-el-pais-mas-peligroso-para-defender-el-ambiente-otra-vez/'  // artículo válido sobre hechos en 2020
        }
    ],
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4kDc1NhGd6ZV-iKi-E60bJOgQfsLZk8Pd9g&s'
},

2021: {
    stats: { poblacion: '51.2M', rank: '66', usd: '$3744,24', felicidad: '5.78' },
    news: [
        {
            title: 'Masacres y violencia en Colombia durante 2021',
            description: 'El Espectador documenta que durante 2021 ocurrieron al menos 35 masacres en Colombia motivadas por violencia de grupos armados.',
            image: 'https://images.unsplash.com/photo-1589802829985-817e600a3b3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            date: '18 Junio 2021',
            url: 'https://www.elespectador.com/colombia-20/conflicto/el-terror-persiste-en-colombia-al-menos-35-masacres-durante-2021/'
        },
        {
            title: 'Crisis de derechos humanos durante las protestas de 2021',
            description: 'Durante el paro nacional iniciado en 28 de abril de 2021, organizaciones civiles señalan graves violaciones a derechos humanos en manifestaciones y respuesta policial.',
            image: 'https://images.unsplash.com/photo-1589802829985-817e600a3b3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            date: '20 Junio 2021',
            url: 'https://www.elespectador.com/colombia-20/analistas/crisis-de-los-derechos-humanos-en-el-marco-de-las-protestas-sociales-en-colombia/'
        }
    ],
    img: 'https://ichef.bbci.co.uk/ace/ws/640/cpsprodpb/5AB2/production/_118381232_gettyimages-1232580044.jpg.webp'
},
2022: {
    stats: { poblacion: '51.7M', rank: '72', usd: '$4,256', felicidad: '5.63' },
    news: [
        {
            title: 'Izquierdista Gustavo Petro gana presidencia de Colombia',
            description: 'Gustavo Petro, exguerrillero y candidato del Pacto Histórico, gana la segunda vuelta presidencial en Colombia, convirtiéndose en el primer presidente de izquierda del país.',
            image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            date: '20 Junio 2022',
            url: 'https://es.euronews.com/2022/06/20/colombia-elecciones-resultado' // basado en cobertura de Euronews/Reuters :contentReference[oaicite:0]{index=0}
        },
        {
            title: 'Fico Gutiérrez, tras ser derrotado, da su apoyo a Rodolfo Hernández',
            description: 'Federico Gutiérrez, el candidato tradicionalista, reconoce su derrota frente a Gustavo Petro y declara su apoyo a Rodolfo Hernández en la segunda vuelta.',
            image: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            date: '29 Mayo 2022',
            url: 'https://elpais.com/america-colombia/elecciones-presidenciales/2022-05-29/la-derrota-de-federico-gutierrez-un-mazazo-al-uribismo-tras-20-anos-en-el-poder.html' // medio verificado :contentReference[oaicite:1]{index=1}
        }
    ],
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGFhg1_DEdfA071p-8S69hn4Tg7M8qpnHKqg&s'
},

2023: {
    stats: { poblacion: '52.3M', rank: '78', usd: '$4,325', felicidad: '5.7' },
    news: [
        {
            title: 'Colombia fue el país más letal para ambientalistas en 2023',
            description: 'Según un informe de derechos humanos, Colombia tuvo el mayor número de asesinatos de defensores ambientales y de tierras en el mundo en 2023, con cifras récord de homicidios.',
            image: 'https://images.unsplash.com/photo-1589802829985-817e600a3b3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            date: '10 Septiembre 2024',
            url: 'https://www.reuters.com/world/americas/colombia-deadliest-country-environmentalists-2023-rights-group-says-2024-09-09/' // Reuters artículo :contentReference[oaicite:2]{index=2}
        },
        {
            title: 'Miles marchan en Colombia para protestar contra reformas de Petro',
            description: 'Miles de personas se manifestaron en Bogotá, Medellín y Cali contra las reformas propuestas por el presidente Petro, incluyendo salud, pensiones y educación.',
            image: 'https://images.unsplash.com/photo-1589802829985-817e600a3b3c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            date: '6 Marzo 2024',
            url: 'https://www.reuters.com/world/americas/thousands-march-colombia-protest-government-reforms-2024-03-06/' // Reuters cobertura :contentReference[oaicite:3]{index=3}
        }
    ],
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3c0ts9hNckIIbqDOSzn1obByXB7T1TaK8BA&s'
},

2024: {
    stats: { poblacion: '52.9M', rank: '61', usd: '$4,074', felicidad: '6' },
    news: [
        {
            title: 'La Corte Constitucional suspende investigación contra Petro por financiación',
            description: 'La Corte Constitucional de Colombia suspendió temporalmente una investigación del Consejo Nacional Electoral sobre presuntas irregularidades en la financiación de la campaña de Gustavo Petro en 2022.',
            image: 'https://images.unsplash.com/photo-1518391846015-558a6c5a47e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            date: '24 Abril 2025',
            url: 'https://elpais.com/america-colombia/2025-04-24/la-corte-constitucional-suspende-el-proceso-del-cne-contra-petro-por-la-financiacion-de-su-campana-en-2022.html' // El País :contentReference[oaicite:4]{index=4}
        },
        {
            title: 'Deforestación en Colombia aumenta 35% en 2024',
            description: 'La deforestación en Colombia durante 2024 aumentó un 35% interanual, contrariamente a la tendencia de caída en años anteriores, afectando especialmente la Amazonía.',
            image: 'https://images.unsplash.com/photo-1518391846015-558a6c5a47e6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            date: '20 Febrero 2025',
            url: 'https://www.reuters.com/latam/negocio/Z3BBTIZYLBPNLKRTHYXVKS6RHE-2025-02-20/' // Reuters :contentReference[oaicite:5]{index=5}
        }
    ],
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLBNETHjam9btZ3ML_eSIr354U0_cGaMUQKQ&s'
}
};

// ===== PAÍSES MÁS FELICES (Top 10) =====
const happyCountries = [
    { 
        name: 'Finlandia', 
        flag: '🇫🇮', 
        score: 7.736, 
        rank: 1,
        capital: 'Helsinki',
        population: '5.53M',
        description: 'Finlandia encabeza la lista por séptimo año consecutivo. Destaca por su alto nivel de confianza institucional, baja corrupción y excelente equilibrio entre vida laboral y personal.',
        funFact: 'Es el país con más saunas per cápita del mundo (3.3 millones para 5.5 millones de habitantes).'
    },
    { 
        name: 'Dinamarca', 
        flag: '🇩🇰', 
        score: 7.521, 
        rank: 2,
        capital: 'Copenhague',
        population: '5.84M',
        description: 'Dinamarca destaca por su generoso estado de bienestar, baja desigualdad y el concepto "hygge" que promueve el bienestar y la convivencia.',
        funFact: 'El 50% de los habitantes de Copenhague se desplazan en bicicleta diariamente.'
    },
    { 
        name: 'Islandia', 
        flag: '🇮🇸', 
        score: 7.515, 
        rank: 3,
        capital: 'Reikiavik',
        population: '366k',
        description: 'Islandia tiene una comunidad muy unida, baja criminalidad y una impresionante resiliencia frente a desastres naturales.',
        funFact: 'No tiene ejército, y su policía no porta armas de fuego.'
    },
    { 
        name: 'Suecia', 
        flag: '🇸🇪', 
        score: 7.345, 
        rank: 4,
        capital: 'Estocolmo',
        population: '10.4M',
        description: 'Suecia combina innovación tecnológica con una fuerte red de seguridad social y políticas de igualdad.',
        funFact: 'Tiene 267,570 km² de bosque, cubriendo el 60% del territorio.'
    },
    { 
        name: 'Países Bajos', 
        flag: '🇳🇱', 
        score: 7.306, 
        rank: 5,
        capital: 'Ámsterdam',
        population: '17.5M',
        description: 'Holanda destaca por su excelente infraestructura ciclista, tolerancia social y equilibrio trabajo-vida.',
        funFact: 'Hay más bicicletas que habitantes: 23 millones para 17 millones de personas.'
    },
    { 
        name: 'Costa Rica', 
        flag: '🇨🇷', 
        score: 7.274, 
        rank: 6,
        capital: 'San José',
        population: '5.14M',
        description: 'Costa Rica es líder en sostenibilidad ambiental y políticas de conservación, con una fuerte inversión en educación y salud.',
        funFact: 'Es uno de los países más felices de Latinoamérica y no tiene ejército desde 1948.'
    },
    { 
        name: 'Noruega', 
        flag: '🇳🇴', 
        score: 7.262, 
        rank: 7,
        capital: 'Oslo',
        population: '5.4M',
        description: 'Noruega combina riqueza petrolera con políticas igualitarias y un fondo soberano que asegura el futuro.',
        funFact: 'Tiene el túnel marítimo más profundo del mundo (287 metros bajo el mar).'
    },
    { 
        name: 'Israel', 
        flag: '🇮🇱', 
        score: 7.234, 
        rank: 8,
        capital: 'Jerusalén',
        population: '9.2M',
        description: 'A pesar de los desafíos geopolíticos, Israel mantiene altos niveles de satisfacción vital y fuertes lazos comunitarios.',
        funFact: 'Tiene la mayor densidad de startups per cápita del mundo.'
    },
    { 
        name: 'Luxemburgo', 
        flag: '🇱🇺', 
        score: 7.122, 
        rank: 9,
        capital: 'Luxemburgo',
        population: '634k',
        description: 'Es el país con mayor PIB per cápita del mundo, con una sociedad multicultural y estable.',
        funFact: 'Tres idiomas oficiales: luxemburgués, francés y alemán.'
    },
    { 
        name: 'México', 
        flag: '🇲🇽', 
        score: 6.979, 
        rank: 10,
        capital: 'Ciudad de México',
        population: '128.9M',
        description: 'México destaca por su fuerte cohesión social, calidez de su gente y rica cultura que fomenta el bienestar comunitario.',
        funFact: 'Es el país con más hablantes de español en el mundo y tiene 35 sitios declarados Patrimonio de la Humanidad por la UNESCO.'
    }
];

// ===== PAÍSES MÁS INFELICES (Top 10) =====
const unhappyCountries = [
    { 
        name: 'Lesoto', 
        flag: '🇱🇸', 
        score: 3.757, 
        rank: 138,
        capital: 'Maseru',
        population: '2.14M',
        description: 'Lesoto enfrenta altos índices de pobreza, desigualdad y una de las tasas de VIH/SIDA más altas del mundo, afectando profundamente el bienestar de su población.',
        funFact: 'Es uno de los pocos países del mundo que está completamente rodeado por otro país (Sudáfrica).'
    },
    { 
        name: 'Comoras', 
        flag: '🇰🇲', 
        score: 3.754, 
        rank: 139,
        capital: 'Moroni',
        population: '888k',
        description: 'Inestabilidad política, pobreza y dependencia de ayuda externa afectan el bienestar de la población comorense.',
        funFact: 'Es el mayor productor mundial de ylang-ylang, esencial para perfumes.'
    },
    { 
        name: 'Yemen', 
        flag: '🇾🇪', 
        score: 3.561, 
        rank: 140,
        capital: 'Saná',
        population: '30.9M',
        description: 'La guerra civil, la crisis humanitaria y el colapso económico han devastado la calidad de vida en Yemen.',
        funFact: 'Es uno de los centros de civilización más antiguos del mundo, con más de 3,000 años de historia.'
    },
    { 
        name: 'R. D. del Congo', 
        flag: '🇨🇩', 
        score: 3.469, 
        rank: 141,
        capital: 'Kinsasa',
        population: '92.4M',
        description: 'Conflictos armados, desplazamientos masivos y pobreza extrema marcan la vida cotidiana en el Congo.',
        funFact: 'Es el segundo país más grande de África y tiene el segundo río más caudaloso del mundo.'
    },
    { 
        name: 'Botsuana', 
        flag: '🇧🇼', 
        score: 3.438, 
        rank: 142,
        capital: 'Gaborone',
        population: '2.4M',
        description: 'A pesar del crecimiento económico basado en diamantes, persisten altos niveles de desigualdad y desempleo.',
        funFact: 'Tiene la mayor población de elefantes del mundo: más de 130,000 ejemplares.'
    },
    { 
        name: 'Zimbabue', 
        flag: '🇿🇼', 
        score: 3.396, 
        rank: 143,
        capital: 'Harare',
        population: '15.1M',
        description: 'Hiperinflación crónica, desempleo masivo y crisis política generan alto malestar social en Zimbabue.',
        funFact: 'Tiene la segunda cascada más alta de África: las Cataratas Victoria.'
    },
    { 
        name: 'Malawi', 
        flag: '🇲🇼', 
        score: 3.26, 
        rank: 144,
        capital: 'Lilongüe',
        population: '20.1M',
        description: 'Dependencia agrícola, vulnerabilidad climática y limitado acceso a servicios básicos afectan el bienestar.',
        funFact: 'Es conocido como "El corazón cálido de África" por la amabilidad de su gente.'
    },
    { 
        name: 'Líbano', 
        flag: '🇱🇧', 
        score: 3.188, 
        rank: 145,
        capital: 'Beirut',
        population: '6.8M',
        description: 'La crisis económica, la inflación galopante y la inestabilidad política han devastado la calidad de vida.',
        funFact: 'Alberga 18 comunidades religiosas reconocidas oficialmente, una de las mayores diversidades religiosas del mundo.'
    },
    { 
        name: 'Sierra Leona', 
        flag: '🇸🇱', 
        score: 2.998, 
        rank: 146,
        capital: 'Freetown',
        population: '8.1M',
        description: 'Pobreza extrema, bajo acceso a educación y salud, y secuelas de la guerra civil afectan la felicidad.',
        funFact: 'Su nombre significa "Leona Mountains" y fue un refugio para esclavos liberados.'
    },
    { 
        name: 'Afganistán', 
        flag: '🇦🇫', 
        score: 1.364, 
        rank: 147,
        capital: 'Kabul',
        population: '39.2M',
        description: 'Décadas de conflicto, inestabilidad política, crisis humanitaria y severas restricciones a derechos fundamentales afectan profundamente el bienestar de la población.',
        funFact: 'Es uno de los países más jóvenes del mundo: el 60% tiene menos de 25 años.'
    }
];

// ===== GENERAR TARJETAS DE AÑOS =====
function generateYearCards() {
    const container = document.getElementById('yearsHorizontalScroll');
    const years = Object.keys(timelineData).sort((a, b) => a - b);
    
    years.forEach(year => {
        const data = timelineData[year];
        const card = document.createElement('div');
        card.className = 'year-card';
        card.innerHTML = `
            <div class="year-card-header">${year}</div>
            <div class="year-card-stats">
                <div class="year-stat"><span class="stat-value">${data.stats.poblacion}</span><span class="stat-label"> Pob</span></div>
                <div class="year-stat"><span class="stat-value">${data.stats.rank}</span><span class="stat-label"> Rank</span></div>
                <div class="year-stat"><span class="stat-value">${data.stats.usd}</span><span class="stat-label"> USD</span></div>
                <div class="year-stat"><span class="stat-value">${data.stats.felicidad}</span><span class="stat-label"> Fel</span></div>
            </div>
            <img src="${data.img}" alt="Colombia ${year}">
            <p class="year-card-description">${data.news[0]?.description.substring(0, 80) || ''}...</p>
            <button class="news-button" data-year="${year}">
                <i class="fas fa-newspaper"></i> Noticias ${year}
            </button>
        `;
        container.appendChild(card);
    });
}

// ===== RULETAS INFINITAS =====
function initRuletasInfinitas() {
    const happyTrack = document.getElementById('ruletaHappyTrack');
    for (let i = 0; i < 3; i++) {
        happyCountries.forEach(country => {
            const card = createCountryCard(country, 'happy');
            happyTrack.appendChild(card);
        });
    }

    const unhappyTrack = document.getElementById('ruletaUnhappyTrack');
    for (let i = 0; i < 3; i++) {
        unhappyCountries.forEach(country => {
            const card = createCountryCard(country, 'unhappy');
            unhappyTrack.appendChild(card);
        });
    }

    setupCountryInfoOverlay();
}

function createCountryCard(country, type) {
    const card = document.createElement('div');
    card.className = `country-card ${type}`;
    card.setAttribute('data-country', country.name);
    card.setAttribute('data-type', type);
    card.innerHTML = `
        <div class="country-flag">${country.flag}</div>
        <div class="country-name">${country.name}</div>
        <div class="country-score">${country.score}</div>
        <div class="country-rank">Ranking #${country.rank}</div>
    `;
    return card;
}

function setupCountryInfoOverlay() {
    const overlay = document.getElementById('countryInfoOverlay');
    const closeBtn = overlay.querySelector('.close-overlay');
    const contentDiv = document.getElementById('countryInfoContent');

    closeBtn.addEventListener('click', () => {
        overlay.classList.remove('active');
    });

    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('active');
        }
    });

    document.addEventListener('click', (e) => {
        const card = e.target.closest('.country-card');
        if (!card) return;

        const countryName = card.getAttribute('data-country');
        const type = card.getAttribute('data-type');
        
        const countryList = type === 'happy' ? happyCountries : unhappyCountries;
        const countryData = countryList.find(c => c.name === countryName);

        if (countryData) {
            showCountryInfo(countryData, overlay, contentDiv);
        }
    });
}

function showCountryInfo(country, overlay, contentDiv) {
    contentDiv.innerHTML = `
        <div class="country-flag">${country.flag}</div>
        <h2>${country.name}</h2>
        <div class="info-detail"><strong>Puntuación:</strong> ${country.score}</div>
        <div class="info-detail"><strong>Ranking mundial:</strong> #${country.rank}</div>
        <div class="info-detail"><strong>Capital:</strong> ${country.capital}</div>
        <div class="info-detail"><strong>Población:</strong> ${country.population}</div>
        <div class="info-description">
            <p><strong>Descripción:</strong> ${country.description}</p>
            <p style="margin-top: 15px;"><i class="fas fa-lightbulb" style="color: var(--colombia-yellow);"></i> <strong>Dato curioso:</strong> ${country.funFact}</p>
        </div>
    `;
    overlay.classList.add('active');
}

// ===== MENÚ FLOTANTE =====
function initMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const menuItems = document.getElementById('menuItems');
    const menuLinks = document.querySelectorAll('.menu-link');
    
    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        menuItems.classList.toggle('show');
    });
    
    document.addEventListener('click', (e) => {
        if (!menuItems.contains(e.target) && !menuToggle.contains(e.target)) {
            menuItems.classList.remove('show');
        }
    });
    
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                menuItems.classList.remove('show');
                
                menuLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });
    
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('.section');
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        menuLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ===== SCROLL REVEAL =====
function initScrollAnimations() {
    const reveals = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.2, rootMargin: '0px' });
    
    reveals.forEach(reveal => observer.observe(reveal));
}

// ===== OVERLAY NOTICIAS =====
function initOverlay() {
    if (!document.getElementById('newsOverlay')) {
        const overlay = document.createElement('div');
        overlay.id = 'newsOverlay';
        overlay.className = 'news-overlay';
        overlay.innerHTML = `
            <div class="overlay-content">
                <button class="close-overlay"><i class="fas fa-times"></i></button>
                <h2 id="overlayYearTitle">Noticias</h2>
                <div id="overlayNewsList"></div>
            </div>
        `;
        document.body.appendChild(overlay);
        
        overlay.querySelector('.close-overlay').addEventListener('click', () => {
            overlay.classList.remove('active');
        });
        
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('active');
            }
        });
    }
    
    const overlay = document.getElementById('newsOverlay');
    const overlayTitle = document.getElementById('overlayYearTitle');
    const overlayList = document.getElementById('overlayNewsList');
    
    document.addEventListener('click', (e) => {
        if (e.target.closest('.news-button')) {
            const button = e.target.closest('.news-button');
            const year = button.getAttribute('data-year');
            const yearData = timelineData[year];
            
            if (yearData) {
                overlayTitle.textContent = `Noticias destacadas ${year}`;
                overlayList.innerHTML = yearData.news.map(news => `
                    <div class="overlay-news-item">
                        <h3>${news.title}</h3>
                        <p>${news.description}</p>
                        <p><small>${news.date}</small></p>
                        <a href="${news.url}" target="_blank">Leer más <i class="fas fa-external-link-alt"></i></a>
                    </div>
                `).join('');
                overlay.classList.add('active');
            }
        }
    });
}

// ===== SCROLL HORIZONTAL =====
function initHorizontalScroll() {
    const scrollContainer = document.getElementById('yearsHorizontalScroll');
    
    if (scrollContainer) {
        scrollContainer.addEventListener('wheel', (e) => {
            if (e.deltaY !== 0) {
                e.preventDefault();
                scrollContainer.scrollLeft += e.deltaY;
            }
        }, { passive: false });
    }
}

// ===== PARALLAX =====
function initParallaxEffect() {
    const sections = document.querySelectorAll('.section');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        sections.forEach(section => {
            const speed = section.getAttribute('data-speed') || 0.3;
            const bg = section.querySelector('.parallax-bg');
            if (bg) {
                bg.style.transform = `translateY(${scrolled * speed}px)`;
            }
            
            const content = section.querySelector('.container');
            if (content) {
                const rect = section.getBoundingClientRect();
                const center = window.innerHeight / 2;
                const distance = rect.top + rect.height / 2 - center;
                const rotateX = distance * 0.02;
                content.style.transform = `perspective(1000px) rotateX(${rotateX}deg)`;
            }
        });
    });
}

// ===== PARTÍCULAS =====
function createParticles() {
    const inicioSection = document.querySelector('.inicio-section');
    const particlesDiv = document.createElement('div');
    particlesDiv.className = 'particles';
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.width = Math.random() * 5 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = Math.random() * 10 + 10 + 's';
        particle.style.animationDelay = Math.random() * 10 + 's';
        particlesDiv.appendChild(particle);
    }
    
    inicioSection.appendChild(particlesDiv);
}


// ===== GRÁFICAS COMPARATIVAS: COLOMBIA VS RESTO DEL MUNDO =====
function initGraficasComparativas() {
    // Datos de Colombia (ya existentes)
    const colombiaData = {
        years: [2011, 2012, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
        scores: [6.202, 6.416, 6.477, 6.481, 6.357, 6.26, 6.125, 6.163, 6.012, 5.781, 5.63, 5.695, 6.004],
        ranks: [41, 35, 33, 31, 36, 37, 43, 44, 53, 66, 72, 78, 61]
    };

    // Datos del Resto del Mundo (promedio global)
    const mundoData = {
        years: [2011, 2012, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
        scores: [5.386, 5.412, 5.369, 5.375, 5.348, 5.370, 5.402, 5.469, 5.530, 5.552, 5.539, 5.526, 5.575],
        ranks: [78.74, 78.78, 79.80, 79.31, 78.27, 78.77, 78.66, 77.22, 76.16, 73.55, 68.98, 71.96, 74.09]
    };

    // GRÁFICA 1: COMPARACIÓN DE PUNTAJES
    const traceColombiaScore = {
        x: colombiaData.years,
        y: colombiaData.scores,
        type: 'scatter',
        mode: 'lines+markers',
        name: 'Colombia',
        line: {
            color: '#ffd700',
            width: 4,
            shape: 'spline'
        },
        marker: {
            size: 12,
            color: '#0033a0',
            symbol: 'circle',
            line: {
                color: '#ce1126',
                width: 2
            }
        },
        text: colombiaData.scores.map(score => `Colombia: ${score}`),
        hovertemplate: '<b>Colombia %{x}</b><br>Puntaje: %{y}<extra></extra>'
    };

    const traceMundoScore = {
        x: mundoData.years,
        y: mundoData.scores,
        type: 'scatter',
        mode: 'lines+markers',
        name: 'Promedio Mundial',
        line: {
            color: 'rgba(255, 255, 255, 0.6)',
            width: 3,
            shape: 'spline',
            dash: 'dash'
        },
        marker: {
            size: 8,
            color: 'rgba(255, 255, 255, 0.4)',
            symbol: 'diamond'
        },
        text: mundoData.scores.map(score => `Mundo: ${score}`),
        hovertemplate: '<b>Promedio Mundial %{x}</b><br>Puntaje: %{y}<extra></extra>'
    };

    // GRÁFICA 2: COMPARACIÓN DE RANKINGS
    const traceColombiaRank = {
        x: colombiaData.years,
        y: colombiaData.ranks,
        type: 'scatter',
        mode: 'lines+markers',
        name: 'Colombia',
        line: {
            color: '#ffd700',
            width: 4,
            shape: 'spline'
        },
        marker: {
            size: 12,
            color: '#0033a0',
            symbol: 'circle',
            line: {
                color: '#ce1126',
                width: 2
            }
        },
        text: colombiaData.ranks.map(rank => `Colombia: #${rank}`),
        hovertemplate: '<b>Colombia %{x}</b><br>Ranking: #%{y}<extra></extra>'
    };

    const traceMundoRank = {
        x: mundoData.years,
        y: mundoData.ranks,
        type: 'scatter',
        mode: 'lines+markers',
        name: 'Posición Promedio Mundial',
        line: {
            color: 'rgba(255, 255, 255, 0.6)',
            width: 3,
            shape: 'spline',
            dash: 'dash'
        },
        marker: {
            size: 8,
            color: 'rgba(255, 255, 255, 0.4)',
            symbol: 'diamond'
        },
        text: mundoData.ranks.map(rank => `Mundo: #${rank.toFixed(1)}`),
        hovertemplate: '<b>Posición Promedio %{x}</b><br>Ranking: #%{y:.1f}<extra></extra>'
    };

    // Layout para gráfica de puntajes
    const layoutScore = {
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        font: { color: '#ffffff', family: 'Segoe UI, sans-serif' },
        title: {
            text: 'Evolución del Puntaje de Felicidad',
            font: { size: 18, color: '#ffffff' }
        },
        xaxis: {
            title: 'Año',
            gridcolor: 'rgba(255,255,255,0.1)',
            tickvals: colombiaData.years,
            ticktext: colombiaData.years.map(y => y.toString())
        },
        yaxis: {
            title: 'Puntaje de Felicidad',
            gridcolor: 'rgba(255,255,255,0.1)',
            range: [5.2, 6.6]
        },
        hovermode: 'x unified',
        showlegend: true,
        legend: {
            orientation: 'h',
            y: 1.15,
            x: 0.5,
            xanchor: 'center',
            bgcolor: 'rgba(0,0,0,0.5)',
            bordercolor: 'rgba(255,255,255,0.2)',
            borderwidth: 1
        },
        margin: { l: 60, r: 30, t: 80, b: 60 },
        annotations: [
            {
                x: 2024,
                y: colombiaData.scores[colombiaData.scores.length-1],
                xref: 'x',
                yref: 'y',
                text: 'Colombia 2024',
                showarrow: true,
                arrowhead: 2,
                arrowsize: 1,
                arrowwidth: 2,
                arrowcolor: '#ffd700',
                ax: 30,
                ay: -40,
                font: { size: 10, color: '#ffd700' }
            },
            {
                x: 2024,
                y: mundoData.scores[mundoData.scores.length-1],
                xref: 'x',
                yref: 'y',
                text: 'Mundo 2024',
                showarrow: true,
                arrowhead: 2,
                arrowsize: 1,
                arrowwidth: 2,
                arrowcolor: 'white',
                ax: -30,
                ay: 30,
                font: { size: 10, color: 'white' }
            }
        ]
    };

    // Layout para gráfica de rankings
    const layoutRank = {
        paper_bgcolor: 'rgba(0,0,0,0)',
        plot_bgcolor: 'rgba(0,0,0,0)',
        font: { color: '#ffffff', family: 'Segoe UI, sans-serif' },
        title: {
            text: 'Evolución del Ranking (menor número = más feliz)',
            font: { size: 18, color: '#ffffff' }
        },
        xaxis: {
            title: 'Año',
            gridcolor: 'rgba(255,255,255,0.1)',
            tickvals: colombiaData.years,
            ticktext: colombiaData.years.map(y => y.toString())
        },
        yaxis: {
            title: 'Ranking',
            gridcolor: 'rgba(255,255,255,0.1)',
            autorange: 'reversed'
        },
        hovermode: 'x unified',
        showlegend: true,
        legend: {
            orientation: 'h',
            y: 1.15,
            x: 0.5,
            xanchor: 'center',
            bgcolor: 'rgba(0,0,0,0.5)',
            bordercolor: 'rgba(255,255,255,0.2)',
            borderwidth: 1
        },
        margin: { l: 60, r: 30, t: 80, b: 60 },
        annotations: [
            {
                x: 2024,
                y: colombiaData.ranks[colombiaData.ranks.length-1],
                xref: 'x',
                yref: 'y',
                text: '#61',
                showarrow: true,
                arrowhead: 2,
                arrowsize: 1,
                arrowwidth: 2,
                arrowcolor: '#ffd700',
                ax: 30,
                ay: -30,
                font: { size: 12, color: '#ffd700' }
            },
            {
                x: 2024,
                y: mundoData.ranks[mundoData.ranks.length-1],
                xref: 'x',
                yref: 'y',
                text: '#74',
                showarrow: true,
                arrowhead: 2,
                arrowsize: 1,
                arrowwidth: 2,
                arrowcolor: 'white',
                ax: -30,
                ay: 30,
                font: { size: 12, color: 'white' }
            }
        ]
    };

    // Crear las gráficas comparativas
    Plotly.newPlot('chart-colombia-vs-mundo-score', [traceColombiaScore, traceMundoScore], layoutScore, {
        displayModeBar: true,
        displaylogo: false,
        responsive: true,
        modeBarButtonsToRemove: ['lasso2d', 'select2d']
    });

    Plotly.newPlot('chart-colombia-vs-mundo-rank', [traceColombiaRank, traceMundoRank], layoutRank, {
        displayModeBar: true,
        displaylogo: false,
        responsive: true,
        modeBarButtonsToRemove: ['lasso2d', 'select2d']
    });

    // Redimensionamiento
    window.addEventListener('resize', () => {
        Plotly.Plots.resize(document.getElementById('chart-colombia-vs-mundo-score'));
        Plotly.Plots.resize(document.getElementById('chart-colombia-vs-mundo-rank'));
    });
}
