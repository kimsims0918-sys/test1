import { useEffect } from 'react'
import { Contact } from '../components/Contact'

export function ContactPage() {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])
  return <main className="standalone-page"><Contact /></main>
}
