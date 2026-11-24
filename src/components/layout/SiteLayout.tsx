import { Outlet } from 'react-router-dom'
import HashScroll from '../routing/HashScroll.tsx'
import PageMotion from '../routing/PageMotion.tsx'
import Footer from './Footer.tsx'
import Header from './Header.tsx'

function SiteLayout() {
  return (
    <div className="site-layout">
      <HashScroll />
      <PageMotion />
      <Header />
      <main className="site-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default SiteLayout
