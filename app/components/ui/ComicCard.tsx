import React from "react";

type ComicCardProps = {
  imageUrl: string;
};

const ComicCard: React.FC<ComicCardProps> = ({ imageUrl }) => {
  return (
    <div className="h-[50vh] md:h-[60vh] md:min-w-[50vh] rounded-sm p-2">
      <img src={imageUrl} className="h-full w-full object-cover rounded-sm" alt="comic" />
    </div>
  );
};

export default ComicCard;
