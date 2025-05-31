"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type AvatarProps = {
  className?: string;
  href?: string;
  src?: string;
  size?: number; // optional prop for control
};

export function Avatar({
  className,
  href,
  src = "/image.png",
  size = 40,
}: AvatarProps) {
  const avatarImage = (
    <Image
      alt="User Avatar"
      height={size}
      width={size}
      src={src}
      className="rounded-full object-cover transition-transform hover:scale-105 duration-200"
    />
  );

  const content = (
    <div className={cn("flex items-center gap-2  overflow-hidden", className)}>
      {href ? (
        <Link href={href} className="inline-block">
          {avatarImage}
        </Link>
      ) : (
        avatarImage
      )}
    </div>
  );

  return content;
}
