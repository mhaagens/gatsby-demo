const latinize = require("latinize");

const toKebabCase = (string = "") => {
  if (typeof string === "string" || string instanceof String) {
    const str = string.toLowerCase().split(" ").join("-");
    return latinize(str);
  }
  return string;
};

module.exports = toKebabCase;
