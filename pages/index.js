import Head from 'next/head'

const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'HomeAndConstructionBusiness',
      '@id': 'https://impermebilizacion.uio.ec/#business',
      'name': 'Imperblock - Soluciones Técnicas Ecuador',
      'url': 'https://impermebilizacion.uio.ec/',
      'image': 'https://impermebilizacion.uio.ec/images/a.webp',
      'logo': 'https://impermebilizacion.uio.ec/images/logo.png',
      'description': 'Impermeabilización técnica y construcción adaptada al clima andino de Quito, Cumbayá, Los Chillos y Pichincha.',
      'telephone': '+593959785062',
      'priceRange': '$$',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'Sector Kennedy, Quito',
        'addressLocality': 'Quito',
        'addressRegion': 'Pichincha',
        'postalCode': '170102',
        'addressCountry': 'EC'
      },
      'geo': {
        '@type': 'GeoCoordinates',
        'latitude': '-0.1807',
        'longitude': '-78.4678'
      },
      'areaServed': [
        { '@type': 'City', 'name': 'Quito' },
        { '@type': 'City', 'name': 'Cumbayá' },
        { '@type': 'City', 'name': 'Los Chillos' },
        { '@type': 'State', 'name': 'Pichincha' }
      ],
      'openingHoursSpecification': [
        { '@type': 'OpeningHoursSpecification', 'dayOfWeek': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], 'opens': '08:00', 'closes': '18:00' },
        { '@type': 'OpeningHoursSpecification', 'dayOfWeek': 'Saturday', 'opens': '09:00', 'closes': '14:00' }
      ],
      'hasOfferCatalog': {
        '@type': 'OfferCatalog',
        'name': 'Impermeabilización especializada',
        'itemListElement': [
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Impermeabilización de losas',
              'serviceType': 'Aplicación de manto asfáltico, membranas líquidas y sellado UV',
              'areaServed': ['Quito', 'Cumbayá', 'Los Chillos', 'Pichincha'],
              'description': 'Sistema mixto (imprimación acrílica + manto asfáltico reforzado) calibrado para radiación UV alta y lluvia concentrada.'
            },
            'availability': 'https://schema.org/InStock'
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Impermeabilización de cisternas',
              'serviceType': 'Revestimiento sanitario y sellado estructural',
              'areaServed': ['Quito', 'Pichincha'],
              'description': 'Revestimientos epóxicos y cementicios certificados para agua potable y control de filtraciones.'
            },
            'availability': 'https://schema.org/InStock'
          },
          {
            '@type': 'Offer',
            'itemOffered': {
              '@type': 'Service',
              'name': 'Corrección de humedad en paredes',
              'serviceType': 'Tratamiento de humedad por capilaridad y filtración',
              'areaServed': ['Quito', 'Los Chillos', 'Pichincha'],
              'description': 'Barreras químicas transpirables y morteros flexibles para muros en altura (2.850 m).'
            },
            'availability': 'https://schema.org/InStock'
          }
        ]
      },
      'sameAs': [
        'https://instagram.com/imperblock.ec',
        'https://facebook.com/imperblock.ec',
        'https://tiktok.com/@imperblock.ec',
        'https://medium.com/@blockimper'
      ]
    },
    {
      '@type': 'Service',
      '@id': 'https://impermebilizacion.uio.ec/#service',
      'name': 'Impermeabilización certificada para clima andino',
      'serviceType': ['Impermeabilización de losas', 'Impermeabilización de cisternas', 'Corrección de humedad en paredes'],
      'provider': { '@id': 'https://impermebilizacion.uio.ec/#business' },
      'areaServed': ['Quito', 'Cumbayá', 'Los Chillos', 'Pichincha'],
      'audience': { '@type': 'Audience', 'audienceType': 'Propietarios y administradores de edificios en Quito' },
      'termsOfService': 'Garantía escrita según sistema aplicado.'
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://impermebilizacion.uio.ec/#faq',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '¿Cuál es el mejor impermeabilizante para losas en Quito?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Imperblock aplica un sistema mixto: imprimación acrílica, manto asfáltico con refuerzo de poliéster y sellado UV. Evaluamos juntas, pendientes y dilataciones para que funcione en la altitud de Quito y entregamos garantía certificada.'
          }
        },
        {
          '@type': 'Question',
          'name': '¿Cada cuánto necesita mantenimiento mi impermeabilización?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Incluimos visita anual preventiva para revisar juntas, bajantes y sellos. Si detectamos fisuras, intervenimos antes de que aparezcan goteras.'
          }
        },
        {
          '@type': 'Question',
          'name': '¿Funciona en Los Chillos, Cumbayá y valles con lluvias fuertes?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Sí. Ajustamos pendientes, reforzamos perímetros y usamos sistemas con alta resistencia a lluvias concentradas y radiación UV del valle.'
          }
        },
        {
          '@type': 'Question',
          'name': '¿Pueden reparar filtraciones y salitre existentes?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Retiramos material suelto, tratamos capilaridad y salitre con barreras químicas y morteros transpirables antes de sellar con el nuevo sistema.'
          }
        },
        {
          '@type': 'Question',
          'name': '¿Cuánto tarda impermeabilizar una losa de 100 m²?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Entre 2 y 4 días según el estado de la superficie y el clima. Incluye preparación, aplicación por capas y curado controlado.'
          }
        },
        {
          '@type': 'Question',
          'name': '¿Pueden impermeabilizar cisternas de agua potable?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Sí. Usamos sistemas epóxicos y cementicios certificados para uso sanitario, con pruebas de estanqueidad antes de entregar.'
          }
        },
        {
          '@type': 'Question',
          'name': '¿La garantía es escrita y transferible?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Entregamos garantía escrita; si vendes la propiedad puedes transferirla previo registro del nuevo propietario.'
          }
        },
        {
          '@type': 'Question',
          'name': '¿Trabajan impermeabilización transitable para terrazas?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Instalamos mantos y sistemas líquidos transitables, con refuerzos en tránsito y protección UV para evitar desgaste prematuro.'
          }
        },
        {
          '@type': 'Question',
          'name': '¿Cómo es el proceso de cotización?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Agendamos visita técnica gratuita, hacemos diagnóstico y entregamos presupuesto detallado por m² con materiales y tiempos definidos.'
          }
        },
        {
          '@type': 'Question',
          'name': '¿Atienden emergencias por goteras en temporada de lluvia?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Sí. Podemos realizar sellos provisionales de contención y programar la solución definitiva cuando el clima lo permita.'
          }
        }
      ]
    }
  ]
}

