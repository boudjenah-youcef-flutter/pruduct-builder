import { ReactNode , ButtonHTMLAttributes } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode; // Corrected from 'childern' to 'children'
  className: string;
}

const Buttune = ({ children, className , ...rest }: IProps) => { // Corrected from 'childern' to 'children'
  return (
    <button className={`${className} border rounded-md  text-white w-full py-2`} {...rest}>{children}</button>
  );
};

export default Buttune;
