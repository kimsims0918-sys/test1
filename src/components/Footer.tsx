import { Link } from 'react-router-dom'
import { site } from '../data/site'

export function Footer() {
  return <footer className="footer"><div className="page-shell"><div className="footer-top"><div><Link className="footer-logo" to="/">{site.name}<span>.</span></Link><p>{site.discipline}</p></div><div className="footer-links">{site.socialLinks.map((link) => <a key={link.label} href={link.url} target={link.url.startsWith('http') ? '_blank' : undefined} rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}>{link.label} <span aria-hidden="true">↗</span></a>)}</div></div><div className="footer-bottom"><span>Copyright © {site.name}</span><span>MADE WITH INTENTION</span><a href="#top" onClick={(event) => { event.preventDefault(); if (window.location.pathname === '/') window.history.replaceState(null, '', '/'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>BACK TO TOP ↑</a></div></div></footer>
}
