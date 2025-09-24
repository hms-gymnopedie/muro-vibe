import { GoogleGenAI } from "@google/genai";

class GeminiService {
  constructor() {
    // 환경변수를 안전하게 가져오기
    this.apiKey = null;
    try {
      this.apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    } catch (error) {
      console.warn('Environment variable access failed:', error);
    }
    
    // API 키가 없으면 null로 설정
    if (!this.apiKey || this.apiKey === 'undefined') {
      console.warn('VITE_GEMINI_API_KEY is not defined. Please set it in Netlify environment variables.');
      this.apiKey = null;
    }
    
    // API 키가 있을 때만 GoogleGenAI 초기화
    if (this.apiKey) {
      try {
        this.ai = new GoogleGenAI({
          apiKey: this.apiKey
        });
      } catch (error) {
        console.error('Failed to initialize GoogleGenAI:', error);
        this.ai = null;
      }
    } else {
      this.ai = null;
    }
  }

  async generateAnswer(prompt) {
    try {
      // API 키가 없는 경우 에러 메시지 반환
      if (!this.apiKey || !this.ai) {
        return {
          success: false,
          data: null,
          error: 'API 키가 설정되지 않았습니다. Netlify 환경변수에서 VITE_GEMINI_API_KEY를 설정해주세요.'
        };
      }

      const response = await this.ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: this.formatPrompt(prompt),
        config: {
          thinkingConfig: {
            thinkingBudget: 0, // 속도 우선, 비용 최소화
          },
        }
      });
      
      return {
        success: true,
        data: response.text,
        error: null
      };
    } catch (error) {
      console.error('Gemini API Error:', error);
      return {
        success: false,
        data: null,
        error: this.handleError(error)
      };
    }
  }

  formatPrompt(userPrompt) {
    return `당신은 "물어봐이브"라는 귀엽고 친근한 AI 어시스턴트입니다! 🎉

사용자의 질문에 대해 재미있고 유용한 답변을 마크다운 형식으로 해주세요.

답변 스타일:
- 친근하고 귀여운 톤 (이모지 적극 활용!)
- 한국어로 답변
- 마크다운 문법 사용 (굵게, 기울임, 목록, 인용구 등)
- 실용적이고 도움이 되는 조언
- 적절한 길이 (3-5문장 정도)
- 때로는 재치있는 농담이나 유머도 포함

마크다운 사용 예시:
- **중요한 내용**은 굵게
- *강조*할 내용은 기울임
- \`코드나 특별한 용어\`는 코드 블록
- > 인용구는 따옴표로
- 목록은 • 또는 번호로

사용자 질문: ${userPrompt}

이제 귀여운 답변을 해주세요! ✨`;
  }

  handleError(error) {
    if (error.message?.includes('API key')) {
      return 'API 키가 올바르지 않습니다. 환경변수를 확인해주세요.';
    }
    
    if (error.message?.includes('quota')) {
      return 'API 사용량이 초과되었습니다. 잠시 후 다시 시도해주세요.';
    }
    
    if (error.message?.includes('network')) {
      return '네트워크 연결을 확인해주세요.';
    }
    
    return '답변을 생성하는 중 오류가 발생했습니다. 다시 시도해주세요.';
  }
}

// 싱글톤 인스턴스 생성
const geminiService = new GeminiService();

export default geminiService;
