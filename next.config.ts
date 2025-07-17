import type { NextConfig } from "next";

const repoName = 'next-jump-sprint'; // 自身のGitHubリポジトリ名に変更してください

/* 本番環境と開発環境の分岐用のフラグ */
const isProd = process.env.NODE_ENV == "production"

const nextConfig: NextConfig = {
  // これが最も重要！静的サイトとして出力する設定
  output: 'export',
  // 本番環境のみリポジトリ名をパスのプレフィックスとして設定
  basePath: isProd ? repoName : "",
  assetPrefix: isProd ? repoName : "",
  publicRuntimeConfig: {
    basePath: isProd ? repoName : "",
  },
};

// export default nextConfig;
module.exports = nextConfig;
