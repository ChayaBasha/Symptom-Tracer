const SYMPTOMLOG_API = `${BASE_API_URL}/symptomLog`;

function getSymptomLogs() {
  return _get(SYMPTOMLOG_API).then(res => res.json())
};

function addSymptomLog(entryData) {
  return _post(SYMPTOMLOG_API, entryData);
};

function getSymptomLog(symptomLogId) {
  console.log(symptomLogId);
  if (sypmtomLogId) {
    return _get(`${SYMPTOMLOG_API}/${symptomLogId}`).then(res => res.json());
  }
}

function deleteEntry (symptomLogId) {
  return _delete(`${SYMPTOMLOG_API}/${symptomLogId}`);
}