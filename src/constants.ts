import { Game, Methods } from "@/types";

export const cols = [2, 3, 4];

export const defaultColIndex = 4;

export const sortMethods = {
  "A-Z": (a: Game, b: Game) => a.name.localeCompare(b.name),
  "Z-A": (a: Game, b: Game) => b.name.localeCompare(a.name),
  Newest: (a: Game, b: Game) =>
    new Date(a.date).getTime() - new Date(b.date).getTime(),
} as Methods;
