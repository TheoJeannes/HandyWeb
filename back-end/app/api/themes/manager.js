const { Theme } = require('../../models')
const { filterQuizzFromTheme } = require('./quizzes/manager')

const buildTheme = (themeId) => {
    const theme = Theme.getById(themeId)
    const quizz = filterQuizzFromTheme(theme.id)
    return { quizz }
}

const buildThemes = () => {
    const themes = Theme.get()
    return themes.map((theme) => buildTheme(theme.id))
}

module.exports = {
    buildTheme,
    buildThemes,
}
