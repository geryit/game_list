/**
 * Represents a component that displays a list of groups.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {number[]} props.groupIds - An array of group IDs.
 * @param {React.Dispatch<React.SetStateAction<number[]>>} props.setGroupIds - A function to update the group IDs.
 * @returns {JSX.Element} The rendered component.
 */
import React, { useCallback } from "react";
import data from "@/data/data.json";
import type { Group } from "@/types";

type Props = {
  groupIds: number[];
  setGroupIds: React.Dispatch<React.SetStateAction<number[]>>;
};

const Groups = ({ groupIds, setGroupIds }: Props) => {
  const onClick = useCallback(
    (group: Group) => {
      setGroupIds((prev) => {
        if (prev.includes(group.id)) {
          return prev.filter((id) => id !== group.id);
        } else {
          return [...prev, group.id];
        }
      });
    },
    [setGroupIds]
  );
  return (
    <div className="mt-4 flex flex-wrap gap-x-8 gap-y-4" data-testid="groups">
      {data.groups.map((group) => (
        <button
          key={group.id}
          className={`rounded px-2 py-1 hover:bg-yellow-550 ${groupIds.includes(group.id) ? "bg-yellow-550" : ""}`}
          onClick={() => onClick(group)}
        >
          {group.name}
        </button>
      ))}
    </div>
  );
};

export default Groups;
