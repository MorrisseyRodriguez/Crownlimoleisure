import painImg from '../Images/Painstategroupchat.png'
import './Problem.css'

const painPoints = [
  'Waiting for everyone to arrive.',
  'Coordinating multiple vehicles.',
  'Parking headaches.',
  'Keeping track of where everyone is.',
]

export default function Problem() {
  return (
    <section className="problem" aria-labelledby="problem-heading">
      <div className="container problem-inner">
        <div className="problem-heading-block">
          <p className="section-label">The Problem</p>
          <div className="divider" />
          <h2 id="problem-heading" className="section-title reveal">
            Planning A Special Day Is Stressful Enough
          </h2>
        </div>

        <div className="problem-image-wrap reveal reveal-delay-1">
          <img src={painImg} alt="Group chat coordinating transportation" className="problem-image" />
          <div className="problem-image-accent" aria-hidden="true" />
        </div>

        <div className="problem-body">
          <p className="problem-lead reveal reveal-delay-1">
            Whether you're celebrating your child's birthday, surprising your spouse for an anniversary, or bringing friends together for a milestone, you've already put plenty of thought into making the day special.
            <br />Transportation shouldn't distract from it.
          </p>
          <ul className="problem-list" aria-label="Transportation pain points">
            {painPoints.map((p, i) => (
              <li key={i} className={`problem-list-item reveal reveal-delay-${i + 2}`}>
                <span className="problem-dash" aria-hidden="true">—</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
          <div className="problem-conclusion reveal reveal-delay-2">
            <p>
              The best memories happen when everyone gets to enjoy the day together.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
