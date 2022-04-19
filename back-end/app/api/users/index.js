const {Router} = require('express')

const {User} = require('../../models')
const manageAllErrors = require('../../utils/routes/error-management')
const ConfigsRouter = require('./configs')
const ValidationError = require("../../utils/errors/validation-error");
const router = new Router()

router.get('/', (req, res) => {
    try {
        res.status(200).json(User.get())
    } catch (err) {
        manageAllErrors(res, err)
    }
})

router.get('/:userId', (req, res) => {
    try {
        res.status(200).json(User.getById(req.params.userId))
    } catch (err) {
        manageAllErrors(res, err)
    }
})

router.post('/', (req, res) => {
    try {
        if (User.get().find((i) => i.firstName === req.body.firstName && i.lastName === req.body.lastName)) {
            throw new ValidationError("Erreur l'utilisateur existe déjà", "Erreur l'utilisateur existe déjà");
        }

        if (req.body.role === "admin" && !req.body.password) {
            throw new ValidationError("Un utilisateur de rôle admin doit avoir un mot de mot passe",
                "Un utilisateur de rôle admin doit avoir un mot de mot passe");
        }
        const user = User.create({...req.body})
        res.status(201).json(user);
    } catch (err) {
        manageAllErrors(res, err)
    }
})

router.put('/:userId', (req, res) => {
    try {
        res.status(200).json(User.update(req.params.userId, req.body))
    } catch (err) {
        manageAllErrors(res, err)
    }
})

router.delete('/:userId', (req, res) => {
    try {
        User.delete(req.params.userId)
        res.status(204).end()
    } catch (err) {
        manageAllErrors(res, err)
    }
})

router.use('/:userId/configs', ConfigsRouter)

module.exports = router
