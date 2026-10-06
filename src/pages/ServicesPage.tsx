import { useEffect } from 'react'
import { Services } from '../components/Services'

export function ServicesPage() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])
  return <main className="standalone-page"><Services /></main>
}
