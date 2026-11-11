import React from 'react';
import ProductCard from './ProductCard';

interface ProductData {
  imageUrl: string;
  category: string;
  creatorAvatarUrl: string;
  creatorName: string;
  followerCount: string;
  subtitle?: string;
  title: string;
}

interface ProductGridProps {
  products: ProductData[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  // 2개의 카드를 한 행으로 묶어 그리드를 구성합니다.
  return (
    <div className="flex flex-col gap-2px"> {/* 행 사이의 수직 간격 */}
      {Array.from({ length: Math.ceil(products.length / 2) }).map((_, rowIndex) => (
        <div key={rowIndex} className="flex flex-row gap-2px"> {/* 카드 사이의 수평 간격 */}
          {products.slice(rowIndex * 2, rowIndex * 2 + 2).map((product, cardIndex) => (
            <ProductCard key={`${rowIndex}-${cardIndex}`} {...product} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;