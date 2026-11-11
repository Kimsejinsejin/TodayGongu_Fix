import React from 'react';
import Image from 'next/image';
import { Search } from 'lucide-react';

export default function Sidebar() {
  const popularBrands = [
    '폴로', '아미', '데코아르', '경자국밥', '티니핑',
    '디어커스', '알텐바흐'
  ];

  return (
    <div className="flex h-full flex-col p-5">
      {/* Header section */}
      <div className="mb-8 mt-5"> {/* 스크린샷과 유사한 여백 */}
        <h1 className="text-dark mb-1 text-[28px] font-bold leading-tight">오늘공구</h1>
        <p className="text-gray-600 text-[15px] leading-relaxed">
          매일 업데이트되는 실시간 공구.<br />
          지금 열린 할인만 모아서 보여드려요.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-8">
        <input
          type="text"
          placeholder="공구 검색"
          className="w-full rounded-lg border border-bordergray py-3 pl-10 pr-4 text-[15px] font-medium text-dark placeholder-gray-600 focus:border-primary focus:outline-none"
        />
        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600" />
      </div>

      {/* Popular Brands */}
      <div className="mb-10">
        <h2 className="text-dark mb-4 text-[16px] font-semibold">인기 브랜드</h2>
        <div className="flex flex-wrap gap-2">
          {popularBrands.map((brand, index) => (
            <button
              key={brand}
              type="button"
              className={`rounded-full px-3 py-1.5 text-[14px] ${
                index === 0 // '폴로'를 활성화된 상태로 가정
                  ? 'bg-dark text-white'
                  : 'bg-white text-dark border border-bordergray'
              } font-medium`}
            >
              {brand}
            </button>
          ))}
        </div>
      </div>

      {/* App Download Section */}
      <div className="mt-auto rounded-xl bg-lightgraybg p-5 shadow-sm">
        <h2 className="text-dark mb-2 text-[18px] font-bold leading-snug">앱으로 더 편하게</h2>
        <p className="text-gray-600 mb-6 text-[13px] leading-snug">
          QR 코드를 스캔해서 앱으로 만나보세요
        </p>
        <div className="flex items-center gap-4">
          {/* QR Code */}
          <div className="relative size-[100px] flex-shrink-0">
            <Image
              src="/images/qr-code.png" // public/images 폴더에 qr-code.png 필요
              alt="QR Code"
              fill
              objectFit="contain"
            />
          </div>

          {/* App Store Buttons */}
          <div className="flex flex-col gap-2">
            <button
              type="button"
              className="flex items-center justify-center rounded-lg bg-black px-4 py-3 text-white transition-opacity duration-200 hover:opacity-80"
            >
              <Image
                src="/images/apple-logo.svg" // public/images 폴더에 apple-logo.svg 필요
                alt="Apple App Store"
                width={16}
                height={16}
                className="mr-2 h-4 w-4"
              />
              <span className="text-[14px] font-semibold">App Store</span>
            </button>
            <button
              type="button"
              className="flex items-center justify-center rounded-lg bg-black px-4 py-3 text-white transition-opacity duration-200 hover:opacity-80"
            >
              <Image
                src="/images/google-play-logo.svg" // public/images 폴더에 google-play-logo.svg 필요
                alt="Google Play Store"
                width={16}
                height={16}
                className="mr-2 h-4 w-4"
              />
              <span className="text-[14px] font-semibold">Play Store</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}