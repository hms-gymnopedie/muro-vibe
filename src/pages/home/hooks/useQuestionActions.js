import { useState, useCallback } from 'react'
import { geminiService } from '../../../shared/api'

function useQuestionActions() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = useCallback(async (prompt, stateActions) => {
    if (!prompt.trim() || isSubmitting) return

    setIsSubmitting(true)
    stateActions.setIsLoading(true)

    try {
      const response = await geminiService.generateAnswer(prompt)
      
      if (response.success) {
        stateActions.setResult(response.data)
      } else {
        stateActions.setError(response.error)
      }
    } catch (error) {
      console.error('Question submission error:', error)
      stateActions.setError('답변을 생성하는 중 오류가 발생했습니다. 다시 시도해주세요.')
    } finally {
      setIsSubmitting(false)
    }
  }, [isSubmitting])

  const handleCopy = useCallback(async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      // TODO: 복사 성공 알림 추가
    } catch (error) {
      console.error('복사 실패:', error)
    }
  }, [])

  const handleNewAnswer = useCallback((stateActions) => {
    stateActions.resetState()
  }, [])

  return {
    handleSubmit,
    handleCopy,
    handleNewAnswer,
    isSubmitting
  }
}

export default useQuestionActions
