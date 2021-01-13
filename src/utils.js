export const replaceArrayItem = (arr, index, newVal) => [
  ...arr.slice(0, index),
  newVal,
  ...arr.slice(index + 1),
];
