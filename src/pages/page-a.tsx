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

const PageA = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>PAGE A</h1>
    </main>
  );
};

export default PageA;

export const Head: HeadFC = () => <title>Page A</title>;
