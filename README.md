# 물어봐이브 (Mureo-Vibe)

일상의 사소한 고민부터 창의적인 아이디어까지, 무엇이든 물어보면 AI가 재치있게 답해주는 인터랙티브 웹 앱

## 기술 스택

- **Frontend**: React (Vite)
- **AI API**: Gemini API
- **배포**: Netlify
- **코드 포맷팅**: Prettier
- **아키텍처**: FSD (Feature-Sliced Design)

## 프로젝트 구조

```
src/
├── app/           # 애플리케이션 초기화 및 설정
├── pages/         # 페이지 컴포넌트
│   └── home/      # 홈 페이지
├── widgets/       # 위젯 컴포넌트
│   ├── question-form/    # 질문 입력 폼 위젯
│   └── answer-display/   # 답변 표시 위젯
├── features/      # 독립적인 기능 모듈
│   ├── question-input/   # 질문 입력 기능
│   ├── ai-answer/        # AI 답변 생성 기능
│   └── result-display/   # 결과 표시 기능
├── entities/      # 도메인 엔터티
└── shared/        # 공통 유틸리티, 컴포넌트 등
    ├── ui/        # 공통 UI 컴포넌트
    ├── lib/       # 유틸리티 함수
    ├── api/       # API 관련 코드
    └── config/    # 설정 파일
```

## 주요 기능

- 질문 입력 (Question Input)
- AI 답변 생성 (AI Answer Generation)
- 결과 표시 (Result Display)

## 설치 및 실행

1. Node.js 설치 (https://nodejs.org/)
2. 의존성 설치: `npm install`
3. 개발 서버 실행: `npm run dev`
4. 빌드: `npm run build`

## Netlify 배포

### 자동 배포 (Git 연동)
1. GitHub에 코드 푸시
2. [Netlify](https://netlify.com)에 로그인
3. "New site from Git" 클릭
4. GitHub 저장소 선택
5. 빌드 설정:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. 환경 변수 설정:
   - `VITE_GEMINI_API_KEY`: Gemini API 키
7. Deploy 클릭

### 수동 배포
1. 프로젝트 빌드: `npm run build`
2. `dist` 폴더를 Netlify에 드래그 앤 드롭
3. 환경 변수 설정 (Site settings > Environment variables)

## 환경 변수 설정

프로젝트 루트에 `.env.local` 파일을 생성하고 다음 내용을 추가하세요:

```bash
# Gemini API Key
VITE_GEMINI_API_KEY=your_actual_gemini_api_key_here
```

### Gemini API 키 발급 방법:
1. [Google AI Studio](https://aistudio.google.com/)에 접속
2. Google 계정으로 로그인
3. "Get API Key" 버튼 클릭
4. 새 API 키 생성
5. 생성된 키를 `.env.local` 파일에 설정


