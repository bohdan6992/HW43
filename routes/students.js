const express = require('express');
const router = express.Router();
const multer  = require('multer');
const upload = multer();
const { createStudent } = require('../model/students')

const data = {
  name: "dddd",
  surname: "gggg",
  gender: "Male",
}

router.get('/', async (req, res) => {
  await createStudent(data);
});

module.exports = router;