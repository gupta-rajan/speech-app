import asyncHandler from "../middleware/asyncHandler.js";
import Student from "../models/studentsModel.js";

// @desc Fetch all students
// @route GET /api/people/students
// @access Public
const getStudents = asyncHandler(async (req, res) => {
    const students = await Student.find({});
    res.json(students);
});

// @desc Create a new student
// @route POST /api/students
// @access Private/Admin
const createStudent = asyncHandler(async (req, res) => {
    const newStudent = new Student({
        name: "Sample Student",
        image: "/images/sample.jpg",
        email: "sample@example.com",
        rollNumber: "Sample Roll Number",
        position: "Sample Position",
        areasOfInterest: "Sample Areas of Interest",
        thesisTitle: "Sample Thesis Title",
        description: "Sample Description",
        scholarLink: "",
        linkedin: "",
        alumni: "No",
        alumniPosition: "",
        publications: "",
    });
    const createdStudent = await newStudent.save();
    res.status(201).json(createdStudent);
});

// @desc Fetch student by ID
// @route GET /api/students/:id
// @access Public
const getStudentById = asyncHandler(async (req, res) => {
    const student = await Student.findById(req.params.id);
    if (student) {
        res.json(student);
    } else {
        res.status(404);
        throw new Error('Student not found');
    }
});

// @desc Update a student
// @route PUT /api/students/:id
// @access Private/Admin
const updateStudent = asyncHandler(async (req, res) => {
    const { 
        name, 
        image, 
        email, 
        rollNumber, 
        position, 
        areasOfInterest, 
        thesisTitle, 
        description, 
        scholarLink, 
        linkedin, 
        alumni, 
        alumniPosition, 
        publications 
    } = req.body;

    const student = await Student.findById(req.params.id);

    if (student) {
        student.name = name;
        student.image = image || student.image;
        student.email = email;
        student.rollNumber = rollNumber;
        student.position = position;
        student.areasOfInterest = areasOfInterest;
        student.thesisTitle = thesisTitle;
        student.description = description;
        student.scholarLink = scholarLink || '';
        student.linkedin = linkedin || '';
        student.alumni = alumni;
        student.alumniPosition = alumniPosition || '';
        student.publications = publications || '';

        const updatedStudent = await student.save();
        res.json(updatedStudent);
    } else {
        res.status(404);
        throw new Error('Student not found');
    }
});

// @desc Delete a student
// @route DELETE /api/students/:id
// @access Private/Admin
const deleteStudent = asyncHandler(async (req, res) => {
    const student = await Student.findById(req.params.id);

    if (student) {
        await Student.deleteOne({ _id: student._id });
        res.json({ message: 'Student removed' });
    } else {
        res.status(404);
        throw new Error('Student not found');
    }
});

export { getStudents, createStudent, getStudentById, updateStudent, deleteStudent };