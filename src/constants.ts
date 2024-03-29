import type { Methods } from "@/types";

export const cols = [2, 3, 4];

export const defaultColIndex = 4;

export const sortMethods = {
  "A-Z": (a: any, b: any) => a.name.localeCompare(b.name),
  "Z-A": (a: any, b: any) => b.name.localeCompare(a.name),
  Newest: (a: any, b: any) => b.date - a.date,
} as Methods;
