import { filterOutNonNumbers } from "./utils";

const API_URL = "http://pb-api.herokuapp.com/bars";

export const getAppDataService = () => {
  return fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      const buttonValues = filterOutNonNumbers(data.buttons).sort(
        (a, b) => a - b
      );
      const barValues = filterOutNonNumbers(data.bars);

      return { buttonValues, barValues };
    });
};
