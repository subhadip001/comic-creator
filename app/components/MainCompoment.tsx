"use client";

import Image from "next/image";
import useThemeStore from "../store/themeStore";
import React, { useEffect, useRef, useState } from "react";
import useGenerateComicImage from "../lib/fetchImage";
import GeneratorCard from "./ui/GeneratorCard";
import useImageStore from "../store/imageStore";
import ComicStrip from "./ui/ComicStrip";

/**
 * @module MainCompoment
 * @description This is the main component of the app with conditional rendering of GeneratorCard and ComicStrip
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
  const [page, setPage] = useState<number>(
    JSON.parse(localStorage.getItem("page")!) || 1
  );
  const [cardCount, setCardCount] = useState<number>(1);

  // fetching image url from api

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
    if (cardCount <= 10) {
      setCardCount((prev) => prev + 1);
      if (currImage) setNewImageUrl(currImage);
      setCurrImage("");
      setQuery("");
    }
    if (cardCount >= 10) {
      setPage(2);
      localStorage.setItem("page", JSON.stringify(2));
    }
  };

  const handleCreateNew = () => {
    setPage(1);
    localStorage.setItem("page", JSON.stringify(1));
    setCardCount(1);
    clearImageUrls();
  };

  return (
    <main
      className={` ${
        isDark
          ? "bg-bg_for_dark text-text_for_dark"
          : "bg-bg_for_light text-text_for_light"
      } }`}
    >
      <section className="min-h-[92vh] w-[95%] mx-auto py-5">
        {page === 1 ? (
          <div className="flex flex-col gap-3">
            <span className="text-center">
              Create your own comic using AI of 10 slides by entering query
            </span>
            <GeneratorCard
              cardCount={cardCount}
              currImage={currImage}
              query={query}
              handleSubmit={handleSubmit}
              handleNext={handleNext}
              loading={loading}
              error={error}
            />
          </div>
        ) : page === 2 ? (
          <div>
            <ComicStrip
              page={page}
              setPage={setPage}
              handleCreateNew={handleCreateNew}
            />
          </div>
        ) : null}
      </section>
    </main>
  );
};

export default MainCompoment;
