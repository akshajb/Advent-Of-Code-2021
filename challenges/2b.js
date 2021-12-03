const fileContents = require("../readTextFile");

const TwoB = function () {
  return new Promise((resolve) => {
    const submarineCourse = {
      horizontal: 0,
      depth: 0,
      aim: 0,
    };

    fileContents("./data/second.txt").then((inputArray) => {
      inputArray.forEach((input) => {
        const command = input.split(" ")[0];
        const value = parseInt(input.split(" ")[1]);

        if (command == "down") submarineCourse.aim += value;
        else if (command == "up") submarineCourse.aim -= value;
        else {
          submarineCourse.horizontal += value;
          submarineCourse.depth += submarineCourse.aim * value;
        }
      });
      resolve(submarineCourse.depth * submarineCourse.horizontal);
    });
  });
};

module.exports = TwoB;
