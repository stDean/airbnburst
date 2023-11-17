import { ReactNode, FC, HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({
  children,
  ...restProps
}: ContainerProps) => {
  return (
    <div
      className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4"
      {...restProps}
    >
      {children}
    </div>
  );
};

export default Container;
