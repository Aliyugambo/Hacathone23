const diseaseDatabase = {
    flu: {
      recoveryTime: '7',
      prescriptions: ['Tamiflu', 'Ibuprofen', 'Acetaminophen']
    },
    cold: {
      recoveryTime: '4',
      prescriptions: ['Acetaminophen', 'Ibuprofen', 'Decongestants']
    },
    pneumonia: {
      recoveryTime: '14',
      prescriptions: ['Antibiotics', 'Ibuprofen', 'Acetaminophen']
    }
    // will be adding few more
  };
  
  function getDiseaseInfo(diseaseName) {
    const diseaseInfo = diseaseDatabase[diseaseName];
    if (!diseaseInfo) {
      console.log("No treatment available here")
      // if there is no disease name in db
      return null;
    }
    return {
      disease: diseaseName,
      recoveryTime: diseaseInfo.recoveryTime,
      prescriptions: diseaseInfo.prescriptions
    };
  }
  
  // trying it put
  const diseaseName = 'flu';
  const diseaseInfo = getDiseaseInfo(diseaseName);
  
  if (!diseaseInfo) {
    console.log(`Disease ${diseaseName} not found in the database`);
  } else {
    console.log(`Disease: ${diseaseInfo.disease}`);
    console.log(`Recovery time: ${diseaseInfo.recoveryTime}`);
    console.log(`Prescriptions: ${diseaseInfo.prescriptions.join(', ')}`);
  }