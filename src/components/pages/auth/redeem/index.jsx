import React, { memo } from "react";
import { Switch, Route, useRouteMatch, Redirect } from "react-router-dom";
import ListItemLink from "src/components/common/list-link";
import ExchangeGift from "./ExchangeGift";
import LuckyWheel from "./LuckyWheel";

const RedeemAwards = () => {
  const { path, url } = useRouteMatch();
  return (
    <div className="cp-redeem">
      <h1>Redeem Awards Page</h1>
      <ul>
        <ListItemLink to={`${url}/exhange-gift`}>Đổi quà tặng</ListItemLink>
        <ListItemLink to={`${url}/lucky-wheel`}>Vòng quay may mắn</ListItemLink>
      </ul>
      <Switch>
        <Route path={`${path}/exhange-gift`} component={ExchangeGift} />
        <Route path={`${path}/lucky-wheel`} component={LuckyWheel} />
        <Redirect to={`${path}/exhange-gift`} />
      </Switch>
    </div>
  );
};

export default memo(RedeemAwards);
