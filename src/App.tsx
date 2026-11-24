import { Route, Routes } from 'react-router-dom'
import SiteLayout from './components/layout/SiteLayout.tsx'
import AboutPage from './pages/AboutPage.tsx'
import ContactPage from './pages/ContactPage.tsx'
import DealersPage from './pages/DealersPage.tsx'
import HomePage from './pages/HomePage.tsx'
import NotFoundPage from './pages/NotFoundPage.tsx'
import ProductsPage from './pages/ProductsPage.tsx'
import QualityPage from './pages/QualityPage.tsx'

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="quality" element={<QualityPage />} />
        <Route path="dealers" element={<DealersPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
