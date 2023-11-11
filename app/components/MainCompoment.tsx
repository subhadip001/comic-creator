"use client";

import Image from "next/image";
import useThemeStore from "../store/themeStore";
import React from "react";

const MainCompoment: React.FC = () => {
  const isDark : boolean = useThemeStore((state) => state.isDark);

  return (
    <main
      className={`h-[92vh] ${
        isDark
          ? "bg-bg_for_dark text-text_for_dark"
          : "bg-bg_for_light text-text_for_light"
      } }`}
    >
      Home
    </main>
  );
};

export default MainCompoment;
