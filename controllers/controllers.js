const StudentProfile = require('../models/Profile.js');

// Students home
const home = async (request, response) => {
    response.json({
        message: 'Welcome to the main student page'
    });
}

// GET all Profiles
const students = async (request, response) => {
    const data = await StudentProfile.find({});
    response
        .send(data)
        .status(200);
}

// GET a single profile
const singleStudent = async (request, response) => {
    const id = request.params['id'];
    const data = await StudentProfile.findOne({_id:id});
    response
        .send(data)
        .status(200);
}

// CREATE profile
const createStudent = async (request, response) => {
    try {
        const studentProfile = new StudentProfile(request.body);
        const newStudent = await studentProfile.save();
        return response
            .status(201)
            .json(newStudent);
    } catch (error) {
        console.log({ error: error.message });
    }
}

// UPDATE profile
const updateStudent = async (request, response) => {
    const { firstName, lastName, email, age, phone, address, degree, university } = request.body;
    const id = request.params["id"];

    if (data) {
        try {
            await StudentProfile.replaceOne({_id:data.id}, {
                firstName,
                lastName,
                age,
                phone,
                email,
                address,
                degree,
                university,
            });
            return response
                .status(204)
                .send(data)
                .json({
                    message: 'Profile updated successfully'
                });

        } catch (error) {
            console.log({ error: error.message });
        }
    }
}

// DELETE profile
const deleteStudent = async (request, response) => {
    const id = request.params['id'];
    await Profile.findOneAndDelete({ _id: id })
    .then(deletedprofile => {
      if (!deletedprofile) {
        return response.status(404).json({ error: 'profile not found' });
      }
      response.status(200).json({ message: 'profile deleted successfully' });
    })
    .catch(error => {
        response
            .status(500)
            .json({ error: error.message
        });
    });
}

module.exports = {
    home,
    students,
    singleStudent,
    createStudent,
    updateStudent,
    deleteStudent
};
