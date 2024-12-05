import * as questionsDao from './dao.js';

export default function QuestionRoutes(app) {
  app.get("/api/questions/:quizId", async (req, res) => {
    const { quizId } = req.params;
    const questions = await questionsDao.findQuestionsForQuiz(quizId);
    res.send(questions);
  });

  app.post("/api/questions/:quizId", async (req, res) => {
    const { quizId } = req.params;
    const questionData = req.body;
    const newQuestion = await questionsDao.createQuestion(quizId, questionData);
    res.status(201).send(newQuestion);
  });

  app.put("/api/questions/:quizId/:questionId", async (req, res) => {
    const { quizId, questionId } = req.params;
    const questionData = req.body;
    const updatedQuestion = await questionsDao.updateQuestion(quizId, questionId, questionData);
    res.send(updatedQuestion);
  });

  app.delete("/api/questions/:quizId/:questionId", async (req, res) => {
    const { quizId, questionId } = req.params;
    await questionsDao.deleteQuestion(quizId, questionId);
    res.status(204).send();
  });
}