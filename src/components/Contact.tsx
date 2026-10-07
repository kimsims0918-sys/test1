import { useState, type FormEvent } from 'react'
import { site } from '../data/site'
import { submitInquiry, type Inquiry } from '../services/inquiry'

const projectTypes = ['Illustration', 'Brand Illustration', 'Vector & Asset', 'Package / Visual', 'Other']
const initial: Inquiry = { name: '', company: '', email: '', projectType: '', budget: '', schedule: '', details: '' }

export function Contact() {
  const [values, setValues] = useState<Inquiry>(initial)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)

  function update(field: keyof Inquiry, value: string) { setValues((current) => ({ ...current, [field]: value })) }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (!event.currentTarget.reportValidity()) return
    setError('')
    setBusy(true)
    try {
      await submitInquiry(values)
      setSubmitted(true)
      setValues(initial)
    } catch (cause) { setError(cause instanceof Error && cause.message.includes('활성화') ? cause.message : '문의 전송에 실패했습니다. 입력 내용을 확인하고 다시 시도하거나 이메일로 직접 문의해주세요.') } finally { setBusy(false) }
  }

  return (
    <section className="contact contact-editorial" id="contact" aria-labelledby="contact-title">
      <div className="page-shell">
        <div className="contact-editorial-layout">
          <div className="contact-editorial-intro">
            <h1 id="contact-title">CONTACT</h1>
            <p className="contact-editorial-lead">클래식한 감성으로 새로운 이야기를 함께 만듭니다.</p>
            <p>일러스트레이션, 벡터 그래픽, 브랜드 디자인에 대한 문의를 기다립니다. 프로젝트의 내용과 희망 일정을 알려주시면 작업 범위와 진행 가능 여부를 안내드립니다.</p>
            <div className="contact-editorial-email"><span>Email</span><a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a></div>
          </div>
          <div className="contact-editorial-form">
        {submitted ? <div className="contact-success" role="status"><span>↗</span><h3>Thank you. Your inquiry has been received.</h3><p>문의가 접수되었습니다. 내용을 확인한 후 남겨주신 이메일로 답변드리겠습니다.</p><button type="button" className="text-link" onClick={() => setSubmitted(false)}>SEND ANOTHER INQUIRY <span aria-hidden="true">↗</span></button></div> :
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
            <p className="contact-form-error" role="alert">{error}</p><div className="form-bottom"><p><span>*</span> Required fields<br />문의 내용은 FormSubmit을 통해 이메일로 전달됩니다.</p><button className="submit-button" disabled={busy} type="submit">{busy ? 'SENDING...' : 'SEND INQUIRY'} <span aria-hidden="true">↗</span></button></div>
          </form>}
          </div>
        </div>
      </div>
    </section>
  )
}
