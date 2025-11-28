import { twMerge } from "tailwind-merge";
import Image, { StaticImageData } from "next/image";

type IImageBox = React.HTMLAttributes<HTMLDivElement> & {
  src: string;
};

export const ImageBox = ({ className, ...props }: IImageBox) => {
  return (
    <div {...props} className={twMerge(`rounded-lg w-full ${className}`)}>
      <Image
        src={props.src}
        width={256}
        height={256}
        alt=""
        className="w-full"
      />
    </div>
  );
};

export const RoundedImageBox = ({ className, ...props }: IImageBox) => {
  return <ImageBox {...props} className={`rounded-full ${className}`} />;
};
