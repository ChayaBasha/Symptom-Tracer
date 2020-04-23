const doAddSymptomLog = async (event) => {
    event.preventDefault();
  
    const symptomLogName = document.getElementById('symptomLogName').value;
  
    if (!symptomLogName) {
      alert('Please enter a symptom log title.');
      return;
    }
  
    const res = await addSymptomLog({ symptomLogName });
  
    window.location.href = 'home.html'

};