"use client";

import React, { Fragment, useState } from "react";

import { Menu, Transition } from "@headlessui/react";

import { Icons } from "@app/components";

const FILTER_OPTIONS = {
  LAST_ADDED: "LAST_ADDED",
  NUMBER_OF_FAVORITE: "NUMBER_OF_FAVORITE",
} as const;

type SortingDropdownPropTypes = {};

const SortingDropdown: React.FC<SortingDropdownPropTypes> = () => {
  const [sortBy, setSortBy] = useState<keyof typeof FILTER_OPTIONS | null>(
    null
  );

  function getLabel() {
    if (sortBy === FILTER_OPTIONS.LAST_ADDED) {
      return "Sort By (Last Added)";
    }

    if (sortBy === FILTER_OPTIONS.NUMBER_OF_FAVORITE) {
      return "Sort By (Number Of Favorite)";
    }

    return "Sort By";
  }

  const label = getLabel();

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full items-center justify-center rounded-md bg-slate-600 px-5 py-2 text-sm font-light text-white hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
          <Icons.Filter className="w-5 h-5 mr-2" />
          {label}
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => setSortBy(FILTER_OPTIONS.LAST_ADDED)}
                  className={`${
                    active ? "bg-gray-300 text-black" : "text-black"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  Sort By (Last Added)
                </button>
              )}
            </Menu.Item>
          </div>
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => setSortBy(FILTER_OPTIONS.NUMBER_OF_FAVORITE)}
                  className={`${
                    active ? "bg-gray-300 text-black" : "text-black"
                  } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                >
                  Sort By (Number of Favorite)
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default SortingDropdown;
