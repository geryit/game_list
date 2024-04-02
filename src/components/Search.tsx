/**
 * Search component for filtering items based on a keyword.
 *
 * @component
 * @example
 * ```tsx
 * <Search keyword={keyword} setKeyword={setKeyword} />
 * ```
 *
 * @param {string} keyword - The current search keyword.
 * @param {React.Dispatch<React.SetStateAction<string>>} setKeyword - The function to update the search keyword.
 * @returns {JSX.Element} The Search component.
 */
import React, { useCallback } from "react";
import Image from "next/image";

type Props = {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
};

const Search = ({ keyword, setKeyword }: Props) => {
  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setKeyword(e.target.value);
    },
    [setKeyword]
  );
  return (
    <div className="relative flex items-center justify-end">
      <input
        type="text"
        placeholder="Search"
        className="w-full rounded border border-neutral-160 outline-none h-16 p-4 pr-10 placeholder:text-neutral-170"
        onChange={onChange}
        value={keyword}
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
  );
};

export default Search;
