# Nuxt.js Typescript + PostCSS Template

## 元ネタ

https://github.com/nuxt-community/typescript-template/tree/22d0c56f20bfd588c264ba90b4a43e57f83fdb3f

## ちがい

* ディレクトリ構成を変更し、`src`ディレクトリに各ファイルをまとめる構成にしました。
* `.gitignore`がより詳細に設定されています。
* `prettier`を設定しファイルコミット時にprettierがかかるようになっています。
    * エディタを設定しファイル保存時にprettierが実行されるようにするのがおすすめです。
* `tslint`を設定し`.ts`ファイルの構文をチェックします。`.vue`ファイルについては現在のところスルーです。
* `stylelint`を設定し`.css`, `.vue`ファイルの構文をチェックします。
* `sanitize.css`を読み込みCSSをリセットしています。
* `tsconfig.json`を変更し厳しいチェックを行うようになっています。

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

dockerが例によって強いです
こんな感じで`yarn generate`で生成したファイルとhttpd.confをマウントすると`localhost:8080`で検証できます

```bash
docker run -dit --name nuxt-test-httpd -p 8080:80 -v "$PWD/dist":/usr/local/apache2/htdocs -v "$PWD/modules/httpd.conf":/usr/local/apache2/conf/httpd.conf httpd:alpine
```

## TODO

* [ ] test
* [ ] `.vue` lint
* [x] robots.txtとかfaviconとかの扱い
