# 開発
### 開発サーバー起動
- `/src`内の変更を確認する時<br>
  `npm run dev`
- `/out`内の変更を確認する時<br>
  (初回のみ) `npm install -g http-server`<br>
  `/public`か`/src`に変更があれば`npx next build`
  `http-server out`

### フォーマット・ESLint
- フォーマット <br>
  `npm run format`
- Lint<br>
  `npm run lint`


# デプロイ
1. `npm run dev`を実行している場合は停止する
1. `npx next build`でビルドをすると`/out`ディレクトリに静的ファイルが生成される。
1. `/out`に生成されたファイルをデプロイする
