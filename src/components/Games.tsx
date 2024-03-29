"use client";
import React, { useState } from "react";
import Image from "next/image";
import data from "@/data/data.json";
import Columns from "@/components/Columns";
import Header from "@/components/Header";

export type User =
  | { username: string; password: string; name: string }
  | undefined;

type Props = {
  user: User;
};

const defaultColIndex = 4;

type Methods = { [key: string]: (a: any, b: any) => number };

const sortMethods = {
  "A-Z": (a: any, b: any) => a.name.localeCompare(b.name),
  "Z-A": (a: any, b: any) => b.name.localeCompare(a.name),
  Newest: (a: any, b: any) => b.date - a.date,
} as Methods;

const Games = ({ user }: Props) => {
  const [keyword, setKeyword] = useState("");
  const [providerIds, setProviderIds] = useState<number[]>([]);
  const [groupIds, setGroupIds] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState<string | null>(null);

  const [selectedColIndex, setSelectedColIndex] = useState(defaultColIndex);

  const selectedGroups = data.groups.filter((group) => {
    return groupIds.includes(group.id);
  });

  const gamesIdsInSelectedGroups = selectedGroups
    .map((group) => group.games)
    .flat();

  const games = data.games
    .filter(
      (game) => !providerIds.length || providerIds.includes(game.provider),
    )
    .filter((game) => game.name.toLowerCase().includes(keyword.toLowerCase()))
    .filter(
      (game) => !groupIds.length || gamesIdsInSelectedGroups.includes(game.id),
    )
    .sort(sortBy ? sortMethods[sortBy] : undefined);

  return (
    <>
      <Header user={user} />

      <div className="w-full max-w-[81.75rem] p-4 m-auto flex gap-5 mt-12">
        <div className="flex-1">
          <div className={`grid grid-cols-${selectedColIndex} gap-5`}>
            {!games.length ? "No games found" : ""}
            {games.map((item) => (
              <div key={item.id}>
                <Image
                  src={item.cover}
                  alt={item.name}
                  sizes="100vw"
                  className="w-full h-auto rounded-lg"
                  width={196}
                  height={141}
                  priority
                />
              </div>
            ))}
          </div>
        </div>
        <div className="w-full max-w-[25.75rem] border border-neutral-160 rounded bg-white p-8">
          <div className="relative flex items-center justify-end">
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded border border-neutral-160 outline-none h-16 p-4 pr-10 placeholder:text-neutral-170"
              onChange={(e) => setKeyword(e.target.value)}
            />
            <Image
              src="/search.svg"
              alt="search"
              width={16}
              height={16}
              priority
              className="absolute mr-4"
            />
          </div>

          <div className="mt-8">
            <h2 className="text-neutral-170">Providers</h2>

            <div className="mt-4 flex flex-wrap gap-x-8 gap-y-4">
              {data.providers.map((provider) => (
                <button
                  key={provider.id}
                  className={`rounded px-2 py-1 hover:bg-yellow-550 ${providerIds.includes(provider.id) ? "bg-yellow-550" : ""}`}
                  onClick={() =>
                    setProviderIds((prev) => {
                      if (prev.includes(provider.id)) {
                        return prev.filter((id) => id !== provider.id);
                      } else {
                        return [...prev, provider.id];
                      }
                    })
                  }
                >
                  {provider.name}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-neutral-170">Game groups</h2>

            <div className="mt-4 flex flex-wrap gap-x-8 gap-y-4">
              {data.groups.map((group) => (
                <button
                  key={group.id}
                  className={`rounded px-2 py-1 hover:bg-yellow-550 ${groupIds.includes(group.id) ? "bg-yellow-550" : ""}`}
                  onClick={() =>
                    setGroupIds((prev) => {
                      if (prev.includes(group.id)) {
                        return prev.filter((id) => id !== group.id);
                      } else {
                        return [...prev, group.id];
                      }
                    })
                  }
                >
                  {group.name}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-neutral-170">Sorting</h2>

            <div className="mt-4 flex flex-wrap gap-x-8 gap-y-4">
              {Object.keys(sortMethods).map((method) => (
                <button
                  key={method}
                  className={`rounded px-2 py-1 hover:bg-yellow-550 ${sortBy === method ? "bg-yellow-550" : ""}`}
                  onClick={() => setSortBy(method)}
                >
                  {method}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-neutral-170">Columns</h2>
            <Columns
              selectedColIndex={selectedColIndex}
              setSelectedColIndex={setSelectedColIndex}
            />
          </div>

          <div className="mt-8 flex justify-between items-center">
            <span>Games amount: 3800</span>
            <button className="px-10 py-2 shadow">Reset</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Games;
