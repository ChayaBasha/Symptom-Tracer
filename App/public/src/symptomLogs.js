
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


      li.addEventListener('click', function (_mouseEvent) {
        showSymptomEntries(symptomLog._id);
        showSymptomLogName(symptomLog.symptomLogName);
        addEntryLocation = `/newSymptomEntry.html?symptomLogId=${symptomLog._id}&symptomLogName=${encodeURIComponent(symptomLog.symptomLogName)}`;
        addUpdateLocation = `/updateSymptomLog.html?symptomLogId=${symptomLog._id}&symptomLogName=${encodeURIComponent(symptomLog.symptomLogName)}`;
        const deleteSymptomLogButton = document.getElementById("deleteLog");
        deleteSymptomLogButton.addEventListener('click', function (_mouseEvent) {
          deleteSymptomLog(symptomLog).then(res => {
            console.log(res.status);
            if (res && res.status === 200) {
              li.remove();
            }
          })
        });
      })

      const nameSpan = document.createElement('div');
      nameSpan.className = 'logName flex-child';
      nameSpan.innerText = symptomLog.symptomLogName;

      block.appendChild(nameSpan);

      li.appendChild(block);
      ul.appendChild(li);

    });

  }
})();


//this is to load everything on the symptom log page with entries and nav
let addEntryLocation = undefined;
const addEntry = document.getElementById('addEntry');
if (addEntry) {
  addEntry.addEventListener('click', function (_mouseEvent) {
    if (addEntryLocation) {
      window.location.href = addEntryLocation

    }
  });
}
let addUpdateLocation = undefined;
const symptomLogHeader = document.getElementById('symptomLogName');
if (symptomLogHeader) {
  symptomLogHeader.addEventListener('click', function (_mouseEvent) {
    if (addUpdateLocation) {
      window.location.href = addUpdateLocation;
    }
  })
};

async function showSymptomEntries(symptomLogId) {

  const symptomEntries = await getSymptomEntries(symptomLogId);
  console.log(symptomEntries);

  const defaultPlaceHolderElement = document.getElementById("defaultPlaceHolder");
  defaultPlaceHolderElement.setAttribute("hidden", null);

  const symptomEntryElement = document.getElementById('symptomEntries');
  symptomEntryElement.removeAttribute("hidden");

  const logNavBar = document.getElementById("logNavBar");
  logNavBar.removeAttribute("hidden");

  const oldEntries = symptomEntryElement.querySelectorAll(".entryListItem");
  oldEntries.forEach((oldEntry) => {
    symptomEntryElement.removeChild(oldEntry)
  });

  if (symptomEntries.length) {

    //Create Table with Symptom Etnries 
    symptomEntries.map((symptomEntry) => {

      const tr = document.createElement('tr');
      tr.className = "entryListItem";
      tr.addEventListener('click', function(_mouseEvent){
        window.location.href=`/updateSymptomEntry.html?symptomLogId=${
            symptomEntry.symptomLog_id
          }&symptomEntryId=${
            symptomEntry._id
          }&symptomOnset=${
            encodeURIComponent(symptomEntry.symptomOnset)
          }&symptomDescription=${
            encodeURIComponent(symptomEntry.symptomDescription)
          }&symptomDuration=${
            encodeURIComponent(symptomEntry.symptomDuration)
          }&symptomSeverity=${
            encodeURIComponent(symptomEntry.symptomSeverity)
          }`;
      })

      const deleteButton = document.createElement('td');
      deleteButton.className = "fa fa-minus";
      deleteButton.addEventListener('click', function (_mousEvent) {
        deleteSymptomEntry(symptomEntry).then(res => {
          console.log(res.status);
          if (res && res.status === 200) {
            tr.remove();
          }
        })
      });

      const onsetSpan = document.createElement('td');
      onsetSpan.innerText =  new Date(symptomEntry.symptomOnset).toLocaleString();

      const descriptionSpan = document.createElement('td');
      descriptionSpan.innerText = symptomEntry.symptomDescription;

      const durationSpan = document.createElement('td');
      durationSpan.innerText = symptomEntry.symptomDuration;

      const severitySpan = document.createElement('td');
      severitySpan.innerText = symptomEntry.symptomSeverity;

      tr.appendChild(deleteButton);
      tr.appendChild(onsetSpan);
      tr.appendChild(descriptionSpan);
      tr.appendChild(durationSpan);
      tr.appendChild(severitySpan);


      symptomEntryElement.appendChild(tr);
    });
  } else {
    const tr = document.createElement('tr');
    tr.className = "entryListItem";

    const spacerColumn = document.createElement('td');
    spacerColumn.innerText = "";

    const spacerColumn2 = document.createElement('td');
    spacerColumn2.innerText = "";

    const noEntries = document.createElement('td');
    noEntries.innerText = "There are no Entries to Display"

    tr.appendChild(spacerColumn);
    tr.appendChild(spacerColumn2);
    tr.appendChild(noEntries);

    symptomEntryElement.appendChild(tr);
  }
};