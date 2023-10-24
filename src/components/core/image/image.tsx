import { ComponentPropsWithoutRef } from "react";

type ImageElementProps = ComponentPropsWithoutRef<"img">;

interface ImageOwnProps {
  src: string;
  alt?: string;
}

export type ImageProps = ImageOwnProps &
  Omit<ImageElementProps, keyof ImageOwnProps>;

export const Image = ({ src, alt, width, height }: ImageProps) => {
  return <img src={src} alt={alt} width={width} height={height} />;
};
