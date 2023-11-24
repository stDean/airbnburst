"use client";

import { useRouter } from "next/navigation";
import { FC } from "react";
import { Button, Heading } from "./ui";

interface EmptyStateProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}

const EmptyState: FC<EmptyStateProps> = ({
  title = "No exact matches",
  subtitle = "Try changing or removing some of your filters.",
  showReset,
}) => {
  const router = useRouter();

  return (
    <div className="flex flex-col gap-2 justify-center items-center h-[60vh]">
      <Heading center title={title} subtitle={subtitle} />

      <div className="w-48 mt-4">
        {showReset && (
          <Button
            outline
            label="Remove all filters"
            onClick={() => router.push("/")}
          />
        )}
      </div>
    </div>
  );
};

export default EmptyState;
