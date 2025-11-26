declare namespace GlobalTypes {
  type ZodSchema<T> = Partial<Record<keyof T, any>>;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.gif";
declare module "*.ttf";
declare module "*.woff";
declare module "*.woff2";
