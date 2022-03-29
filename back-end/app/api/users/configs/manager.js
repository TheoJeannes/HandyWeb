const { User, Config } = require('../../../models')
const NotFoundError = require('../../../utils/errors/not-found-error.js')

/**
 * Questions Manager.
 * This file contains all the logic needed to by the question routes.
 */

/**
 * filterQuestionsFromQuizz.
 * This function filters among the questions to return only the question linked with the given quizId.
 * @param userId
 */
const filterConfigsFromUser = (userId) => {
    const configs = Config.get()
    const parsedId = parseInt(userId, 10)
    return configs.filter((config) => config.userId === parsedId)
}

/**
 * getQuestionFromQuiz.
 * This function retrieves a question from a quiz. It will throw a not found exception if the quizId in the question is different from the one provided in parameter.
 * @param userId
 * @param configId
 */
const getConfigFromUser = (userId, configId) => {
    // Check if userId exists, if not it will throw a NotFoundError
    const user = User.getById(userId)
    const userIdInt = parseInt(userId, 10)
    const config = Config.getById(configId)
    if (config.userId !== userIdInt) throw new NotFoundError(`${config.name} id=${configId} was not found for ${user.firstName} ${user.lastName} id=${user.id} : not found`)
    return config
}

module.exports = {
    filterConfigsFromUser: filterConfigsFromUser,
    getConfigFromUser: getConfigFromUser,
}
