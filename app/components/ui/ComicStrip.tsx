import React from "react";
import ComicCard from "./ComicCard";
import useImageStore from "@/app/store/imageStore";
import Button from "./Button";

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
  const clearImageUrls: () => void = useImageStore(
    (state) => state.clearImageUrls
  );
  return (
    <div>
      <div className="flex">
        <Button
          title="Create New"
          onClickHandler={handleCreateNew}
          btnType="button"
        />
        <h1>Comic Strip</h1>
      </div>
      {imageUrls.map((imageUrl, index) => {
        return (
          <React.Fragment key={index}>
            <ComicCard imageUrl={imageUrl} />
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default ComicStrip;
