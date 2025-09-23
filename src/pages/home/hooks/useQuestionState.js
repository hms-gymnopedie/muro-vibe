import { useState } from 'react'

function useQuestionState() {
  const [prompt, setPrompt] = useState('')
  const [result, setResult] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const resetState = () => {
    setPrompt('')
    setResult('')
    setIsLoading(false)
    setError(null)
  }

  const setLoading = (loading) => {
    setIsLoading(loading)
    if (loading) {
      setError(null)
    }
  }

  const setResultData = (data) => {
    setResult(data)
    setIsLoading(false)
    setError(null)
  }

  const setErrorData = (errorData) => {
    setError(errorData)
    setIsLoading(false)
  }

  return {
    // State
    prompt,
    result,
    isLoading,
    error,
    
    // Setters
    setPrompt,
    setResult: setResultData,
    setIsLoading: setLoading,
    setError: setErrorData,
    
    // Actions
    resetState
  }
}

export default useQuestionState

