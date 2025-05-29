// app/components/ScrollToTop.tsx
"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

interface ScrollToTopProps {
  behavior?: ScrollBehavior;
  disabledPaths?: string[];
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({
  behavior = "instant",
  disabledPaths = [],
}) => {
  const pathname = usePathname();
  const previousPath = useRef(pathname);

  useEffect(() => {
    const pathChanged = pathname !== previousPath.current;
    const isNotDisabled = !disabledPaths.includes(pathname);

    if (pathChanged && isNotDisabled) {
      window.scrollTo({ top: 0, behavior });
    }

    previousPath.current = pathname;
  }, [pathname, behavior, disabledPaths]);

  return null;
};

export default ScrollToTop;
