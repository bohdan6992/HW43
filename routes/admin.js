const express = require('express');
const router = express.Router();
const multer  = require('multer');
const upload = multer();
const Student = require('../model/schemas/students');
// const { createStudent, getAllStudents } = require('../model/students')

router.get('/', async (req, res) => {
  await Student.find({}, function(err, students){
    res.render('admin', {
      studentsList: students
    })
  }).clone().catch(function(err){ console.log(err)})
});

router.get('/update/:id', (req, res) => {
  Student.findById(req.params.id, (err, doc) => {
      if (!err) {
          res.render("update", {
              viewTitle: "Update Ыегвуте",
              employee: doc
          });
      }
  });
});

router.get('/delete/:id', (req, res) => {
  Student.findByIdAndRemove(req.params.id, (err, doc) => {
      if (!err) {
          res.redirect('/admin');
      }
      else { console.log('Error in user delete :' + err); }
  });
});


module.exports = router;