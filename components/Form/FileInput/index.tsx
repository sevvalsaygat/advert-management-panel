"use client";

import React from "react";

import {
  Controller,
  useFormContext,
  RegisterOptions,
  FieldValues,
} from "react-hook-form";
import cn from "classnames";

type FileInputPropTypes = {
  name: string;
  label?: string;
  rules?:
    | Omit<
        RegisterOptions<FieldValues, string>,
        "valueAsNumber" | "valueAsDate" | "setValueAs" | "disabled"
      >
    | undefined;
  variant?: "primary";
  className?: string;
  accept?: string;
};

const FileInput: React.FC<FileInputPropTypes> = ({
  name,
  label,
  rules,
  variant,
  className,
  accept,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const fieldError = errors[name];

  return (
    <React.Fragment>
      {label && (
        <label className="block text-sm ml-1 font-medium leading-6 text-purple-700">
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
          render={({ field }) => (
            <input
              onChange={(e) => {
                if (e.target.files) {
                  const file = e.target.files[0];
                  const reader = new FileReader();
                  reader.onloadend = () => {
                    field.onChange(reader.result);
                  };
                  reader.readAsDataURL(file);
                }
              }}
              onBlur={field.onBlur}
              name={field.name}
              type="file"
              accept={accept}
              className={cn(className, {
                "flex flex-col w-full mb-10 border border-slate-500 rounded-md p-3 placeholder:text-sm font-light placeholder:text-zinc-600 placeholder:font-light focus:outline-none focus:ring-1 focus:ring- focus:bg-white text-sm":
                  variant === "primary",
              })}
            />
          )}
        />
      </div>
      {fieldError && (
        <div className="fixed -mt-8 ml-2 text-rose-800 text-xs font-sans">
          {fieldError.message as string}
        </div>
      )}
    </React.Fragment>
  );
};

export default FileInput;
