import heroImg from '../Images/sunnyinsidesprinter.png'
import './Hero.css'

const trustItems = [
  'Serving Los Angeles Since 1994',
  '1,900+ Reviews Across Major Platforms',
  '15+ Industry Awards',
  '13 Luxury Vehicle Options',
]

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-bg">
        <img src={heroImg} alt="Sunny interior of a luxury sprinter van" className="hero-image" />
        <div className="hero-overlay" />
      </div>

      <div className="container hero-content">
        <p className="hero-eyebrow">Crown Limousine LA</p>
        <h1 id="hero-heading" className="hero-title">
          Keep Everyone Together From The First Moment To The Last.
        </h1>
        <p className="hero-subtitle">
          Whether you're planning a birthday, bachelor or bachelorette party, sporting event, concert, winery tour, brewery tour, or night out in Los Angeles, Crown helps your group stay together, stay present, and enjoy the occasion without transportation becoming a distraction.
        </p>

        <div className="hero-trust" role="list" aria-label="Trust indicators">
          {trustItems.map((item, i) => (
            <div key={i} className="hero-trust-item" role="listitem">
              <svg className="hero-trust-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
