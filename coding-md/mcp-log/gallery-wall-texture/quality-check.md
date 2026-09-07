# 工程 6 品質チェック（GALLERY 詳細 / gallery-wall-texture）

実施日: 2026-09-01  
参照: `coding-md/mcp-log/gallery-wall-texture/design-context.md`

## 1. タイポグラフィ

| 項目 | 結果 | 備考 |
|------|------|------|
| タイトル 15px / lh 22.5 Bold | ✅ | `.gallery-detail__title` |
| BACK TO LIST 13px / tracking 1.3 | ✅ | `.gallery-detail__back` + `btn--ghost` |

## 2. 色

| 項目 | 結果 |
|------|------|
| 背景・文字・枠 | ✅ 共通変数 |

## 3. 画像

| 項目 | 結果 | 備考 |
|------|------|------|
| detail_01–08 存在 | ✅ | wall-texture/ |
| 一覧サムネと非重複 | ✅ | ハッシュ不一致確認済 |
| 比率 740 / 1057.141 | ✅ | aspect-ratio |
| gap 22px | ✅ | |

## 4. リンク

| 項目 | 結果 |
|------|------|
| BACK TO LIST → `./gallery.html` | ✅ |
| 一覧 WALL TEXTURE → 本ページ | ✅ |

## 5. HTML

| 項目 | 結果 |
|------|------|
| h1 は 1 つ | ✅ |
| BEM gallery-detail__* | ✅ |
| Header / Footer 共通 | ✅ 変更なし |

## 未対応（意図的・後続）

- 他 GALLERY 作品の詳細ページ
- 工程 5 ピクセル単位の目視調整
- SP 専用 Figma カンプなし
