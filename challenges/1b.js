const fileContents = require("../readTextFile");

const OneB = function () {
  return new Promise((resolve) => {
    fileContents("./data/first.txt").then((inputArray) => {
      const integerArr = inputArray.map((input) => parseInt(input));
      let count = 0;
      for (let i = 0; i < integerArr.length; i++) {
        if (integerArr[i + 2]) {
          const sumOne = getSlideSum(i, integerArr);
          const sumTwo = getSlideSum(i + 1, integerArr);
          if (sumTwo > sumOne) count++;
        }
      }
      resolve(count);
    });
  });
};

function getSlideSum(index, array) {
  return array[index] + array[index + 1] + array[index + 2];
}

module.exports = OneB;
