
//this is to display the symptom Logs 
(async () => {
  const symptomLogs = await getSymptomLogs();
  console.log(symptomLogs);

  if (symptomLogs.length) {
    const symptomLogElement = document.getElementById('symptomLogs');
    const loadingEntryElement = symptomLogElement.childNodes[1];

    const ul = document.createElement('ul');
    ul.className = "logList";

    symptomLogElement.replaceChild(ul, loadingEntryElement);

    symptomLogs.map((symptomLog) => {

      const li = document.createElement('li');
      li.className = "logListItem";
      const block = document.createElement('div');
      block.className = "logBlock";

      //TO DO get it so you can click each tiem 
      li.addEventListener('click', function (_mouseEvent) {
        showSymptomEntries(symptomLog._id);
      }
      );

      const nameSpan = document.createElement('div');
      nameSpan.className = 'logName flex-child';
      nameSpan.innerText = symptomLog.symptomLogName;

      const addEntry = document.createElement('button')
      addEntry.className = 'logList';
      addEntry.innerText = " + ";
      addEntry.addEventListener('click', function (_mouseEvent) {
        window.location.href = `./newSymptomEntry.html?symptomLogId=${symptomLog._id}&symptomLogName=${encodeURIComponent(symptomLog.symptomLogName)}`;
      })

      block.appendChild(nameSpan);
      block.appendChild(addEntry);

      li.appendChild(block);
      ul.appendChild(li);

    });
  }
})();


//this is to get the symptom entries

async function showSymptomEntries(symptomLogId) {

  // const symptomLogId = symptomLog._id;

  const symptomEntries = await getSymptomEntries(symptomLogId);
  console.log(symptomEntries);

  if (symptomEntries.length) {
    const symptomEntryElement = document.getElementById('symptomEntries');
    
    const oldEntries = symptomEntryElement.querySelectorAll(".entryListItem");
    oldEntries.forEach((oldEntry) => {
      symptomEntryElement.removeChild(oldEntry)
    });
    symptomEntries.map((symptomEntry) => {

      const tr = document.createElement('tr');
      tr.className = "entryListItem";

      const onsetSpan = document.createElement('td');
      onsetSpan.innerText = symptomEntry.symptomOnset;
      onsetSpan.className = "entryOnset"

      const descriptionSpan = document.createElement('td');
      descriptionSpan.innerText = symptomEntry.symptomDescription;
      descriptionSpan.className = "entryDescription";

      const durationSpan = document.createElement('td');
      durationSpan.innerText = symptomEntry.symptomDuration;

      const severitySpan = document.createElement('td');
      severitySpan.innerText = symptomEntry.symptomSeverity;

      tr.appendChild(onsetSpan);
      tr.appendChild(descriptionSpan);
      tr.appendChild(durationSpan);
      tr.appendChild(severitySpan);

      
      symptomEntryElement.appendChild(tr);
    });
  } else {
    console.log('to add an entry click +');
  }
};