function _get(url) {
  return fetch(url, {
    method: 'GET',
    headers: {
      'auth-token': authTokenHeader(),

    }
  }).then(handleRequestFailure);
}

function _post(url, data) {
  return fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json', 'auth-token': authTokenHeader()
    },
    body: JSON.stringify(data)
  }).then(handleRequestFailure);
}

function _put(url, data) {
  return fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json', 'auth-token': authTokenHeader()
    },
    body: JSON.stringify(data)
  }).then(handleRequestFailure);
}

function _delete(url) {
  return fetch(url, {
    method: 'DELETE',
    headers: {
      'auth-token': authTokenHeader(),
    }
  }).then(handleRequestFailure);

} ;

function authTokenHeader() {
  const access_token = getStorage('access_token');
  if (access_token) {
    return "Bearer" + " " + access_token
  }
}
//TO Do: body stream is locked and not doing the logout
function handleRequestFailure(failedReq) {

  if (failedReq.status == 401) {
    logout();
    window.location.href = '/';
  }
  if (failedReq.status == 403) {
    if (failedReq.json().msg == "Invalid Token") {
      logout();
      window.location.href = '/';
    }
    logout();
    window.location.href = '/';
  }
  return failedReq;
}