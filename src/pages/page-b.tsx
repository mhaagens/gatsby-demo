import * as React from "react";
import type { HeadFC } from "gatsby";

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const PageB = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>PAGE B</h1>
    </main>
  );
};

export default PageB;

export const Head: HeadFC = () => <title>Page B</title>;
