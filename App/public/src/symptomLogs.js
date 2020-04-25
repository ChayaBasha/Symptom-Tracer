
//this is to display the symptom Logs 
(async () => {
    const symptomLogs = await getSymptomLogs();
    console.log(symptomLogs);
  
    if (symptomLogs.length) {
      const symptomLogElement = document.getElementById('symptomLogs');
      const loadingEntryElement = symptomLogElement.childNodes[1];
  
      const ul = document.createElement('ul');
      ul.className='asideBar';
  
      symptomLogElement.replaceChild(ul, loadingEntryElement); 
  
      symptomLogs.map((symptomLog) => {
       
        const li = document.createElement('li');
        const block = document.createElement('div');

        //TO DO get it so you can click each tiem 
        li.addEventListener('click', function(_mouseEvent){
          showSymptomEntries(symptomLog._id);
        }
        ); 
        const addEntry = document.createElement('button')
        addEntry.className = 'symptom-add flex-child';
        addEntry.innerText = "+";
        addEntry.addEventListener('click', function(_mouseEvent){
          window.location.href=`./newSymptomEntry.html?symptomLogId=${symptomLog._id}&symptomLogName=${encodeURIComponent(symptomLog.symptomLogName)}`;
        })

        const nameSpan = document.createElement('div');
        nameSpan.className = 'symptomLog-name flex-child';
        nameSpan.innerText = symptomLog.symptomLogName;
  
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
    const defaultEntryElement = symptomEntryElement.childNodes[1];

    const ul = document.createElement('ul');
    ul.className='asideBar';

    symptomEntryElement.replaceChild(ul, defaultEntryElement); 

    symptomEntries.map((symptomEntry) => {
     
      const li = document.createElement('li');
      // li.className='asideBar';
      const block = document.createElement('div');
      // block.className='asideBar'
      //TO DO get it so you can click each tiem 
      // li.addEventListener('click', function(_mouseEvent){
      //   getSymptomLog(symptomLog._id);
      // const symptomLogNameSpan = document.createElement('div');
      // symptomLogNameSpan.innerText = symptomLog.symptomLogName;
      
      const onsetSpan = document.createElement('div');
      onsetSpan.innerText = symptomEntry.symptomOnset;
      
      const descriptionSpan = document.createElement('div');
      descriptionSpan.innerText = symptomEntry.symptomDescription;

      const durationSpan = document.createElement('div');
      durationSpan.innerText = symptomEntry.symptomDuration;

      const severitySpan = document.createElement('div');
      severitySpan.innerText = symptomEntry.symptomSeverity;

      // block.appendChild(symptomLogNameSpan);
      block.appendChild(onsetSpan);
      block.appendChild(descriptionSpan);
      block.appendChild(durationSpan);
      block.appendChild(severitySpan);

      li.appendChild(block);
      ul.appendChild(li);
    });
  } else {console.log('to add an entry click +');
  }
};