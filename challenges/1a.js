const fileContents = require("../readTextFile");

const OneA = function () {
  return new Promise((resolve) => {
    fileContents("./data/first.txt").then((inputArray) => {
      const integerArr = inputArray.map((input) => parseInt(input));

      resolve(
        integerArr.filter((input, index) => {
          if (inputArray[index + 1]) {
            if (inputArray[index + 1] > input) return inputArray[index + 1];
          }
        }).length
      );
    });
  });
};

module.exports = OneA;
