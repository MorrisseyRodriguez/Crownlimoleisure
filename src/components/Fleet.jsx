import { useState, useEffect, useRef } from 'react'
import './Fleet.css'

import xtsExt from '../Fleet/Cadillac XTS/xts.webp'
import xtsInt from '../Fleet/Cadillac XTS/xts-int.webp'
import teslaSExt from '../Fleet/Tesla S Model/tesla-s.webp'
import teslaSInt from '../Fleet/Tesla S Model/tesla-s-int.webp'
import escaladeExt from '../Fleet/Cadillac Escalade/escalade.webp'
import escaladeInt from '../Fleet/Cadillac Escalade/escalade-int.webp'
import teslaYExt from '../Fleet/Tesla Y Model/tesla-y.webp'
import teslaYInt from '../Fleet/Tesla Y Model/tesla-y-int.webp'
import sprinterExt from '../Fleet/Mercedes Sprinter Van/sprinter-van.webp'
import sprinterInt from '../Fleet/Mercedes Sprinter Van/sprinter-van-int.webp'
import mktExt from '../Fleet/MKT Stretch Limousine/mkt-limo.webp'
import mktInt from '../Fleet/MKT Stretch Limousine/mkt-limo-int.webp'
import partyBusExt from '../Fleet/Party bus/party-bus.webp'
import partyBusInt from '../Fleet/Party bus/party-bus-int.jpg'
import charterExt from '../Fleet/Executive Charter Bus/charter-bus.webp'
import charterInt from '../Fleet/Executive Charter Bus/charter-bus-int.webp'

const vehicles = [
  {
    class: 'Cadillac Escalade',
    label: 'Most Popular',
    models: 'Perfect For: Small Groups · Sporting Events · Family Celebrations',
    exterior: escaladeExt,
    interior: escaladeInt,
    features: [
      'Fits up to 6 passengers',
      'Generous space for the whole group',
      'Available 24/7 throughout Los Angeles',
    ],
  },
  {
    class: 'Tesla Model Y',
    label: 'Electric SUV',
    models: 'Perfect For: Small Groups · Sporting Events · Family Celebrations',
    exterior: teslaYExt,
    interior: teslaYInt,
    features: [
      'Fits up to 5 passengers',
      'Zero emissions, premium SUV comfort',
      'Cutting-edge technology throughout',
    ],
  },
  {
    class: 'Mercedes Sprinter Van',
    label: 'Executive Van',
    models: 'Perfect For: Group Outings · Bach Parties · Concerts · Shopping',
    exterior: sprinterExt,
    interior: sprinterInt,
    features: [
      'Fits up to 12 passengers',
      'Keeps the entire group together all night',
      'Available for events throughout LA',
    ],
  },
  {
    class: 'Party Bus',
    label: 'Large Group',
    models: 'Perfect For: Large Celebrations · Group Excursions',
    exterior: partyBusExt,
    interior: partyBusInt,
    features: [
      'Fits large groups comfortably',
      'Built for memorable group experiences',
      'Available for events throughout Los Angeles',
    ],
  },
  {
    class: 'MKT Stretch Limousine',
    label: 'Luxury Limo',
    models: 'Perfect For: Birthdays · Celebrations · Nights Out',
    exterior: mktExt,
    interior: mktInt,
    features: [
      'Fits up to 8 passengers',
      'The classic celebration experience',
      'Available for special occasions throughout LA',
    ],
  },
  {
    class: 'Cadillac XTS',
    label: 'Luxury Sedan',
    models: 'Perfect For: Date Nights · Anniversaries · Shopping Days',
    exterior: xtsExt,
    interior: xtsInt,
    features: [
      'Fits up to 3 passengers',
      'Sleek, intimate cabin for special occasions',
      'Available 24/7 throughout Los Angeles',
    ],
  },
  {
    class: 'Tesla Model S',
    label: 'Electric Sedan',
    models: 'Perfect For: Date Nights · Anniversaries · Shopping Days',
    exterior: teslaSExt,
    interior: teslaSInt,
    features: [
      'Fits up to 3 passengers',
      'Zero emissions, whisper-quiet cabin',
      'Cutting-edge technology throughout',
    ],
  },
  {
    class: 'Executive Charter Bus',
    label: 'Large Group',
    models: 'Perfect For: Large Celebrations · Group Excursions',
    exterior: charterExt,
    interior: charterInt,
    features: [
      'Fits large groups comfortably',
      'Perfect for organized group outings',
      'Available for events throughout Los Angeles',
    ],
  },
]

