import type { NextConfig } from "next";

const repoName = 'next-jump-sprint'; // 自身のGitHubリポジトリ名に変更してください

const nextConfig: NextConfig = {
  // これが最も重要！静的サイトとして出力する設定
  output: 'export',
    // 本番環境のみリポジトリ名をパスのプレフィックスとして設定
  basePath: process.env.NODE_ENV === 'production' ? `/${repoName}` : '',

  // GitHub Pagesでは画像最適化が機能しないため無効にする
  images: {
    unoptimized: true,
  },
};

// export default nextConfig;
module.exports = nextConfig;
