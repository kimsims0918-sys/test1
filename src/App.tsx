import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { projects } from './data/projects'
import { PrivacyPage } from './pages/PrivacyPage'
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
  const { pathname } = useLocation()
  useEffect(() => {
    const titles: Record<string, string> = { '/': 'Classic Mood Illustration & Visual Design', '/about': 'About', '/services': 'Services', '/contact': 'Contact', '/privacy': 'Privacy', '/work': 'Work', '/work/illustration': 'Revinci Illustration', '/work/vector-assets': 'Revinci Vector & Assets', '/work/brand-projects': 'Revinci Brand Projects' }
    document.title = `${projects.find(p => pathname === `/project/${p.id}`)?.title ?? titles[pathname] ?? 'Portfolio'} — REVINCI Studio`
  }, [pathname])
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
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}
