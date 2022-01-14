const { Schema, model } = require('mongoose');

const eduSchema = new Schema({
  name: {
    type: String,
  },
  marks: [Number]
});

const healthSchema = new Schema({
  blood: {
    type: String,
    enum: ['I', 'II', 'III', 'IV',],
  },
  resus: Boolean,
  width: Number,
  wtight: Number,
});

const familyMemberSchema = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 50,
  },
  surname: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 50,
  },
  number: String,
});

const familySchema = new Schema({
  father: familyMemberSchema,
  mather: familyMemberSchema,
});

const student = new Schema({
  name: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 50,
  },
  surname: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 50,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female',],
  },
  // age: {
  //   type: Number,
  //   required: true,
  // },
  // birdthDate: Date,
  // // health: healthSchema,
  // adress: {
  //   type: String,
  //   minlength: 10,
  //   maxlength: 150,
  // },
  // family: familySchema,
  // class: {
  //   name: {
  //     type: String,
  //     required: true,
  //   },
  //   profile: {
  //     type: String,
  //     enum: ['math', 'filology', 'nature',],
  //   }
  // },
  // education: [eduSchema],
});

module.exports = model('Student', student);