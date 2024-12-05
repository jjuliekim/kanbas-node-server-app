import model from "./model.js";

export function findQuizAttemptsForQuiz(quizId) {
  return model.find({ quiz: quizId });
}

export function createQuizAttempt(quizAttempt) {
  delete quizAttempt._id;
  return model.create(quizAttempt);
}

export function deleteQuizAttempt(quizAttemptId) {
  return model.deleteOne({ _id: quizAttemptId });
}

export function updateQuizAttempt(quizAttemptId, quizAttemptUpdates) {
  return model.updateOne({ _id: quizAttemptId }, quizAttemptUpdates);
}
