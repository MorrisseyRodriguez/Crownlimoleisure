import aspirationalImg from '../Images/Friendsinsprinter.png'
import './Aspirational.css'

export default function Aspirational() {
  return (
    <section className="aspirational" aria-labelledby="aspirational-heading">
      <div className="container aspirational-inner">
        <div className="aspirational-heading-block">
          <p className="section-label">The Experience</p>
          <div className="divider" />
          <h2 id="aspirational-heading" className="section-title reveal">
            Create A Day They'll Never Forget
          </h2>
        </div>

        <div className="aspirational-image-wrap reveal">
          <img src={aspirationalImg} alt="Friends enjoying a luxury sprinter van together" className="aspirational-image" />
          <div className="aspirational-badge" aria-label="Serving Southern California Since 1994">
            <span className="aspirational-badge-year">1994</span>
            <span className="aspirational-badge-text">Serving SoCal</span>
          </div>
        </div>

        <div className="aspirational-body">
          <div className="aspirational-paragraphs reveal reveal-delay-1">
            <p>Instead of juggling rides and watching the clock, you're sharing stories, laughing together, and watching the excitement build as you head toward the celebration.</p>
            <p>Every detail has already been taken care of, so you can be fully present for the moments you'll remember long after the day is over.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
