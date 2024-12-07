import model from "./model.js";

export function findAttemptsForQuiz(quizId) {
  return model.find({ quiz: quizId });
}

export async function createQuizAttempt(quizId, attemptData) {
  // check if already existing
  const prevAttempt = await model.findOne({ quiz: quizId, user: attemptData.user });
  if (prevAttempt) {
    await model.deleteOne({ _id: prevAttempt._id });
    const quizAttemptNumber = prevAttempt.attemptNumber + 1;
    attemptData.attemptNumber = quizAttemptNumber;
  }
  delete attemptData._id;
  return await model.create(attemptData);
}

export function deleteQuizAttempt(quizAttemptId) {
  return model.deleteOne({ _id: quizAttemptId });
}

export function updateQuizAttempt(quizAttemptId, quizAttemptUpdates) {
  return model.updateOne({ _id: quizAttemptId }, quizAttemptUpdates);
}

export function findAttemptForUserQuiz(quizId, userId) {
  return model.findOne({ quiz: quizId, user: userId });
}