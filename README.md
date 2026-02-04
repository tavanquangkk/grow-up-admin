# Grow Up Admin (Frontend)

Grow Up プラットフォームの管理画面（Dashboard）です。React 19 と Vite を使用して構築されており、直感的でモダンな UI を提供します。

## 🎨 特徴
- **モダンな UI**: Ant Design (v5) を使用したクリーンで機能的なインターフェース。
- **効率的な状態管理**: React Hooks と Context API を活用した認証状態の保持。
- **セキュアな通信**: Axios インターセプターによる JWT トークンの自動リフレッシュ機能。
- **SPA ルーティング**: React Router によるスムーズなページ遷移と Protected Route。

## 🛠 使用技術
- **Library**: React 19 (JavaScript)
- **UI Framework**: Ant Design
- **Build Tool**: Vite
- **HTTP Client**: Axios
- **Router**: React Router 7
- **Auth**: JWT (LocalStorage / HttpOnly Cookie)

## 🚀 開発とビルド

### インストール
```bash
npm install
```

### 開発モード
```bash
npm run dev
```

### ビルド
```bash
npm run build
```

## 📦 デプロイ構成
本プロジェクトは Docker 化されており、ビルド後の静的ファイルは **Nginx** によって配信されます。
Nginx はリバースプロキシとしても機能し、`/api` へのリクエストを自動的にバックエンドサーバーへ転送することで、CORS 問題を解決しています。

## 📂 ディレクトリ構成
- `src/api/`: Axios インスタンスと各 API 通信ロジック。
- `src/components/`: 再利用可能な UI コンポーネント（Table, Modal など）。
- `src/context/`: 認証（AuthContext）やテーマ設定。
- `src/pages/`: 各画面のメインコンポーネント。
- `src/layout/`: ヘッダー、サイドメニューなどの全体レイアウト。
- `src/router/`: ルーティング設定。