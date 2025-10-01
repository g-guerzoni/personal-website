import React from "react";

interface ISectionProps {
  children: React.ReactNode;
  rootClassName?: string;
  childrenClassName?: string;
  title: string;
}

const Section: React.FC<ISectionProps> = ({ children, rootClassName, childrenClassName, title }) => {
  return (
    <section className={`${rootClassName} flex flex-col gap-4`} aria-label={title}>
      <header className="flex items-center justify-between gap-4">
        <h2 className="text-text whitespace-nowrap text-xl font-bold">{title}</h2>
        <div className="bg-secondary h-1 w-full mt-1" role="presentation" aria-hidden="true"></div>
      </header>
      <div className={childrenClassName}>{children}</div>
    </section>
  );
};

export default Section;
