import './MobileCTA.css'

const scrollToQuote = () => {
  document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })
}

export default function MobileCTA({ menuOpen, setMenuOpen }) {
  return (
    <nav className="mobile-bar" aria-label="Quick actions">
      <button
        className={`mobile-bar-btn${menuOpen ? ' mobile-bar-btn--active' : ''}`}
        onClick={() => setMenuOpen(o => !o)}
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
      >
        <span className="mobile-bar-circle">
          {menuOpen ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
              <line x1="4" y1="7" x2="20" y2="7"/>
              <line x1="4" y1="12" x2="20" y2="12"/>
              <line x1="4" y1="17" x2="20" y2="17"/>
            </svg>
          )}
        </span>
        <span className="mobile-bar-label">Menu</span>
      </button>

      <button
        className="mobile-bar-quote"
        onClick={scrollToQuote}
        aria-label="Get a quote"
      >
        <span className="mobile-bar-quote-circle">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </span>
        <span className="mobile-bar-label">Get Quote</span>
      </button>

      <a
        className="mobile-bar-btn"
        href="tel:+13109478898"
        aria-label="Call us"
      >
        <span className="mobile-bar-circle">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M6.6 10.8a15.2 15.2 0 006.6 6.6l2.2-2.2a1 1 0 011-.24 11.4 11.4 0 003.57.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.4 11.4 0 00.57 3.57 1 1 0 01-.25 1.02L6.6 10.8z"/>
          </svg>
        </span>
        <span className="mobile-bar-label">Call</span>
      </a>
    </nav>
  )
}
