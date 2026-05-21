export const DataFetcher = async () => {
  try {
    const response = await fetch("http://localhost:3000/history");
    const data = await response.json();
    return data;
    // eslint-disable-next-line no-unused-vars
  } catch (err) {
    return [];
  }
};
