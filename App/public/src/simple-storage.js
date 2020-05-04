const setStorage = (key, data) => {
    console.log(data);
    if(!data) {
      throw new Error(`No data to save to key ${key}!`);
    }
    const dataAsString = JSON.stringify(data); 
    const encodedData = btoa(dataAsString); // {}
    localStorage.setItem(key, encodedData);
  };
  
  const getStorage = (key) => {
    const encodedData = localStorage.getItem(key);
    if(!encodedData) {
      return;
    }
    const decodedData = atob(encodedData);
    return JSON.parse(decodedData); // {}
  };
  
  const clearStorage = (key) => {
    localStorage.removeItem(key);
  };
  
  const storageHasData = () => localStorage.length > 0;