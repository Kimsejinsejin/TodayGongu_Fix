import React from 'react';

export function GongguSearchSummary() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-main-bg px-5 py-8 text-center">
      <h2 className="font-pretendard text-22px font-bold leading-31px text-neutral-title">
        공구 검색, 이제 끝
      </h2>
      <p className="font-pretendard text-25px font-bold leading-31px text-neutral-title">
        대한민국 공구 <span className="text-primary">95%</span>가 여기에
      </p>
      <div className="flex w-full justify-center gap-2 pt-2">
        <div className="flex-1 rounded-lg border border-border-color p-4">
          <p className="font-pretendard text-12px font-semibold leading-17px text-gray-link">
            지금까지 모인 누적 공구
          </p>
          <p className="font-pretendard text-22px font-bold leading-31px text-neutral-title">
            0<span className="text-gray-link">개</span>
          </p>
        </div>
        <div className="flex-1 rounded-lg border border-border-color p-4">
          <p className="font-pretendard text-12px font-semibold leading-17px text-gray-link">
            수집중인 공구 크리에이터
          </p>
          <p className="font-pretendard text-22px font-bold leading-31px text-neutral-title">
            <span className="text-primary">명</span>
          </p>
        </div>
      </div>
    </div>
  );
}