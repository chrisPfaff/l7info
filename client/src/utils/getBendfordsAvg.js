export const getBenfordsAvg = (obj, length) => {
  let benfordsHash = {};

  for (let item in obj) {
    benfordsHash[item] = ((obj[item] / length) * 100).toFixed(2);
  }
  return benfordsHash;
};
