"use client";

import React from "react";

import { Switch as HeadlessSwitch } from "@headlessui/react";

import {
  Controller,
  useFormContext,
  RegisterOptions,
  FieldValues,
} from "react-hook-form";
import cn from "classnames";

type SwitchPropTypes = {
  name: string;
  label?: string;
  rules?:
    | Omit<
        RegisterOptions<FieldValues, string>,
        "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
      >
    | undefined;
  defaultValue?: boolean;
  className?: string;
};

const Switch: React.FC<SwitchPropTypes> = ({
  name,
  label,
  rules,
  defaultValue,
  className,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const fieldError = errors[name];

  return (
    <React.Fragment>
      {label && (
        <label className="flex flex-row gap-2 items-center text-xs font-semibold leading-6 text-purple-700">
          {label}
        </label>
      )}
      <div
        className={cn({
          "mt-2": !!label,
        })}
      >
        <Controller
          name={name}
          control={control}
          rules={rules}
          defaultValue={defaultValue}
          render={({ field }) => (
            <HeadlessSwitch
              checked={field.value}
              onChange={field.onChange}
              className={`${field.value ? "bg-purple-900" : "bg-purple-100"}
          relative inline-flex h-6 w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
            >
              <span
                aria-hidden="true"
                className={`${field.value ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
              />
            </HeadlessSwitch>
          )}
        />
      </div>
      {fieldError && (
        <div className="fixed text-rose-800 text-xs font-sans">
          {fieldError.message as string}
        </div>
      )}
    </React.Fragment>
  );
};

export default Switch;
