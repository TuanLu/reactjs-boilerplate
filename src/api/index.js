const headers = () => {
  const token = "";
  if (process.env.NODE_ENV === "production") {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    };
  }
  return {
    "Content-Type": "application/json"
  };
};

const request = (method, endpoint, data) => {
  return new Promise((resolve, reject) => {
    fetch(`/api${endpoint}`, {
      method,
      body: JSON.stringify(data),
      headers: headers()
    })
      .then((res) => res.json())
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const get = (endpoint) => {
  return request("get", endpoint);
};

const post = (endpoint, data = null) => {
  return request("post", endpoint, data);
};

export default {
  get,
  post,
  headers
};
