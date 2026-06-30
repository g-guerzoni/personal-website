import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
  },
  images: {
    // The technology and social icons are SVGs, which next/image refuses to
    // optimize unless explicitly allowed. The CSP below keeps it safe by
    // disabling scripts and sandboxing the rendered SVG.
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "simpleicons.org",
        pathname: "/icons/**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
