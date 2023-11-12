import React from "react";

type InputComponentProps = {
  placeholder: string;
  customClass?: string;
  inputType:
    | "text"
    | "password"
    | "email"
    | "number"
    | "tel"
    | "url"
    | undefined;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name?: string;
  id?: string;
  required?: boolean;
};

const InputComponent: React.FC<InputComponentProps> = ({
  placeholder,
  customClass,
  inputType,
  onChangeHandler,
  value,
  name,
  id,
  required,
}) => {
  return (
    <React.Fragment>
      <input
        className={`${customClass} px-3 py-1 outline-none border-2 border-gray-300 rounded-sm focus:border-blue-500 transition-all duration-300 ease-in-out`}
        type={inputType}
        placeholder={placeholder}
        onChange={onChangeHandler}
        value={value}
        name={name}
        id={id}
        required={required}
      />
    </React.Fragment>
  );
};

export default InputComponent;
