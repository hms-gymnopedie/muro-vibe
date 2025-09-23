import React from 'react'
import { Card } from '../../shared/ui'

function NotFoundPage() {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <Card className="not-found-card">
          <div className="not-found-icon">🔍</div>
          <h1 className="not-found-title">404</h1>
          <h2 className="not-found-subtitle">페이지를 찾을 수 없어요!</h2>
          <p className="not-found-description">
            요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.<br />
            아래 버튼을 클릭하여 홈으로 돌아가세요! 🏠
          </p>
          <div className="not-found-actions">
            <button 
              onClick={() => window.location.href = '/'}
              className="home-button"
            >
              🏠 홈으로 돌아가기
            </button>
            <button 
              onClick={() => window.history.back()}
              className="back-button"
            >
              ⬅️ 이전 페이지로
            </button>
          </div>
        </Card>
        
        <div className="not-found-suggestions">
          <h3>💡 이런 것들을 시도해보세요:</h3>
          <ul>
            <li>URL을 다시 확인해보세요</li>
            <li>홈페이지에서 원하는 기능을 찾아보세요</li>
            <li>브라우저의 뒤로가기 버튼을 사용해보세요</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage

