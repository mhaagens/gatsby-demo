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

const Klinikker = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headingStyles}>KLINIKKER</h1>
    </main>
  );
};

export default Klinikker;

export const Head: HeadFC = () => <title>Klinikker</title>;
