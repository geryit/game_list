export type User =
  | { username: string; password: string; name: string }
  | undefined;

export type Methods = { [key: string]: (a: any, b: any) => number };

export type Game = {
  id: number;
  name: string;
  provider: number;
  cover: string;
  coverLarge: string;
  date: string;
};

export type Group = {
  id: number;
  name: string;
  games: number[];
};
