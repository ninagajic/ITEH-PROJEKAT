import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";
import {logo, hotelhive} from 'assets';

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src={logo} alt="HotelHive" width="28px" />
        ) : (
          <img src={hotelhive} alt="HotelHive" width="140px" />
        )}
      </Link>
    </Button>
  );
};
