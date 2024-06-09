import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    res.status(200).json({
      products: [
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
      ],
    });
  } catch (err) {
    res.status(500).json({ error: "failed to load data" });
  }
}
