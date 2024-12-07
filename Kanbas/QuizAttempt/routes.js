import * as dao from './dao.js';

export default function QuizAttemptRoutes(app) {
  app.get("/api/attempt/:quizId", async (req, res) => {
    const { quizId } = req.params;
    const attempts = await dao.findAttemptsForQuiz(quizId);
    res.send(attempts);
  });

  app.post("/api/attempt/:quizId", async (req, res) => {
    const { quizId } = req.params;
    const attemptData = req.body;
    const newAttempt = await dao.createQuizAttempt(quizId, attemptData);
    res.status(201).send(newAttempt);
  });

  app.delete("/api/attempt/:attemptId", async (req, res) => {
    const { attemptId } = req.params;
    await dao.deleteQuizAttempt(attemptId);
    res.status(200).send();
  });

  app.put("/api/attempt/:attemptId", async (req, res) => {
    const { attemptId } = req.params;
    const attemptUpdates = req.body;
    await dao.updateQuizAttempt(attemptId, attemptUpdates);
    res.status(200).send();
  });

  app.get("/api/attempt/:quizId/:userId", async (req, res) => {
    const { quizId, userId } = req.params;
    const attempts = await dao.findAttemptForUserQuiz(quizId, userId);
    res.send(attempts);
  });
}