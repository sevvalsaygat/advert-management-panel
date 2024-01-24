"use client";

import React from "react";

import { useLocale } from "@app/hooks";
import { useAdvertStore } from "@app/stores";

type ListItemPropTypes = {
  advert: AdvertType;
};

const ListItem: React.FC<ListItemPropTypes> = ({ advert }) => {
  const SCOPE_OPTIONS = {
    scope: "containers.Home.ListItem",
  };
  const { t } = useLocale();

  const { decrementFavoriteCount, deleteAdvert } = useAdvertStore(
    (state) => state
  );

  return (
    <div>
      <div>{t("labels.numberOfFavorites", SCOPE_OPTIONS)}</div>
      <div>{t("labels.lastUpdate", SCOPE_OPTIONS)}</div>
      <div>{t("labels.urgent", SCOPE_OPTIONS)}</div>
      <button
        onClick={() => {
          decrementFavoriteCount(advert.id);
        }}
      >
        Toplam
      </button>
      <button
        onClick={() => {
          deleteAdvert(advert.id);
        }}
      >
        Sil
      </button>
    </div>
  );
};

export default ListItem;
