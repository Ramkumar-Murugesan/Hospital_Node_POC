const db = require("../../helpers/db");
const Patients = db.Patient;

async function createPatientDao(patientData) {
    console.log('dao',patientData.mobilenumber)
    
    const user = await Patients.findOne({ mobilenumber: patientData.mobilenumber });
    if (user) throw `This patient already exists: ${patient.name}`;
    const newpatient = new Patients(patientData);
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