import { twMerge } from "tailwind-merge";

export type IButton = React.HTMLAttributes<HTMLButtonElement> & {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

export const Button = ({ className = "", ...props }: IButton) => {
  return (
    <button
      {...props}
      disabled={props.disabled}
      data-disabled={props.disabled}
      className={twMerge(
        `flex items-center gap-1 text-sm px-4 py-1.5 min-w-fit 
         rounded-md shadow-sm text-text4 bg-white hover:bg-opacity-70
         transition first-letter:uppercase select-none
         data-[disabled=true]:bg-default-gray`,
        className
      )}
    />
  );
};

export const ButtonBlue = ({ className = "", ...props }: IButton) => {
  return (
    <Button {...props} className={`bg-default-blue text-white ${className}`} />
  );
};

export const ButtonGreen = ({ className = "", ...props }: IButton) => {
  return (
    <Button {...props} className={`bg-default-green text-white ${className}`} />
  );
};

export const ButtonRed = ({ className = "", ...props }: IButton) => {
  return (
    <Button {...props} className={`bg-default-red text-white ${className}`} />
  );
};

export const ButtonYellow = ({ className = "", ...props }: IButton) => {
  return (
    <Button
      {...props}
      className={`bg-default-yellow text-white ${className}`}
    />
  );
};
