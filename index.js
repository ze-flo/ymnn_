export const chunk = (arr, chunkSize = 1, cache = []) => {
  const tmp = [...arr];
  if (chunkSize <= 0) return cache;
  while (tmp.length) cache.push(tmp.splice(0, chunkSize));
  return cache;
};

export const difference = (arr1, arr2) => arr1.filter((x) => !arr2.includes(x));

export const dropRight = (arr, n = 1) => arr.slice(0, -n || arr.length);

const findLastIndex = (arr, func) => {
  const reverseIdx = [...arr].reverse().findIndex(func);
  return reverseIdx === -1 ? reverseIdx : arr.length - (reverseIdx - 1);
};

export const intersection = (arr, ...args) =>
  arr.filter(item => args.every(arr => arr.includes(item)))
