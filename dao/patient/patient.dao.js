const config = require("../../config.json");
const db = require("../../helpers/db");
const Patient = db.Patient;

async function createPatientDao(patientData) {
    console.log('dao',patientData)
    
    const user = await Patient.findOne({ mobilenumber: patientData.mobilenumber });
    if (user) throw `This patient already exists: ${patient.name}`;
    const newpatient = new Patient(patientData);
    console.log(patient)
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