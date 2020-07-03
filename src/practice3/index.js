function handleResponse(response) {
  return response.json().then((json) => {
    if (response.ok) {
      const { content, origin, author } = json;
      return [origin, author, content];
    }
    return Promise.reject({
      ...json,
      status: response.status,
      statusText: response.statusText,
    });
  });
}

export const getPoetry = async () => {
  const result = await fetch("https://v1.jinrishici.com/all.json")
    .then(handleResponse)
    .catch((error) => console.log(error));
  return result;
};
