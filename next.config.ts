import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/TrainerTwin_home_v1",
        destination: "/TrainerTwin_home",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
