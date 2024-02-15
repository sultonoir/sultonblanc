import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import useSelectSection from "./useSelectSection";

export function useSectionInView(sectionName: string, threshold = 0.75) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setActiveSection, lastTime } = useSelectSection();

  useEffect(() => {
    if (inView && Date.now() - lastTime > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, lastTime, sectionName, setActiveSection]);

  return {
    ref,
  };
}
