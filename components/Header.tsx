import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 flex h-[60px] max-w-[480px] items-center justify-end bg-white px-5 shadow-[0_2px_4px_rgba(0,0,0,0.04)] lg:relative lg:max-w-full lg:shadow-none">
      {/* Search Icon */}
      <button aria-label="Search" className="flex items-center justify-center size-10 text-gray-800">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </button>
    </header>
  );
};

export default Header;