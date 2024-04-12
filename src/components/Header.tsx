import React from "react";

import * as styles from "./Header.css";

const Header = () => {
  return (
    <div className={styles.container}>
      <h1>
        <a href="">로고</a>
      </h1>
      <nav>
        <ul className={styles.navList}>
          <li className={styles.navListItem}>
            <button
              onClick={() => {
                alert("준비중입니다. 🙇‍♀️");
              }}
            >
              장바구니
            </button>
          </li>
          <li className={styles.navListItem}>
            <button
              onClick={() => {
                alert("준비중입니다. 🙇‍♀️");
              }}
            >
              주문목록
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
