import model from "./model.js";
import QuizModel from "../Quizzes/model.js";

export function findQuestionsForQuiz(quizId) {
  return model.find({ quiz: quizId });
}

export function createQuestion(quizId, questionData) {
  const question = new model({ ...questionData, quiz: quizId });
  return question.save();
}

export function updateQuestion(quizId, questionId, questionData) {
  return model.findOneAndUpdate({ _id: questionId, quiz: quizId }, questionData, { new: true });
}

export async function deleteQuestion(quizId, questionId) {
  await model.findOneAndDelete({ _id: questionId, quiz: quizId });
  const quiz = await QuizModel.findById(quizId);
  quiz.questions = quiz.questions.filter((id) => id.toString() !== questionId);
  await quiz.save();
}

export function findQuizById(quizId) {
  return QuizModel.findById(quizId);
}