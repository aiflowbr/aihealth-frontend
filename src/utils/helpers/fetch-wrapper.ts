import { useAuthStore } from "@/stores/auth";

export const fetchWrapper = {
  get: request("GET"),
  post: request("POST"),
  put: request("PUT"),
  delete: request("DELETE"),
};

export const fetchAPIWrapper = {
  get: request("GET", import.meta.env.VITE_APP_BACKEND_PREFIX, true),
  post: request("POST", import.meta.env.VITE_APP_BACKEND_PREFIX, true),
  put: request("PUT", import.meta.env.VITE_APP_BACKEND_PREFIX, true),
  delete: request("DELETE", import.meta.env.VITE_APP_BACKEND_PREFIX, true),
};

function request(
  method: string,
  prefix: string = "",
  check_auth: boolean = false
) {
  return (url: string, body?: object) => {
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const requestOptions: any = {
      method,
      headers: authHeader(url),
    };
    if (body) {
      if (body instanceof FormData) {
        requestOptions.body = body;
      } else {
        requestOptions.headers["Content-Type"] = "application/json";
        requestOptions.body = JSON.stringify(body);
      }
    }
    return new Promise((accept, reject) => {
      fetch(prefix + url, requestOptions)
        .then((response) => {
          accept(
            check_auth ? handleResponseAPI(response) : handleResponse(response)
          );
        })
        .catch(() => {
          reject("Communication error. Check network connection.");
        });
    });
  };
}

// helper functions

function authHeader(url: string) {
  // return auth header with jwt if user is logged in and request is to the api url
  const { token } = useAuthStore();
  const isLoggedIn = !!token;
  const isApiUrl = url.startsWith(import.meta.env.VITE_API_URL);
  if (isLoggedIn && isApiUrl) {
    return { Authorization: `Bearer ${token}` };
  } else {
    return {};
  }
}

function handleResponseAPI(response: any) {
  return response.json().then((data: any) => {
    if (!response.ok) {
      const { token, logout } = useAuthStore();
      if ([401, 403].includes(response.status) && token) {
        // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
        logout();
      }
      const error = (data && data.detail) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}

function handleResponse(response: any) {
  return response.text().then((text: string) => {
    if (!response.ok) {
      const error = response.statusText;
      return Promise.reject(error);
    }
    return text;
  });
}

export default fetchWrapper;
