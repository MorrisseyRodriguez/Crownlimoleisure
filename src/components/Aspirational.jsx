import aspirationalImg from '../Images/sunnyinsidesprinter.png'
import './Aspirational.css'

export default function Aspirational() {
  return (
    <section className="aspirational" aria-labelledby="aspirational-heading">
      <div className="container aspirational-inner">
        <div className="aspirational-heading-block">
          <p className="section-label">The Experience</p>
          <div className="divider" />
          <h2 id="aspirational-heading" className="section-title reveal">
            When Everything Flows The Way It Should
          </h2>
        </div>

        <div className="aspirational-image-wrap reveal">
          <img src={aspirationalImg} alt="Sunny interior of a luxury sprinter van" className="aspirational-image" />
          <div className="aspirational-badge" aria-label="Serving Southern California Since 1994">
            <span className="aspirational-badge-year">1994</span>
            <span className="aspirational-badge-text">Serving SoCal</span>
          </div>
        </div>

        <div className="aspirational-body">
          <p className="aspirational-pull reveal reveal-delay-1">
            The celebration begins the moment you step outside together.
          </p>
          <div className="aspirational-paragraphs reveal reveal-delay-2">
            <p>Your chauffeur is already waiting. The vehicle is clean, comfortable, and exactly what you expected.</p>
            <p>Everyone is in one place. Nobody is coordinating rides. Nobody is checking an app. Nobody is worrying about getting home.</p>
            <p>The conversation flows. The energy builds. The occasion feels effortless from the first moment to the last.</p>
            <p>You stay focused on the people you're with, and the reason you all came together.</p>
          </div>
          <div className="aspirational-close reveal reveal-delay-3">
            <p className="aspirational-close-strong">The way a special occasion should feel.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
