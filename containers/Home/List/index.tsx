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
    <div>
      <div>LIST</div>
      {adverts.map((advert, i) => {
        return <Home.ListItem key={i} advert={advert} />;
      })}
      <Home.SortingDropdown />
    </div>
  );
};

export default List;
