"use client";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import data from "@/data/data.json";
import Columns from "@/components/Columns";
import Header from "@/components/Header";
import GameList from "@/components/GameList";
import Search from "@/components/Search";
import Providers from "@/components/Providers";
import Groups from "@/components/Groups";
import Sort from "@/components/Sort";
import { User } from "@/types";
import { defaultColIndex, sortMethods } from "@/constants";
import Image from "next/image";

/**
 * The Games component is a functional component in React.
 * It manages the state and behavior of the game list.
 * It uses several hooks from React to manage state and side effects.
 * It also uses several custom components to display different parts of the UI.
 *
 * @param {Props} props - The props for the Games component.
 * @returns {JSX.Element} The rendered Games component.
 */

type Props = {
  user: User;
};

const Games = ({ user }: Props) => {
  const [keyword, setKeyword] = useState("");
  const [providerIds, setProviderIds] = useState<number[]>([]);
  const [groupIds, setGroupIds] = useState<number[]>([]);
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [selectedColIndex, setSelectedColIndex] = useState(defaultColIndex);

  const selectedGroups = data.groups.filter((group) =>
    groupIds.includes(group.id),
  );

  // Games in selected group to be used in filtering
  const gamesIdsInSelectedGroups = selectedGroups
    .map((group) => group.games)
    .flat();

  // Final list of games to be displayed
  const games = useMemo(
    () =>
      data.games
        .filter(
          (game) => !providerIds.length || providerIds.includes(game.provider),
        )
        .filter((game) =>
          game.name.toLowerCase().includes(keyword.toLowerCase()),
        )
        .filter(
          (game) =>
            !groupIds.length || gamesIdsInSelectedGroups.includes(game.id),
        )
        .sort(sortBy ? sortMethods[sortBy] : undefined),
    [gamesIdsInSelectedGroups, groupIds.length, keyword, providerIds, sortBy],
  );

  const onReset = useCallback(() => {
    setKeyword("");
    setProviderIds([]);
    setGroupIds([]);
    setSortBy(null);
    setSelectedColIndex(defaultColIndex);
  }, []);

  // Get the height of the filters div to be used as a spacer in mobile view
  const filtersRef = useRef<HTMLDivElement | null>(null);
  const [filtersHeight, setFiltersHeight] = useState(0);

  useEffect(() => {
    // Get the height of the filters div to be used as a spacer in mobile view
    const heightOfElement = filtersRef.current?.clientHeight || 0;
    setFiltersHeight(heightOfElement);
  }, []);

  // Render the Games component.
  return (
    <div className="bg-neutral-150">
      <Header user={user} />

      <div className="relative w-full max-w-[81.75rem] p-6 m-auto flex gap-5 xs:my-10 flex-col-reverse xs:flex-row">
        <div className="flex-1">
          <GameList selectedColIndex={selectedColIndex} games={games} />
        </div>

        <div
          data-testid="spacer"
          className="xs:hidden"
          style={{ height: filtersHeight }}
        />

        <div className="absolute xs:relative top-0 left-0 w-full xs:max-w-[25.75rem] p-6 xs:p-0">
          <div
            ref={filtersRef}
            className="group border border-neutral-160 rounded bg-white p-8"
          >
            {/*When filter button is pressed, hide/show the filters using
             Tailwind's group-has-[:checked] feature*/}
            <input id="filters" className="hidden" type="checkbox" />

            <Search keyword={keyword} setKeyword={setKeyword} />

            <div className="hidden group-has-[:checked]:block xs:block">
              <div className="mt-8">
                <h2 className="text-neutral-170">Providers</h2>

                <Providers
                  providerIds={providerIds}
                  setProviderIds={setProviderIds}
                />
              </div>

              <div className="mt-8">
                <h2 className="text-neutral-170">Game groups</h2>
                <Groups groupIds={groupIds} setGroupIds={setGroupIds} />
              </div>

              <div className="mt-8">
                <h2 className="text-neutral-170">Sorting</h2>
                <Sort sortBy={sortBy} setSortBy={setSortBy} />
              </div>

              <div className="mt-8 hidden xs:block">
                <h2 className="text-neutral-170">Columns</h2>
                <Columns
                  selectedColIndex={selectedColIndex}
                  setSelectedColIndex={setSelectedColIndex}
                />
              </div>

              <div className="mt-8 flex justify-between items-center">
                <span className="text-neutral-170">
                  Games amount: {data.games.length}
                </span>
                <button
                  className="px-10 py-2 shadow text-neutral-170 hover:text-neutral-180"
                  onClick={onReset}
                >
                  Reset
                </button>
              </div>
            </div>

            <div className="mt-8 xs:hidden">
              <label
                className="text-blue-550 cursor-pointer flex justify-center gap-2"
                htmlFor="filters"
              >
                <Image
                  src="/hamburger.svg"
                  alt="hamburger"
                  width={14}
                  height={12}
                  priority
                  className="w-auto h-auto"
                />
                <span className="hidden group-has-[:checked]:block">
                  Hide filters
                </span>
                <span className="group-has-[:checked]:hidden">
                  Show filters
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
