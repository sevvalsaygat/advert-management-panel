"use client";

import React from "react";

import { useLocale } from "@app/hooks";
import { useAdvertStore } from "@app/stores";
import { Icons } from "@app/components";

type ListItemPropTypes = {
  advert: AdvertType;
};

const ListItem: React.FC<ListItemPropTypes> = ({ advert }) => {
  const SCOPE_OPTIONS = {
    scope: "containers.Home.ListItem",
  };
  const { t } = useLocale();
  const { incrementFavoriteCount, decrementFavoriteCount, deleteAdvert } =
    useAdvertStore((state) => state);

  return (
    <div className="mb-10">
      <div>{advert.title}</div>
      <div className="flex flex-row gap-2">
        {t("labels.numberOfFavorites", SCOPE_OPTIONS)}
        <div>{advert.favoriteCount}</div>
      </div>
      <div className="flex flex-row gap-2">
        {t("labels.lastUpdate", SCOPE_OPTIONS)}
        <div>{advert.updatedAt}</div>
      </div>
      <div>{t("labels.urgent", SCOPE_OPTIONS)}</div>
      <button
        onClick={() => {
          incrementFavoriteCount(advert.id);
        }}
      >
        <Icons.Favorite />
      </button>
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
