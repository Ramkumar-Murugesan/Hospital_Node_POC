const patientDao = require("../../dao/patient/patient.dao");


function createPatientService(patientData){
    // console.log('service',patientData)

    return patientDao.createPatientDao(patientData);
}

function getAllPatient(){
    return patientDao.getAllPatient();
}

function getPatientbyId(id){
    return patientDao.getPatientbyId(id);
}
module.exports = {
    createPatientService,
    getAllPatient,
    getPatientbyId
  };