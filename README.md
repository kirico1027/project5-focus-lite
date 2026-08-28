# Site Starter Base

新規サイト制作のためのベースフォルダです。  
静的コーディング用の制作ルール・ワークフロー・Sass 基盤を反映しています。

## 含まれているもの

| パス | 内容 |
|------|------|
| `.cursor/rules/` | Cursor 向け制作ルール（汎用 + 案件束縛の雛形） |
| `coding-md/` | Figma MCP コーディングワークフロー（工程 0 含む） |
| `src/sass/` | Sass 設計基盤（reset / variables / mixins / container） |
| `src/templates/` | ページテンプレート（編集の正） |
| `src/partials/` | 共通パーツ（head など） |
| `gulpfile.js`, `package.json` | Gulp ビルド環境 |

## 新規案件の開始手順

### 1. ベースをコピー

```bash
cp -R site-starter-base my-new-project
cd my-new-project
```

### 2. 依存関係をインストール

```bash
npm install
```

### 3. 開発サーバーを起動

```bash
npm run serve
```

ブラウザで `http://localhost:8080/index.html` を開いて確認してください。

### 4. 制作開始

1. **工程 0** — `coding-md/00-project-kickoff/WORKFLOW_00_PROJECT_KICKOFF.md`（いきなりコーディングしない）
2. `.cursor/rules/site-layout-tokens.mdc` にカンプ幅・列切替・コンテナ最大を埋める
3. HTML の編集は `src/templates/` と `src/partials/` を正とする
4. `npm run build` で `src/*.html` / `main.css` を再生成する
5. Figma MCP コーディングは `coding-md/WORKFLOW_MASTER.md` に従う

## Cursor ルール（概要）

### 常時・レスポンシブ核

| ルール | 用途 |
|--------|------|
| `project-kickoff.mdc` | 工程 0（コーディング前整理） |
| `responsive-build-workflow.mdc` | サイト幅を作る工程（①〜⑥・帯の分離） |
| `responsive-fluid-pattern.mdc` | `fluid-sp-range` / `fluid-pc-range` 実装 API |
| `typography-rem-clamp.mdc` | タイポ・margin-top・em padding |
| `site-layout-tokens.mdc` | **案件固有の数値雛形**（複製後に埋める） |
| `markup-bem-css.mdc` | BEM / スタイル単一ソース |
| `site-reflect-on-request.mdc` | 変更後の必須ビルド反映 |
| `header-drawer-menu.mdc` | ヘッダークラス名の案件束縛 |

### 構成・パーツ

| ルール | 用途 |
|--------|------|
| `templates-partials.mdc` | templates / partials 編集元 |
| `sass-structure.mdc` | Sass 層と `@use` 登録 |
| `page-hero.mdc` | 下層 page-hero |
| `form-patterns.mdc` | フォーム骨格 |
| `archive-filter-cards.mdc` | アーカイブ一覧 + フィルター |
| `cache-buster.mdc` | `?v=` キャッシュバスター |
| `js-structure.mdc` | JS 集約・読み込み |
| `details-accordion.mdc` | native details アコーディオン |

### インタラクション・ブラウザ

| ルール | 用途 |
|--------|------|
| `scroll-reveal.mdc` | Scroll / Load reveal 汎用核 |
| `archive-opening-reveal.mdc` | アーカイブ Opening |
| `cta-scroll-reveal.mdc` | CTA 反映手順 |
| `subpage-scroll-reveal.mdc` | 下層 reveal の案件手順雛形 |
| `header-drawer.mdc` | ドロワー開閉の汎用パターン |
| `hero-viewport.mdc` | トップ FV 高さの汎用パターン |
| `hero-viewport-height.mdc` | トップ FV の案件数値雛形 |
| `drag-scroll-slider.mdc` | 横ドラッグスライダー |
| `mobile-reload-flicker.mdc` | モバイルリロードちらつき |
| `safari-cover-media.mdc` | Safari cover 画像 |
| `safari-layout-inset.mdc` | Safari 横インセット |

## 補足

- WordPress 化のルール・設計テンプレートは本フォルダには含めません（`wordpress-base` 側）
- `node_modules/` は Git 管理しません
- 生成物のソースマップ（`src/public/assets/css/*.map`）は `.gitignore` で除外しています
- `src/ejs/` は廃止済みです。テンプレートは `gulp-file-include`（`@@include`）を使用します
