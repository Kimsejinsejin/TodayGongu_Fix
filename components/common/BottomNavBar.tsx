import React from 'react';
import { LuLineChart, LuCompass, LuUser2 } from 'react-icons/lu'; // 아이콘

export function BottomNavBar() {
  return (
    <nav className="fixed bottom-0 left-0 z-50 flex w-full justify-around border-t border-border-color bg-main-bg py-3 lg:hidden">
      <button className="flex flex-col items-center gap-1 text-primary">
        <LuLineChart className="text-xl" />
        <span className="font-pretendard text-10px font-medium leading-14px">실시간 TOP</span>
      </button>
      <button className="flex flex-col items-center gap-1 text-gray-link">
        <LuCompass className="text-xl" />
        <span className="font-pretendard text-10px font-medium leading-14px">공구 탐색</span>
      </button>
      <button className="flex flex-col items-center gap-1 text-gray-link">
        <LuUser2 className="text-xl" />
        <span className="font-pretendard text-10px font-medium leading-14px">마이</span>
      </button>
    </nav>
  );
}