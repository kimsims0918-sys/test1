import { useEffect } from 'react'
import { Portfolio } from '../components/Portfolio'

export function WorkPage() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])
  return <main className="standalone-page"><Portfolio /></main>
}
