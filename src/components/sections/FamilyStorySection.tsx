import { Link } from 'react-router-dom'
import '../../styles/family-story.css'
import { ArrowRightIcon } from '../ui/Icons.tsx'
import PaddyIllustration from '../ui/PaddyIllustration.tsx'

const FAMILY_IMAGE_SRC = '/images/home/family-meal.jpeg'

function FamilyStorySection() {
  return (
    <section className="family-story" aria-labelledby="family-story-title">
      <div className="family-story__content">
        <PaddyIllustration className="family-story__motif" />

        <p className="family-story__eyebrow">More Than a Meal</p>

        <h2 id="family-story-title" className="family-story__title">
          <span className="family-story__title-line family-story__title-accent">
            Made for the
          </span>{' '}
          <span className="family-story__title-line">
            <span className="family-story__title-accent">Moments</span> that
          </span>{' '}
          <span className="family-story__title-line">Bring Us Together.</span>
        </h2>

        <p className="family-story__lead">
          From everyday meals to festive celebrations, Shri Shri Basmati Rice is a
          part of the moments that matter — shared with family, loved ones and
          the people who make life special.
        </p>

        <Link to="/about" className="button button--primary family-story__cta">
          Our Story
          <ArrowRightIcon />
        </Link>
      </div>

      <div className="family-story__media">
        <img
          className="family-story__image"
          src={FAMILY_IMAGE_SRC}
          alt="A family sharing a home-cooked meal of Basmati rice around the dining table"
          width={1774}
          height={887}
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  )
}

export default FamilyStorySection
