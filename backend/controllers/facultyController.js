import asyncHandler from "../middleware/asyncHandler.js";
import Faculty from "../models/facultyModel.js"

//@desc Fetch all faculties
//@route GET/api/people/faculty
//@access Public
const getFaculty = asyncHandler(async(req,res)=>{
    const faculty = await Faculty.find({});
    res.json(faculty);
});

// @desc Create a new faculty member
// @route POST /api/faculty
// @access Private/Admin
const createFaculty = asyncHandler(async (req, res) => {
    console.log()
    const newFaculty = new Faculty({
      name: "Sample Faculty",
      image: "/images/sample.jpg",
      email: "sample@example.com",
      bio: "Sample Bio",
      areaOfInterest: "Sample Interest",
      department: "Sample Department",
      officeAddress: "Sample Office",
      labAddress: "Sample Lab",
      phdStudents: [],
      msStudents: [],
      mtechStudents: [],
      btechStudents: [],
      publications: "",
    });
    const createdFaculty = await newFaculty.save();
    res.status(201).json(createdFaculty);
});

// @desc Fetch faculty by ID
// @route GET /api/faculty/:id
// @access Public
const getFacultyById = asyncHandler(async (req, res) => {
    const facultyMember = await Faculty.findById(req.params.id);
    if (facultyMember) {
      res.json(facultyMember);
    } else {
      res.status(404);
      throw new Error('Faculty member not found');
    }
});
  
// @desc Update a faculty member
// @route PUT /api/faculty/:id
// @access Private/Admin
const updateFaculty = asyncHandler(async (req, res) => {
    const { 
        name, 
        image, 
        email, 
        bio, 
        areaOfInterest, 
        personalWeb, 
        linkedin, 
        scholarLink, 
        department, 
        officeAddress, 
        labAddress, 
        phdStudents, 
        msStudents, 
        mtechStudents, 
        btechStudents, 
        publications 
    } = req.body;

    console.log('up faculty memeber');
    const facultyMember = await Faculty.findById(req.params.id);
    console.log("down faculty member");

    if (facultyMember) {
        facultyMember.name = name;
        facultyMember.image = image || facultyMember.image;
        facultyMember.email = email;
        facultyMember.bio = bio;
        facultyMember.areaOfInterest = areaOfInterest;
        facultyMember.personalWeb = personalWeb || '';
        facultyMember.linkedin = linkedin || '';
        facultyMember.scholarLink = scholarLink || '';
        facultyMember.department = department;
        facultyMember.officeAddress = officeAddress;
        facultyMember.labAddress = labAddress;
        facultyMember.phdStudents = phdStudents || [];
        facultyMember.msStudents = msStudents || [];
        facultyMember.mtechStudents = mtechStudents || [];
        facultyMember.btechStudents = btechStudents || [];
        facultyMember.publications = publications || '';

        const updatedFaculty = await facultyMember.save();
        res.json(updatedFaculty);
    } 
    else {
        res.status(404);
        throw new Error('Faculty member not found');
    }
});

// @desc Delete a faculty member
// @route DELETE /api/faculty/:id
// @access Private/Admin
const deleteFaculty = asyncHandler(async (req, res) => {
    const facultyMember = await Faculty.findById(req.params.id);

    if (facultyMember) {
        await Faculty.deleteOne({ _id: facultyMember._id });
        res.json({ message: 'Faculty removed' });
    } else {
        res.status(404);
        throw new Error('Faculty not found');
    }
});
  
export { getFaculty, createFaculty, updateFaculty,getFacultyById, deleteFaculty};