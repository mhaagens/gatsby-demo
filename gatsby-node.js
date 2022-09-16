const { createSanityPages } = require("./gb-node/createSanityPages");
const { createSanityRedirects } = require("./gb-node/createSanityRedirects");

exports.createPages = async (args) => {
  Promise.all([createSanityPages(args), createSanityRedirects(args)]);
};
