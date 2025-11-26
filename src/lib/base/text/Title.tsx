import { twMerge } from "tailwind-merge";

type IText = React.HTMLAttributes<HTMLParagraphElement>;

export const Text = ({ className, ...props }: IText) => {
  return <p {...props} className={twMerge(``)} />;
};
