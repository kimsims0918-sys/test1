import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Hero } from '../components/Hero'

export function Home() {
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    const oldSection = location.hash.slice(1)
    if (['work', 'about', 'services', 'contact'].includes(oldSection)) navigate(`/${oldSection}`, { replace: true })
    else window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.hash, navigate])
  return <main><Hero /></main>
}
