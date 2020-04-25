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

function deleteEntry (symptomLogId) {
  return _delete(`${SYMPTOMLOG_API}/${symptomLogId}`);
}

const SYMPTOMENTRY_API =`${SYMPTOMLOG_API}/symptomEntry`;

function getSymptomEntries() {
    return _get(`${SYMPTOMENTRY_API}`).then(res => res.json())
  };

function addSymptomEntry(entryData) {
  return _post(SYMPTOMENTRY_API, entryData);
};