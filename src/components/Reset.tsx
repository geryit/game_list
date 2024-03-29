import React, { useCallback } from "react";
import type {Game, Group} from "@/types";

type Props = {
  games: Game[]
};

const Reset = ({ games }: Props) => {
  const onClick = useCallback(
    () => {
      ;
    },
    [],
  );
  return <div className="mt-8 flex justify-between items-center">
    <span>Games amount: {games.length}</span>
    <button className="px-10 py-2 shadow text-neutral-170 hover:text-neutral-180">
      Reset
    </button>
  </div>;
};

export default Reset;
