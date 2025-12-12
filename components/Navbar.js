import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-inner">
          <div className="brand">
            <img src="/images/logo.png" alt="ImperBlock Logo" className="brand-logo" />
            <span className="brand-name">ImperBlock</span>
          </div>

          {/* Social Icons - Desktop */}
          <div className="header-social d-none d-lg-flex">
            <a href="https://www.facebook.com/profile.php?id=61570419122110" target="_blank" rel="noopener" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/imperblock.ec/" target="_blank" rel="noopener" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="nav d-none d-lg-flex">
            <a href="#servicios" className="nav-link">
              <i className="fas fa-wrench"></i>
              <span>Servicios</span>
            </a>
            <a href="#proceso" className="nav-link">
              <i className="fas fa-clipboard-list"></i>
              <span>Proceso</span>
            </a>
            <a href="#garantia" className="nav-link">
              <i className="fas fa-shield-alt"></i>
              <span>Garantía</span>
            </a>
            <a href="#contacto" className="nav-link">
              <i className="fas fa-phone-alt"></i>
              <span>Contacto</span>
            </a>
          </nav>

          {/* Hamburger Button - Mobile */}
          <button 
            className={`hamburger d-lg-none ${isOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <nav className="mobile-nav">
          <a href="#servicios" className="mobile-nav-link" onClick={closeMenu}>
            <i className="fas fa-wrench"></i>
            <span>Servicios</span>
          </a>
          <a href="#proceso" className="mobile-nav-link" onClick={closeMenu}>
            <i className="fas fa-clipboard-list"></i>
            <span>Proceso</span>
          </a>
          <a href="#garantia" className="mobile-nav-link" onClick={closeMenu}>
            <i className="fas fa-shield-alt"></i>
            <span>Garantía</span>
          </a>
          <a href="#contacto" className="mobile-nav-link" onClick={closeMenu}>
            <i className="fas fa-phone-alt"></i>
            <span>Contacto</span>
          </a>
          
          {/* Social Icons - Mobile */}
          <div className="mobile-social">
            <a href="https://www.facebook.com/profile.php?id=61570419122110" target="_blank" rel="noopener" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/imperblock.ec/" target="_blank" rel="noopener" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </nav>
      </div>

      {/* Backdrop */}
      {isOpen && <div className="menu-backdrop" onClick={closeMenu}></div>}
    </header>
  )
}
