"use client";

import React, { useState } from "react";

import Image from "next/image";

import { normalizeString } from "@/utils/string";

interface TechIconProps {
  technology: string;
}

// Some brands are not part of the Simple Icons set (e.g. OpenAI), so we serve a
// local asset for them instead of the simpleicons.org CDN.
const LOCAL_ICON_OVERRIDES: Record<string, string> = {
  openai: "/assets/icons/openai.svg",
};

// Shown when a slug has no matching Simple Icons logo, so the layout never
// breaks with a missing-image placeholder.
const FALLBACK_ICON = "/assets/icons/code.svg";

const resolveIconSrc = (technology: string): string => {
  const slug = normalizeString(technology);
  return LOCAL_ICON_OVERRIDES[slug] ?? `https://simpleicons.org/icons/${slug}.svg`;
};

const TechIcon: React.FC<TechIconProps> = ({ technology }) => {
  const [src, setSrc] = useState(() => resolveIconSrc(technology));

  return (
    <Image
      className="h-7 w-7 brightness-0 invert"
      src={src}
      alt={`${technology} logo`}
      width={28}
      height={28}
      onError={() => {
        if (src !== FALLBACK_ICON) {
          setSrc(FALLBACK_ICON);
        }
      }}
    />
  );
};

export default TechIcon;
