import React from "react";
import ProductListItem from "./ProductListItem";

import * as styles from "./ProductList.css";

const dummyProducts = [
  {
    productThumbnail: "https://dummyimage.com/500x700",
    productName:
      "상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명",
    productPrice: 11029384,
  },
  {
    productThumbnail: "https://dummyimage.com/500x700",
    productName: "상품명",
    productPrice: 92837456,
  },
  {
    productThumbnail: "https://dummyimage.com/500x700",
    productName:
      "상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명",
    productPrice: 11029384,
  },
  {
    productThumbnail: "https://dummyimage.com/500x700",
    productName: "상품명",
    productPrice: 92837456,
  },
  {
    productThumbnail: "https://dummyimage.com/500x700",
    productName:
      "상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명",
    productPrice: 11029384,
  },
  {
    productThumbnail: "https://dummyimage.com/500x700",
    productName: "상품명",
    productPrice: 92837456,
  },
  {
    productThumbnail: "https://dummyimage.com/500x700",
    productName:
      "상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명",
    productPrice: 11029384,
  },
  {
    productThumbnail: "https://dummyimage.com/500x700",
    productName: "상품명",
    productPrice: 92837456,
  },
  {
    productThumbnail: "https://dummyimage.com/500x700",
    productName:
      "상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명",
    productPrice: 11029384,
  },
  {
    productThumbnail: "https://dummyimage.com/500x700",
    productName: "상품명",
    productPrice: 92837456,
  },
];

const EmptyState = () => {
  return (
    <div className={styles.emptyStateText}>상품 목록이 비었습니다. 🥲</div>
  );
};

const ProductList = () => {
  return (
    <div className={styles.container}>
      {dummyProducts.map((product, index) => (
        <ProductListItem key={index} productId={index} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
