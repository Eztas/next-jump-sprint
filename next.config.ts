import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // これが最も重要！静的サイトとして出力する設定
  output: 'export',
};

// export default nextConfig;
module.exports = nextConfig;
