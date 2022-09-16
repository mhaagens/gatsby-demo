exports.createPages = async ({ graphql, actions, reporter }) => {
  await graphql(`
    {
      redirects: allSanityRedirect {
        nodes {
          fromSlug
          toSlug
          toURL
          isExternal
          responseType
        }
      }
    }
  `).then(({ data }) => {
    data.redirects?.nodes.forEach(
      ({ fromSlug, isExternal, toURL, toSlug, responseType }) => {
        const path = isExternal ? toURL : toSlug;
        actions.createRedirect({
          fromPath: fromSlug,
          toPath: path,
          statusCode: responseType,
        });

        reporter.info(
          `🔗 Redirect [${responseType}] "${fromSlug}" => "${path}".`
        );
      }
    );
  });
};
