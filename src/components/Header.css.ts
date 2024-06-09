import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  width: "100vw",
  height: 60,
  padding: 16,

  backgroundColor: "yellowgreen",
});

export const navList = style({
  display: "flex",
  flexDirection: "row",
  gap: 12,

  listStyle: "none",
});

export const navListItem = style({
  cursor: "pointer",
});
