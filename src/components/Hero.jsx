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
          Luxury group transportation across Los Angeles, so you can spend less time coordinating rides and more time celebrating with the people who matter most.
        </p>
      </div>
    </section>
  )
}
