import model from "./model.js";

export function findQuestionsForQuiz(quizId) {
  console.log("findQuestionsForQuiz", quizId);
  return model.find({ quiz: quizId });
}
