import { style } from "@vanilla-extract/css";

export const alignCenter = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const detailContainer = style({
  display: "flex",
  flexDirection: "column",
  gap: 4,

  width: 500,
  height: 620,
  marginTop: 32,
});

export const thumbnail = style({
  width: "100%",
  aspectRatio: "1/1",
  objectFit: "cover",
  objectPosition: "center",
});

export const nameText = style({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  overflow: "hidden",
});

export const priceText = style({
  fontWeight: "bold",
});

export const cartButton = style({
  width: "100%",
  height: 40,
  marginTop: "auto",

  backgroundColor: "yellowgreen",
});
