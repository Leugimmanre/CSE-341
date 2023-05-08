const StudentProfile = require("../models/Students.js");

// Students home
const getHome = async (request, response) => {
  response.json({
    message: "Welcome to the main student page",
  });
};

// GET all students Profiles
const getStudents = async (request, response) => {

  try {
    const students = await StudentProfile.find({});
    if (students.length === 0) {
      return response
        .status(404)
        .json({message: "There are no registered students."});
    }
    response
      .status(200)
      .send(students)
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

// GET a single student profile
const GetSingleStudent = async (request, response) => {
  const {id} = request.params;
  const student = await StudentProfile.findById(id);

  if (!student) {
    return response
      .status(404)
      .json({message: 'Student not found'})
  }
  response
    .send(student)
    .status(200);
}

// CREATE student profile
const createStudent = async (request, response) => {
  // Capturar datos con JOI
  const { firstName, lastName, age, phone, address, degree, university } = request.body;

  // response.send(`nombre: ${firstName}, Apellido: ${lastName}, Edad: ${age}, Teléfono: ${phone}, Dirección: ${address}, Grado: ${degree}, Universidad: ${university}`);

  // Prevent repeat users
  const {email} = request.body;
  const studentExists = await StudentProfile.findOne({email});
  if (studentExists) {
    return response
      .status(400)
      .json({message: 'The student has already been registered'});
  }

  try {
    // Create a new instance of the student model with request.body
    const studentProfile = new StudentProfile(request.body);
    // Save the object in a database
    const newStudent = await studentProfile.save();
    return response
      .status(201)
      .json(newStudent);
  } catch (error) {
    response
      .status(500)
      .json({ message: error.message });}
};

// UPDATE student profile
const updateStudent = async (request, response) => {
    // Check if the student exists
    const {id} = request.params;
    const student = await StudentProfile.findById(id);

    if (!student) {
      return response
        .status(404)
        .json({message: 'Student not found'})
    }

    student.firstName = request.body.firstName || student.firstName;
    student.lastName = request.body.lastName || student.lastName;
    student.age = request.body.age || student.age;
    student.phone = request.body.phone || student.phone;
    student.email = request.body.email || student.email;
    student.address = request.body.address || student.address;
    student.degree = request.body.degree || student.degree;
    student.university = request.body.university || student.university;

    try {
      const updateStudent = await student.save();
      response
        .json(updateStudent);
    } catch (error) {
      console.log({ error: error.message });
    }
};

// DELETE student profile
const deleteStudent = async (request , response) => {
  try {
    const deletedProfile = await StudentProfile.findByIdAndDelete(request.params.id);
    if (!deletedProfile) {
      return response
        .status(404)
        .json({ error: "Profile not found" });
    }
    response
      .status(200)
      .json({ message: "Profile deleted successfully"});
  } catch (error) {
    response
      .status(500)
      .json({ error: error.message });
  }
};

module.exports = {
  getHome,
  getStudents,
  GetSingleStudent,
  createStudent,
  updateStudent,
  deleteStudent,
};
