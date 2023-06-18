const express = require('express')
const router = express.Router()

const { check, validationResult } = require('express-validator')
const Drugs = require('../models/Drugs')

//@route  GET api/drugs
//@desc  fetch Drugs
//@access Public
router.get('/', async (req, res) => {
  try {
    const drugs = await Drugs.find().populate()
    res.json(drugs)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

//@route  POST api/drugs
//@desc  Create a Drug
//@access Public
router.post(
  '/',
  [
    [check('id', 'Id is required').not().isEmpty()],
    [check('title', 'Title is required').not().isEmpty()],
    [check('namesCode', 'namesCode is required').not().isEmpty()],
    [check('namesBrand', 'namesBrand is required').not().isEmpty()],
    [check('namesGeneric', 'namesGeneric is required').not().isEmpty()],
    [check('mechanismsOfAction', 'mechanisms are required').not().isEmpty()],
  ],
  async (req, res) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    try {
      let {
        id,
        title,
        namesCode,
        namesBrand,
        namesGeneric,
        mechanismsOfAction,
      } = req.body

      const newDrug = new Drugs({
        id,
        title,
        namesCode,
        namesBrand,
        namesGeneric,
        mechanismsOfAction,
      })

      const drug = await newDrug.save()
      res.json(drug)
    } catch (error) {
      console.error(error.message)
      res.status(500).send('server error')
    }
  }
)

module.exports = router
