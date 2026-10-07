import { useEffect } from 'react'
import { About } from '../components/About'

export function AboutPage() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])
  return <main className="standalone-page about-page"><About /></main>
}
