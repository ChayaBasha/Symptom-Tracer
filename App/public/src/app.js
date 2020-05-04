function setToken(body) {
     
    const {auth, access_token} = body;

    setStorage('isAuth', auth);
    setStorage('access_token', access_token);
};

const doLogin = function(event) {
    event.preventDefault();
    const userName = document.getElementById('userName').value;
    const password = document.getElementById('password').value;
  
    login({
      userName: userName,
      password: password
    }).then(res => res.json())
    .then(setToken).then(() =>
      window.location.href = 'home.html'
    );
};

  const doRegister = function(event) {
    event.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const userName = document.getElementById('userName').value;
    const password = document.getElementById('password').value;

    if(!userName) {
      alert("you must enter a username");
      return;
    };

    if(!password) {
      alert("you must enter a password");
      return;
    };
  
    register({
      firstName: firstName,
      lastName: lastName,  
      userName: userName,
      password: password
    }).then(res => res.json())
    .then(setToken).then(() =>
      window.location.href = 'home.html'
    );
  };
  
  const doLogout = function(event) {
    event.preventDefault();
    logout();
    window.location.href= '/';
  };

  (() => {
  if (storageHasData()) {
    const isAuth = getStorage('isAuth');
    if(isAuth) {
      document.getElementById('login').setAttribute("hidden", "hidden");
      document.getElementById('logout').removeAttribute("hidden");
    } else {
      document.getElementById('login').removeAttribute("hidden");
      document.getElementById('logout').setAttribute("hidden", "hidden");
    }
  }
})();