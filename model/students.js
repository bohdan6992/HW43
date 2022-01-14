const { response } = require('../app');
const Student = require('./schemas/students');

const createStudent = async (obj) => {
  const student = new Student({
    name: obj.name,
    surname: obj.surname,
    gender: obj.gender,
  });
  try {
    await student.save();
  } catch (err) {
    console.log('Error>>>', err)
  }
};


const getAllStudents = async (ress) => {
  await Student.find({}, function(err, users){
    ress.render('index', {
      usersList: users
    })
  });
};

// const createStudent = async (obj) => {
//   const student = new Student({
//     name: obj.name,
//     surname: obj.surname,
//     gender: obj.gender,
//     age: obj.age,
//     birdthDate: obj.birdthDate,
//     adress: obj.adress,
//     // fatherName: obj.family.father.name,
//     // fatherSurname: obj.family.father.surname,
//     // fatherNumber: obj.family.father.number,
//     // matherName: obj.family.mather.name,
//     // matherSurname: obj.family.mather.surname,
//     // matherNumber: obj.family.mather.number,
//   });
//   try {
//     await student.save();
//   } catch (err) {
//     console.log(err)
//   };
// };

const updateStudentById = async (data) => {
  await User.findOneAndUpdate(
    {_id: data.id},
    {
      name: data.name,
      surname: data.surname,
      gender: data.gender,
      // age: data.age,
    })
};

module.exports = {
  createStudent,
  getAllStudents,
  updateStudentById,
}

