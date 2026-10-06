export interface Inquiry {
  name: string
  company: string
  email: string
  projectType: string
  budget: string
  schedule: string
  details: string
}

// Replace this function with a Formspree, EmailJS or API request when delivery is ready.
// The MVP confirms a valid inquiry in the browser only; no data is sent or stored.
export async function submitInquiry(_inquiry: Inquiry): Promise<void> {
  return Promise.resolve()
}
