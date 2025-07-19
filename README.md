# next-jump-sprint

https://eztas.github.io/next-jump-sprint/

## 各ブランチの説明
- `main`ブランチ - GitHub Actionsと`nextjs.yml`を使ったデプロイまでの機能を実装, ここからならソースコード開発のみを行えばよい, 開発が本格化すれば基本ここには何もプッシュしない(予定)

- `gh-pages`ブランチ - Next.jsの`gh-pages`ライブラリでデプロイしたものを残す(ymlバージョンと違って画像のパスは通っていないので注意)

- `develop`ブランチ - ここで開発内容を統合させ、GitHub Actionsと`nextjs.yml`を使ったデプロイも行う, 基本的に使うブランチ

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
