import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { ProjectDetail } from './pages/ProjectDetail'
import { WorkCategory } from './pages/WorkCategory'

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/work/:category" element={<WorkCategory />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  )
}
