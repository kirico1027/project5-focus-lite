# NEWS 詳細 design-context（トークイベント出演のお知らせ / node `5:2`）

取得日: 2026-09-02  
ソース: Figma Desktop MCP `get_design_context`

## フレーム

| 項目 | 値 |
|------|-----|
| 名前 | NEWS - トークイベント出演のお知らせ |
| nodeId | `5:2` |
| サイズ | 1920 × 1181 |
| 背景 | `#000000` |

## フォント・タイポ（PC）

| 要素 | size | line-height | tracking | weight |
|------|------|-------------|----------|--------|
| 記事タイトル | 20px | 30px | — | Bold |
| 日付 | 15px | 22.5px | — | Regular |
| 本文 | 13px | 20.8px | — | Regular |
| BACK TO LIST | 13px | 15.6px | 1.3px | Medium |

## レイアウト（PC 1920）

| 項目 | 値 |
|------|-----|
| Main 上余白 | padding-top 200px |
| 本文カラム | max-width 900px / padding-inline 80px → 本文幅 740px・中央 |
| タイトル → 日付 | 8px（タイトル下 padding） |
| 日付 → 本文 | 22px（日付下 padding） |
| BACK TO LIST | margin-top 160px / 中央 / ghost ボタン |
| Page Hero | なし |

## テキスト内容

| 項目 | 内容 |
|------|------|
| タイトル | トークイベント出演のお知らせ |
| 日付 | 2025.09.01 |
| 本文 | 2025年11月、東京で開催されるフォトカルチャーイベントに登壇します。ストリートフォトについてお話しします。 |
| 戻る | BACK TO LIST → NEWS 一覧未制作のため `./index.html` |

## 画像

なし（工程 2 スキップ）

## SP カンプ

Figma に SP フレームなし。375px は左右 padding・本文幅を fluid で縮小（gallery-detail / privacy-policy と同系）。
