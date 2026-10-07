import { site } from '../data/site'
export function PrivacyPage() {
  return <main className="privacy-page page-shell"><h1>PRIVACY</h1><p>르빈치 스튜디오 문의 개인정보 안내</p><h2>수집 항목과 목적</h2><p>이름, 이메일, 작업 분야, 프로젝트 내용은 문의 응대와 견적 상담을 위해 수집합니다. 회사명, 예산, 희망 일정은 선택 항목입니다. 민감한 개인정보는 입력하지 마세요.</p><h2>처리 방식</h2><p>문의 내용은 FormSubmit을 통해 르빈치 스튜디오의 이메일로 전달됩니다. 사이트 자체 데이터베이스에는 저장하지 않습니다. 메일 전송 과정에서 외부 서비스가 정보를 처리합니다.</p><a href="https://formsubmit.co/privacy.pdf" target="_blank" rel="noopener noreferrer">FormSubmit 개인정보 정책 ↗</a><h2>보관과 삭제</h2><p>문의 응대 목적이 달성되면 불필요한 정보를 삭제합니다. 계약으로 이어지는 경우 계약 수행에 필요한 자료는 별도로 관리합니다.</p><h2>동의와 문의</h2><p>동의를 거부할 수 있으며, 이 경우 문의 폼을 통한 접수가 제한됩니다. 개인정보 열람·정정·삭제 요청은 아래 이메일로 연락해주세요.</p><a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a></main>
}
