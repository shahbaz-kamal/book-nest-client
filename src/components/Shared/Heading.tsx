import React, { useEffect, useRef } from "react";

import { useGSAP } from "@gsap/react";

interface HeadingProps {
  title: string;
  subtitle?: string;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  useGSAP(() => {}, []);

  return (
    <div className="text-center my-6">
      <h2 className="text-3xl md:text-5xl font-bold text-light-primary dark:text-dark-primary">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-lg md:text-xl text-light-text dark:text-dark-text">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Heading;
