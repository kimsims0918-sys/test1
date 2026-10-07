import { Link } from 'react-router-dom'
import { servicesContent } from '../data/services'

export function Services() {
  return (
    <section className="services-editorial page-shell" id="services" aria-labelledby="services-title">
      <div className="services-editorial-heading">
        <h1 id="services-title">SERVICES</h1>
        <p>{servicesContent.introduction}</p>
      </div>
      <div className="services-editorial-list">
        {servicesContent.services.map((service) => (
          <article className="services-editorial-row" key={service.number}>
            <span className="services-editorial-number">{service.number}</span>
            <h2>{service.title}</h2>
            <div className="services-editorial-copy">
              <p>{service.description}</p>
              <p className="services-editorial-scope">{service.scope}</p>
              <Link to={service.path}>관련 작품 보기 ↗</Link>
            </div>
          </article>
        ))}
      </div>
      <div className="services-editorial-contact">
        <p>{servicesContent.estimate}</p>
        <Link to="/contact">프로젝트 문의하기 ↗</Link>
      </div>
    </section>
  )
}
