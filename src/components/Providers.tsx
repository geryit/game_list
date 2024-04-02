import React from "react";
import data from "@/data/data.json";

/**
 * Renders a list of providers as buttons.
 *
 * @component
 * @param {number[]} props.providerIds - The array of selected provider IDs.
 * @param {React.Dispatch<React.SetStateAction<number[]>>} props.setProviderIds - The function to update the selected provider IDs.
 * @returns {JSX.Element} The Providers component.
 */

type Props = {
  providerIds: number[];
  setProviderIds: React.Dispatch<React.SetStateAction<number[]>>;
};

const Providers = ({ providerIds, setProviderIds }: Props) => {
  return (
    <div
      className="mt-4 flex flex-wrap gap-x-8 gap-y-4"
      data-testid="providers"
    >
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
  );
};

export default Providers;
