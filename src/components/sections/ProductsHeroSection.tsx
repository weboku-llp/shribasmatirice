import type { ReactNode } from 'react'
import { products, type Product } from '../../data/products.ts'
import '../../styles/products-hero.css'
import { AromaIcon, BowlIcon, GrainIcon, LeafIcon } from '../ui/Icons.tsx'
import PaddyIllustration from '../ui/PaddyIllustration.tsx'

interface Attribute {
  icon: ReactNode
  label: [string, string]
}

const attributes: Attribute[] = [
  { icon: <LeafIcon />, label: ['Premium', 'Quality'] },
  { icon: <AromaIcon />, label: ['Rich', 'Aroma'] },
  { icon: <GrainIcon />, label: ['Extra', 'Long Grains'] },
  { icon: <BowlIcon />, label: ['Perfect', 'for Every Meal'] },
]

/* Back to front: the XXXL bag stands behind the raised Classic 26 kg bag,
   the 1 kg pack sits forward on the lowest step. */
const SHOWCASE_ORDER: Product['id'][] = ['xxxl-26kg', 'classic-26kg', 'classic-1kg']

const showcase = SHOWCASE_ORDER.map((id) => {
  const product = products.find((item) => item.id === id)
  if (!product) throw new Error(`Missing product: ${id}`)
  return product
})

/* Loose grains on the front step: centre x, centre y, rotation. */
const GRAINS: [number, number, number][] = [
  [12, 18, -12], [21, 23, 28], [30, 15, 64], [38, 24, -40], [47, 19, 8],
  [55, 26, 52], [64, 17, -22], [72, 23, 36], [83, 20, -58], [91, 26, 14],
  [100, 18, 72], [109, 24, -8], [118, 21, 44], [128, 26, -30], [136, 17, 18],
  [146, 23, -66], [155, 19, 30], [166, 25, -16], [176, 20, 58], [187, 24, -42],
]

function ProductsHeroSection() {
  return (
    <section className="products-hero" aria-labelledby="products-hero-title">
      <PaddyIllustration className="products-hero__motif" />

      <div className="products-hero__inner">
        <div className="products-hero__copy">
          <p className="products-hero__eyebrow">
            <GrainIcon className="products-hero__eyebrow-icon" />
            Our Products
          </p>

          <h1 id="products-hero-title" className="products-hero__title">
            <span className="products-hero__title-line">Crafted for</span>{' '}
            <span className="products-hero__title-line products-hero__title-line--accent">
              Every Table.
            </span>
          </h1>

          <p className="products-hero__tagline">
            Premium Basmati for Every Occasion.
          </p>

          <p className="products-hero__lead">
            Discover our carefully selected range of Basmati rice, chosen for
            its aroma, long grains and authentic taste — bringing quality to
            every meal.
          </p>
        </div>

        <ul className="products-hero__attributes">
          {attributes.map((attribute) => (
            <li key={attribute.label.join(' ')} className="products-hero__attribute">
              <span className="products-hero__seal" aria-hidden="true">
                {attribute.icon}
              </span>
              <span className="products-hero__attribute-label">
                <span>{attribute.label[0]}</span>{' '}
                <span>{attribute.label[1]}</span>
              </span>
            </li>
          ))}
        </ul>

        <div className="products-hero__stage">
          <span className="products-hero__arch-frame" aria-hidden="true" />
          <div className="products-hero__arch" aria-hidden="true">
            <img
              className="products-hero__landscape"
              src="/images/about/our-story-landscape.jpeg"
              alt=""
              width={1536}
              height={1024}
              fetchPriority="high"
            />
          </div>

          <PaddyIllustration className="products-hero__stage-motif products-hero__stage-motif--left" />
          <PaddyIllustration className="products-hero__stage-motif products-hero__stage-motif--right" />

          <span className="products-hero__step products-hero__step--back" aria-hidden="true" />
          <span className="products-hero__step products-hero__step--plinth" aria-hidden="true" />
          <span className="products-hero__step products-hero__step--front" aria-hidden="true" />

          {showcase.map((product) => (
            <div
              key={product.id}
              className={`products-hero__product products-hero__product--${product.id}`}
            >
              <img
                className="products-hero__product-image"
                src={product.image.src}
                alt={product.image.alt}
                width={product.image.width}
                height={product.image.height}
                fetchPriority="high"
              />
            </div>
          ))}

          <img
            className="products-hero__bowl"
            src="/images/about/journey-bowl.jpeg"
            alt=""
            width={1280}
            height={720}
          />

          <svg
            className="products-hero__grains"
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
                rx="3.4"
                ry="0.95"
                transform={`rotate(${angle} ${cx} ${cy})`}
              />
            ))}
          </svg>
        </div>
      </div>
    </section>
  )
}

export default ProductsHeroSection
