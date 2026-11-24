import type { SyntheticEvent } from 'react'
import { journeySteps } from '../../data/journey.ts'
import '../../styles/journey.css'
import { GrainIcon } from '../ui/Icons.tsx'
import PaddyIllustration from '../ui/PaddyIllustration.tsx'

/* A missing photo is hidden so the arch's placeholder shows instead of a
   broken-image icon; a later successful load (e.g. after a refresh) clears it. */
function markMissing(event: SyntheticEvent<HTMLImageElement>) {
  event.currentTarget.dataset.missing = 'true'
}

function clearMissing(event: SyntheticEvent<HTMLImageElement>) {
  delete event.currentTarget.dataset.missing
}

function JourneySection() {
  return (
    <section className="journey" aria-labelledby="journey-title">
      <div className="journey__decor" aria-hidden="true">
        <PaddyIllustration className="journey__motif journey__motif--left" />
        <PaddyIllustration className="journey__motif journey__motif--right" />
      </div>

      <div className="journey__inner">
        <header className="journey__header">
          <p className="journey__eyebrow">From Field to Table</p>
          <h2 id="journey-title" className="journey__title">
            <span className="journey__title-line journey__title-line--accent">
              A Journey of
            </span>{' '}
            <span className="journey__title-line">Purity &amp; Care.</span>
          </h2>
          <p className="journey__lead">
            From carefully selected fields to your family’s table, every grain
            of Shri Shri Basmati Rice is handled with attention to quality, purity
            and taste.
          </p>
        </header>

        <div className="journey__path">
          <svg
            className="journey__line"
            viewBox="0 0 300 24"
            preserveAspectRatio="none"
            aria-hidden="true"
            focusable="false"
          >
            <path d="M0 1Q50 23 100 1Q150 23 200 1Q250 23 300 1" />
          </svg>

          <ol className="journey__steps">
            {journeySteps.map((step, index) => (
              <li key={step.id} className="journey__step">
                <div className="journey__arch">
                  <div className="journey__photo">
                    <GrainIcon className="journey__placeholder" />
                    <img
                      src={step.image.src}
                      alt={step.image.alt}
                      width={step.image.width}
                      height={step.image.height}
                      style={{
                        objectPosition: step.image.position,
                        scale: step.image.zoom,
                      }}
                      loading="lazy"
                      decoding="async"
                      onError={markMissing}
                      onLoad={clearMissing}
                    />
                  </div>
                  <span className="journey__marker" aria-hidden="true" />
                </div>

                <p className="journey__number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </p>
                <h3 className="journey__step-title">{step.title}</h3>
                <p className="journey__text">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}

export default JourneySection
