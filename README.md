# 開発
### 開発サーバー起動
- `/src`内の変更をその場ですぐに確認したい場合
  ```
  npm run dev
  ```
- ビルド後の状態を確認したい場合
  初回のみ
  ```
  npm install -g http-server
  ```  
  `/public`か`/src`に変更があれば
  ```
  npx next build
  ```
  でビルドした後
  ```
  http-server out
  ```

  ビルド時に`.next`配下のファイルに対して権限エラーが出た場合や、`npm run dev`で`Starting...`から進まないなどのエラーが発生した場合は以下を試して再実行
  - `npm run dev`を停止  
    `npm run dev`を使用中も`.next`ディレクトリを使用しているので両方同時にはできない
  - `.next`ディレクトリを削除

### フォーマット・ESLint
- フォーマット  
  `npm run format`
- Lint  
  `npm run lint`

フォーマットやcssの並び替えは全てセーブ時に実行されるように`.vscode`内で設定済み  
これらを使用するには拡張機能で`@recommended`と検索した時に出る拡張機能を全てインストールする必要がある

# デプロイ
## 本番環境へのデプロイ
### Github Actionsでデプロイ
[Production - Build and Upload via SFTP](https://github.com/Nitech-Festival-Executive-Committee/koudaisai/actions/workflows/production-deploy.yml)をmainに対して実行  
今後も念のためmainにマージした際に自動でデプロイはせず、必要があればテスト環境で確認してからデプロイする
### 手動でデプロイ
1. `npm run dev`を実行している場合は停止する
1. `npx next build`でビルドをすると`/out`ディレクトリに静的ファイルが生成される。
1. `/out`に生成されたファイルをデプロイする
### ステージング環境へのデプロイ
[Staging - Build and Upload via SFTP](https://github.com/Nitech-Festival-Executive-Committee/koudaisai/actions/workflows/staging-deploy.yml)をテストしたいブランチに対して実行  
手動でデプロイは本番環境と同じ  
