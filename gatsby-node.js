exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: `/test-redirect`,
    toPath: `/page-a`,
  });
};
