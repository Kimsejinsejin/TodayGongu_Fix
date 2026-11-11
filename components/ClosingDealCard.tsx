import Image from 'next/image';

interface ClosingDealCardProps {
  id: number;
  imageUrl: string;
  dateRange: string;
  creator: string;
  productTitle: string;
  isDDay?: boolean;
  dDayValue?: string;
}

export function ClosingDealCard({
  id,
  imageUrl,
  dateRange,
  creator,
  productTitle,
  isDDay = false,
  dDayValue,
}: ClosingDealCardProps) {
  return (
    <div
      tabIndex={0}
      className="relative h-[275px] w-[220px] overflow-hidden rounded-[12px] active:opacity-90 cursor-pointer flex-shrink-0"
    >
      <div className="absolute inset-0 size-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={productTitle}
          fill
          sizes="(max-width: 768px) 100vw, 220px"
          className="object-cover object-[center]"
          priority={false} // Adjust priority as needed
        />
      </div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0) 64%, rgb(0, 0, 0) 100%)',
        }}
      ></div>

      <div className="absolute left-3 top-[9px] flex flex-row items-center gap-[6px]">
        {isDDay && dDayValue && (
          <div className="rounded-[2px] bg-primary px-[6px] py-[3px]">
            <div className="font-pretendard-semibold text-[10px] leading-[14px] text-white">
              {dDayValue}
            </div>
          </div>
        )}
        <div className="rounded-[2px] bg-gray-100 px-[6px] py-[3px]">
          <div className="font-pretendard-semibold text-[10px] leading-[14px] text-gray-800">
            {dateRange}
          </div>
        </div>
      </div>

      <div className="absolute bottom-3 left-3 right-3 flex flex-col gap-1">
        <div className="flex flex-row items-center gap-2">
          <div className="rounded bg-dark-bg px-[6px] py-[2px]">
            <div className="font-pretendard-semibold text-[10px] leading-[14px] text-gray-100">
              {id}
            </div>
          </div>
          <div className="flex-1 font-pretendard-medium text-[10px] leading-[14px] text-white line-clamp-1">
            {creator}
          </div>
        </div>
        <div className="font-pretendard-bold text-[18px] leading-[25px] text-gray-100 line-clamp-2">
          {productTitle}
        </div>
      </div>
    </div>
  );
}