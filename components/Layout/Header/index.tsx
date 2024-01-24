"use client";

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
        <Button onClick={() => {}} variant="primary" title="Add New Advert" />
      </div>
    </div>
  );
};

export default Header;
