const express = require('express');
const multer  = require('multer');
const router = express.Router();
const { updateStudentById } = require('../model/students')

/* GET home page. */
router.get('/update/:id', async (req, res) => {
  await updateStudentById(req.params.id);
  res.render('update', { title: 'Express' });
});

module.exports = router;
