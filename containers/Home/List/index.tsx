import React from "react";

import { Home } from "@app/containers";

type ListPropTypes = {};

const List: React.FC<ListPropTypes> = () => {
  return (
    <div>
      <div>LIST</div>
      <Home.ListItem />
      <Home.SortingDropdown />
    </div>
  );
};

export default List;
