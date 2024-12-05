import * as questionsDao from './dao.js';

export default function QuestionRoutes(app) {
  app.get("/api/questions/:quizId", async (req, res) => {
    const { quizId } = req.params;
    const questions = await questionsDao.findQuestionsForQuiz(quizId);
    res.send(questions);
  });
}