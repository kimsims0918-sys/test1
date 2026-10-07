import { site } from '../data/site'

export function Footer() {
  return (
    <footer className="footer">
      <div className="page-shell">
        <div className="footer-bottom">
          <span>Copyright © {site.name}</span>
          <nav className="footer-links" aria-label="소셜 링크">
            {site.socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target={link.url.startsWith('http') ? '_blank' : undefined}
                rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
