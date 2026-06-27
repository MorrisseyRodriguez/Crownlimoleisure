import painImg from '../Images/Painstategroupchat.png'
import './Problem.css'

const painPoints = [
  'Figuring out who rides with who.',
  'Coordinating where everyone should meet.',
  'Waiting on people arriving separately.',
  'Deciding who is driving, and who has to stop drinking because of it.',
]

export default function Problem() {
  return (
    <section className="problem" aria-labelledby="problem-heading">
      <div className="container problem-inner">
        <div className="problem-heading-block">
          <p className="section-label">The Problem</p>
          <div className="divider" />
          <h2 id="problem-heading" className="section-title reveal">
            Transportation Has A Way Of Pulling The Organizer Out Of The Moment
          </h2>
        </div>

        <div className="problem-image-wrap reveal reveal-delay-1">
          <img src={painImg} alt="Group chat coordinating transportation" className="problem-image" />
          <div className="problem-image-accent" aria-hidden="true" />
        </div>

        <div className="problem-body">
          <p className="problem-lead reveal reveal-delay-1">
            You spent weeks putting it together.<br />
            Then the day arrives and you spend it managing logistics instead of enjoying it.
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
              You planned the occasion to spend time with the people you're celebrating.
            </p>
            <p>
              Not to spend the night managing transportation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
