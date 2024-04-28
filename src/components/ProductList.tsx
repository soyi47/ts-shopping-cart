import React from "react";

import { Product } from "@/models/product";
import ProductListItem from "@/components/ProductListItem";

import * as styles from "./ProductList.css";

const EmptyState = () => {
  return (
    <div className={styles.emptyStateText}>상품 목록이 비었습니다. 🥲</div>
  );
};

const ProductList = (props: { products: Product[] }) => {
  const { products } = props;

  return (
    <div className={styles.container}>
      {products.length === 0 && <EmptyState />}
      {products.map((product, index) => (
        <ProductListItem {...product} key={index} productId={index} />
      ))}
    </div>
  );
};

export default ProductList;
