import React from "react";

import { Product } from "@/models/product";

import * as styles from "./ProductListItem.css";

const ProductListItem = (props: Product) => {
  const { productId, productThumbnail, productName, productPrice } = props;

  return (
    <div className={styles.container}>
      <a className={styles.link} href={`products/${productId}`}>
        <img className={styles.thumbnail} src={productThumbnail} alt="" />
        <div className={styles.priceText}>
          {productPrice.toLocaleString()}원
        </div>
        <div className={styles.nameText}>{productName}</div>
      </a>
      <button
        className={styles.cartButton}
        type="button"
        onClick={(e) => {
          alert("준비중입니다. 🙇‍♀️");
        }}
      >
        장바구니 담기
      </button>
    </div>
  );
};

export default ProductListItem;
