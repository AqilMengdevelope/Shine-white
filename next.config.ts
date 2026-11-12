import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  // Keep every old Wix URL working so existing Google rankings and shared links carry over.
  async redirects() {
    const moved: [string, string][] = [
      ["/cleaning-service-cyberjaya", "/cleaning-service"],
      ["/copy-of-house-cleaning-service-cyberjaya", "/cleaning-service/cyberjaya"],
      ["/cleaningservicecyberjaya", "/cleaning-service/cyberjaya/house-cleaning"],
      ["/officecleaningcyberjaya", "/cleaning-service/cyberjaya/office-cleaning"],
      ["/deepcleaningcyberjaya", "/cleaning-service/cyberjaya/deep-cleaning"],
      ["/move-inmove-outcleaningcyberjaya", "/cleaning-service/cyberjaya/move-in-move-out-cleaning"],
      ["/curtaincleaningcyberjaya", "/cleaning-service/cyberjaya/curtain-cleaning"],
      ["/putrajaya", "/cleaning-service/putrajaya"],
      ["/house-cleaning-service-putrajaya", "/cleaning-service/putrajaya/house-cleaning"],
    ];
    return moved.map(([source, destination]) => ({ source, destination, permanent: true }));
  },
};

export default nextConfig;
