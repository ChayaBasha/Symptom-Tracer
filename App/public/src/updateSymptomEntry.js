function currentSymptomEntry(symptomOnset, symptomDescription, symptomDuration, symptomSeverity) {
    document.getElementById('symptomOnset').value = new Date(symptomOnset).toISOString().slice(0, -1);
    document.getElementById('symptomDescription').value = symptomDescription;
    document.getElementById('symptomDuration').value = symptomDuration;
    document.getElementById('symptomSeverity').value = symptomSeverity;
  };
  
  const urlParams = new URLSearchParams(window.location.search);
  const symptomOnset = urlParams.get('symptomOnset');
  const symptomDescription = urlParams.get('symptomDescription');
  const symptomDuration = urlParams.get('symptomDuration');
  const symptomSeverity = urlParams.get('symptomSeverity');

  console.log(symptomDescription);
  
  currentSymptomEntry(symptomOnset, symptomDescription, symptomDuration, symptomSeverity);
  
  
  const symptomLogId = urlParams.get('symptomLogId');
  const symptomEntryId = urlParams.get('symptomEntryId');
  
  const doUpdateSymptomEntry = function (event) {
    event.preventDefault();
    const symptomOnset = document.getElementById('symptomOnset').value;
    const symptomDescription  = document.getElementById('symptomDescription').value;
    const symptomDuration  = document.getElementById('symptomDuration').value;
    const symptomSeverity  = document.getElementById('symptomSeverity').value;
  
    updateSymptomEntry(symptomLogId, symptomEntryId, {
      symptomOnset: symptomOnset,
      symptomDescription: symptomDescription,
      symptomDuration: symptomDuration,
      symptomSeverity: symptomSeverity
    }).then(_res => {
      window.location.href = '/home.html';
    })
  }