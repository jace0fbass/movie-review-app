const router = require('express').Router()
const Review = require('../models/reviews.js')

router.get('/', async (req, res) => {
  try {
    const allReviews = await Review.findAll()
    res.json(allReviews)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.post('/', async (req, res) => {
  try {
    const result = await Review.create(req.body)
    res.json(result)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.put('/:review_id', async (req, res) => {
  try {
    const result = await Review.update(req.body, {
      where: {
        id: req.params.review_id
      }
    })
    res.json(result)
  } catch (err) {
    res.status(500).json(err)
  }
})

router.delete('/:review_id', async (req, res) => {
  try {
    const result = await Review.destroy({
      where: {
        id: req.params.review_id
      }
    })
    res.json(result)
  } catch (err) {
    res.status(500).json(err)
  }
})

module.exports = router