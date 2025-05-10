import { useEffect, useState } from "react";

export const useIsLargeScreen = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleChange = (e) => setIsLargeScreen(e.matches);

    // Set initial value
    setIsLargeScreen(mediaQuery.matches);

    // Listen for screen size changes
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return isLargeScreen;
};
