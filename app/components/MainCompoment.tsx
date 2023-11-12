"use client";

import Image from "next/image";
import useThemeStore from "../store/themeStore";
import React, { useEffect, useState } from "react";
import useGenerateComicImage from "../lib/fetchImage";

const MainCompoment: React.FC = () => {
  const isDark: boolean = useThemeStore((state) => state.isDark);
  const [query, setQuery] = useState<string>("");
  const [image, setImage] = useState<string>("");
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
      setImage(url);
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
          <form onSubmit={handleSubmit}>
            <input
              className="bg-transparent"
              type="text"
              name="query"
              id="query"
              placeholder="Enter query"
            />{" "}
            <button type="submit">Submit</button>
          </form>
          {image && (
            <div>
              <Image src={image} width={500} height={500} alt="uu" />
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default MainCompoment;
