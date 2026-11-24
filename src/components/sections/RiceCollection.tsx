import { Link } from 'react-router-dom'
import { products } from '../../data/products.ts'
import '../../styles/rice-collection.css'
import { ArrowRightIcon, GrainIcon } from '../ui/Icons.tsx'

function RiceCollection() {
  return (
    <section
      className="rice-collection"
      aria-labelledby="rice-collection-title"
    >
      <div className="rice-collection__decor" aria-hidden="true">
        <GrainIcon className="rice-collection__motif rice-collection__motif--left" />
        <GrainIcon className="rice-collection__motif rice-collection__motif--right" />
        <span className="rice-collection__grain rice-collection__grain--1" />
        <span className="rice-collection__grain rice-collection__grain--2" />
        <span className="rice-collection__grain rice-collection__grain--3" />
        <span className="rice-collection__grain rice-collection__grain--4" />
      </div>

      <div className="rice-collection__inner">
        <header className="rice-collection__header">
          <p className="rice-collection__eyebrow">Our Rice Collection</p>
          <h2 id="rice-collection-title" className="rice-collection__title">
            <span className="rice-collection__title-line rice-collection__title-line--accent">
              Premium Varieties
            </span>{' '}
            <span className="rice-collection__title-line">
              for Every Occasion.
            </span>
          </h2>
          <p className="rice-collection__lead">
            From everyday meals to special occasions, explore our range of
            premium Basmati rice, carefully selected to bring quality and
            flavour to every table.
          </p>
        </header>

        <ul className="rice-collection__list">
          {products.map((product) => (
            <li key={product.id} className="rice-collection__product">
              <div className="rice-collection__stage">
                <span className="rice-collection__arch" aria-hidden="true" />
                <span className="rice-collection__plinth" aria-hidden="true" />
                <GrainIcon className="rice-collection__sprig rice-collection__sprig--left" />
                <GrainIcon className="rice-collection__sprig rice-collection__sprig--right" />
                <div className="rice-collection__window">
                  <div
                    className={`rice-collection__frame rice-collection__frame--${product.id}`}
                  >
                    <img
                      src={product.image.src}
                      alt={product.image.alt}
                      width={product.image.width}
                      height={product.image.height}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </div>
              </div>

              <h3 className="rice-collection__name">
                {product.name}{' '}
                <span className="rice-collection__weight">
                  {product.weight}
                </span>
              </h3>
              <p className="rice-collection__description">
                {product.description}
              </p>
              <Link
                to="/products"
                className="button button--secondary button--compact rice-collection__cta"
                aria-label={`View details of Shri Shri ${product.name} Basmati Rice ${product.weight}`}
              >
                View Details
                <ArrowRightIcon />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="rice-collection__transition" aria-hidden="true" />
    </section>
  )
}

export default RiceCollection
