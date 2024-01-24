"use client";

import React from "react";
import Link from "next/link";

import { useLocale } from "@app/hooks";
import { LANGUAGES } from "@app/constants";

type HeaderPropTypes = {};

const Header: React.FC<HeaderPropTypes> = () => {
  const SCOPE_OPTIONS = {
    scope: "components.Layout.Header",
  };

  const { t, changeLocale } = useLocale();

  return (
    <div className="flex flex-row justify-between w-full bg-gray-500 shadow-sm h-fit sticky p-3 px-28">
      <div className="flex flex-row items-center gap-6">
        <div className="flex flex-row gap-3 ml-2 text-white">HEADER</div>
      </div>
      <div className="flex flex-row items-center gap-3">
        <Link
          className="cursor-pointer py-2 px-4 border-transparent w-fit bg-lime-700 text-white text-sm font-normal rounded-sm hover:bg-green-600"
          href="/adverts/new"
        >
          {t("actions.newAdvert", SCOPE_OPTIONS)}
        </Link>
        <div className="flex flex-row gap-4">
          <button onClick={() => changeLocale(LANGUAGES.TURKISH)}>TR</button>
          <button onClick={() => changeLocale(LANGUAGES.ENGLISH)}>EN</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
