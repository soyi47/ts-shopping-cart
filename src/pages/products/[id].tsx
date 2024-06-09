import { GetServerSideProps, InferGetServerSidePropsType } from "next";

import { Product } from "@/models/product";

import * as styles from "./[id].css";
import { API_HOST } from "@/constants/api";

export const getServerSideProps: GetServerSideProps<Product> = async (ctx) => {
  const { id } = ctx.query;
  const res = await fetch(API_HOST + "/products/" + id);
  const product: Product = await res.json();

  return {
    props: { ...product },
  };
};

export default function Page(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { productThumbnail, productName, productPrice } = props;

  return (
    <div className={styles.alignCenter}>
      <div className={styles.detailContainer}>
        <img className={styles.thumbnail} src={productThumbnail} alt="" />
        <div className={styles.priceText}>
          {productPrice.toLocaleString()}원
        </div>
        <div className={styles.nameText}>{productName}</div>
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
    </div>
  );
}
