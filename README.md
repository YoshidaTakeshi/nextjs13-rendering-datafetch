# Next.js 13 レンダリング、データフェッチについてのパフォーマンス検証
[元記事](https://zenn.dev/articles/e9234890d0c6d3/edit)

## コマンド実行

```bash
npm run dev
# or
yarn dev
```

## サーバーコンポーネント、クライアントコンポーネントでのデータフェッチ速度検証
- `http://localhost:3000/kensho1` 参照
- ServerHeader　でのユーザー名表示の方がClientHeaderでのユーザー名表示よりも早い。   
- `command` + `option` + `u` でソースを見るとServerHeaderの方にはユーザー名が入って送られてきているが、ClientHeaderの方にはユーザー名が空で送られてきている。

## `fetch()` リクエストの自動重複排除
- `http://localhost:3000/kensho1` 参照
- pageコンポーネントとServerHeaderコンポーネントの2箇所で 「next13 おもろい」 をresponseとして受け取るapiをcallしている(fetchComment)が、コンソールには1度しか 「api called」 が表示されない。
- ↑はいずれもサーバーコンポーネント
- api calledは api routeで実装している。
- `~/util/fetcher.ts`　の `fetchComment` でデータフェッチを動的としても結果は変わらない。(キャッシュを残さなくても重複排除される。)

## ストリーミング
- `http://localhost:3000/kensho2` 参照
- api route 上でレスポンスを返すまでにsleepの処理を加えている。(usersは2秒、postsは5秒)
- データフェッチが完全に完了する前に画面が見れる。(コンポーネント単位でローディングが出ている。)
- データフェッチが完了したものから画面に反映されていく。
- `~/app/kensho2/page.tsx` の二箇所にあるSuspenceタグをコメントアウトすると、データフェッチが全て完了しないと画面が表示されないことがわかる。

