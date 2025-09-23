import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Card, LoadingSpinner } from '../../../shared/ui'

function AnswerDisplay({ result, isLoading, error, onCopy, onNewAnswer }) {
  if (isLoading) {
    return (
      <Card className="answer-card loading">
        <div className="loading-container">
          <LoadingSpinner size="large" />
          <div className="loading-messages">
            <p className="loading-text">🤖 AI가 열심히 생각하고 있어요...</p>
            <p className="loading-subtext">잠시만 기다려주세요!</p>
          </div>
        </div>
      </Card>
    )
  }

  if (error) {
    return (
      <Card className="answer-card error">
        <div className="error-container">
          <div className="error-icon">😵</div>
          <h3 className="error-title">앗, 문제가 생겼어요!</h3>
          <p className="error-message">{error}</p>
          <button onClick={onNewAnswer} className="retry-button">
            🔄 다시 시도하기
          </button>
        </div>
      </Card>
    )
  }

  if (!result) {
    return null
  }

  return (
    <Card className="answer-card">
      <div className="answer-content">
        <div className="answer-header">
          <div className="answer-title-section">
            <span className="answer-icon">✨</span>
            <h3 className="answer-title">물어봐이브의 답변</h3>
          </div>
          <div className="answer-actions">
            <button onClick={() => onCopy(result)} className="copy-button">
              📋 복사하기
            </button>
            <button onClick={onNewAnswer} className="new-answer-button">
              🎲 다른 답변 보기
            </button>
          </div>
        </div>
        <div className="answer-text">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              p: ({ children }) => <p className="markdown-paragraph">{children}</p>,
              strong: ({ children }) => <strong className="markdown-bold">{children}</strong>,
              em: ({ children }) => <em className="markdown-italic">{children}</em>,
              code: ({ children }) => <code className="markdown-code">{children}</code>,
              pre: ({ children }) => <pre className="markdown-pre">{children}</pre>,
              ul: ({ children }) => <ul className="markdown-list">{children}</ul>,
              ol: ({ children }) => <ol className="markdown-ordered-list">{children}</ol>,
              li: ({ children }) => <li className="markdown-list-item">{children}</li>,
              blockquote: ({ children }) => <blockquote className="markdown-quote">{children}</blockquote>,
              h1: ({ children }) => <h1 className="markdown-h1">{children}</h1>,
              h2: ({ children }) => <h2 className="markdown-h2">{children}</h2>,
              h3: ({ children }) => <h3 className="markdown-h3">{children}</h3>,
            }}
          >
            {result}
          </ReactMarkdown>
        </div>
      </div>
    </Card>
  )
}

export default AnswerDisplay
