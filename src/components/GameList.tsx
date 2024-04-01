import React from "react";
import Image from "next/image";
import type { Game } from "@/types";

type Props = {
  selectedColIndex: number;
  games: Game[];
};

const GameList = ({ selectedColIndex, games }: Props) => {
  return (
    <div
      className={`grid grid-cols-2 xs:grid-cols-${selectedColIndex} gap-5`}
      data-testid="games"
    >
      {!games.length ? "No games found" : ""}
      {games.map((game) => (
        <div
          key={game.id}
          className="relative flex items-end cursor-pointer group"
        >
          <Image
            src={game.cover}
            alt={game.name}
            sizes="100vw"
            className="w-full h-auto rounded-lg filter group-hover:brightness-50 transition duration-300"
            width={196}
            height={141}
            priority
          />
          <span className="absolute px-2 py-1 text-white text-sm opacity-0 group-hover:opacity-100 transition duration-300">
            {game.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default GameList;
