import { twMerge } from "tailwind-merge";

type IForm = React.HTMLAttributes<HTMLFormElement>;

export const Form = ({ className, ...props }: IForm) => {
  return (
    <form
      {...props}
      className={twMerge(
        `w-full flex flex-col gap-3 max-w-2xl m-auto ${className}`
      )}
    />
  );
};
