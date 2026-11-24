import type { ReactNode } from 'react'
import '../../styles/why-partner.css'
import {
  GrainIcon,
  HandshakeIcon,
  StarIcon,
} from '../ui/Icons.tsx'
import PaddyIllustration from '../ui/PaddyIllustration.tsx'

interface Reason {
  number: string
  icon: ReactNode
  title: string
  description: string
}

const reasons: Reason[] = [
  {
    number: '01',
    icon: <GrainIcon />,
    title: 'A Range for Every Need',
    description:
      'From convenient 1 kg packs to larger 26 kg packs, our Basmati range is made for different customer needs.',
  },
  {
    number: '02',
    icon: <StarIcon />,
    title: 'Quality at the Core',
    description:
      'Careful selection and attention to consistency guide the way our Basmati rice is prepared for every table.',
  },
  {
    number: '03',
    icon: <HandshakeIcon />,
    title: 'Built for Partnership',
    description:
      'A straightforward partnership approach designed to help Shri Shri products reach more customers and markets.',
  },
]

function WhyPartnerSection() {
  return (
    <section className="why-partner" aria-labelledby="why-partner-title">
      <PaddyIllustration className="why-partner__motif why-partner__motif--top-left" />
      <PaddyIllustration className="why-partner__motif why-partner__motif--top-right" />
      <PaddyIllustration className="why-partner__motif why-partner__motif--bottom-right" />

      <div className="why-partner__inner">
        <div className="why-partner__arch">
          <img
            className="why-partner__photo"
            src="/images/dealers/why-partner-lhs.jpeg"
            alt="Two partners shaking hands over a basket of Basmati rice."
            width={1728}
            height={2304}
            loading="lazy"
            decoding="async"
          />
          <span className="why-partner__photo-veil" aria-hidden="true" />
        </div>

        <div className="why-partner__content">
          <p className="why-partner__eyebrow">
            <GrainIcon className="why-partner__eyebrow-icon" />
            Why Partner with Shri Shri
          </p>

          <h2 id="why-partner-title" className="why-partner__title">
            <span className="why-partner__title-line">A Partnership Made</span>{' '}
            <span className="why-partner__title-line why-partner__title-line--accent">
              to Grow Together.
            </span>
          </h2>
        </div>

        <ol className="why-partner__reasons">
          {reasons.map((reason) => (
            <li key={reason.number} className="why-partner__reason">
              <span className="why-partner__number" aria-hidden="true">
                {reason.number}
              </span>
              <span className="why-partner__seal" aria-hidden="true">
                {reason.icon}
              </span>
              <div className="why-partner__reason-copy">
                <h3 className="why-partner__reason-title">{reason.title}</h3>
                <p className="why-partner__reason-text">{reason.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default WhyPartnerSection
