
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
};

function deleteSymptomLog(entryData) {
  const symptomLogId = entryData._id;
  return _delete(`${SYMPTOMLOG_API}/${symptomLogId}`).then(res => {
    if(res && res.status==200) {
      alert('Symptom Log deleted')
    } else {
      throw new Error ('could not remove symptom log at this time');
    }
    console.log(res);
    return res;
  })
};

function updateSymptomLog(symptomLogId, entryData) {
  return _put(`${SYMPTOMLOG_API}/${symptomLogId}`, entryData).then(res => res.json());
}

//symptom Entry CRUD Functions 

function showSymptomLogName(symptomLogName){
  const symptomLogNameElement = document.getElementById('symptomLogName');
  if(symptomLogNameElement) {
    symptomLogNameElement.textContent=symptomLogName;
  }
};

const SYMPTOMENTRY_API = function (symptomLogId) {
  return `${SYMPTOMLOG_API}/${symptomLogId}/symptomEntry`;
};

function getSymptomEntries(symptomLogId) {
  return _get(SYMPTOMENTRY_API(symptomLogId)).then(async (res) => {
    const responseJson = await res.json();
    return responseJson;
  });
};

function addSymptomEntry(entryData) {
  return _post(`${SYMPTOMENTRY_API(entryData.symptomLogId)}`, entryData).then(res =>{
    if(res.status === 400){
      console.log(res.json);
    }
  });
};
function updateSymptomEntry(symptomLogId, symptomEntryId, entryData) {
  return _put(`${SYMPTOMENTRY_API(symptomLogId)}/${symptomEntryId}`, entryData).then(res => res.json());
};

async function deleteSymptomEntry(entryData) {
 return await _delete(`${SYMPTOMENTRY_API(entryData.symptomLog_id)}/${entryData._id}`).then(res => {
    if(res && res.status==200) {
      alert('Symptom Entry deleted')
    } else {
      throw new Error ('could not remove symptom entry at this time');
    }
    console.log(res);
    return res;
  })
}