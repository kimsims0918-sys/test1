import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { workCategories } from '../data/workCategories'
import { site } from '../data/site'

export function Header() {
  const [open, setOpen] = useState(false)
  const [workOpen, setWorkOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  function closeMenus() {
    setOpen(false)
    setWorkOpen(false)
  }

  function goTo(page: 'about' | 'services' | 'contact') {
    closeMenus()
    const path = `/${page}`
    if (location.pathname === path) window.scrollTo({ top: 0, behavior: 'smooth' })
    else navigate(path)
  }

  return (
    <header className={location.pathname === '/' ? 'site-header site-header--dark' : 'site-header'}>
      <div className="header-inner page-shell">
        <Link className="header-home" to="/" onClick={() => { closeMenus(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>HOME</Link>
        <Link className="wordmark" to="/" onClick={() => { closeMenus(); window.scrollTo({ top: 0, behavior: 'smooth' }) }} aria-label="REVINCI 홈"><img className="wordmark-logo" src={site.headerLogo} alt="" /></Link>
        <nav className={open ? 'site-nav is-open' : 'site-nav'} id="site-navigation" aria-label="주 메뉴">
          <button type="button" onClick={() => goTo('about')}>ABOUT</button>
          <div className={workOpen ? 'nav-work is-open' : 'nav-work'} onPointerEnter={(event) => { if (event.pointerType === 'mouse' && window.matchMedia('(min-width: 761px)').matches) setWorkOpen(true) }} onPointerLeave={(event) => { if (event.pointerType === 'mouse' && window.matchMedia('(min-width: 761px)').matches) setWorkOpen(false) }} onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setWorkOpen(false) }}>
            <button type="button" aria-expanded={workOpen} aria-controls="work-submenu" onFocus={() => setWorkOpen(true)} onClick={() => { closeMenus(); if (location.pathname === '/work/illustration') window.scrollTo({ top: 0, behavior: 'smooth' }); else navigate('/work/illustration') }}>WORK</button>
            <div className="work-submenu" id="work-submenu">
              {workCategories.map((item) => <Link key={item.slug} to={`/work/${item.slug}`} onClick={closeMenus}>{item.label}</Link>)}
            </div>
          </div>
          <button type="button" onClick={() => goTo('services')}>SERVICES</button>
          <button type="button" onClick={() => goTo('contact')}>CONTACT</button>
        </nav>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="site-navigation" aria-label={open ? '메뉴 닫기' : '메뉴 열기'} onClick={() => { setOpen(!open); setWorkOpen(false) }}>
          <span /> <span />
        </button>
      </div>
    </header>
  )
}
