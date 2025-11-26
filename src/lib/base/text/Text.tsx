import { twMerge } from "tailwind-merge";

type ITitle = React.HTMLAttributes<HTMLHeadingElement>;

export const Title = ({ className, ...props }: ITitle) => {
  return <h1 {...props} className={twMerge(``)} />;
};
