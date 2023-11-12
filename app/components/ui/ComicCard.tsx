import React from "react";

type ComicCardProps = {
  imageUrl: string;
};

const ComicCard: React.FC<ComicCardProps> = ({ imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} alt="comic" />
    </div>
  );
};

export default ComicCard;
