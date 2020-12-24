import React from "react";
import { Link, Route } from "react-router-dom";
import PropTypes from "prop-types";

function ListItemLink({ to, ...rest }) {
  return (
    <Route
      path={to}
      children={({ match, location }) => (
        <li className={match && location.pathname === to ? "active" : ""}>
          <Link to={to} {...rest} />
        </li>
      )}
    />
  );
}

ListItemLink.propTypes = {
  to: PropTypes.string.isRequired
};

export default ListItemLink;
