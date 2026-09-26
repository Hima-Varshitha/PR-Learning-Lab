import { useEffect, useRef, useState } from "react";
import "./ScrollReveal.css";

function ScrollReveal({
  children,
  delay = 0,
  distance = 55,
}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={
        isVisible
          ? "scroll-reveal scroll-reveal--visible"
          : "scroll-reveal"
      }
      style={{
        "--reveal-delay": `${delay}ms`,
        "--reveal-distance": `${distance}px`,
      }}
    >
      {children}
    </div>
  );
}

export default ScrollReveal;