const router = require('express').Router()
const movieRoutes = require('./movies')
const reviewRoutes = require('./reviews')
const userRoutes = require('./users')

router.use('/api/movies', movieRoutes)
router.use('/api/reviews', reviewRoutes)
router.use('/api/users', userRoutes)

module.exports = router