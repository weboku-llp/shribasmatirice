import type { ReactNode } from 'react'
import { products, type Product } from '../../data/products.ts'
import '../../styles/products-collection.css'
import {
  AromaIcon,
  BowlIcon,
  DiamondIcon,
  GrainIcon,
  LeafIcon,
  StarIcon,
} from '../ui/Icons.tsx'
import PaddyIllustration from '../ui/PaddyIllustration.tsx'

interface Attribute {
  icon: ReactNode
  label: [string, string]
}

interface CollectionItem {
  product: Product
  description: string
  alt: string
  landscape: {
    src: string
    position: string
  }
  attributes: Attribute[]
}

const ORDER: Product['id'][] = ['classic-1kg', 'classic-26kg', 'xxxl-26kg']

function byId(id: Product['id']) {
  const product = products.find((item) => item.id === id)
  if (!product) throw new Error(`Missing product: ${id}`)
  return product
}

const collection: CollectionItem[] = [
  {
    product: byId('classic-1kg'),
    description:
      'Perfect for everyday meals, bringing the authentic taste and aroma of Basmati rice to your table in a convenient pack.',
    alt: 'Shri Shri Classic Basmati Rice 1 kg pack',
    landscape: {
      src: '/images/about/our-story-landscape.jpeg',
      position: '28% 32%',
    },
    attributes: [
      { icon: <LeafIcon />, label: ['Long', 'Grains'] },
      { icon: <AromaIcon />, label: ['Rich', 'Aroma'] },
      { icon: <BowlIcon />, label: ['Perfect for', 'Daily Meals'] },
    ],
  },
  {
    product: byId('classic-26kg'),
    description:
      'A larger pack of our Classic Basmati Rice, ideal for families, businesses and food-service needs.',
    alt: 'Shri Shri Classic Basmati Rice 26 kg pack',
    landscape: {
      src: '/images/about/our-story-landscape.jpeg',
      position: '50% 28%',
    },
    attributes: [
      { icon: <GrainIcon />, label: ['Extra', 'Long Grains'] },
      { icon: <AromaIcon />, label: ['Rich', 'Aroma'] },
      { icon: <DiamondIcon />, label: ['Premium', 'Quality'] },
    ],
  },
  {
    product: byId('xxxl-26kg'),
    description:
      'Our XXXL Basmati Rice offers extra-long grains and rich aroma, making it ideal for special meals and larger requirements.',
    alt: 'Shri Shri XXXL Basmati Rice 26 kg pack',
    landscape: {
      src: '/images/about/our-story-field.jpeg',
      position: '60% 42%',
    },
    attributes: [
      { icon: <LeafIcon />, label: ['Extra Extra', 'Long Grains'] },
      { icon: <AromaIcon />, label: ['Rich', 'Aroma'] },
      { icon: <StarIcon />, label: ['Ideal for', 'Special Meals'] },
    ],
  },
]

const stripItems: Attribute[] = [
  { icon: <LeafIcon />, label: ['Carefully Selected', 'Grains'] },
  { icon: <StarIcon />, label: ['Consistent', 'Quality'] },
  { icon: <AromaIcon />, label: ['Naturally', 'Aromatic'] },
  { icon: <BowlIcon />, label: ['Perfect', 'for Every Meal'] },
]

function ProductsCollectionSection() {
  return (
    <section
      className="products-collection"
      aria-labelledby="products-collection-title"
    >
      <PaddyIllustration className="products-collection__motif products-collection__motif--top-left" />
      <PaddyIllustration className="products-collection__motif products-collection__motif--top-right" />

      <div className="products-collection__inner">
        <header className="products-collection__intro">
          <p className="products-collection__eyebrow">
            <GrainIcon className="products-collection__eyebrow-icon" />
            Our Rice Collection
          </p>

          <h2 id="products-collection-title" className="products-collection__title">
            <span className="products-collection__title-line">A Range for</span>{' '}
            <span className="products-collection__title-line products-collection__title-line--accent">
              Every Need
            </span>
          </h2>

          <p className="products-collection__lead">
            Our Basmati rice is available in carefully selected pack sizes, so
            you can choose what best suits your kitchen, family or business.
          </p>
        </header>

        <ul className="products-collection__grid">
          {ORDER.map((id) => {
            const item = collection.find((entry) => entry.product.id === id)!
            const { product } = item

            return (
              <li key={product.id} className="products-collection__item">
                <div className="products-collection__stage">
                  <span
                    className="products-collection__arch-frame"
                    aria-hidden="true"
                  />
                  <div className="products-collection__arch" aria-hidden="true">
                    <img
                      className="products-collection__landscape"
                      src={item.landscape.src}
                      alt=""
                      width={1536}
                      height={1024}
                      loading="lazy"
                      decoding="async"
                      style={{ objectPosition: item.landscape.position }}
                    />
                  </div>

                  <span
                    className="products-collection__plinth"
                    aria-hidden="true"
                  />

                  <div
                    className={`products-collection__bag products-collection__bag--${product.id}`}
                  >
                    <img
                      className="products-collection__bag-image"
                      src={product.image.src}
                      alt={item.alt}
                      width={product.image.width}
                      height={product.image.height}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>

                  <img
                    className="products-collection__bowl"
                    src="/images/about/journey-bowl.jpeg"
                    alt=""
                    width={1280}
                    height={720}
                    loading="lazy"
                    decoding="async"
                  />

                  <PaddyIllustration className="products-collection__stage-sprig" />
                </div>

                <div className="products-collection__info">
                  <h3 className="products-collection__name">
                    {product.name}
                    <span className="products-collection__badge">
                      {product.weight}
                    </span>
                  </h3>

                  <p className="products-collection__description">
                    {item.description}
                  </p>

                  <ul className="products-collection__attributes">
                    {item.attributes.map((attribute) => (
                      <li
                        key={attribute.label.join(' ')}
                        className="products-collection__attribute"
                      >
                        <span
                          className="products-collection__seal"
                          aria-hidden="true"
                        >
                          {attribute.icon}
                        </span>
                        <span className="products-collection__attribute-label">
                          <span>{attribute.label[0]}</span>{' '}
                          <span>{attribute.label[1]}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="products-collection__strip" aria-label="Collection qualities">
        <ul className="products-collection__strip-list">
          {stripItems.map((item) => (
            <li key={item.label.join(' ')} className="products-collection__strip-item">
              <span className="products-collection__strip-icon" aria-hidden="true">
                {item.icon}
              </span>
              <span className="products-collection__strip-label">
                <span>{item.label[0]}</span>{' '}
                <span>{item.label[1]}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>

      <PaddyIllustration className="products-collection__motif products-collection__motif--bottom-left" />
      <PaddyIllustration className="products-collection__motif products-collection__motif--bottom-right" />
    </section>
  )
}

export default ProductsCollectionSection
