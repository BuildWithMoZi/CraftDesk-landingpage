import Image from "next/image";
import { cn } from "@/lib/utils";

type CoverImageProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  overlayClassName?: string;
  priority?: boolean;
  sizes?: string;
};

export function CoverImage({
  src,
  alt,
  className,
  imageClassName,
  overlayClassName,
  priority = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: CoverImageProps) {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn(
          "object-cover transition-transform duration-500 group-hover:scale-105",
          imageClassName,
        )}
      />
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/15",
          overlayClassName,
        )}
      />
    </div>
  );
}
