import { Link } from 'react-router-dom'
import '../../styles/dealer-cta.css'
import { ArrowRightIcon, GrainIcon, MailIcon } from '../ui/Icons.tsx'

function DealerCtaSection() {
  return (
    <section className="dealer-cta" aria-labelledby="dealer-cta-title">
      <div className="dealer-cta__media">
        <img
          className="dealer-cta__image"
          src="/images/home/shri-dealer-cta-bg.jpeg"
          alt=""
          width={1983}
          height={793}
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="dealer-cta__content">
        <p className="dealer-cta__eyebrow">
          <GrainIcon className="dealer-cta__eyebrow-icon" />
          Bringing the Finest Basmati Rice
        </p>

        <h2 id="dealer-cta-title" className="dealer-cta__title">
          <span className="dealer-cta__title-line">Let’s Grow</span>{' '}
          <span className="dealer-cta__title-line dealer-cta__title-line--accent">
            A Healthier Tomorrow
          </span>
        </h2>

        <p className="dealer-cta__lead">
          Join hands with Shri Shri Basmati Rice and be a part of a brand committed
          to purity, quality and authentic taste.
        </p>

        <div className="dealer-cta__actions">
          <Link to="/contact" className="button button--primary">
            <MailIcon />
            Enquire Now
            <ArrowRightIcon />
          </Link>
          <Link to="/dealers#dealer-enquiry" className="button button--secondary">
            Become a Dealer
          </Link>
        </div>
      </div>
    </section>
  )
}

export default DealerCtaSection
