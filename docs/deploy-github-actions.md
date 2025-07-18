# Next.js + GitHub Pages + GitHub Actionsによるデプロイ方法

## 特徴

**yamlファイルの設定が少し大変だが、諸々自動化できて便利**

## deploy手順

### 1. Next.jsのプロジェクトとリモートリポジトリの作成
```
npx create-next-app@latest next-jump-sprint
```

今回の設定
![alt text](Nextjs_init.png)

そして、GitHubでリモートリポジトリ(おそらくリポジトリ名はローカルのプロジェクト名と同じでなくてもよい)を作成

### 2. next.config.tsの内容変更

```
import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV == "production"

const nextConfig: NextConfig = {
  // これが最も重要！静的サイトとして出力する設定
  output: 'export',

  // GitHub Pagesでリポジトリ名をサブディレクトリとして使う場合の設定
  // 例: https://<username>.github.io/<repository-name>
  basePath: isProd ? '/next-jump-sprint' : '',
  assetPrefix: isProd ? '/next-jump-sprint/' : '',

  // 画像最適化を無効にする（静的エクスポートでは必須）
  images: {
    unoptimized: true,
  },
};

// export default nextConfig; // .mjsだとこっちがいいらしい
module.exports = nextConfig; // .jsだとこっちがいいらしいので, .tsでもこれを使う

```

### 3. GitHub Actionsを選択
![alt text](gitHub-actions-button.png)

![alt text](gitHub-actions-next-js.png)

![alt text](setting-pages-github-actions.png)

### 4. nextjs.ymlの修正

必要かと思ったが、nodeのバージョンが20で同じ

next exportに関する項目がなくて消さなくていい

### 5. デプロイ

ymlファイルができた時点で、デプロイ

これ以降`main`ブランチにプッシュされるだけで自動デプロイ

![alt text](deploy_result.png)

ただ、このデプロイでも結局画像のパスは通らないらしい

## パス通らない日記

next/imageのインポートをなくすと、
`img`タグでsvgが表示できるようになった

`img`タグを使っていたときもあったが、next/imageのインポートをしている時は表示されていなかったので、`img`タグを使うだけでなく、next/imageに関する項目の削除が必要

ただ直接`/next-jump-sprint/vercel.svg`と直接書いたものは表示できたが、`next.config.ts`の`basePath`ではパスが通らない

![alt text](only-img-direct-path.png)

`next.config.ts`を`next.config.js`にしたら画像のパス全てが通った

確かGitHub Pagesもtsxなどを全てHTML, CSS, JSに変化してのことだったはずなので、config周りをtsにすると上手くいかないのかも(configは変換できない？)

## 参考文献

https://qiita.com/unreadabread/items/920420c24fc49cb3b392