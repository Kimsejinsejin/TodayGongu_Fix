import React from 'react';
import { FaPlay } from 'react-icons/fa'; // 재생 아이콘 (예시)

export function LiveDealNotice() {
  return (
    <div className="flex items-center gap-2 bg-[#f2f4f6] px-5 py-3">
      <div className="flex items-center gap-[6px]">
        <span className="size-1 rounded-full bg-live-green" />
        <span className="font-pretendard text-10px font-semibold leading-14px text-gray-800">
          LIVE
        </span>
      </div>
      <p className="font-pretendard text-10px font-medium leading-14px text-gray-text">
        17시간 남았어요 ∙ 오프유 | 민선 | 잭옥이야하는 해인맘 X 베이비마더스...
      </p>
      {/* 원본 사이트의 재생 아이콘이 정확히 무엇인지 알 수 없어 FaPlay로 대체합니다. */}
      {/* <FaPlay className="text-gray-600 text-[8px]" /> */}
    </div>
  );
}