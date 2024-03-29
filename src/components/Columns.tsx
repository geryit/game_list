import React, { useState } from "react";
import { cols } from "@/constants";

type Props = {
  selectedColIndex: number;
  setSelectedColIndex: React.Dispatch<React.SetStateAction<number>>;
};

const Columns = ({ selectedColIndex, setSelectedColIndex }: Props) => {
  const [selectedCol, setSelectedCol] = useState(selectedColIndex);

  return (
    <div className="mt-4 relative flex items-center">
      <div className="flex absolute w-full rounded-md overflow-hidden">
        {cols.slice(0, -1).map((col) => (
          <div
            key={col}
            className={`h-4 flex-1 ${selectedCol > col ? "bg-yellow-550 " : "bg-neutral-160"}`}
          />
        ))}
      </div>
      <div className="flex justify-between w-full">
        {cols.map((col) => (
          <button
            key={col}
            className={`relative w-6 h-6 rounded-full cursor-pointer
              ${col <= selectedCol ? "bg-yellow-550" : "bg-neutral-160"}
              `}
            onClick={() => setSelectedColIndex(col)}
            onMouseEnter={() => setSelectedCol(col)}
            onMouseLeave={() => setSelectedCol(selectedColIndex)}
          >
            {col}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Columns;
