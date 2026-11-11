import localFont from 'next/font/local';

export const Pretendard = localFont({
  src: [
    {
      path: '../public/fonts/Pretendard-Regular.woff2',
      weight: '400',
      style: 'normal',
      variable: '--font-pretendard-regular',
    },
    {
      path: '../public/fonts/Pretendard-Medium.woff2',
      weight: '500',
      style: 'normal',
      variable: '--font-pretendard-medium',
    },
    {
      path: '../public/fonts/Pretendard-SemiBold.woff2',
      weight: '600',
      style: 'normal',
      variable: '--font-pretendard-semibold',
    },
    {
      path: '../public/fonts/Pretendard-Bold.woff2',
      weight: '700',
      style: 'normal',
      variable: '--font-pretendard-bold',
    },
  ],
  display: 'swap',
  variable: '--font-pretendard', // Default variable if no specific weight is used
});