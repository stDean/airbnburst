import { FC } from "react";
import Image from "next/image";

interface AvatarProps {
  src?: string | null | undefined;
}

const Avatar: FC<AvatarProps> = ({ src }: AvatarProps) => {
  return (
    <Image
      className="rounded-full"
      height="30"
      width="30"
      alt="Avatar"
      src={src || "/images/placeholder.jpg"}
    />
  );
};

export default Avatar;
