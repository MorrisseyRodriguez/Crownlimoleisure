import heroImg from '../Images/Friendsinsprinter.png'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-bg">
        <img
          src={heroImg}
          alt="Friends enjoying a luxury sprinter van together"
          className="hero-image"
          fetchPriority="high"
          loading="eager"
        />
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
      </div>
    </section>
  )
}
