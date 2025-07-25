// 各問題が持つ情報
export type Question = {
  genre: string, // クイズのジャンル
  id: string; // 固有のID
  statement: string; // 問題文
  answer: string;    // 正解
  detail: string;    // 解説
};

// 問題画面に表示させるときの問題の型
export type Quiz = {
  genre: string, // クイズのジャンル
  questionId: string;    // 何番の問題か
  statement: string;     // 問題文
  selectionsNum: number; // 選択肢の数
  selections: string[]; // 選択肢の回答
  detail: string;       // 正解の解説
}

// プレイヤーが今解いている問題1問に関する結果を保存
export type AnswerResult = {
  genre: string, // クイズのジャンル
  questionId: string;
  statement: string;
  selections: string[];
  correctAnswer: string;
  selectedAnswer: string;
  isCorrect: boolean;
  detail: string;
}

// プレイヤーの結果、正解数, 問題数の格納
export type QuizSession = {
  results: AnswerResult[];
  currentQuestion: number;
  totalQuestions: number;
};
