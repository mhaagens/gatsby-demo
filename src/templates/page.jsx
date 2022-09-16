import PropTypes from "prop-types";
import React, { useMemo } from "react";

import { graphql } from "gatsby";

const colorShape = PropTypes.shape({
  color: PropTypes.shape({
    hex: PropTypes.string,
  }),
});

const propTypes = {
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired,
    localizedPaths: PropTypes.objectOf(PropTypes.any).isRequired,
  }).isRequired,
  data: PropTypes.shape({
    page: PropTypes.shape({
      id: PropTypes.string.isRequired,
      updatedAt: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      bookingQuery: PropTypes.string,
      pageMainTextColor: colorShape,
      pageMainBgColor: colorShape,
      pageMainAccentColor: colorShape,
      // pageTheme: PropTypes.shape({
      //   name: PropTypes.string,
      // }),
      pageMetadata: PropTypes.shape({
        titleTag: PropTypes.any,
        metaDescription: PropTypes.any,
        seoImage: PropTypes.any,
      }),
      pageBuilder: PropTypes.arrayOf(PropTypes.any).isRequired,
    }),
  }).isRequired,
};

export const query = graphql`
  query AllPages($id: String!) {
    pageTheme: sanityNewPage(id: { eq: $id }) {
      pageMainBgColor {
        color {
          hex
        }
      }
      pageMainAccentColor {
        color {
          hex
        }
      }
      pageMainTextColor {
        color {
          hex
        }
      }
    }
    page: sanityNewPage(id: { eq: $id }) {
      id
      updatedAt: _updatedAt
      bookingQuery
      title
      pageMetadata {
        titleTag {
          no
          en
        }
        metaDescription {
          no
          en
        }
        seoImage {
          alt {
            no
            en
          }
          asset {
            id
          }
        }
      }
      pageBuilder: _rawPageBuilder(resolveReferences: { maxDepth: 10 })
    }
  }
`;

function PageTemplate({ data: { page } }) {
  const { pageMetadata } = page;

  return (
    <>
      <code>{JSON.stringify(pageMetadata)}</code>
    </>
  );
}

PageTemplate.propTypes = propTypes;
export default PageTemplate;
