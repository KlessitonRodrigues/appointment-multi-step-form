import { twMerge } from "tailwind-merge";
import Image, { StaticImageData } from "next/image";

type IImageBox = React.HTMLAttributes<HTMLDivElement> & {
  src: StaticImageData;
};

export const ImageBox = ({ className, ...props }: IImageBox) => {
  return (
    <div {...props} className={twMerge(`rounded-lg ${className}`)}>
      <Image src={props.src} alt="" />
    </div>
  );
};

export const RoundedImageBox = ({ className, ...props }: IImageBox) => {
  return <ImageBox {...props} className={`rounded-full ${className}`} />;
};
