import { useCallback, useEffect, useState } from "react";

export default function useHeaderScroll() {
  //TODO: fix header so it is visible when scroll up
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleScroll = useCallback(() => {
    //returns the number of pixels by which the document is currently scrolled vertically
    const scroll = window.scrollY;
    // if the number is less than 80 (current header height), then header should be visible
    const shouldBeVisible = scroll <= 80;
    if (shouldBeVisible === isVisible) return;
    //set setIsVisible when the value is different to the current state value
    setIsVisible(shouldBeVisible);
  }, [isVisible]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return isVisible;
}
