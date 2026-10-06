import { useState, type FormEvent } from 'react'
import { submitInquiry, type Inquiry } from '../services/inquiry'

const projectTypes = ['Illustration', 'Brand Illustration', 'Vector & Asset', 'Package / Visual', 'Other']
const initial: Inquiry = { name: '', company: '', email: '', projectType: '', budget: '', schedule: '', details: '' }

export function Contact() {
  const [values, setValues] = useState<Inquiry>(initial)
  const [submitted, setSubmitted] = useState(false)
  const [busy, setBusy] = useState(false)

  function update(field: keyof Inquiry, value: string) { setValues((current) => ({ ...current, [field]: value })) }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!event.currentTarget.reportValidity()) return
    setBusy(true)
    try {
      await submitInquiry(values)
      setSubmitted(true)
      setValues(initial)
    } finally { setBusy(false) }
  }

  return (
    <section className="contact section-space" id="contact" aria-labelledby="contact-title">
      <div className="page-shell">
        <span className="section-kicker">04 / CONTACT</span>
        <div className="contact-heading"><h2 id="contact-title">LET'S WORK<br />TOGETHER<span className="heading-period">.</span></h2><p>새로운 프로젝트와 협업을 기다리고 있습니다.<br />일러스트레이션, 브랜드 비주얼, 패키지 및 그래픽 에셋 제작에 대한 문의를 보내주세요.</p></div>
        {submitted ? <div className="contact-success" role="status"><span>↗</span><h3>Thank you. Your inquiry has been received.</h3><p>이 화면은 MVP용 접수 확인입니다. 현재 입력 내용은 전송되거나 저장되지 않습니다.</p><button type="button" className="text-link" onClick={() => setSubmitted(false)}>SEND ANOTHER INQUIRY <span aria-hidden="true">↗</span></button></div> :
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <label><span className="field-label">Name <em>*</em></span><input name="name" autoComplete="name" required value={values.name} onChange={(e) => update('name', e.target.value)} placeholder="Your name" /></label>
              <label>Company<input name="company" autoComplete="organization" value={values.company} onChange={(e) => update('company', e.target.value)} placeholder="Company / brand (optional)" /></label>
              <label><span className="field-label">Email <em>*</em></span><input name="email" type="email" autoComplete="email" required value={values.email} onChange={(e) => update('email', e.target.value)} placeholder="you@example.com" /></label>
              <label><span className="field-label">Project Type <em>*</em></span><select name="projectType" required value={values.projectType} onChange={(e) => update('projectType', e.target.value)}><option value="" disabled>Select a type</option>{projectTypes.map((type) => <option key={type}>{type}</option>)}</select></label>
              <label>Budget<input name="budget" value={values.budget} onChange={(e) => update('budget', e.target.value)} placeholder="Estimated budget" /></label>
              <label>Schedule<input name="schedule" value={values.schedule} onChange={(e) => update('schedule', e.target.value)} placeholder="Expected timeline" /></label>
              <label className="field-wide"><span className="field-label">Project Details <em>*</em></span><textarea name="details" required minLength={10} rows={4} value={values.details} onChange={(e) => update('details', e.target.value)} placeholder="Tell me about your project, goals, and deliverables." /></label>
            </div>
            <div className="form-bottom"><p><span>*</span> Required fields<br />MVP 단계에서는 문의 내용이 서버로 전송되지 않습니다.</p><button className="submit-button" disabled={busy} type="submit">{busy ? 'SENDING...' : 'SEND INQUIRY'} <span aria-hidden="true">↗</span></button></div>
          </form>}
      </div>
    </section>
  )
}
