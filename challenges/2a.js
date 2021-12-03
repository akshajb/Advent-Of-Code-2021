const fileContents = require("../readTextFile");

const TwoA = function () {
  return new Promise((resolve) => {
    const submarineCourse = {
      horizontal: 0,
      depth: 0,
    };

    //   Clever but inefficient Solution, A SINGLE FOR EACH IS A BETTER SOLUTION

    fileContents("./data/second.txt").then((inputArray) => {
      const forward = totalCommands("forward", inputArray);
      const up = totalCommands("up", inputArray);
      const down = totalCommands("down", inputArray);

      submarineCourse.horizontal = forward;
      submarineCourse.depth = down - up;

      resolve(submarineCourse.depth * submarineCourse.horizontal);
    });
  });
};

const totalCommands = (command, array) => {
  return array
    .filter((input) => input.includes(command))
    .map((input) => parseInt(input.split(" ")[1]))
    .reduce((prev, curr) => curr + prev, 0);
};

module.exports = TwoA;
