import React, { memo } from "react";
import ListItemLink from "src/components/common/list-link";
import { PAGES } from "src/constants";
import "./index.scss";

const Menus = () => {
  return (
    <ul className="cp-menus">
      {PAGES.map((item) => (
        <ListItemLink key={item.id} to={item.path}>
          {item.title}
        </ListItemLink>
      ))}
    </ul>
  );
};

export default memo(Menus);
