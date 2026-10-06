import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { ProjectDetail } from './pages/ProjectDetail'
import { WorkCategory } from './pages/WorkCategory'
import { AboutPage } from './pages/AboutPage'
import { ServicesPage } from './pages/ServicesPage'
import { ContactPage } from './pages/ContactPage'
import { WorkPage } from './pages/WorkPage'

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/work/:category" element={<WorkCategory />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}
