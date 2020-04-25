const doAddSymptomEntry = async (event) => {
    event.preventDefault();
  
    const symptomDescription = document.getElementById('symptomDescription').value;
    const symptomDuration = document.getElementById('symptomDuration').value;
    const symptomOnset = document.getElementById('symptomDuration').value;
    const symptomSeverity = document.getElementById('symptomSeverity').value;
  
    if (!symptomDescription) {
      alert('Please enter a symptom description.');
      return;
    }
  
    const res = await addSymptomEntry({ symptomDescription, symptomOnset, symptomDuration, symptomSeverity});
  
    window.location.href = 'home.html'

};