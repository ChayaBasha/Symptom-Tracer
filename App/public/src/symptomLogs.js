(async () => {
    const symptomLogs = await getSymptomLogs();
    console.log(symptomLogs);
  
    if (symptomLogs.length) {
      const entryElement = document.getElementById('symptomLogs');
      const loadingEntryElement = entryElement.childNodes[1];
  
      const ul = document.createElement('ul');
  
      entryElement.replaceChild(ul, loadingEntryElement); 
  
      symptomLogs.map((symptomLog) => {
       
        const li = document.createElement('li');
        li.className = 'symptomLog-li';
        const block = document.createElement('div');
        block.className = 'symptomLog-block';
        //TO DO get it so you can click each tiem 
        // li.addEventListener('click', function(_mouseEvent){
        //   window.location.href = "/journalEntry.html?id="+journalEntry._id;
        // }
        // ); 
         
        const nameSpan = document.createElement('div');
        nameSpan.className = 'symptomLog-name flex-child';
        nameSpan.innerText = symptomLog.symptomLogName;
  
      
        block.appendChild(nameSpan);
  
        li.appendChild(block);
        ul.appendChild(li);
      });
    }
  })();
