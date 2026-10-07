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
      <div className="service-process"><h2>Process</h2><ol><li><strong>01 문의</strong><p>작업 내용과 희망 일정을 알려주세요.</p></li><li><strong>02 범위·견적 협의</strong><p>제작 범위, 일정과 견적을 함께 정합니다.</p></li><li><strong>03 작업</strong><p>합의한 방향을 바탕으로 제작하고 의견을 나눕니다.</p></li><li><strong>04 최종 전달</strong><p>협의한 형식으로 최종 파일을 전달합니다.</p></li></ol><p>수정 범위·횟수, 납품 파일 형식, 상업적 사용 범위는 프로젝트 협의 단계에서 안내합니다.</p></div>
      <div className="services-editorial-contact">
        <p>{servicesContent.estimate}</p>
        <Link to="/contact">프로젝트 문의하기 ↗</Link>
      </div>
    </section>
  )
}
