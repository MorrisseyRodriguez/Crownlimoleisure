import './Services.css'

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    title: 'Birthday Celebrations',
    body: 'Celebrate without worrying about parking, designated drivers, or coordinating rides.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Bachelor & Bachelorette Parties',
    body: 'Keep the entire group together from the first stop to the last.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8v4l3 3"/>
      </svg>
    ),
    title: 'Sporting Events',
    body: 'Skip traffic, parking lots, and long walks to the stadium.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    title: 'Bar & Club Hopping',
    body: 'Enjoy the night without worrying about who is driving or how everyone gets home safely.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <path d="M16 10a4 4 0 0 1-8 0"/>
      </svg>
    ),
    title: 'Shopping Days',
    body: "Whether you're spending the day in Beverly Hills, Rodeo Drive, or exploring Los Angeles, your chauffeur is ready whenever you are.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 22H5a2 2 0 0 1-2-2V6l3-4h8l3 4v14a2 2 0 0 1-2 2h-3"/>
        <path d="M10 22v-6a2 2 0 1 1 4 0v6"/>
        <circle cx="12" cy="10" r="2"/>
      </svg>
    ),
    title: 'Winery & Brewery Tours',
    body: 'Enjoy the experience without worrying about transportation between stops or deciding who has to drive.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="3 11 22 2 13 21 11 13 3 11"/>
      </svg>
    ),
    title: 'Los Angeles Sightseeing Tours',
    body: 'Explore Los Angeles comfortably while your chauffeur handles traffic, navigation, and parking.',
  },
]

export default function Services() {
  return (
    <section className="services" id="services" aria-labelledby="services-heading">
      <div className="container">
        <div className="services-header">
          <p className="section-label">Every Occasion</p>
          <div className="divider" />
          <h2 id="services-heading" className="section-title reveal">
            Transportation For Every Occasion
          </h2>
        </div>

        <div className="services-grid">
          {services.map((s, i) => (
            <div key={i} className={`service-card reveal reveal-delay-${i + 1}`} role="article">
              <div className="service-card-icon" aria-hidden="true">
                {s.icon}
              </div>
              <h3 className="service-card-title">{s.title}</h3>
              <p className="service-card-body">{s.body}</p>
              <div className="service-card-arrow" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
