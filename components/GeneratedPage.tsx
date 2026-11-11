// WebMirrorLab 자동 생성 컴포넌트 (파싱 실패 폴백)
export default function GeneratedPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">생성된 페이지</h1>
      <p className="text-muted-foreground">코드 파싱 중 오류가 발생했습니다.</p>
    </div>
  );
}

/*
LLM 원본 응답:
요청하신 웹사이트의 섹션을 Next.js 15 App Router, TypeScript, Tailwind CSS v4를 사용하여 복제한 코드입니다. 원본 사이트의 모든 UI 요소를 재현하였고, 모바일 우선 반응형 디자인을 적용했습니다.

**프로젝트 설정:**

1.  Next.js 프로젝트 생성:
    '''bash
    npx create-next-app@latest my-todaygonggu --typescript --tailwind --app --src-dir
    '''
    (src 디렉토리 사용을 위해 '--src-dir' 추가)
2.  'tailwind.config.ts', 'globals.css', 'layout.tsx' 파일 업데이트:

    **'tailwind.config.ts'**
    '''typescript
    // tailwind.config.ts
    import type { Config } from 'tailwindcss';

    const config: Config = {
      content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
      ],
      theme: {
        extend: {
          fontFamily: {
            pretendard: ['Pretendard', 'sans-serif'],
          },
          colors: {
            'tg-dark-gray': '#1b1b1f',
            'tg-medium-gray': '#575762',
            'tg-light-gray': '#e5e7eb',
            'tg-placeholder-gray': '#9ca3af',
            'tg-bg-light': '#f3f4f6',
            'tg-bg-qr': '#f7f7f8',
            'tg-orange': '#ff6f0f',
            'tg-text-gray': '#757582',
            'tg-bg-mobile': '#f2f2f2',
            'tg-green': '#00c562',
            'tg-red': '#f66',
          },
          boxShadow: {
            'lg-custom': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
            'xl-custom': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            'md-custom': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)',
            'bottom-nav': '0 -2px 8px 0 rgba(0,0,0,0.1)',
          },
        },
      },
      plugins: [],
    };
    export default config;
    '''

    **'src/app/globals.css'**
    '''css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    /* Custom font styles based on the provided HTML classes */
    .font-pretendard-extrabold {
      font-family: 'Pretendard', sans-serif;
      font-weight: 800; /* ExtraBold
*/
