import type { SyntheticEvent } from 'react'
import { Link } from 'react-router-dom'
import { contactDetails } from '../../data/contact.ts'
import { navigationLinks } from '../../data/navigation.ts'
import { products } from '../../data/products.ts'
import '../../styles/footer.css'
import {
  FacebookIcon,
  InstagramIcon,
  LeafIcon,
  MapPinIcon,
  PhoneIcon,
} from '../ui/Icons.tsx'

const socialIcons = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
} as const

/* Intended scenic art; if the file is absent, onError collapses the band. */
const FOOTER_ART_SRC = '/images/home/footer-bg.jpeg'

/* Without the artwork the footer collapses its scenic band instead of
   showing an empty area; a later successful load restores it. */
function markMissing(event: SyntheticEvent<HTMLImageElement>) {
  event.currentTarget.dataset.missing = 'true'
}

function clearMissing(event: SyntheticEvent<HTMLImageElement>) {
  delete event.currentTarget.dataset.missing
}

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer__main">
        <img
          className="site-footer__art"
          src={FOOTER_ART_SRC}
          alt=""
          loading="lazy"
          decoding="async"
          onError={markMissing}
          onLoad={clearMissing}
        />

        <div className="site-footer__inner">
          <div className="site-footer__about">
            <Link to="/" className="brand site-footer__brand">
              <span className="brand__crest">
                <img
                  src="/images/brand/shri-logo.png"
                  alt="Shri Shri Basmati Rice"
                  width={1254}
                  height={1254}
                  loading="lazy"
                />
              </span>
              <span className="brand__wordmark" aria-hidden="true">
                <span className="brand__name">SHRI SHRI</span>
                <span className="brand__descriptor">Basmati Rice</span>
                <span className="brand__tagline">
                  Pure <span className="brand__dot">•</span> Aromatic{' '}
                  <span className="brand__dot">•</span> Premium
                </span>
              </span>
            </Link>

            <p className="site-footer__intro">
              Bringing the finest Basmati rice to homes and businesses, with a
              commitment to purity, quality and authentic taste.
            </p>
          </div>

          <nav className="site-footer__column" aria-labelledby="footer-links-title">
            <h2 id="footer-links-title" className="site-footer__heading">
              Quick Links
            </h2>
            <ul className="site-footer__links">
              {navigationLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="site-footer__link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav
            className="site-footer__column"
            aria-labelledby="footer-products-title"
          >
            <h2 id="footer-products-title" className="site-footer__heading">
              Our Products
            </h2>
            <ul className="site-footer__links">
              {products.map((product) => (
                <li key={product.id}>
                  <Link to="/products" className="site-footer__link">
                    Shri Shri {product.name} {product.weight}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-footer__column">
            <h2 className="site-footer__heading">Contact Us</h2>
            <ul className="site-footer__contact">
              <li className="site-footer__contact-item">
                <MapPinIcon className="site-footer__contact-icon" />
                <address className="site-footer__address">
                  <span className="site-footer__company">
                    {contactDetails.company}
                  </span>
                  {contactDetails.addressLines.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </address>
              </li>
              <li className="site-footer__contact-item">
                <PhoneIcon className="site-footer__contact-icon" />
                <a href={contactDetails.phone.href} className="site-footer__link">
                  {contactDetails.phone.display}
                </a>
              </li>
              {contactDetails.socials.map((social) => {
                const Icon = socialIcons[social.id]
                return (
                  <li key={social.id} className="site-footer__contact-item">
                    <Icon className="site-footer__contact-icon" />
                    <a
                      href={social.href}
                      className="site-footer__link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {social.label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="site-footer__bar">
        <div className="site-footer__bar-inner">
          <div className="site-footer__legal">
            <p className="site-footer__copyright">
              &copy; {currentYear} Shri Shri Basmati Rice. All rights reserved.
            </p>
            <p className="site-footer__credit">
              Developed by{' '}
              <a
                href="https://weboku.com"
                className="site-footer__credit-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Weboku
              </a>
            </p>
          </div>
          <p className="site-footer__motto">
            <LeafIcon className="site-footer__motto-icon" />
            A Healthier Tomorrow, Together.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
