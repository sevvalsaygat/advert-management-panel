"use client";

import React from "react";
import Image from "next/image";

import { toast } from "sonner";

import { useLocale } from "@app/hooks";
import { useAdvertStore } from "@app/stores";
import { Icons } from "@app/components";
import { date } from "@app/lib";

type ListItemPropTypes = {
  advert: AdvertType;
};

const ListItem: React.FC<ListItemPropTypes> = ({ advert }) => {
  const SCOPE_OPTIONS = {
    scope: "containers.Home.ListItem",
  };
  const { t } = useLocale();
  const { incrementFavoriteCount, deleteAdvert } = useAdvertStore(
    (state) => state
  );

  return (
    <div className="flex flex-col group/item cursor-pointer p-2 hover:bg-zinc-300 hover:bg-opacity-15 rounded-xl gap-4">
      <div className="relative h-52 w-full rounded-xl bg-zinc-300 bg-opacity-25 ">
        <Image
          src={advert.image}
          width={0}
          height={0}
          alt="logo"
          style={{
            width: "100%",
            height: "100%",
          }}
          className="object-contain"
        />
        <div className="flex flex-col items-center gap-3 absolute top-0 right-0 mr-2 mt-2">
          <button
            onClick={() => {
              incrementFavoriteCount(advert.id);
            }}
          >
            <div className="flex items-center justify-center align-center bg-white hover:bg-white hover:bg-opacity-85 rounded-full p-2 w-fit">
              <Icons.Favorite />
            </div>
          </button>
          <button
            onClick={() => {
              deleteAdvert(advert.id);
              toast.success(t("labels.toast.success", SCOPE_OPTIONS));
            }}
          >
            <div className="hidden group-hover/item:block items-center justify-center align-center bg-white hover:bg-white hover:bg-opacity-85 rounded-full p-2 w-fit">
              <Icons.Delete className="text-red-500 w-5 h-5" />
            </div>
          </button>
        </div>
        {advert.isUrgent && (
          <div className="flex flex-row absolute top-0 left-0 ml-2 mt-2 bg-red-500 w-fit px-2 py-1 pr-3 rounded-full">
            <Icons.Flame className="text-white w-4 h-4" />
            <div className="text-white text-xs font-medium mt-0.5">
              {t("labels.urgent", SCOPE_OPTIONS)}
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col px-3 py-2 gap-3">
        <div className="text-lg font-semibold text-purple-900 truncate">
          {advert.title}
        </div>
        <div className="flex flex-row">
          <Icons.Location className="w-5 h-5 text-purple-900 mr-2" />
          <div className="flex flex-row gap-3 text-sm font-sans text-purple-700">
            {t("labels.numberOfFavorites", SCOPE_OPTIONS)}
            <div>{advert.favoriteCount}</div>
          </div>
        </div>
        <div className="flex flex-row">
          <Icons.Calendar className="w-5 h-5 mr-2" />
          <div className="flex flex-row gap-3 text-sm font-sans text-purple-700">
            {t("labels.lastUpdate", SCOPE_OPTIONS)}
            <div>{date.formatDate(advert.updatedAt, "YYYY.MM.DD HH:mm")}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
