import Head from 'next/head'
import ScrollReveal from '../components/ScrollReveal'
import HeroAnimated from '../components/HeroAnimated'

export default function Home() {
  return (
    <>
      <Head>
        <title>ImperBlock — Impermeabilización profesional en Quito</title>
        <meta name="description" content="Impermeabilización de terrazas, tejados, fosos y cisternas. Garantía 5 años + mantenimiento anual gratuito. Quito, Ecuador." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="site-header">
        <div className="container header-inner">
          <div className="brand">
            <span className="brand-logo">💧</span>
            <span className="brand-name">ImperBlock</span>
          </div>
          <nav className="nav">
            <a href="#servicios">Servicios</a>
            <a href="#proceso">Proceso</a>
            <a href="#confianza">Confianza</a>
            <a href="#contacto">Contacto</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <HeroAnimated />
        <div className="hero-content container">
          <div className="hero-badge">
            <span className="badge-years">5 AÑOS</span>
            <span className="badge-text">GARANTÍA + MANTENIMIENTO ANUAL GRATUITO</span>
          </div>
          <h1>Solucionamos problemas, no los creamos.</h1>
          <p className="hero-tagline">Impermeabilización profesional y responsable en Quito y Pichincha.</p>
          <p className="lead">Confía en la experiencia europea y la seriedad de un equipo que pone al cliente primero. Protege tu inversión y tu tranquilidad con ImperBlock.</p>
          <div className="hero-cta">
            <a className="btn primary" href="#contacto">Solicita asesoría gratuita</a>
            <a className="btn ghost" href="#servicios">Ver servicios</a>
          </div>
        </div>
      </section>

      <main>
        <ScrollReveal>
          <section id="servicios" className="section container">
            <h2>Servicios de Impermeabilización</h2>
            <p className="muted">Soluciones profesionales para proteger tu hogar, tu edificio y tu tranquilidad.</p>
            <div className="grid">
              <ScrollReveal delay={100}>
                <div className="service-card">
                  <div className="service-icon">🏠</div>
                  <h3>Impermeabilización de Terrazas</h3>
                  <p>Evita filtraciones y daños estructurales. Materiales de última generación, resistencia al tránsito y garantía real.</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="service-card">
                  <div className="service-icon">🏗️</div>
                  <h3>Tejados y Pérgolas</h3>
                  <p>Instalación y protección de cubiertas, pérgolas y tejados. Soluciones estéticas y funcionales, adaptadas a cada necesidad.</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div className="service-card">
                  <div className="service-icon">💧</div>
                  <h3>Fosos, Cisternas y Piscinas</h3>
                  <p>Impermeabilización especializada para zonas de alta exigencia. Seguridad y durabilidad garantizadas.</p>
                </div>
              </ScrollReveal>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section id="proceso" className="section alt container">
            <h2>¿Cómo trabajamos?</h2>
            <p className="muted">Transparencia, profesionalidad y atención personalizada en cada etapa.</p>
            <div className="process">
              <ScrollReveal delay={100}>
                <div className="process-step">
                  <div className="step-number">1</div>
                  <h3>Contacto y visita técnica</h3>
                  <p>Coordinamos una <strong>visita gratuita</strong> para evaluar tu caso y darte la mejor solución.</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={150}>
                <div className="process-step">
                  <div className="step-number">2</div>
                  <h3>Diagnóstico profesional</h3>
                  <p>Analizamos el estado, medimos y te explicamos las opciones de materiales y técnicas.</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="process-step">
                  <div className="step-number">3</div>
                  <h3>Cotización clara</h3>
                  <p>Presupuesto detallado por m², sin sorpresas. Forma de pago transparente y sin anticipos abusivos.</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={250}>
                <div className="process-step">
                  <div className="step-number">4</div>
                  <h3>Ejecución y entrega</h3>
                  <p>Cumplimos plazos y usamos los materiales acordados. Supervisión constante y comunicación directa.</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div className="process-step">
                  <div className="step-number">5</div>
                  <h3>Garantía y postventa</h3>
                  <p><strong>5 años de garantía</strong> y mantenimiento anual gratuito. Seguimiento real y compromiso post-obra.</p>
                </div>
              </ScrollReveal>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section id="garantia" className="section container">
            <div className="guarantee-box">
              <div className="guarantee-icon">✓</div>
              <div className="guarantee-content">
                <h2>Garantía de 5 Años</h2>
                <p>Todos nuestros trabajos incluyen garantía de 5 años con <strong>mantenimiento anual gratuito</strong>. Visitamos tu obra cada año para verificar que todo esté perfecto y realizar cualquier intervención necesaria sin costo adicional.</p>
                <ul className="guarantee-list">
                  <li>✓ Visita técnica anual incluida</li>
                  <li>✓ Reparaciones cubiertas por garantía</li>
                  <li>✓ Materiales de última generación</li>
                  <li>✓ Responsabilidad total sobre nuestro trabajo</li>
                </ul>
              </div>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section id="galeria" className="section alt container">
            <h2>Proyectos Realizados</h2>
            <p className="muted">Trabajos que hablan por sí solos.</p>
            <div className="gallery">
              <ScrollReveal delay={100}>
                <img src="/images/proyecto-1.jpg" alt="Trabajo de impermeabilización" />
              </ScrollReveal>
              <ScrollReveal delay={150}>
                <img src="/images/proyecto-2.jpg" alt="Proyecto ImperBlock" />
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <img src="/images/proyecto-3.jpg" alt="Impermeabilización de terraza" />
              </ScrollReveal>
              <ScrollReveal delay={250}>
                <img src="/images/proyecto-4.jpg" alt="Servicio profesional" />
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <img src="/images/proyecto-5.jpg" alt="Impermeabilización profesional" />
              </ScrollReveal>
              <ScrollReveal delay={350}>
                <img src="/images/proyecto-6.jpg" alt="Trabajo completado" />
              </ScrollReveal>
            </div>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section id="contacto" className="section container">
            <h2>Contacto</h2>
            <p className="muted">Solicita tu asesoramiento y presupuesto gratuito.</p>
            <div className="contact-grid">
              <ScrollReveal delay={100}>
                <div className="contact-card">
                  <div className="contact-icon">📞</div>
                  <h3>Teléfono</h3>
                  <p className="contact-value">
                    <a href="tel:+593959785062">095 978 5062</a>
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="contact-card">
                  <div className="contact-icon">📍</div>
                  <h3>Ubicación</h3>
                  <p className="contact-value">Quito — Zona Norte<br />(Desde El Ejido hasta La Kennedy)</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div className="contact-card">
                  <div className="contact-icon">📱</div>
                  <h3>Redes Sociales</h3>
                  <div className="social-links">
                    <a href="https://instagram.com/imperblock.ec" target="_blank" rel="noopener">Instagram</a>
                    <a href="https://facebook.com/imperblock.ec" target="_blank" rel="noopener">Facebook</a>
                    <a href="https://tiktok.com/@imperblock.ec" target="_blank" rel="noopener">TikTok</a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={400}>
              <div className="cta-whatsapp">
                <a href="https://wa.me/593959785062?text=Hola,%20necesito%20información%20sobre%20impermeabilización" 
                  className="btn primary" target="_blank" rel="noopener">
                  Escribir por WhatsApp
                </a>
              </div>
            </ScrollReveal>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section id="blog" className="section alt container">
            <h2>Blog y Recursos</h2>
            <p className="muted">Lee artículos sobre impermeabilización de techos y lozas, ingeniería civil y arquitectura, escritos por nuestro equipo y colaboradores.</p>
            <div className="blog-access-box">
              <a
                href="https://medium.com/@blockimper"
                target="_blank"
                rel="noopener"
                className="btn primary"
                style={{marginTop: '16px'}}
              >
                Visitar el Blog en Medium
              </a>
              <p style={{marginTop: '12px', color: 'var(--brand-color)', fontWeight: 700}}>
                Encuentra consejos, tendencias y casos reales para proteger tu inversión y mantener tus espacios en óptimas condiciones.
              </p>
            </div>
          </section>
        </ScrollReveal>
                   className="btn whatsapp" 
                   target="_blank" 
                   rel="noopener">
                  💬 Escribir por WhatsApp
                </a>
              </div>
            </ScrollReveal>
          </section>
        </ScrollReveal>

        <ScrollReveal>
          <section className="section values container">
            <h2>Nuestros Valores</h2>
            <div className="values-grid">
              <ScrollReveal delay={100}>
                <div className="value-item">
                  <strong>Seriedad</strong>
                  <p>Cumplimos lo que prometemos. Plazos claros y respetados.</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <div className="value-item">
                  <strong>Conocimiento</strong>
                  <p>Experiencia en España y Ecuador. Materiales de última generación.</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div className="value-item">
                  <strong>Responsabilidad</strong>
                  <p>El cliente es nuestra prioridad. Garantizamos nuestro trabajo.</p>
                </div>
              </ScrollReveal>
            </div>
          </section>
        </ScrollReveal>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <div className="brand">
              <span className="brand-logo">💧</span>
              <span className="brand-name">ImperBlock</span>
            </div>
            <p className="footer-tagline">Solucionamos problemas, no los creamos</p>
          </div>
          <div className="footer-contact">
            <p><strong>Manolo Bello</strong> — CEO</p>
            <p>095 978 5062</p>
            <p>imperblock.ec</p>
          </div>
          <div className="footer-copy">
            <p>© {new Date().getFullYear()} ImperBlock. Todos los derechos reservados.</p>
            <p className="muted">Empresa de impermeabilización profesional — Quito, Pichincha</p>
            <p className="muted footer-credit">Sitio web hecho por <a href="https://www.instagram.com/freudiandev/" target="_blank" rel="noopener noreferrer">freudianDev</a></p>
          </div>
        </div>
      </footer>
    </>
  )
}
