const express = require('express');
const router = express.Router();
const multer  = require('multer');
const upload = multer();
const { createStudent } = require('../model/students')

const data = {
  name: "2",
  surname: "max",
  gender: "Male",
}


router.get('/', async (req, res) => {
  await createStudent(data);
  res.render('create');
  console.log(req.body)
});

module.exports = router;





// const express = require('express');
// const router = express.Router();
// const multer  = require('multer');
// const upload = multer();
// const Student = require('../model/schemas/students');
// const { createStudent } = require('../model/students')

// router.get('/', (req, res, next) => {
//   res.render('create', { title: 'Express' });
// });

// const data = {
//   name: "bill",
//   surname: 'Maliar',
//   gender: "Male",
//   age: 21,
//   birdthDate: 17-03-2015,
//   adress: "Киев, проспект Победы 19, кв.3",
//   family:{
//     father:{
//       name:'Roman',
//       surname: 'Maliar',
//       number: '456788765',
//     },
//   },
//   fatherSurname: 'Maliar',
//   fatherNumber: '0994534231',
//   matherName: 'Svitlana',
//   matherSurname: 'Maliar',
//   matherNumber: '0974345658',
// }

// router.get('/', async (req, res) => {
//   await createStudent(data);
//   res.send('Hello')
// });

// router.post('/', upload.none(), async (req, res) => {
//   await createStudent(data);
//   console.log(data);
// });


// module.exports = router;