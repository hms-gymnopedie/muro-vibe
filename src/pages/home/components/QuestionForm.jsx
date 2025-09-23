import React from 'react'
import { Card, TextArea } from '../../../shared/ui'

function QuestionForm({ prompt, setPrompt, onSubmit, isLoading }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    if (prompt.trim() && !isLoading) {
      onSubmit(prompt)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      if (prompt.trim() && !isLoading) {
        onSubmit(prompt)
      }
    }
  }

  return (
    <Card className="question-form-card">
      <form onSubmit={handleSubmit} className="question-form">
        <div className="form-group">
          <label htmlFor="question-input" className="form-label">
            무엇이든 물어보세요!
          </label>
          <TextArea
            id="question-input"
            className="question-textarea"
            placeholder="예: 오늘 점심 메뉴로 마라탕 vs 돈까스 중에 골라줘"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
            rows={4}
          />
        </div>
        
        <button 
          type="submit" 
          className="submit-button"
          disabled={!prompt.trim() || isLoading}
        >
          {isLoading ? '생각 중...' : '물어보기!'}
        </button>
      </form>
    </Card>
  )
}

export default QuestionForm
