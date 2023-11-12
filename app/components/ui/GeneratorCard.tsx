import Image from "next/image";
import React, { useState } from "react";
import InputComponent from "./InputComponent";
import Button from "./Button";
import useThemeStore from "@/app/store/themeStore";
import { CgSpinner } from "react-icons/cg";
import { FaMagic } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";

type GeneratorCardProps = {
  cardCount: number;
  currImage: string;
  query: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleNext: () => void;
  loading: boolean;
  error: unknown;
};

const GeneratorCard: React.FC<GeneratorCardProps> = ({
  cardCount,
  currImage,
  handleSubmit,
  handleNext,
  loading,
  error,
}) => {
  const [queryText, setQueryText] = useState<string>("");
  const isDark: boolean = useThemeStore((state) => state.isDark);

  return (
    <div className="px-5 py-4 shadow-lg rounded-md w-[95%] sm:w-[75%] md:w-[65%] mx-auto">
      <div className="py-3 ">
        {currImage ? (
          <div className="h-[50vh] rounded-sm">
            <img
              src={currImage}
              className="w-full h-full object-cover rounded-sm"
              alt="generated_image"
            />
          </div>
        ) : !currImage && loading ? (
          <div
            className={`${
              isDark ? "bg-bg_for_dark_bar" : "bg-bg_for_light_bar"
            } h-[50vh] flex items-center justify-center animate-pulse rounded-sm`}
          >
            <span className="text-8xl font-bold text-gray-500">
              {cardCount}
            </span>
          </div>
        ) : !currImage && error ? (
          <div className="h-[50vh]">Error occured</div>
        ) : (
          <div
            className={`${
              isDark ? "bg-bg_for_dark_bar" : "bg-bg_for_light_bar"
            } h-[50vh] flex items-center justify-center rounded-sm`}
          >
            <span className="text-8xl font-bold text-gray-500">
              {cardCount}
            </span>
          </div>
        )}
      </div>
      <form
        className="flex flex-col items-center gap-3"
        onSubmit={handleSubmit}
      >
        <InputComponent
          customClass="bg-transparent w-full"
          inputType="text"
          placeholder={`Enter description for card ${cardCount}`}
          onChangeHandler={(e) => setQueryText(e.target.value)}
          value={queryText}
          name="query"
          id="query"
          required={true}
        />
        {!currImage && !!loading && !error ? (
          <Button
            btnType="button"
            customClass="flex items-center justify-center w-full py-1 bg-orange-500 text-white"
            title={
              <div className="flex items-center gap-2">
                <CgSpinner className="animate-spin" size={20} />
                <span>Generating</span>
              </div>
            }
            disabled
          />
        ) : !currImage && !!error && !loading ? (
          <Button
            customClass="flex items-center justify-center w-full py-1"
            btnType="button"
            title="Error occured"
            disabled
          />
        ) : currImage && !error && !loading ? (
          <Button
            btnType="button"
            customClass="flex items-center justify-center w-full py-1 bg-brand_green text-white"
            title={
              <div className="flex items-center gap-2">
                <span>Generate Next</span>
                <AiOutlineArrowRight />
              </div>
            }
            onClickHandler={() => {
              setQueryText("");
              handleNext();
            }}
          />
        ) : (
          <Button
            btnType="submit"
            customClass="flex items-center justify-center w-full py-1 bg-blue-500 text-white"
            title={
              <div className="flex items-center gap-2">
                <FaMagic />
                <span>Generate</span>
              </div>
            }
          />
        )}
      </form>
    </div>
  );
};

export default GeneratorCard;
