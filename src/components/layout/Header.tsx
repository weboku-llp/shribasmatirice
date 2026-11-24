import { useEffect, useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navigationLinks } from '../../data/navigation.ts'
import '../../styles/header.css'
import {
  ArrowRightIcon,
  CloseIcon,
  MailIcon,
  MenuIcon,
} from '../ui/Icons.tsx'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  const closeMenu = () => setIsMenuOpen(false)

  useEffect(() => {
    if (!isMenuOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
        menuButtonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMenuOpen])

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="brand" onClick={closeMenu}>
          <span className="brand__crest">
            <img
              src="/images/brand/shri-logo.png"
              alt="Shri Shri Basmati Rice"
              width={1254}
              height={1254}
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

        <button
          ref={menuButtonRef}
          type="button"
          className="site-header__toggle"
          aria-expanded={isMenuOpen}
          aria-controls="site-menu"
          aria-label="Main menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        <div
          id="site-menu"
          className={`site-header__menu${isMenuOpen ? ' is-open' : ''}`}
        >
          <nav aria-label="Main navigation">
            <ul className="site-nav">
              {navigationLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    end
                    className="site-nav__link"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Link
            to="/contact"
            className="button button--primary button--compact site-header__cta"
            onClick={closeMenu}
          >
            <MailIcon />
            Enquire Now
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
