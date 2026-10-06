import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Hero } from '../components/Hero'
import { Portfolio } from '../components/Portfolio'
import { Services } from '../components/Services'
import { About } from '../components/About'
import { Contact } from '../components/Contact'

export function Home() {
  const location = useLocation()
  useEffect(() => {
    if (location.hash) requestAnimationFrame(() => document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: 'smooth' }))
    else window.scrollTo({ top: 0, behavior: 'instant' })
  }, [location.pathname, location.hash])
  return <main><Hero /><Portfolio /><Services /><About /><Contact /></main>
}
