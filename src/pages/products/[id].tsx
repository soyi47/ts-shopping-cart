import { useRouter } from "next/router";

import * as styles from "./[id].css";

const dummyProduct = {
  productThumbnail: "https://dummyimage.com/500x700",
  productName:
    "상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명상품명",
  productPrice: 11029384,
};

export default function Page() {
  const router = useRouter();

  const productId = parseInt(router.query.id);

  return (
    <div className={styles.alignCenter}>
      <div className={styles.detailContainer}>
        <img
          className={styles.thumbnail}
          src={dummyProduct.productThumbnail}
          alt=""
        />
        <div className={styles.priceText}>
          {dummyProduct.productPrice.toLocaleString()}원
        </div>
        <div className={styles.nameText}>{dummyProduct.productName}</div>
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
