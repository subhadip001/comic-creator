import Image from "next/image";
import React from "react";

type GeneratorCardProps = {
  currImage: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  loading: boolean;
  error: unknown;
};

const GeneratorCard: React.FC<GeneratorCardProps> = ({
  currImage,
  handleSubmit,
  loading,
  error,
}) => {
  return (
    <div>
      {currImage ? (
        <div>
          <Image src={currImage} width={500} height={500} alt="uu" />
        </div>
      ) : !currImage && loading ? (
        <div>loading...</div>
      ) : !currImage && error ? (
        <div>Enter query</div>
      ) : (
        <div>Preview will be shown here</div>
      )}
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
    </div>
  );
};

export default GeneratorCard;
