# Drone-2025 — ローカルサイト

このフォルダはプロジェクトの静的プレビューを提供します。

簡単なローカルプレビュー方法:

```bash
cd site
python3 -m http.server 8000
# ブラウザで http://localhost:8000 を開く
```

今後のカスタマイズ案:
- カラーパレットやロゴの調整
- 追加の図・グラフ・画像の埋め込み
- デプロイ（GitHub Pages / Vercel 等）

簡単なデプロイ（GitHub Pages）:

```bash
# main ブランチを公開する例
git add .
git commit -m "site: add static site"
git push
# GitHubのリポジトリ設定で Pages を main ブランチ / / (root) に設定
```

スクリーンショットやロゴを追加したい場合は、`site/assets/` に画像を配置してください。
