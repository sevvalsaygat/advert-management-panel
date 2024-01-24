"use client";

import Link from "next/link";

import React from "react";

import { Button } from "@app/components";

type HeaderPropTypes = {};

const Header: React.FC<HeaderPropTypes> = () => {
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
          Add New Advert
        </Link>
      </div>
    </div>
  );
};

export default Header;
