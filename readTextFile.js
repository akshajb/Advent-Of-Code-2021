const fs = require("fs");

const fileContent = async function (path) {
  const file = await fs.readFileSync(path, "utf8");
  const inputArray = file.split("\n");

  return inputArray;
};

module.exports = fileContent;
