import Image from "next/image";

type Props = {
  darkSrc: string;
  lightSrc: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
};

export function ThemeImage({ darkSrc, lightSrc, alt, width, height, className = "", imageClassName = "", sizes, priority = false }: Props) {
  return <span className={`theme-image ${className}`} role={alt ? "img" : undefined} aria-label={alt || undefined} aria-hidden={alt ? undefined : true}>
    <Image className={`theme-image-dark ${imageClassName}`} src={darkSrc} alt="" width={width} height={height} sizes={sizes} priority={priority}/>
    <Image className={`theme-image-light ${imageClassName}`} src={lightSrc} alt="" width={width} height={height} sizes={sizes} priority={priority}/>
  </span>;
}
