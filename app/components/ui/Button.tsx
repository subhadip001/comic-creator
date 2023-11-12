"use client";

import React from "react";

type ButtonProps = {
  title: string;
  customClass?: string;
  btnType: "button" | "submit" | "reset" | undefined;
  onClickHandler: () => void;
};

const Button: React.FC<ButtonProps> = ({ title, customClass, btnType, onClickHandler }) => {
  return (
    <button className={`${customClass} outline-none`} type={btnType} onClick={onClickHandler}>
      {title}
    </button>
  );
};

export default Button;
