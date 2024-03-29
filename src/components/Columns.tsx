"use client";
import React, {
  HTMLInputAutoCompleteAttribute,
  HTMLInputTypeAttribute,
  useCallback,
  useState,
} from "react";

type Props = {
  label: string;
  autoComplete: HTMLInputAutoCompleteAttribute;
  name: string;
  type?: HTMLInputTypeAttribute;
  defaultValue?: string;
};

const cols = [2, 3, 4];

const defaultCol = 3;

const Columns = () => {
  const [selectedCol, setSelectedCol] = useState(defaultCol);

  return (
    <div className="mt-4 relative flex items-center">
      <div className="flex absolute w-full rounded-md overflow-hidden">
        {cols.slice(0, -1).map((col) => (
          <div
            key={col}
            className={` h-4 flex-1 ${selectedCol > col ? "bg-yellow-550 " : "bg-neutral-160"}`}
          />
        ))}
      </div>
      <div className="flex justify-between w-full">
        {cols.map((col) => (
          <button
            key={col}
            className={`relative hover:text-neutral-170 w-6 h-6 rounded-full cursor-pointer
              ${col <= selectedCol ? "bg-yellow-550" : "bg-neutral-160"}
              `}
            onClick={() => setSelectedCol(col)}
            onMouseEnter={() => setSelectedCol(col)}
            onMouseLeave={() => setSelectedCol(defaultCol)}
          >
            {col}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Columns;
