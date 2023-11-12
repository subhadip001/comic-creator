"use client";

import React from "react";

type ButtonProps = {
  title: string | React.ReactNode;
  customClass?: string;
  btnType: "button" | "submit" | "reset" | undefined;
  onClickHandler?: () => void;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  title,
  customClass,
  btnType,
  onClickHandler,
  disabled, 
}) => {
  return (
    <button
      className={`${customClass} shadow-sm outline-none rounded-sm`}
      type={btnType}
      onClick={onClickHandler}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
