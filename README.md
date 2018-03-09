# Nuxt.js Typescript + PostCSS Template

## 元ネタ

https://github.com/nuxt-community/typescript-template/tree/22d0c56f20bfd588c264ba90b4a43e57f83fdb3f

## ちがい

* ディレクトリ構成を変更し、`src`ディレクトリに各ファイルをまとめる構成にしました。
    * いくつかのディレクトリが追加・編集・削除されていますがなんとなく眺めてもらえればわかるかと思います。
* `.gitignore`がより詳細に設定されています。
* `prettier`を設定しファイルコミット時にprettierがかかるようになっています。
    * エディタを設定しファイル保存時にprettierが実行されるようにするのがおすすめです。
* `tslint`を設定し`.ts`ファイルの構文をチェックします。`.vue`ファイルについては現在のところスルーです。
* `stylelint`を設定し`.css`, `.vue`ファイルの構文をチェックします。
* `sanitize.css`を読み込みCSSをリセットしています。
* `tsconfig.json`を変更しより厳格にtsコードのチェックを行うようになっています。
* `@nuxtjs/sitemap`を導入しいい感じのsitemapを生成するようにしています。
* `jest`を導入しテストが書けるようになっています。`yarn test`で実行
* 諸々便利なので検証用にdockerでapacheが動くようになっています。詳しくは[この辺](#検証方法)参照
    * nginxも追加しようかと思ってます

## 注意点

JavaScriptではなくTypeScriptです。補完が聞いて便利なんです

## 動かし方

```bash
# install module
yarn
# start development
yarn dev
# production build
yarn build
# ... and launch server
yarn start
# generate static files
yarn generate
```

## 拡張方法

`src/pages/`の下を拡張していくと勝手にルーティングも変更されてよしなにしてくれます。

## 検証方法

`docker-compose up -d` でdistディレクトリをドキュメントルートとしてマウントしたapacheコンテナを起動できます。

`http://localhost:8080` へアクセスすると確認できます。 `.htaccess`の検証に便利です。


## TODO

* [x] test
* [ ] `.vue` lint
* [x] robots.txtとかfaviconとかの扱い
