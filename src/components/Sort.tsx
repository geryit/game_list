import React from "react";
import { sortMethods } from "@/constants";

type Props = {
  sortBy: string | null;
  setSortBy: React.Dispatch<React.SetStateAction<string | null>>;
};

const Sort = ({ sortBy, setSortBy }: Props) => {
  return (
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
  );
};

export default Sort;
