import { useCallback, useEffect, useState } from "react";

export default function useHeaderScroll() {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [prevScrollY, setPrevScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    //returns the number of pixels by which the document is currently scrolled vertically
    const scrollY = window.scrollY;
    const scrollingUp = scrollY < prevScrollY;

    // If scrollingUp is true and the header is currently hidden, we set isVisible to true, making the header appear.
    if (scrollingUp && !isVisible) {
      setIsVisible(true);
    } else if (!scrollingUp && scrollY > 80 && isVisible) {
      // If the user is scrolling down and the scroll position is greater than 80px and the header is currently visible, we set isVisible to false, hiding the header.
      setIsVisible(false);
    }

    //update prevScrollY with the current scroll position
    setPrevScrollY(scrollY);
  }, [isVisible, prevScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return isVisible;
}
