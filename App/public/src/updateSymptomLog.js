function currentSymptomLog(symptomLogName) {
  document.getElementById('symptomLogName').value = symptomLogName;
};

const urlParams = new URLSearchParams(window.location.search);
const symptomLogName = urlParams.get('symptomLogName');

currentSymptomLog(symptomLogName);

const symptomLogId = urlParams.get('symptomLogId');

const doUpdateSymptomLog = function (event) {
  event.preventDefault();
  const symptomLogName = document.getElementById('symptomLogName').value;

  updateSymptomLog(symptomLogId, {
    symptomLogName: symptomLogName,
  }).then(_res => {
    window.location.href = '/home.html';
  })
}