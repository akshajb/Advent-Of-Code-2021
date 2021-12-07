const fileContents = require("../readTextFile");

const ThreeA = function () {
  return new Promise((resolve) => {
    let gamma = "";
    let epsilon = "";
    const binaryMap = [];
    fileContents("./data/third.txt").then((inputArray) => {
      const sampleBinaryLength = inputArray[0].length;

      for (let i = 0; i < sampleBinaryLength; i++) {
        let zeroCount = 0;
        let oneCount = 0;

        inputArray.forEach((binary) => {
          if (binary[i] == "0") {
            zeroCount++;
          }
          if (binary[i] == "1") {
            oneCount++;
          }
        });

        binaryMap.push({ 0: zeroCount, 1: oneCount });
      }

      binaryMap.forEach((pos) => {
        if (pos[0] > pos[1]) {
          gamma += "0";
          epsilon += "1";
        } else {
          gamma += "1";
          epsilon += "0";
        }
      });

      resolve(parseInt(epsilon, 2) * parseInt(gamma, 2));
    });
  });
};

module.exports = ThreeA;
