import Image from "next/image";
import React, { useState } from "react";

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
  query,
  handleSubmit,
  handleNext,
  loading,
  error,
}) => {
  const [queryText, setQueryText] = useState<string>("");

  return (
    <div>
      {currImage ? (
        <div>
          <Image src={currImage} width={500} height={500} alt="uu" />
        </div>
      ) : !currImage && loading ? (
        <div>loading...</div>
      ) : !currImage && error ? (
        <div>Error occured</div>
      ) : (
        <div>Preview will be shown here {cardCount}</div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          className="bg-transparent"
          type="text"
          name="query"
          id="query"
          placeholder="Enter query"
          onChange={(e) => setQueryText(e.target.value)}
          value={queryText}
        />{" "}
        <button type="submit">Generate</button>
        <button
          onClick={() => {
            setQueryText("");
            handleNext();
          }}
          type="button"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default GeneratorCard;
