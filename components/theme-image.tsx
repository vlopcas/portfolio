import Image from "next/image";

type Props = { darkSrc: string; lightSrc: string; alt: string; width: number; height: number; className?: string; priority?: boolean };

export function ThemeImage({ darkSrc, lightSrc, alt, width, height, className = "", priority = false }: Props) {
  return <span className={`theme-image ${className}`} role={alt ? "img" : undefined} aria-label={alt || undefined} aria-hidden={alt ? undefined : true}>
    <Image className="theme-image-dark" src={darkSrc} alt="" width={width} height={height} priority={priority}/>
    <Image className="theme-image-light" src={lightSrc} alt="" width={width} height={height} priority={priority}/>
  </span>;
}
