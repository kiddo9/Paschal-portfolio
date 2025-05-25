import React, { useEffect, useState } from "react";

const FadeUp = ({
  children,
  delay = 100,
  duration = 1000,
  distance = 8,
}: any) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all duration-${duration} ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : `opacity-0 translate-y-${distance}`
      }`}
    >
      {children}
    </div>
  );
};

export default FadeUp;
