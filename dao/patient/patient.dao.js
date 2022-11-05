const db = require("../../helpers/db");
const Patients = db.Patient;
// const Patients = db.User;

async function createPatientDao(patientData) {
    const user = await Patients.findOne({ mobilenumber: patientData.mobilenumber });
    if (user) throw `This patient already exists: ${patientData.name}`;
    const newpatient = new Patients(patientData);
    // console.log(newpatient)
     await newpatient.save();
}

async function getAllPatients() {
    return await Patient.find();
}

async function getPatientbyId(id){
    const patient = await Patient.findById({ id });
}

module.exports = {
    createPatientDao,
    getAllPatients,
    getPatientbyId,
  };