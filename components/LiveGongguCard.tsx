import React from 'react';

const LiveGongguCard: React.FC = () => {
  return (
    <div className="relative my-5 flex items-center gap-3 rounded-[10px] bg-brand-light-gray p-4">
      <span className="flex items-center text-[12px] font-pretendard-medium text-status-green">
        <span className="mr-1.5 size-1.5 shrink-0 rounded-full bg-status-green animate-pulse" />
        LIVE
      </span>
      <p className="line-clamp-1 text-[12px] font-pretendard-medium text-gray-700">
        17시간 남았어요 · 오프유 | 민 선 | 짹짹육아하는 해인맘 X 베이비마더...
      </p>
      {/* Arrow icon on the right */}
      <button aria-label="View live event" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-700">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>
    </div>
  );
};

export default LiveGongguCard;