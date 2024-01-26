"use client";

import React, { useEffect } from "react";

import { Home } from "@app/containers";
import { useAdvertStore } from "@app/stores";

type ListPropTypes = {};

const List: React.FC<ListPropTypes> = () => {
  const adverts = useAdvertStore((state) => state.adverts);

  useEffect(() => {
    useAdvertStore.persist.rehydrate();
  }, []);

  return (
    <div className="flex flex-col">
      <div className="flex justify-end right-0 mb-10">
        <Home.SortingDropdown />
      </div>
      <div className="flex-row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mb-10">
        {adverts.map((advert, i) => {
          return (
            <div key={i} className="border rounded-xl mb-5">
              <Home.ListItem advert={advert} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
