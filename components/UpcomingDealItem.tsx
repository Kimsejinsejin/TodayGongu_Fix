import React from 'react';
import Image from 'next/image';
import { RiNotification3Line } from 'react-icons/ri'; // Using react-icons for bell icon

interface UpcomingDealItemProps {
  imageUrl: string;
  category: string;
  title: string;
  creator: string;
}

const UpcomingDealItem: React.FC<UpcomingDealItemProps> = ({
  imageUrl,
  category,
  title,
  creator,
}) => {
  return (
    <div className="flex items-center gap-[14px] py-[12px] active:opacity-90">
      <div className="w-[74px] h-[93px] shrink-0 overflow-hidden rounded-md border border-gray-200 bg-gray-100">
        <Image
          src={imageUrl}
          alt={title}
          width={74}
          height={93}
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="flex-1 flex flex-col gap-[2px]">
        <div className="flex items-center gap-[3px] mb-1">
          <span className="h-[23px] flex items-center justify-center rounded-[4px] bg-primary/10 px-[10px]">
            <span className="font-pretendard-medium text-[12px] leading-[17px] text-primary">
              {category}
            </span>
          </span>
          {/* <span className="font-pretendard text-[13px] leading-[18px] text-[#64748b]"></span> */}
        </div>
        <p className="font-pretendard-bold text-[15px] leading-[21px] text-grayScale-800 line-clamp-2">
          {title}
        </p>
        <p className="font-pretendard-semibold text-[10px] leading-[14px] text-[#64748b] line-clamp-1">
          {creator}
        </p>
      </div>
      <button className="flex items-center justify-center gap-[2px] rounded-full px-[10px] py-[6px] bg-white border border-gray-200 active:opacity-80 h-[32px] text-black">
        <RiNotification3Line className="text-[14px]" />
        <span className="font-pretendard text-[12px] leading-[17px]">알림받기</span>
      </button>
    </div>
  );
};

export default UpcomingDealItem;