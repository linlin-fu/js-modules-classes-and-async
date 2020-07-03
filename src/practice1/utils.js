const getURL = (address, path, port) => {
  return `${address}:${port + path}`;
};
export default getURL;
