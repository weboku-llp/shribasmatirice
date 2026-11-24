import { Link } from 'react-router-dom'
import '../styles/not-found.css'

function NotFoundPage() {
  return (
    <section className="not-found" aria-labelledby="not-found-title">
      <p className="not-found__eyebrow">404</p>
      <h1 id="not-found-title" className="not-found__title">
        Page Not Found
      </h1>
      <p className="not-found__lead">
        The page you’re looking for isn’t available. Return home to continue
        browsing Shri Shri Basmati Rice.
      </p>
      <Link to="/" className="button button--primary not-found__cta">
        Back to Home
      </Link>
    </section>
  )
}

export default NotFoundPage
