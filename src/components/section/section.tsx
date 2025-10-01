import React from "react";

interface ISectionProps {
  children: React.ReactNode;
  rootClassName?: string;
  childrenClassName?: string;
  title: string;
}

const Section: React.FC<ISectionProps> = ({ children, rootClassName, childrenClassName, title }) => {
  return (
    <section className={`${rootClassName || ""} flex flex-col gap-4`} aria-label={title}>
      <header className="flex items-center justify-between gap-4">
        <h2 className="text-text text-xl font-bold whitespace-nowrap">{title}</h2>
        <div className="bg-secondary mt-1 h-1 w-full" role="presentation" aria-hidden="true" />
      </header>
      <div className={childrenClassName || ""}>{children}</div>
    </section>
  );
};

export default Section;
