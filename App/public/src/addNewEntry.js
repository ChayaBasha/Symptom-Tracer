
const urlParams = new URLSearchParams(window.location.search);
const symptomLogName = urlParams.get("symptomLogName");
showSymptomLogName(symptomLogName); 

const doAddSymptomEntry = async (event) => {
  const urlParams = new URLSearchParams(window.location.search);
  const symptomLogId = urlParams.get("symptomLogId");
    event.preventDefault();
  
    const symptomDescription = document.getElementById('symptomDescription').value;
    const symptomDuration = document.getElementById('symptomDuration').value;
    const symptomOnset = document.getElementById('symptomOnset').value;
    const symptomSeverity = document.getElementById('symptomSeverity').value;
  
    if (!symptomDescription) {
      alert('Please enter a symptom description.');
      return;
    }
    if(!symptomOnset) {
      alert('you must enter a date and time of onset');
      return;
    }
  
    const res = await addSymptomEntry({ symptomLogId, symptomDescription, symptomOnset, symptomDuration, symptomSeverity});
  
    window.location.href = 'home.html'

};