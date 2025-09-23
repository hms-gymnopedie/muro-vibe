import React from 'react'
import { Header, QuestionForm, AnswerDisplay } from './components'
import { useQuestionState, useQuestionActions } from './hooks'

function HomePage() {
  const questionState = useQuestionState()
  const questionActions = useQuestionActions()

  const handleSubmit = (prompt) => {
    questionActions.handleSubmit(prompt, questionState)
  }

  const handleCopy = (text) => {
    questionActions.handleCopy(text)
  }

  const handleNewAnswer = () => {
    questionActions.handleNewAnswer(questionState)
  }

  return (
    <div className="home-page">
      <Header />
      
      <main className="main-content">
        <QuestionForm 
          prompt={questionState.prompt}
          setPrompt={questionState.setPrompt}
          onSubmit={handleSubmit}
          isLoading={questionState.isLoading}
        />
        
        <AnswerDisplay
          result={questionState.result}
          isLoading={questionState.isLoading}
          error={questionState.error}
          onCopy={handleCopy}
          onNewAnswer={handleNewAnswer}
        />
      </main>
    </div>
  )
}

export default HomePage
