const SYMPTOMLOG_API = `${BASE_API_URL}/symptomLog`;

function getSymptomLogs() {
  console.log(symptomLogs)
  return _get(SYMPTOMLOG_API).then(res => res.json())
};

function addSymptomLog(entryData) {
  return _post(SYMPTOMLOG_API, entryData);
};

function getSymptomLog(symptomLogId) {
  console.log(symptomLogId);
  if (symptomLogId) {
    return _get(`${SYMPTOMLOG_API}/${symptomLogId}`).then(res => res.json());
  }
}

function deleteEntry(symptomLogId) {
  return _delete(`${SYMPTOMLOG_API}/${symptomLogId}`);
}

//symptom Entry CRUD Functions 

const SYMPTOMENTRY_API = function (symptomLogId) {
  return `${SYMPTOMLOG_API}/${symptomLogId}/symptomEntry`;
};

function getSymptomEntries(symptomLogId) {
  return _get(SYMPTOMENTRY_API(symptomLogId)).then(res => res.json())
};

function addSymptomEntry(entryData) {
  return _post(SYMPTOMENTRY_API(entryData.symptomLogId), entryData).then(res =>{
    if(res.status === 400){
      console.log(res.json);
    }
  });
};