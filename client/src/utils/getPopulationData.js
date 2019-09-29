import { isNumber } from "util";

export const getPopulation = data => {
  return data
    .split(" ")
    .map(item => {
      if (Number(item) !== 0 && !isNaN(Number(item))) {
        return Number(item.slice(0, 1));
      }
    })
    .filter(item => {
      if (isNumber(item)) {
        return item;
      }
    });
};
