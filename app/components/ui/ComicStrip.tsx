import React from "react";
import ComicCard from "./ComicCard";
import useImageStore from "@/app/store/imageStore";
import Button from "./Button";
import { IoMdAdd } from "react-icons/io";
import useThemeStore from "@/app/store/themeStore";

type ComicStripProps = {
  page: number;
  setPage: (page: number) => void;
  handleCreateNew: () => void;
};

const ComicStrip: React.FC<ComicStripProps> = ({
  page,
  setPage,
  handleCreateNew,
}) => {
  const imageUrls: string[] = useImageStore((state) => state.imageUrls);
  const isDark: boolean = useThemeStore((state) => state.isDark);
  const clearImageUrls: () => void = useImageStore(
    (state) => state.clearImageUrls
  );
  return (
    <div>
      <div className="flex flex-col gap-2 items-center mb-3 md:mb-5">
        <span className="text-3xl md:text-5xl text-gray-400 font-bold">
          Your Created Comic is Here
        </span>
        <div
          className={`py-5 flex items-center justify-end ${
            isDark ? "bg-bg_for_dark" : "bg-bg_for_light"
          }`}
        >
          <Button
            title={
              <div className="flex items-center gap-2 text-white">
                <IoMdAdd />
                <span>Create A New Comic</span>
              </div>
            }
            onClickHandler={handleCreateNew}
            btnType="button"
            customClass="bg-brand_green text-white py-1 px-2 rounded-md"
          />
        </div>
        <span>
          Tip - Right click or Press and Hold on an image to add speech
          bubble/annotation to it at that position
        </span>
      </div>
      <div className="bg-gray-300 flex flex-col h-[65vh] w-full overflow-y-auto md:overflow-x-auto">
        <div className="flex flex-col gap-3 md:flex-row w-full">
          {imageUrls.length > 0 &&
            imageUrls.map((imageUrl, index) => {
              return (
                <React.Fragment key={index}>
                  <ComicCard imageUrl={imageUrl} />
                </React.Fragment>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ComicStrip;
