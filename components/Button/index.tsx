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
        "bg-red-500 hover:bg-red-700 text-white text-sm font-normal py-2 px-4 rounded-sm":
          variant === "danger",
        "cursor-pointer py-2 px-4 border-transparent w-fit bg-lime-700 text-white text-sm font-normal rounded-sm hover:bg-green-600":
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
