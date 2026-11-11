import React from 'react';

const GongguSearchSummary: React.FC = () => {
  return (
    <div className="mb-5 rounded-[10px] bg-white p-5 text-center shadow-[0_2px_4px_rgba(0,0,0,0.04)]">
      <h3 className="text-[18px] font-pretendard-semibold text-gray-900 mb-2">
        공구 검색, 이제 끝
      </h3>
      <p className="text-[20px] font-pretendard-bold text-gray-900 mb-6">
        대한민국 공구 <span className="text-primary">95%</span>가 여기에
      </p>
      <div className="flex justify-around border border-gray-100 rounded-[10px] py-4">
        <div className="flex-1 text-center">
          <p className="text-[12px] font-pretendard-medium text-gray-700 mb-1">
            지금까지 모인 누적 공구
          </p>
          <span className="text-[24px] font-pretendard-bold text-gray-900">0</span>
          <span className="text-[18px] font-pretendard-semibold text-gray-800">개</span>
        </div>
        <div className="h-full w-[1px] bg-gray-100" /> {/* Vertical divider */}
        <div className="flex-1 text-center">
          <p className="text-[12px] font-pretendard-medium text-gray-700 mb-1">
            수집중인 공구 크리에이터
          </p>
          <span className="text-[24px] font-pretendard-bold text-gray-900">0</span>
          <span className="text-[18px] font-pretendard-semibold text-gray-800">명</span>
        </div>
      </div>
    </div>
  );
};

export default GongguSearchSummary;