import './Benefits.css'

const benefits = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    title: 'Make The Occasion Feel Special',
    body: "You've already chosen the venue, made the plans, and brought the right people together. Professional transportation helps the entire experience feel intentional from the moment the day begins.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
    title: 'Keep Everyone Together',
    body: "No separate arrivals. No coordinating multiple vehicles. No waiting for people to catch up. The celebration starts together and stays together.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Nobody Drives. Nobody Misses Out. Everyone Gets Home Safely.',
    body: "One person shouldn't have to spend the night worrying about driving. With a professional chauffeur handling transportation, everyone gets to enjoy the occasion and everyone gets home safely.",
  },
]

export default function Benefits() {
  return (
    <section className="benefits" aria-labelledby="benefits-heading">
      <div className="container">
        <div className="benefits-header">
          <p className="section-label">Why It Matters</p>
          <div className="divider" />
          <h2 id="benefits-heading" className="section-title reveal">
            Why People Choose A Private Chauffeur
          </h2>
          <p className="section-subtitle reveal reveal-delay-1">
            When transportation is handled properly, the benefits extend far beyond getting from one place to another.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((b, i) => (
            <div key={i} className={`benefit-card reveal reveal-delay-${i + 1}`} role="article">
              <div className="benefit-card-icon" aria-hidden="true">
                {b.icon}
              </div>
              <h3 className="benefit-card-title">{b.title}</h3>
              <p className="benefit-card-body">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
