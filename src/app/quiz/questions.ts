const questions = {
  "git": [
    {
      id: "1",
      statement: "リモートリポジトリに変更を反映させるコマンドは？",
      answer: "git push",
      detail: "リモートリポジトリに変更を反映させる, commitは変更履歴をローカル上に反映させるだけなので注意"
    },
    {
      id: "2",
      statement: "リモートリポジトリの最新の変更内容をローカルリポジトリに反映させるコマンドは？",
      answer: "git pull",
      detail: "リモートリポジトリの最新の変更内容をローカルリポジトリに反映する, 単に最新情報を取得するだけでマージしたくない場合はgit fetchを使う"
    },
    {
      id: "3",
      statement: "作業ディレクトリの変更内容をステージングエリアに追加するコマンドは？",
      answer: "git add",
      detail: "作業ディレクトリの変更内容をステージングエリアに追加しcommit可能な状態にする, 特定のファイルだけを追加したい場合は `git add <ファイル名>` を使用します"
    },
    {
      id: "4",
      statement: "現在のブランチから新しいブランチを作成し、そのブランチに切り替えるコマンドは？",
      answer: "git switch -c <新しいブランチ名>",
      detail: "現在のブランチから新しいブランチを作成し、そのブランチに切り替える, `git checkout -b <ブランチ名>` も同様(好みによる)"
    },
    {
      id: "5",
      statement: "作業中の変更を一時的に退避させるためのコマンドは？",
      answer: "git stash",
      detail: "作業中の変更を一時的に退避させる, ここで退避した変更を取り戻すには `git stash pop` を使います"
    }
  ],
  // 他ジャンルを追加する場合はここに
  // "javascript": [ ... ],
  // "react": [ ... ],
};

export default questions;
