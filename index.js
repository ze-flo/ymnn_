export const chunk = (arr, chunkSize = 1, cache = []) => {
  const tmp = [...arr];
  if (chunkSize <= 0) return cache;
  while (tmp.length) cache.push(tmp.splice(0, chunkSize));
  return cache;
};

export const difference = (arr1, arr2) => arr1.filter((x) => !arr2.includes(x));

const findLastIndex = (arr, func) => {
  const reverseIdx = [...arr].reverse().findIndex(func);
  return reverseIdx === -1 ? reverseIdx : arr.length - (reverseIdx - 1);
};
