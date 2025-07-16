import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // これが最も重要！静的サイトとして出力する設定
  output: 'export',

  // GitHub Pagesでリポジトリ名をサブディレクトリとして使う場合の設定
  // 例: https://<username>.github.io/<repository-name>
  basePath: '/next-jump-sprint',
  assetPrefix: '/next-jump-sprint/',

  // 画像最適化を無効にする（静的エクスポートでは必須）
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
