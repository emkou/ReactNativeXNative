const defaultOptions = {
  method: 'GET',
  credentials: 'include'
};
const defaultHeaders = {
  Accept: 'application/json',
  'X-Source': appSource,
  'Content-Type': 'application/json'
};

const isJson = ({ headers }) => headers.has('Content-Type') && headers.get('Content-Type').includes('json');

const handleResponse = async resp => {
  if ([401, 502, 503, 504].includes(resp.status)) {
    return Promise.reject(resp);
  }

  if (resp.status === 204) {
    return resp;
  }

  let body;
  if (isJson(resp)) {
    body = await resp.json();
  }

  if (!resp.ok) {
    return Promise.reject({
      status: resp.status,
      url: resp.url,
      headers: resp.headers,
      body
    });
  }

  return {
    ...resp,
    body
  };
};

const handleError = error => {
  return Promise.reject(error);
};

export const makeRequest = (path, options = {}) => {
  if (typeof path !== 'string' || path.length === 0) {
    throw new Error('First argument (path) must be set');
  }
  if (!path.startsWith('/')) {
    throw new Error('First argument (path) must have leading /');
  }

  const url = `${endpoint}${path}`;
  const { token, headers, body, ...fetchOptions } = options;

  const mergedOptions = {
    ...defaultOptions,
    ...fetchOptions,
    body: JSON.stringify(body),
    headers: {
      ...defaultHeaders,
      ...headers
    }
  };

  return fetch(url, mergedOptions).then(handleResponse, handleError);
};
