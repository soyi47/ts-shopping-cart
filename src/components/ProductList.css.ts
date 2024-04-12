import { style } from "@vanilla-extract/css";

export const container = style({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  rowGap: 32,
  columnGap: 20,

  padding: 20,
});

export const emptyStateText = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  minHeight: 400,
});
