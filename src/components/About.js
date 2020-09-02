/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { MemoryRouter as Router } from "react-router";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";

const LinkBehavior = React.forwardRef((props, ref) => (
  <RouterLink ref={ref} to="https://www.nps.gov/index.htm" {...props} />
));

export default function LinkRouter() {
  return (
    <Router className="about">
      <div>
        <Link component={RouterLink} to="/">
          View Inspiration!
        </Link>
        <br />
        <Link component={LinkBehavior} href="#"></Link>
      </div>
    </Router>
  );
}
