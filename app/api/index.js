// General api to access data
export default function Api(path, params, method, token) {
  let options;
  options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      ...(token && { token: token }),
    },
    method: method,
    ...(params && { body: JSON.stringify(params) }),
  };

  return fetch(path, options)
    .then(resp => resp.json())
    .then(json => json)
    .catch(error => error);
}
