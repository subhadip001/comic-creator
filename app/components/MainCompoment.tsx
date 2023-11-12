"use client";

import Image from "next/image";
import useThemeStore from "../store/themeStore";
import React, { useEffect, useState } from "react";
import useGenerateComicImage from "../lib/fetchImage";
import GeneratorCard from "./ui/GeneratorCard";

/**
 * @packageDocumentation
 * @module MainCompoment
 * @description This is the main component of the app
 * @component
 * @returns {JSX.Element} JSX.Element
 */

const MainCompoment: React.FC = (): JSX.Element => {
  const isDark: boolean = useThemeStore((state) => state.isDark);
  const [query, setQuery] = useState<string>("");
  const [currImage, setCurrImage] = useState<string>("");
  const { url, loading, error } = useGenerateComicImage(query);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.target as HTMLFormElement);
    const formData = Object.fromEntries(data.entries());
    console.log(formData);
    setQuery(formData["query"].toString() as string);
  };

  useEffect(() => {
    if (url) {
      setCurrImage(url);
    }
  }, [url]);

  return (
    <main
      className={` ${
        isDark
          ? "bg-bg_for_dark text-text_for_dark"
          : "bg-bg_for_light text-text_for_light"
      } }`}
    >
      <section className="h-[92vh] w-[95%] mx-auto">
        <div>
          <GeneratorCard
            currImage={currImage}
            handleSubmit={handleSubmit}
            loading={loading}
            error={error}
          />
        </div>
      </section>
    </main>
  );
};

export default MainCompoment;
