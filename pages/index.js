import Head from 'next/head'

const schemaData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'HomeAndConstructionBusiness',
      '@id': 'https://imperblock.ec/#business',
      'name': 'Imperblock - Soluciones Técnicas Ecuador',
      'url': 'https://imperblock.ec/',
      'image': 'https://imperblock.ec/images/a.webp',
      'logo': 'https://imperblock.ec/images/logo.png',
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
      '@id': 'https://imperblock.ec/#service',
      'name': 'Impermeabilización certificada para clima andino',
      'serviceType': ['Impermeabilización de losas', 'Impermeabilización de cisternas', 'Corrección de humedad en paredes'],
      'provider': { '@id': 'https://imperblock.ec/#business' },
      'areaServed': ['Quito', 'Cumbayá', 'Los Chillos', 'Pichincha'],
      'audience': { '@type': 'Audience', 'audienceType': 'Propietarios y administradores de edificios en Quito' },
      'termsOfService': 'Garantía escrita según sistema aplicado.'
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://imperblock.ec/#faq',
      'mainEntity': [
        {
          '@type': 'Question',
          'name': '¿Cuál es el mejor impermeabilizante para losas en Quito?',
          'acceptedAnswer': {
            '@type': 'Answer',
            'text': 'Imperblock aplica un sistema mixto: imprimación acrílica, manto asfáltico con refuerzo de poliéster y sellado UV. Evaluamos juntas, pendientes y dilataciones para que funcione en la altitud de Quito y entregamos garantía certificada.'
          }
        }
      ]
    }
  ]
}

export default function Home() {
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
        <link rel="canonical" href="https://imperblock.ec/" />
        {/* OG tags keep geo-benefit message consistent across social and LLM snippets */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Imperblock | Impermeabilización y Construcción en Quito | Garantía Certificada" />
        <meta
          property="og:description"
          content="Tecnología adaptada al clima andino de Quito. Eliminamos humedad y goteras con garantía certificada."
        />
        <meta property="og:url" content="https://imperblock.ec/" />
        <meta property="og:locale" content="es_EC" />
        <meta property="og:image" content="https://imperblock.ec/images/a.webp" />
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
          <article id="inicio" className="hero-ecu container">
            <div className="hero-copy">
              <p className="eyebrow">Tecnología adaptada al clima andino</p>
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
                <li>Diagnóstico según altura 2.850 m y dilataciones térmicas</li>
                <li>Respuesta rápida en Quito, Cumbayá y Los Chillos</li>
              </ul>
            </div>
            <figure className="hero-media">
              <picture>
                <source srcSet="/images/a.webp" type="image/webp" />
                <img
                  src="/images/a.jpg"
                  alt="Equipo Imperblock impermeabilizando losa en Quito"
                  loading="lazy"
                  decoding="async"
                  width="720"
                  height="540"
                />
              </picture>
              <figcaption>Ensayos de adherencia y sellado UV en losas de Quito.</figcaption>
            </figure>
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
            <div className="service-grid">
              <article className="service-card">
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

              <article className="service-card">
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

              <article className="service-card">
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

          <aside className="section alt container" aria-label="Confianza y garantías">
            <h2>¿Por qué confiar en Imperblock?</h2>
            <ul className="confidence-list">
              <li>Garantía certificada y seguimiento anual.</li>
              <li>Materiales probados: chova, manto asfáltico, impermeabilizante acrílico grado andino.</li>
              <li>Respuestas en menos de 24h en Quito y valles.</li>
            </ul>
          </aside>

          <section id="faq" className="section container" aria-label="Preguntas frecuentes">
            <h2>¿Cuál es el mejor impermeabilizante para losas en Quito?</h2>
            <p>
              Usamos sistema mixto: imprimación acrílica, manto asfáltico con refuerzo de poliéster y sellado UV. Evaluamos pendientes,
              juntas y dilataciones antes de aplicar para que no se levante con el sol de Quito.
            </p>
          </section>

          <section id="contacto" className="section alt container" aria-label="Contacto y cotización">
            <h2>¿Listo para eliminar la humedad?</h2>
            <p>Agenda una inspección gratuita. Respondemos por WhatsApp en minutos.</p>
            <div className="cta-row">
              <a
                className="btn primary"
                aria-label="Hablar con Imperblock por WhatsApp"
                href="https://wa.me/593959785062?text=Necesito%20impermeabilizar%20con%20Imperblock"
              >
                Hablar ahora
              </a>
              <a className="btn ghost" aria-label="Enviar correo a Imperblock" href="mailto:contacto@imperblock.ec">
                Enviar correo
              </a>
            </div>
            <p className="muted contact-meta">Atendemos Quito, Cumbayá, Los Chillos y Pichincha.</p>
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
