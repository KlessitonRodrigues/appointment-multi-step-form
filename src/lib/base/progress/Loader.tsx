import { twMerge } from "tailwind-merge";

type ILoader = React.HTMLAttributes<HTMLDivElement>;

export const LoaderBg = ({ className, ...props }: ILoader) => {
  return (
    <div
      {...props}
      className={twMerge(
        `loader-bg fixed top-0 left-0 w-full h-full bg-opacity-black
         flex items-center justify-center z-50`
      )}
    />
  );
};

export const LoaderSpinner = ({ className, ...props }: ILoader) => {
  return (
    <div
      {...props}
      className={twMerge(
        `loader-spinner w-10 aspect-square border-solid border-[8px] border-transparent
         border-t-main border-b-main rounded-full`
      )}
    />
  );
};
