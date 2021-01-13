export const replaceArrayItem = (arr, index, newVal) => [
  ...arr.slice(0, index),
  newVal,
  ...arr.slice(index + 1),
];

export const fetchURL = async (url, init) => {
  const response = await fetch(url, init);
  return await response.json();
};