function FleetCard({ v, eager }) {
  const [showInterior, setShowInterior] = useState(false)

  return (
    <div className="fleet-card">
      <div className="fleet-card-img">
        <img
          src={showInterior ? v.interior : v.exterior}
          alt={`${v.class} ${showInterior ? 'interior' : 'exterior'}`}
          className="fleet-card-photo"
          draggable={false}
          loading={eager ? 'eager' : 'lazy'}
        />
        <button
          className="fleet-img-arrow fleet-img-arrow--left"
          aria-label="Show exterior"
          onClick={() => setShowInterior(false)}
          disabled={!showInterior}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          className="fleet-img-arrow fleet-img-arrow--right"
          aria-label="Show interior"
          onClick={() => setShowInterior(true)}
          disabled={showInterior}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
        <div className="fleet-img-dots" aria-hidden="true">
          <span className={`fleet-img-dot${!showInterior ? ' fleet-img-dot--active' : ''}`} />
          <span className={`fleet-img-dot${showInterior ? ' fleet-img-dot--active' : ''}`} />
        </div>
      </div>

      <div className="fleet-card-body">
        <h3 className="fleet-card-name">{v.class}</h3>
        <p className="fleet-card-models">{v.models}</p>
        <div className="fleet-card-divider" />
        <ul className="fleet-card-features">
          {v.features.map((f, fi) => (
            <li key={fi} className="fleet-card-feature">
              <svg
                className="fleet-check"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Fleet() {
  const [page, setPage] = useState(0)
  const [cardsPerPage, setCardsPerPage] = useState(2)
  const swipeStartX = useRef(null)

  useEffect(() => {
    const update = () => {
      const cpp = window.innerWidth <= 640 ? 1 : 2
      setCardsPerPage(cpp)
      setPage(0)
    }
    update()
    window.addEventListener('resize', update, { passive: true })
    return () => window.removeEventListener('resize', update)
  }, [])

  const totalPages = Math.ceil(vehicles.length / cardsPerPage)

  const goNext = () => setPage(p => Math.min(totalPages - 1, p + 1))
  const goPrev = () => setPage(p => Math.max(0, p - 1))

  const onTouchStart = (e) => { swipeStartX.current = e.touches[0].clientX }
  const onTouchEnd = (e) => {
    if (swipeStartX.current === null) return
    const diff = swipeStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) diff > 0 ? goNext() : goPrev()
    swipeStartX.current = null
  }

  const onMouseDown = (e) => { swipeStartX.current = e.clientX }
  const onMouseUp = (e) => {
    if (swipeStartX.current === null) return
    const diff = swipeStartX.current - e.clientX
    if (Math.abs(diff) > 40) diff > 0 ? goNext() : goPrev()
    swipeStartX.current = null
  }

  return (
    <section className="fleet" id="fleet" aria-labelledby="fleet-heading">
      <div className="container">
        <div className="fleet-header reveal">
          <h2 id="fleet-heading" className="fleet-heading">
            Choose The Right Vehicle For Your Occasion
          </h2>
        </div>
      </div>

      <div
        className="fleet-carousel-outer"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
      >
        <div
          className="fleet-carousel-track"
          style={{
            transform: `translateX(calc(-1 * ${page * cardsPerPage} * (var(--fleet-card-w) + var(--fleet-gap))))`,
          }}
        >
          {vehicles.map((v, i) => (
            <FleetCard key={i} v={v} eager={i < cardsPerPage} />
          ))}
        </div>
      </div>

      <div className="container">
        <div className="fleet-pagination">
          <button
            className="fleet-page-arrow"
            onClick={goPrev}
            disabled={page === 0}
            aria-label="Previous page"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              className={`fleet-page-num${page === i ? ' fleet-page-num--active' : ''}`}
              onClick={() => setPage(i)}
              aria-label={`Page ${i + 1}`}
              aria-current={page === i ? 'page' : undefined}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="fleet-page-arrow"
            onClick={goNext}
            disabled={page === totalPages - 1}
            aria-label="Next page"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
