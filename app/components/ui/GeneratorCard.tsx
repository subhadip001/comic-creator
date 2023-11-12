import Image from "next/image";
import React, { useState } from "react";
import InputComponent from "./InputComponent";
import Button from "./Button";

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
        <InputComponent
          customClass="bg-transparent"
          inputType="text"
          placeholder="Enter query"
          onChangeHandler={(e) => setQueryText(e.target.value)}
          value={queryText}
          name="query"
          id="query"
        />
        <Button btnType="submit" title="Generate" />
        <Button
          btnType="button"
          title="Next"
          onClickHandler={() => {
            setQueryText("");
            handleNext();
          }}
        />
      </form>
    </div>
  );
};

export default GeneratorCard;
