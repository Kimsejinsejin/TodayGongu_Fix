'use client';

import React, { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5'; // 검색 아이콘

const categories = ['최저가비교', '전체', '의류', '푸드', '키즈/육아', '뷰티', '생활용품'];

export function CategoryTabs() {
  const [activeTab, setActiveTab] = useState('전체');

  return (
    <div className="flex w-full items-center justify-between border-b border-border-color bg-main-bg px-5 py-4">
      <div className="flex flex-1 overflow-x-auto hide-scrollbar">
        <div className="flex gap-4 pr-4"> {/* Add pr-4 to give space for search icon */}
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`relative pb-2 font-pretendard text-base font-semibold whitespace-nowrap transition-colors duration-200 ${
                activeTab === category
                  ? 'text-neutral-title'
                  : 'text-gray-link'
              }`}
            >
              {category}
              {activeTab === category && (
                <span className="absolute bottom-0 left-0 w-full h-[3px] bg-primary rounded-t-sm" />
              )}
            </button>
          ))}
        </div>
      </div>
      <button className="flex-shrink-0 ml-auto">
        <IoSearchOutline className="text-xl text-neutral-title" />
      </button>
    </div>
  );
}