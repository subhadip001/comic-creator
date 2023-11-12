import React from "react";
import ComicCard from "./ComicCard";
import useImageStore from "@/app/store/imageStore";

const ComicStrip = () => {
  const imageUrls: string[] = useImageStore((state) => state.imageUrls);
  return (
    <div>
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
