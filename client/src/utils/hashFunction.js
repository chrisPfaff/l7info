export const hashFunction = data => {
  let hash = {};
  data.forEach(item => {
    if (hash[item] === undefined) {
      hash[item] = 1;
    } else {
      hash[item] += 1;
    }
  });
  return hash;
};

// const avgFunction = obj => {
//   for (item of obj) {
//     console.log(obj[item]);
//   }
// };
