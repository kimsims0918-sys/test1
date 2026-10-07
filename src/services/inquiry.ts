export interface Inquiry {
  name: string
  company: string
  email: string
  projectType: string
  budget: string
  schedule: string
  details: string
}

export async function submitInquiry(inquiry: Inquiry): Promise<void> {
  const { site } = await import('../data/site')
  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(site.contactEmail)}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      name: inquiry.name, company: inquiry.company, email: inquiry.email,
      'Project Type': inquiry.projectType, Budget: inquiry.budget,
      Schedule: inquiry.schedule, 'Project Details': inquiry.details,
      _subject: 'REVINCI Studio — 새로운 프로젝트 문의', _template: 'table',
    }),
    signal: AbortSignal.timeout(20000),
  })
  const result = await response.json()
  if (!response.ok || (result.success !== true && result.success !== 'true')) {
    throw new Error('문의 전송에 실패했습니다. 잠시 후 다시 시도하거나 이메일로 직접 문의해주세요.')
  }
}
