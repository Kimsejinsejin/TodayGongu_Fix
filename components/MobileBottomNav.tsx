import React from 'react';

const MobileBottomNav: React.FC = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-20 h-[60px] max-w-[480px] mx-auto flex items-center justify-around border-t border-gray-100 bg-white shadow-nav-bottom lg:hidden">
      <button className="flex flex-col items-center justify-center gap-0.5 text-center text-[11px] font-pretendard-medium text-gray-500">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary" // Active state for '실시간 TOP'
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        실시간 TOP
      </button>
      <button className="flex flex-col items-center justify-center gap-0.5 text-center text-[11px] font-pretendard-medium text-gray-500">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-500"
        >
          <line x1="12" y1="20" x2="12" y2="10"></line>
          <line x1="18" y1="20" x2="18" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="16"></line>
        </svg>
        공구 탐색
      </button>
      <button className="flex flex-col items-center justify-center gap-0.5 text-center text-[11px] font-pretendard-medium text-gray-500">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-gray-500"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
        마이
      </button>
    </nav>
  );
};

export default MobileBottomNav;