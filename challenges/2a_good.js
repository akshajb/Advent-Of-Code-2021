const fileContents = require("../readTextFile");

const TwoAGood = function () {
  return new Promise((resolve) => {
    const submarineCourse = {
      horizontal: 0,
      depth: 0,
    };

    // EASY Interative solution. Efficient. O(n)

    fileContents("./data/second.txt").then((inputArray) => {
      inputArray.forEach((input) => {
        const command = input.split(" ")[0];
        const value = parseInt(input.split(" ")[1]);

        if (command == "down") submarineCourse.depth += value;
        else if (command == "up") submarineCourse.depth -= value;
        else submarineCourse.horizontal += value;
      });

      resolve(submarineCourse.depth * submarineCourse.horizontal);
    });
  });
};

module.exports = TwoAGood;
