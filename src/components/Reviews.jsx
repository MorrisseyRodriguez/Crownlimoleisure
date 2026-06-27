import { useState, useRef, useEffect, useCallback } from 'react'
import yelpLogo from '../Logo/download.png'
import './Reviews.css'

const reviews = [
  {
    text: "I had the most incredible time on this Party Bus. My group of 10 ladies were dancing inside the bus and having the best time! The leather seats and stitching, the drink set up, the music, the driver! Omg! What an unforgettable time we all had! The driver was PERFECTLY on time. SO attentive. He communicated with me throughout the evening. So chivalrous! I 100% recommend this company. Wow. Truly so so amazing! I'll never forget it!!",
    name: "Cassie",
    title: null,
    stars: 5,
  },
  {
    text: "This company is excellent. They were easy to work with, very communicative and priced competitively. The drivers were on time, helpful and professional. This was a great experience and I will use them going forward for all my limousine needs. Thank you for taking such great care of my family.",
    name: "Amy Graham",
    title: null,
    stars: 5,
  },
  {
    text: "Great experience for our daughter's 18th birthday. Driver arrived early, he was pleasant and courteous. The kids had a fantastic time and our driver arrived back on time. Would definitely use Crown Limousine again. Thank you for making our daughter's birthday wonderful!",
    name: "Marushka Mandell",
    title: null,
    stars: 5,
  },
  {
    text: "Crown Limousine was wonderful to work with. They were communicative, prompt, and flexible in a way that made planning a complicated trip extremely smooth. Our driver was kind and professional, and the entire team was helpful throughout the entire process from inquiry to end. Would recommend and will definitely use again!",
    name: "MaryKate Romagnoli",
    title: null,
    stars: 5,
  },
  {
    text: "Crown is fantastic. They are easy to communicate with, have excellent drivers, and understand that your schedule may need last minute adjustments. I have been using them for 20+ years and cannot say enough about their professionalism and high quality of service.",
    name: "Natasha Roit",
    title: null,
    stars: 5,
  },
]

const Stars = ({ count }) => (
  <div className="review-stars" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ))}
  </div>
)

export default function Reviews() {
  const [active, setActive] = useState(0)
  const [cardWidth, setCardWidth] = useState(0)
  const trackRef = useRef(null)
  const firstCardRef = useRef(null)
  const startXRef = useRef(null)
  const isDraggingRef = useRef(false)

  const prev = useCallback(() => setActive(a => (a - 1 + reviews.length) % reviews.length), [])
  const next = useCallback(() => setActive(a => (a + 1) % reviews.length), [])

  useEffect(() => {
    const measure = () => {
      if (firstCardRef.current) {
        setCardWidth(firstCardRef.current.getBoundingClientRect().width)
      }
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  const onTouchStart = (e) => {
    startXRef.current = e.touches[0].clientX
    isDraggingRef.current = true
  }

  const onTouchEnd = (e) => {
    if (!isDraggingRef.current) return
    isDraggingRef.current = false
    const diff = startXRef.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev()
  }

  const onMouseDown = (e) => {
    startXRef.current = e.clientX
    isDraggingRef.current = true
  }

  const onMouseUp = (e) => {
    if (!isDraggingRef.current) return
    isDraggingRef.current = false
    const diff = startXRef.current - e.clientX
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev()
  }

  const translateX = cardWidth ? -(active * (cardWidth + 28)) : 0

  return (
    <section className="reviews-section" id="reviews" aria-labelledby="reviews-heading">
      <div className="container">
        <div className="reviews-header">
          <p className="section-label">Client Reviews</p>
          <div className="divider" />
          <h2 id="reviews-heading" className="section-title reveal">
            What Our Guests Say About Crown
          </h2>
        </div>
      </div>

      <div
        className="reviews-carousel"
        ref={trackRef}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        role="region"
        aria-label="Customer reviews carousel"
        aria-live="polite"
      >
        <div className="reviews-track" style={{ transform: `translateX(${translateX}px)` }}>
          {reviews.map((r, i) => (
            <div
              key={i}
              ref={i === 0 ? firstCardRef : undefined}
              className={`review-card${i === active ? ' review-card--active' : ''}`}
              role="article"
              aria-hidden={i !== active}
            >
              <Stars count={r.stars} />
              <blockquote className="review-text">"{r.text}"</blockquote>
              <div className="review-author">
                <div className="review-author-avatar" aria-hidden="true">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="review-author-name">{r.name}</p>
                  {r.title && <p className="review-author-title">{r.title}</p>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="reviews-controls">
          <button
            className="reviews-arrow"
            onClick={prev}
            aria-label="Previous review"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
          </button>

          <div className="reviews-dots" role="tablist" aria-label="Review navigation">
            {reviews.map((_, i) => (
              <button
                key={i}
                className={`reviews-dot${i === active ? ' active' : ''}`}
                onClick={() => setActive(i)}
                role="tab"
                aria-selected={i === active}
                aria-label={`Review ${i + 1}`}
              />
            ))}
          </div>

          <button
            className="reviews-arrow"
            onClick={next}
            aria-label="Next review"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

        <div className="reviews-platforms">
          <p className="reviews-platforms-label">Read our reviews on</p>
          <div className="reviews-platforms-links">
            <a
              href="https://share.google/45bGCU7ezNMWlrIMo"
              target="_blank"
              rel="noopener noreferrer"
              className="reviews-platform-btn"
              aria-label="Read our Google reviews"
            >
              <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true">
                <path fill="#4285F4" d="M44.5 20H24v8.5h11.7C34.2 33.6 29.6 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6-6C34.6 5.1 29.6 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.9 0 20-7.9 20-21 0-1.3-.1-2.7-.5-4z"/>
                <path fill="#34A853" d="M6.3 14.7l7 5.1C15.1 16 19.3 13 24 13c3.1 0 5.9 1.1 8.1 2.9l6-6C34.6 5.1 29.6 3 24 3c-7.6 0-14.2 4.3-17.7 11.7z"/>
                <path fill="#FBBC05" d="M24 45c5.5 0 10.5-1.9 14.3-5l-6.6-5.4C29.7 36.2 27 37 24 37c-5.5 0-10.2-3.4-11.7-8.3l-7 5.4C8.6 40.5 15.8 45 24 45z"/>
                <path fill="#EA4335" d="M44.5 20H24v8.5h11.7c-.8 2.3-2.3 4.2-4.3 5.6l6.6 5.4c3.9-3.6 6-9 6-15.5 0-1.3-.1-2.7-.5-4z"/>
              </svg>
              <span>Google</span>
            </a>
            <a
              href="https://www.yelp.com/biz/crown-limousine-la-los-angeles-3"
              target="_blank"
              rel="noopener noreferrer"
              className="reviews-platform-btn"
              aria-label="Read our Yelp reviews"
            >
              <img src={yelpLogo} alt="" width="20" height="20" style={{ objectFit: 'contain' }} />
              <span>Yelp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
