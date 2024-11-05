import { InputHTMLAttributes } from "react";

const Input = ({ ...rest }: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="flex flex-col mb-4 shadow-md">
      <input {...rest} className="border p-2 rounded-md  focus:border-indigo-600 focus:outline-none focus:ring-1 focus:ring-indigo-600" />
    </div>
  );
};

export default Input;
