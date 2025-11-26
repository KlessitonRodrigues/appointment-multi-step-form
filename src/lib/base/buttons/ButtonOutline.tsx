import { twMerge } from "tailwind-merge";

type IButton = React.HTMLAttributes<HTMLButtonElement>;

export const ButtonOutline = ({ className = "", ...props }: IButton) => {
  return (
    <button
      {...props}
      className={twMerge(
        `flex gap-1 items-center px-3 py-1.5 w-fit rounded-md border
         text-text4 bg-transparent hover:bg-bg2 transition-opacity 
         first-letter:uppercase ${className}`
      )}
    />
  );
};

export const ButtonNoOutline = ({ className = "", ...props }: IButton) => {
  return <ButtonOutline {...props} className={`border-none ${className}`} />;
};

export const ButtonOutlineBlue = ({ className = "", ...props }: IButton) => {
  return (
    <ButtonOutline {...props} className={`border-default-blue ${className}`} />
  );
};
