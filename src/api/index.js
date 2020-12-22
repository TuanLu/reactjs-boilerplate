const API = {
  get: (url) => {
    if (!url) return Promise.reject();
    return new Promise((resolve, reject) => {
      fetch(`/api${url}`, {
        headers: {}
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  },
  post: () => {}
};

export default API;
