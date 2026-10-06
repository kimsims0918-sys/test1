import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const navigation = [
  { label: 'WORK', id: 'work' },
  { label: 'ABOUT', id: 'about' },
  { label: 'CONTACT', id: 'contact' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  function goTo(id: string) {
    setOpen(false)
    if (location.pathname !== '/') {
      navigate(`/#${id}`)
      return
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    window.history.replaceState(null, '', `/#${id}`)
  }

  return (
    <header className="site-header">
      <div className="header-inner page-shell">
        <Link className="wordmark" to="/" onClick={() => { setOpen(false); window.scrollTo({ top: 0, behavior: 'instant' }) }} aria-label="REVINCI 홈">REVINCI<span className="wordmark-dot">.</span></Link>
        <nav className={open ? 'site-nav is-open' : 'site-nav'} id="site-navigation" aria-label="주 메뉴">
          {navigation.map((item) => <button key={item.id} type="button" onClick={() => goTo(item.id)}>{item.label}</button>)}
        </nav>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="site-navigation" aria-label={open ? '메뉴 닫기' : '메뉴 열기'} onClick={() => setOpen(!open)}>
          <span /> <span />
        </button>
      </div>
    </header>
  )
}
