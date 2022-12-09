const router = require('express').Router()
const { Movie, Review } = require('../models')
const sequelize = require('../config/connection')

router.get('/', async (req, res) => {
  try {
    const allMovies = await Movie.findAll({
      include: [{model: Review}],
      attributes: {
        include: [
          [
            sequelize.literal(`(SELECT COUNT(*) 
            FROM reviews 
            WHERE movie.id = reviews.movie_id)`),
            'reviewCount'
          ],
        ]
      }
    })
    res.json(allMovies)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.post('/', async (req, res) => {
  try {
    const result = await Movie.create(req.body)
    res.json(result)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.put('/:movie_id', async (req, res) => {
  try {
    const result = await Movie.update(req.body, {
      where: {
        id: req.params.movie_id
      }
    })
    res.json(result)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.delete('/:movie_id', async (req, res) => {
  try {
    const result = await Movie.destroy({
      where: {
        id: req.params.movie_id
      }
    })
    res.json(result)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router