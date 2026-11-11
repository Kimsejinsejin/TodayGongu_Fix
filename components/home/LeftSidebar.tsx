import React from 'react';
import Image from 'next/image';
import { IoSearchOutline } from 'react-icons/io5'; // 검색 아이콘

const popularBrands = [
  '폴로',
  '아미',
  '데코아르',
  '경자국밥',
  '티니핑',
  '디어커스',
  '알텐바흐',
];

export function LeftSidebar() {
  return (
    <div className="hidden lg:flex w-[280px] flex-shrink-0 flex-col gap-8 bg-off-white-bg px-5 py-8">
      <div className="flex flex-col gap-2">
        <h1 className="font-pretendard text-25px font-bold leading-31px text-neutral-title">오늘공구</h1>
        <p className="font-pretendard text-12px font-medium leading-17px text-gray-text">
          매일 업데이트되는 실시간 공구.<br />지금 열린 할인만 모아서 보여드려요.
        </p>
      </div>

      <div className="relative flex items-center">
        <IoSearchOutline className="absolute left-3 text-xl text-gray-link" />
        <input
          type="text"
          placeholder="공구 검색"
          className="w-full rounded-lg border border-border-color py-[10px] pl-10 pr-4 font-pretendard text-12px font-medium leading-17px text-gray-text focus:border-primary focus:outline-none"
        />
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="font-pretendard text-12px font-semibold leading-17px text-gray-text">인기 브랜드</h3>
        <div className="flex flex-wrap gap-2">
          {popularBrands.map((brand) => (
            <span
              key={brand}
              className="rounded-full bg-main-bg px-3 py-[6px] font-pretendard text-12px font-medium leading-17px text-gray-text shadow-custom-light"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-3 pt-4">
        <h3 className="font-pretendard text-18px font-bold leading-25px text-neutral-title">앱으로 더 편하게</h3>
        <p className="font-pretendard text-12px font-medium leading-17px text-gray-text">
          QR 코드를 스캔해서 앱으로 만나보세요
        </p>
        <div className="flex items-center gap-4">
          <Image
            src="https://www.todaygonggu.com/_next/image?url=%2Fstatic%2Fqr-code.png&w=128&q=75"
            alt="QR Code"
            width={120}
            height={120}
            className="rounded-lg border border-border-color bg-white p-2"
          />
          <div className="flex flex-col gap-2">
            <button className="flex w-[120px] items-center justify-center rounded-lg border border-border-color bg-neutral-title py-3 text-white transition-colors duration-200 hover:bg-gray-800">
              <Image
                src="https://www.todaygonggu.com/_next/image?url=%2Fstatic%2Fapp-store.png&w=32&q=75"
                alt="App Store"
                width={16}
                height={16}
                className="mr-2"
              />
              <span className="font-pretendard text-12px font-semibold">App Store</span>
            </button>
            <button className="flex w-[120px] items-center justify-center rounded-lg border border-border-color bg-neutral-title py-3 text-white transition-colors duration-200 hover:bg-gray-800">
              <Image
                src="https://www.todaygonggu.com/_next/image?url=%2Fstatic%2Fplay-store.png&w=32&q=75"
                alt="Play Store"
                width={16}
                height={16}
                className="mr-2"
              />
              <span className="font-pretendard text-12px font-semibold">Play Store</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}