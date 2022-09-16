const path = require("path");
const { getLocalizedPaths } = require("./getLocalizedPaths");
const { localeKeys } = require("../src/static/locales");

async function createSanityPages({ actions, graphql, reporter }) {
  const allPages = await graphql(`
    {
      allSanityNewPage(
        filter: {
          _rawPageBuilder: { ne: null }
          id: { ne: null }
          pageMetadata: {
            localeSlug: {
              en: { current: { ne: null } }
              no: { current: { ne: null } }
            }
          }
        }
      ) {
        nodes {
          id
          title
          pageMetadata {
            localeSlug {
              no {
                current
              }
              en {
                current
              }
            }
          }
        }
      }
    }
  `).then(({ data }) => {
    const pages = data.allSanityNewPage.nodes;
    localeKeys.forEach((locale) => {
      pages.forEach(({ id, title, pageMetadata }) => {
        const localeSlugs = pageMetadata?.localeSlug;
        const localizedPaths = getLocalizedPaths(localeSlugs);
        const pageTemplate = path.resolve("src/templates/page.jsx");
        actions.createPage({
          path: localizedPaths[locale],
          component: pageTemplate,
          context: {
            id,
            title,
            locale,
            localizedPaths,
          },
        });

        reporter.info(
          `✅ Success creating "${title}" at (${localizedPaths[locale]}).`
        );
      });
    });
  });

  return allPages;
}

module.exports = {createSanityPages}
