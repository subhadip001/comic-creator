"use client";

import Image from "next/image";
import useThemeStore from "../store/themeStore";
import React, { useEffect, useRef, useState } from "react";
import useGenerateComicImage from "../lib/fetchImage";
import GeneratorCard from "./ui/GeneratorCard";
import useImageStore from "../store/imageStore";
import ComicStrip from "./ui/ComicStrip";

/**
 * @packageDocumentation
 * @module MainCompoment
 * @description This is the main component of the app
 * @component
 * @returns {JSX.Element} JSX.Element
 */

const MainCompoment: React.FC = (): JSX.Element => {
  const isDark: boolean = useThemeStore((state) => state.isDark);
  const imageUrls: string[] = useImageStore((state) => state.imageUrls);
  const setNewImageUrl: (newImageUrl: string) => void = useImageStore(
    (state) => state.setNewImageUrl
  );
  const clearImageUrls: () => void = useImageStore(
    (state) => state.clearImageUrls
  );
  const [query, setQuery] = useState<string>("");
  const [currImage, setCurrImage] = useState<string>("");
  const pageRef = useRef<number>(1);
  const cardCountRef = useRef<number>(1);

  const { url, loading, error } = useGenerateComicImage(query);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setQuery(e.currentTarget.query.value);
  };

  useEffect(() => {
    if (url) {
      setCurrImage(url);
    }
  }, [url]);

  const handleNext = () => {
    if (cardCountRef.current <= 10) {
      cardCountRef.current += 1;
      setNewImageUrl(currImage);
      setCurrImage("");
      setQuery("");
    } else if (cardCountRef.current > 10) {
      pageRef.current = 2;
    }
  };

  return (
    <main
      className={` ${
        isDark
          ? "bg-bg_for_dark text-text_for_dark"
          : "bg-bg_for_light text-text_for_light"
      } }`}
    >
      <section className="h-[92vh] w-[95%] mx-auto">
        {pageRef.current === 1 ? (
          <div className="flex overflow-x-auto">
            <GeneratorCard
              cardCountRef={cardCountRef}
              currImage={currImage}
              query={query}
              handleSubmit={handleSubmit}
              handleNext={handleNext}
              loading={loading}
              error={error}
            />
          </div>
        ) : pageRef.current === 2 ? (
          <div>
            <ComicStrip />
          </div>
        ) : null}
      </section>
    </main>
  );
};

export default MainCompoment;
