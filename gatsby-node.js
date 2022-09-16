exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: undefined,
    toPath: undefined,
  });
};
