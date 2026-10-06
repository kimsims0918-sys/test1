const services = [
  { number: '01', title: 'ILLUSTRATION', description: '이미지로 이야기와 분위기를 만드는 일러스트레이션' },
  { number: '02', title: 'BRAND ILLUSTRATION', description: '브랜드의 성격을 이미지 언어로 확장하는 비주얼 작업' },
  { number: '03', title: 'VECTOR & ASSET', description: '다양한 매체에 활용할 수 있도록 설계된 벡터 그래픽과 디자인 에셋' },
]

export function Services() {
  return (
    <section className="services section-space" id="services" aria-labelledby="services-title">
      <div className="page-shell">
        <div className="section-heading services-heading"><div><span className="section-kicker">02 / PRACTICE</span><h2 id="services-title">What I Do<span className="heading-period">.</span></h2></div><p>From first thought to final form.</p></div>
        <div className="service-list">{services.map((service) => <div className="service-row" key={service.number}><span>{service.number}</span><h3>{service.title}</h3><p>{service.description}</p><span className="service-mark" aria-hidden="true">↗</span></div>)}</div>
      </div>
    </section>
  )
}
