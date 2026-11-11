import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: '오늘공구 - 인스타 최저가 공동구매를 한번에',
  description: '매일 업데이트되는 실시간 공구. 지금 열린 할인만 모아서 보여드려요.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="font-pretendard antialiased">{children}</body>
    </html>
  );
}