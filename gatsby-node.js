exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: `/test-redirect-2`,
    toPath: `/page-a`,
  });
};
