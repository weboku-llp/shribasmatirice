import type { ReactNode } from 'react'
import '../../styles/dealers-hero.css'
import {
  ArrowRightIcon,
  GrainIcon,
  GrowthIcon,
  HandshakeIcon,
  MailIcon,
} from '../ui/Icons.tsx'
import PaddyIllustration from '../ui/PaddyIllustration.tsx'

interface Highlight {
  icon: ReactNode
  title: string
}

const highlights: Highlight[] = [
  { icon: <HandshakeIcon />, title: 'A Trusted Brand' },
  { icon: <GrainIcon />, title: 'Premium Basmati Range' },
  { icon: <GrowthIcon />, title: 'Support for Your Business' },
]

const products = [
  {
    id: 'classic-26kg',
    src: '/images/products/classic-26kg.jpeg',
    alt: 'Shri Shri Classic Basmati Rice 26 kg pack',
    width: 1161,
    height: 1355,
  },
  {
    id: 'xxxl-26kg',
    src: '/images/products/xxxl-26kg.jpeg',
    alt: 'Shri Shri XXXL Basmati Rice 26 kg pack',
    width: 1149,
    height: 1369,
  },
  {
    id: 'classic-1kg',
    src: '/images/products/classic-1kg.jpeg',
    alt: 'Shri Shri Classic Basmati Rice 1 kg pack',
    width: 1086,
    height: 1448,
  },
] as const

/* Scattered grains on the tabletop in front of the packs. */
const GRAINS: [number, number, number][] = [
  [18, 22, -18], [28, 28, 42], [40, 18, 8], [52, 26, -36], [64, 20, 55],
  [76, 30, -12], [88, 22, 28], [102, 28, -48], [114, 18, 14], [128, 26, -22],
  [142, 20, 38], [156, 28, -8], [168, 22, 52], [180, 30, -30],
]

function DealersHeroSection() {
  return (
    <section className="dealers-hero" aria-labelledby="dealers-hero-title">
      <div className="dealers-hero__atmosphere" aria-hidden="true">
        <span className="dealers-hero__shelf dealers-hero__shelf--far" />
        <span className="dealers-hero__shelf dealers-hero__shelf--back" />
        <span className="dealers-hero__shelf dealers-hero__shelf--mid" />
        <span className="dealers-hero__glow" />
      </div>

      <div className="dealers-hero__veil" aria-hidden="true" />

      <PaddyIllustration className="dealers-hero__motif dealers-hero__motif--top" />
      <PaddyIllustration className="dealers-hero__motif dealers-hero__motif--bottom" />

      <div className="dealers-hero__copy">
        <p className="dealers-hero__eyebrow">
          <GrainIcon className="dealers-hero__eyebrow-icon" />
          Partner with Shri Shri
        </p>

        <h1 id="dealers-hero-title" className="dealers-hero__title">
          <span className="dealers-hero__title-line">Grow With a Brand</span>{' '}
          <span className="dealers-hero__title-line dealers-hero__title-line--accent">
            Built on Quality &amp; Trust.
          </span>
        </h1>

        <p className="dealers-hero__lead">
          Join Shri Shri Basmati Rice and bring our range of Basmati products to more
          customers in your market.
        </p>

        <a className="button button--primary dealers-hero__cta" href="#dealer-enquiry">
          <MailIcon />
          Become a Dealer
          <ArrowRightIcon />
        </a>
      </div>

      <ul className="dealers-hero__highlights">
        {highlights.map((item) => (
          <li key={item.title} className="dealers-hero__highlight">
            <span className="dealers-hero__seal" aria-hidden="true">
              {item.icon}
            </span>
            <span className="dealers-hero__highlight-title">{item.title}</span>
          </li>
        ))}
      </ul>

      <div className="dealers-hero__stage">
        <PaddyIllustration className="dealers-hero__stage-sprig dealers-hero__stage-sprig--back" />

        <span className="dealers-hero__table" aria-hidden="true" />
        <span className="dealers-hero__cloth" aria-hidden="true" />

        {products.map((product) => (
          <div
            key={product.id}
            className={`dealers-hero__product dealers-hero__product--${product.id}`}
          >
            <span className="dealers-hero__contact" aria-hidden="true" />
            <img
              className="dealers-hero__product-image"
              src={product.src}
              alt={product.alt}
              width={product.width}
              height={product.height}
              fetchPriority="high"
              decoding="async"
            />
          </div>
        ))}

        <img
          className="dealers-hero__bowl"
          src="/images/about/journey-bowl.jpeg"
          alt=""
          width={1280}
          height={720}
          decoding="async"
        />

        <svg
          className="dealers-hero__grains"
          viewBox="0 0 200 40"
          width="200"
          height="40"
          aria-hidden="true"
          focusable="false"
        >
          {GRAINS.map(([cx, cy, angle]) => (
            <ellipse
              key={`${cx}-${cy}`}
              cx={cx}
              cy={cy}
              rx="3.2"
              ry="0.9"
              transform={`rotate(${angle} ${cx} ${cy})`}
            />
          ))}
        </svg>

        <PaddyIllustration className="dealers-hero__stage-sprig dealers-hero__stage-sprig--front" />
      </div>
    </section>
  )
}

export default DealersHeroSection
