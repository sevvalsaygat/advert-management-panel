"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import { useLocale } from "@app/hooks";
import { LANGUAGES } from "@app/constants";

type HeaderPropTypes = {};

const Header: React.FC<HeaderPropTypes> = () => {
  const SCOPE_OPTIONS = {
    scope: "components.Layout.Header",
  };
  const { t, changeLocale } = useLocale();

  return (
    <div className="flex flex-row justify-between w-full bg-white border-b shadow-sm h-fit sticky p-3 sm:px-28">
      <div className="flex flex-row items-center gap-6">
        <Link href="/">
          <Image src="/images/logo.png" width={45} height={45} alt="logo" />
        </Link>
      </div>
      <div className="flex flex-row items-center gap-16">
        <div>
          <Link
            className="cursor-pointer py-3 rounded-lg px-4 border-transparent w-fit bg-purple-900 text-white text-sm font-light hover:bg-purple-700"
            href="/adverts/new"
          >
            {t("actions.newAdvert", SCOPE_OPTIONS)}
          </Link>
        </div>
        <div className="flex flex-row gap-2">
          <button className="" onClick={() => changeLocale(LANGUAGES.TURKISH)}>
            <Image
              src="/images/turkeyFlag.png"
              width={35}
              height={35}
              alt="turkeyFlag"
            />
          </button>
          <button onClick={() => changeLocale(LANGUAGES.ENGLISH)}>
            <Image
              src="/images/abdFlag.png"
              width={35}
              height={35}
              alt="abdFlag"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
