"use client";

import React from "react";

import { useLocale } from "@app/hooks";

type ListItemPropTypes = {};

const ListItem: React.FC<ListItemPropTypes> = () => {
  const SCOPE_OPTIONS = {
    scope: "containers.Home.ListItem",
  };

  const { t } = useLocale();

  return (
    <div>
      <div>{t("labels.numberOfFavorites", SCOPE_OPTIONS)}</div>
      <div>{t("labels.lastUpdate", SCOPE_OPTIONS)}</div>
      <div>{t("labels.urgent", SCOPE_OPTIONS)}</div>
    </div>
  );
};

export default ListItem;