export default function Home() {
  const ogImage = 'https://impermebilizacion.uio.ec/images/opengraph.png'
  return (
    <>
      <Head>
        <title>Imperblock | Impermeabilización y Construcción en Quito | Garantía Certificada</title>
        <meta
          name="description"
          content="Expertos en eliminar humedad y goteras con tecnología adaptada al clima de Quito. 10 años protegiendo hogares ecuatorianos. ¡Cotización gratuita vía WhatsApp!"
        />
        <meta name="keywords" content="Chova, Manto asfáltico, Humedad por capilaridad, Impermeabilizante acrílico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="canonical" href="https://impermebilizacion.uio.ec/" />
        {/* OG/Twitter/Telegram/WhatsApp/Reddit meta keep geo-benefit message consistent across engines */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Imperblock | Impermeabilización y Construcción en Quito | Garantía Certificada" />
        <meta
          property="og:description"
          content="Tecnología adaptada al clima andino de Quito. Eliminamos humedad y goteras con garantía certificada."
        />
        <meta property="og:site_name" content="Imperblock - Soluciones Técnicas Ecuador" />
        <meta property="og:url" content="https://impermebilizacion.uio.ec/" />
        <meta property="og:locale" content="es_EC" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:image:secure_url" content={ogImage} />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="720" />
        <meta property="og:image:height" content="1280" />
        <meta property="og:image:alt" content="Equipo Imperblock impermeabilizando losa en Quito" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Imperblock | Impermeabilización y Construcción en Quito | Garantía Certificada" />
        <meta
          name="twitter:description"
          content="Tecnología adaptada al clima andino de Quito. Eliminamos humedad y goteras con garantía certificada."
        />
        <meta name="twitter:image" content={ogImage} />
        <meta itemProp="name" content="Imperblock | Impermeabilización y Construcción en Quito | Garantía Certificada" />
        <meta
          itemProp="description"
          content="Expertos en eliminar humedad y goteras con tecnología adaptada al clima de Quito. 10 años protegiendo hogares ecuatorianos."
        />
        <meta itemProp="image" content={ogImage} />
        <link rel="icon" type="image/png" href="/images/logo.png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      </Head>

      <div className="page-shell">
        <header className="top-bar" aria-label="Cabecera principal">
          <div className="container bar-inner">
            <div className="brand-mark">
              <span className="brand-icon" role="img" aria-label="Gota de agua">
                💧
              </span>
              <div>
                <span className="brand-name">Imperblock</span>
                <p className="brand-tagline">Ingeniería ecuatoriana anti-humedad</p>
              </div>
            </div>
            <nav className="main-nav" aria-label="Navegación principal">
              <a href="#servicios">Servicios</a>
              <a href="#local-trust">Experiencia local</a>
              <a href="#faq">FAQ</a>
              <a href="#contacto">Contacto</a>
            </nav>
            <a
              className="cta-link"
              aria-label="Abrir WhatsApp Imperblock"
              href="https://wa.me/593959785062?text=Quiero%20una%20inspeccion%20Imperblock"
            >
              WhatsApp
            </a>
          </div>
        </header>

        <main>
          <article id="inicio" className="hero-ecu hero-with-video" aria-label="Impermeabilización técnica en Quito">
            <div className="hero-video-bg" aria-hidden="true">
              <video
                src="/videos/1.mp4"
                poster="/images/a.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
              <div className="hero-overlay"></div>
            </div>
            <div className="container hero-grid">
              <div className="row align-items-center">
                <div className="col-12 col-lg-8">
                  <div className="hero-copy">
                    <p className="eyebrow"><strong>Tecnología adaptada al clima andino</strong></p>
                    <h1>Impermeabilización Definitiva en Quito y Valles</h1>
                    <p className="lead">
                      Quitamos humedad y goteras con métodos que resisten radiación UV y lluvias concentradas. Diagnóstico técnico, materiales
                      certificados y garantía escrita.
                    </p>
                    <div className="cta-row">
                      <a
                        className="btn primary"
                        aria-label="Cotizar inspección Imperblock por WhatsApp"
                        href="https://wa.me/593959785062?text=Quiero%20una%20inspeccion%20Imperblock"
                      >
                        Cotizar por WhatsApp
                      </a>
                      <a className="btn ghost" aria-label="Llamar a un ingeniero de Imperblock" href="tel:+593959785062">
                        Llamar a un ingeniero
                      </a>
                    </div>
                    <ul className="hero-points">
                      <li>Garantía escrita y mantenimiento preventivo</li>
                      <li>Diagnóstico según altura <em>2.850 m</em> y dilataciones térmicas</li>
                      <li>Respuesta rápida en Quito, Cumbayá y Los Chillos</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <section id="por-que" className="section container" aria-label="Causas de humedad en Quito">
            <h2>¿Por qué se humedecen las paredes en Ecuador?</h2>
            <p className="muted">
              Altitud, radiación UV y lluvias concentradas generan microfisuras. Imperblock formula sistemas que soportan dilatación,
              capilaridad y cambios térmicos propios de Quito.
            </p>
            <div className="qa-grid">
              <article>
                <h3>¿Qué pasa si uso impermeabilizante genérico?</h3>
                <p>Sin protección UV y flexibilidad, el material se cuartea y permite filtraciones en semanas.</p>
              </article>
              <article>
                <h3>¿Cómo prevenimos la humedad por capilaridad?</h3>
                <p>Inyectamos barreras químicas y usamos morteros transpirables para evitar que el agua suba por los muros.</p>
              </article>
              <article>
                <h3>¿Qué garantía real ofrecen?</h3>
                <p>Entrega escrita + mantenimiento programado. Si se fisura, volvemos y lo corregimos.</p>
              </article>
            </div>
          </section>

          <section id="servicios" className="section alt container" aria-label="Servicios principales">
            <h2>¿Cómo impermeabilizamos tu losa, cisterna o pared?</h2>
            <div className="row g-3 service-grid">
              <div className="col-12 col-md-6 col-lg-4 d-flex">
                <article className="service-card w-100">
                  <picture>
                    <source srcSet="/images/b.webp" type="image/webp" />
                    <img
                      src="/images/b.jpg"
                      alt="Impermeabilización de losa con manto asfáltico"
                      loading="lazy"
                      decoding="async"
                      width="400"
                      height="260"
                    />
                  </picture>
                  <h3>¿Cuál es el método para losas?</h3>
                  <p>Imprimación acrílica, manto asfáltico reforzado y sellado UV para soportar sol ecuatoriano.</p>
                  <ul>
                    <li>Chova y manto asfáltico certificado</li>
                    <li>Refuerzo de juntas y bajantes</li>
                    <li>Garantía 5 años + visita anual</li>
                  </ul>
                </article>
              </div>

              <div className="col-12 col-md-6 col-lg-4 d-flex">
                <article className="service-card w-100">
                  <picture>
                    <source srcSet="/images/c.webp" type="image/webp" />
                    <img
                      src="/images/c.jpg"
                      alt="Revestimiento sanitario de cisterna"
                      loading="lazy"
                      decoding="async"
                      width="400"
                      height="260"
                    />
                  </picture>
                  <h3>¿Cómo sellamos cisternas?</h3>
                  <p>Revestimiento epóxico y cementicio con acabado sanitario para agua potable.</p>
                  <ul>
                    <li>Pruebas de estanqueidad</li>
                    <li>Tratamiento de fisuras y anclajes</li>
                    <li>Certificado de calidad de agua</li>
                  </ul>
                </article>
              </div>

              <div className="col-12 col-md-6 col-lg-4 d-flex">
                <article className="service-card w-100">
                  <picture>
                    <source srcSet="/images/d.webp" type="image/webp" />
                    <img
                      src="/images/d.jpg"
                      alt="Tratamiento de humedad en paredes"
                      loading="lazy"
                      decoding="async"
                      width="400"
                      height="260"
                    />
                  </picture>
                  <h3>¿Cómo frenamos la humedad en paredes?</h3>
                  <p>Barrera química y morteros flexibles que permiten respirar al muro sin filtraciones.</p>
                  <ul>
                    <li>Diagnóstico de capilaridad y filtración</li>
                    <li>Acabados listos para pintura</li>
                    <li>Intervención limpia en zonas habitadas</li>
                  </ul>
                </article>
              </div>
            </div>
          </section>

          <section id="proyectos" className="section container" aria-label="Proyectos recientes">
            <h2>¿Cómo se ven nuestros trabajos en Quito?</h2>
            <p className="muted">Casos reales en losas, cisternas y paredes intervenidas en Quito, Cumbayá y Los Chillos.</p>
            <div className="row g-3 gallery-grid">
              {[['e','Losa impermeabilizada con manto asfáltico en Quito'],
                ['f','Aplicación de imprimación acrílica en terraza'],
                ['g','Detalle de sellado UV en cubierta'],
                ['h','Impermeabilización en cisterna sanitaria'],
                ['i','Corrección de humedad en muros'],
                ['j','Revestimiento final listo para pintura'],
                ['k','Equipo Imperblock aplicando membrana líquida'],
                ['l','Sellado de juntas y perímetros en terraza']].map(([letter, alt]) => (
                  <div className="col-6 col-md-3" key={letter}>
                    <figure>
                      <picture>
                        <source srcSet={`/images/${letter}.webp`} type="image/webp" />
                        <img src={`/images/${letter}.jpg`} alt={alt} loading="lazy" decoding="async" width="320" height="220" />
                      </picture>
                    </figure>
                  </div>
                ))}
            </div>
          </section>

          <section id="local-trust" className="section container" aria-label="Experiencia en clima ecuatoriano">
            <h2>Experiencia en Clima Ecuatoriano</h2>
            <p>
              20+ años trabajando en Quito, Cumbayá y Los Chillos. Adaptamos sistemas a radiación UV alta, granizadas y cambios térmicos
              bruscos.
            </p>
            <div className="trust-grid">
              <article>
                <h3>¿Qué es la ventaja Ecua?</h3>
                <p>Formulamos según altitud (2.850 m) para que las membranas no se cuarteen ni levanten.</p>
              </article>
              <article>
                <h3>¿Cómo evitamos fisuras futuras?</h3>
                <p>Refuerzos en juntas, perímetros y encuentros críticos con geotextil y sellos elásticos.</p>
              </article>
              <article>
                <h3>¿Quién ejecuta?</h3>
                <p>Equipo propio dirigido por ingeniería civil y arquitectura local. Sin subcontratos ocultos.</p>
              </article>
            </div>
          </section>

          <section id="hashtags" className="section hashtags-section container" aria-label="Zona de hashtags y contexto local">
            <div className="hashtags-content">
              <h2 className="hashtags-title">Zona de Hashtags</h2>
              <div className="hashtags-grid">
                {[
                  '#ImpermeabilizacionQuito',
                  '#ImpermeabilizacionCumbaya',
                  '#ValleDeLosChillos',
                  '#Tumbaco',
                  '#ConstruccionQuito',
                  '#QuitoNorte',
                  '#QuitoSur',
                  '#Sangolqui',
                  '#ArquitecturaQuito',
                  '#Pichincha',
                  '#Goteras',
                  '#Humedad',
                  '#Filtraciones',
                  '#ParedesHumedas',
                  '#Salitre',
                  '#Moho',
                  '#ReparacionDeTechos',
                  '#MantenimientoDeCasas',
                  '#LluviasQuito',
                  '#InviernoEnQuito',
                  '#Chova',
                  '#MantoAsfaltico',
                  '#Impermeabilizante',
                  '#Losa',
                  '#Cisternas',
                  '#IngenieriaCivilEcuador',
                  '#ConstruccionSegura',
                  '#Imperblock',
                  '#IngenieriaEcuatoriana',
                  '#ClimaAndino',
                  '#SolDeQuito',
                  '#HogarSeco',
                  '#CalidadEcuador',
                  '#SinHumedad'
                ].map((tag) => (
                  <span key={tag} className="hashtag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <aside className="section alt container" aria-label="Confianza y garantías">
            <h2>¿Por qué confiar en Imperblock?</h2>
            <ul className="confidence-list">
              <li>Garantía certificada y seguimiento anual.</li>
              <li>Materiales probados: chova, manto asfáltico, impermeabilizante acrílico grado andino.</li>
              <li>Respuestas en menos de 24h en Quito y valles.</li>
            </ul>
          </aside>

          <section id="faq" className="section container" aria-label="Preguntas frecuentes">
            <h2>Preguntas frecuentes de impermeabilización en Quito</h2>
            <div className="row g-3 faq-grid">
              {[
                ['¿Cuál es el mejor impermeabilizante para losas en Quito?', 'Usamos sistema mixto: imprimación acrílica, manto asfáltico reforzado y sellado UV para soportar radiación y lluvia.'],
                ['¿Cada cuánto necesita mantenimiento mi impermeabilización?', 'Incluimos visita anual preventiva; revisamos juntas y sellos y corregimos fisuras antes de que aparezcan goteras.'],
                ['¿Funciona en Los Chillos, Cumbayá y valles?', 'Sí. Ajustamos pendientes y refuerzos para lluvias concentradas y alta radiación UV del valle.'],
                ['¿Pueden reparar filtraciones y salitre existentes?', 'Tratamos capilaridad con barreras químicas, retiramos material suelto y sellamos antes de aplicar el nuevo sistema.'],
                ['¿Cuánto tarda impermeabilizar una losa de 100 m²?', 'Entre 2 y 4 días según estado y clima: preparación, aplicación por capas y curado controlado.'],
                ['¿Pueden impermeabilizar cisternas de agua potable?', 'Usamos sistemas epóxicos y cementicios certificados para uso sanitario y realizamos pruebas de estanqueidad.'],
                ['¿La garantía es escrita y transferible?', 'Entregamos garantía escrita; si vendes la propiedad, puedes transferirla registrando al nuevo propietario.'],
                ['¿Trabajan impermeabilización transitable para terrazas?', 'Instalamos sistemas transitables con refuerzo en perímetros y protección UV para evitar desgaste prematuro.'],
                ['¿Cómo es el proceso de cotización?', 'Visita técnica gratuita, diagnóstico y presupuesto detallado por m² con materiales y tiempos definidos.'],
                ['¿Atienden emergencias por goteras en temporada de lluvia?', 'Podemos sellar provisionalmente y agendar la solución definitiva cuando el clima lo permita.'],
              ].map(([q, a]) => (
                <div className="col-12 col-md-6" key={q}>
                  <details>
                    <summary>{q}</summary>
                    <p>{a}</p>
                  </details>
                </div>
              ))}
            </div>
          </section>

          <section id="contacto" className="section contact-section" aria-label="Contacto y cotización">
            <div className="container">
              <div className="row contact-panel">
                <div className="col-12 col-lg-6 contact-copy">
                  <h2>¿Listo para eliminar la humedad?</h2>
                  <p className="lead">Agenda inspección gratuita. Respuesta inmediata por WhatsApp o llamada directa.</p>
                  <div className="contact-badges">
                    <span>Quito · Cumbayá · Los Chillos</span>
                    <span>Ingeniería ecuatoriana</span>
                    <span>Garantía escrita</span>
                  </div>
                </div>
                <div className="col-12 col-lg-6 contact-actions">
                  <a
                    className="btn primary"
                    aria-label="Hablar con Imperblock por WhatsApp"
                    href="https://wa.me/593959785062?text=Necesito%20impermeabilizar%20con%20Imperblock"
                  >
                    WhatsApp inmediato
                  </a>
                  <a className="btn ghost" aria-label="Llamar a Imperblock" href="tel:+593959785062">
                    Llamar ahora
                  </a>
                  <a className="contact-link" href="mailto:contacto@imperblock.ec" aria-label="Enviar correo a Imperblock">
                    contacto@imperblock.ec
                  </a>
                  <p className="contact-meta">Atendemos Quito, Cumbayá, Los Chillos y Pichincha.</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="page-footer" aria-label="Pie de página">
          <div className="container footer-inner">
            <div>
              <p className="brand-name">Imperblock</p>
              <p className="muted">Soluciones técnicas contra la humedad — Quito, Ecuador</p>
            </div>
            <div className="footer-links">
              <a href="tel:+593959785062" aria-label="Llamar a Imperblock">095 978 5062</a>
              <a href="https://instagram.com/imperblock.ec" target="_blank" rel="noopener" aria-label="Instagram Imperblock">
                Instagram
              </a>
              <a href="https://facebook.com/imperblock.ec" target="_blank" rel="noopener" aria-label="Facebook Imperblock">
                Facebook
              </a>
              <a href="https://tiktok.com/@imperblock.ec" target="_blank" rel="noopener" aria-label="TikTok Imperblock">
                TikTok
              </a>
            </div>
          </div>
          <div className="footer-credit">
            <a href="https://instagram.com/freudiandev" target="_blank" rel="noopener" aria-label="Sitio programado por freudiandev">
              Programado por freudiandev
            </a>
          </div>
        </footer>

        <div className="sticky-footer" aria-label="CTA móvil fija">
          <a
            aria-label="Abrir WhatsApp Imperblock"
            href="https://wa.me/593959785062?text=Necesito%20impermeabilizar%20con%20Imperblock"
          >
            WhatsApp Imperblock
          </a>
        </div>
      </div>
    </>
  )
}
