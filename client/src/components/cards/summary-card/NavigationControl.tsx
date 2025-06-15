import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type NavigationControlProps = {
  currentSection: number;
  totalSection: number;
  onPrevious: () => void;
  onNext: () => void;
  onSectionSelect: (i: number) => void;
};

export default function NavigationControl({
  currentSection,
  totalSection,
  onPrevious,
  onNext,
  onSectionSelect,
}: NavigationControlProps) {
  return (
    <div className="bg-background/80 absolute right-0 bottom-0 left-0 border-t border-main-500/10 p-4 backdrop-blur-xs">
      <div className="flex items-center justify-between">
        <Button
          variant={"ghost"}
          size={"icon"}
          onClick={onPrevious}
          disabled={currentSection === 0}
          className={cn(
            "h-12 w-12 rounded-full border border-main-500/10 bg-linear-to-br from-main-500 to-main-600 backdrop-blur-xs transition-all duration-200",
            currentSection === 0 ? "opacity-50" : "hover:bg-main-500/20"
          )}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <div className="flex gap-2">
          {Array.from({ length: totalSection }).map((_, index) => (
            <button
              key={index}
              onClick={() => onSectionSelect(index)}
              className={cn(
                "h-2 w-2 rounded-full transition-all duration-300",
                currentSection === index
                  ? "bg-linear-to-r from-main-500 to-main-600"
                  : "bg-main-500/20 hover:bg-main-500/30"
              )}
            />
          ))}
        </div>

        <Button
          variant={"ghost"}
          size={"icon"}
          onClick={onNext}
          disabled={currentSection === totalSection - 1}
          className={cn(
            "h-12 w-12 rounded-full border border-main-500/10 bg-linear-to-br from-main-500 to-main-600 backdrop-blur-xs transition-all duration-200",
            currentSection === totalSection - 1
              ? "opacity-50"
              : "hover:bg-main-500/20"
          )}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}
