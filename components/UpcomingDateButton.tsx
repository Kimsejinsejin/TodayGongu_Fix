import React from 'react';

interface UpcomingDateButtonProps {
  date: string;
  dDay: string;
  isActive: boolean;
  onClick: () => void;
}

const UpcomingDateButton: React.FC<UpcomingDateButtonProps> = ({
  date,
  dDay,
  isActive,
  onClick,
}) => {
  const activeClasses = 'bg-black text-gray-100 font-pretendard-bold';
  const inactiveClasses = 'bg-white text-gray-800 font-pretendard-semibold border border-gray-200';

  return (
    <button
      onClick={onClick}
      className={`flex-shrink-0 flex items-center justify-center rounded-[20px] px-[12px] py-[6px] h-[35px] text-[14px] leading-[20px] active:opacity-80 transition-colors duration-200
        ${isActive ? activeClasses : inactiveClasses}`}
    >
      {date} | {dDay}
    </button>
  );
};

export default UpcomingDateButton;