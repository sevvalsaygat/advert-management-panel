"use client";

import React from "react";

import cn from "classnames";

type ButtonPropTypes = {
  title?: string;
  className?: string;
  variant?: "primary" | "danger";
  onClick: () => void;
  leftIcon?: React.FC;
  rightIcon?: React.FC;
};

const Button: React.FC<ButtonPropTypes> = ({
  title,
  className,
  variant,
  onClick,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
}: ButtonPropTypes) => {
  return (
    <button
      onClick={onClick}
      className={cn(className, {
        "cursor-pointer px-8 border-transparent mt-2 bg-purple-900 text-white text-sm font-light rounded-xl hover:bg-purple-700":
          variant === "primary",
      })}
    >
      {LeftIcon && <LeftIcon />}
      {title}
      {RightIcon && <RightIcon />}
    </button>
  );
};

export default Button;
