const { Router } = require('express')

const { Quiz, Question } = require('../../../models')
const manageAllErrors = require('../../../utils/routes/error-management')
const AnswersRouter = require('./answers')
const { filterQuestionsFromQuizz, getQuestionFromQuiz } = require('./manager')

const router = new Router({ mergeParams: true })


router.use('/:questionId/answers', AnswersRouter)

router.get('/', (req, res) => {
  try {
    // Check if quizId exists, if not it will throw a NotFoundError
    Quiz.getById(req.params.quizId)
    res.status(200).json(filterQuestionsFromQuizz(req.params.quizId))
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.get('/:questionId', (req, res) => {
  try {
    const question = getQuestionFromQuiz(req.params.quizId, req.params.questionId)
    res.status(200).json(question)
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.post('/', (req, res) => {
  try {
    // Check if quizId exists, if not it will throw a NotFoundError
    Quiz.getById(req.params.quizId)
    const quizId = parseInt(req.params.quizId, 10)
    let question = Question.create({ id: parseInt(req.body.id),label: req.body.label, quizId, answers: req.body.answers})
    res.status(201).json(question)
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.put('/:questionId', (req, res) => {
  try {
    // const question = getQuestionFromQuiz(req.params.quizId, req.params.questionId)
    // console.log(question)
    const updatedQuestion = Question.updateQuestion(req.params.questionId, req.params.quizId ,{ label: req.body.label, answers : req.body.answers, image : req.body.image })
    console.log(updatedQuestion)
    res.status(200).json(updatedQuestion)
  } catch (err) {
    manageAllErrors(res, err)
  }
})

router.delete('/:questionId', (req, res) => {
  try {
    // Check if the question id exists & if the question has the same quizId as the one provided in the url.
    // getQuestionFromQuiz(req.params.quizId, req.params.questionId)
    Question.deleteQuestion(req.params.quizId,req.params.questionId);
    res.status(204).end()
  } catch (err) {
    manageAllErrors(res, err)
  }
})

module.exports = router
