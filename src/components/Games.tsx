"use client";
import React, { useState } from "react";
import Image from "next/image";
import LogoutButton from "@/components/LogoutButton";
import data from "@/data/data.json";
import Columns from "@/components/Columns";

type user = { username: string; password: string; name: string } | undefined;

type Props = {
  user: user;
};

const defaultCol = 3;

const Games = ({ user }: Props) => {
  const [keyword, setKeyword] = useState("");
  const [providers, setProviders] = useState<number[]>([]);
  const [groups, setGroups] = useState<number[]>([]);
  console.log({ groups });
  return (
    <div className="">
      <div className="shadow-custom">
        <div className="w-full max-w-[81.75rem] px-4 m-auto flex items-center gap-8	">
          <Image src="/logo.svg" alt="Logo" width={70} height={70} priority />
          <div className="flex-1" />
          <span>{user?.name}</span>
          <LogoutButton />
        </div>
      </div>

      <div className="w-full max-w-[81.75rem] p-4 m-auto flex gap-5 mt-12">
        <div className="flex-1">
          <div className="grid grid-cols-4 gap-5">
            {data.games
              .filter(
                (game) =>
                  !providers.length || providers.includes(game.provider),
              )
              .filter((game) =>
                game.name.toLowerCase().includes(keyword.toLowerCase()),
              )
              .map((item) => (
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
                  className={`rounded px-2 py-1 hover:bg-yellow-550 ${providers.includes(provider.id) ? "bg-yellow-550" : ""}`}
                  onClick={() =>
                    setProviders((prev) => {
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
                  className={`rounded px-2 py-1 hover:bg-yellow-550 ${groups.includes(group.id) ? "bg-yellow-550" : ""}`}
                  onClick={() =>
                    setGroups((prev) => {
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
              <button className="hover:text-neutral-170">A-Z</button>
              <button className="hover:text-neutral-170">Z-A</button>
              <button className="hover:text-neutral-170">Newest</button>
            </div>
          </div>

          <div className="mt-8">
            <h2 className="text-neutral-170">Columns</h2>
            <Columns />
          </div>

          <div className="mt-8 flex justify-between items-center">
            <span>Games amount: 3800</span>
            <button className="px-10 py-2 shadow">Reset</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
