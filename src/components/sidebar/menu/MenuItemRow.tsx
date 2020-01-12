import React from "react";
import { ListItem, ListItemAvatar } from "@material-ui/core";

type MenuItemRowProps = {
  title: string;
};

const MenuItemRow = ({ title }: MenuItemRowProps) => {
  return (
    <ListItem button>
      <ListItemAvatar></ListItemAvatar>
      <div>{title}</div>
    </ListItem>
  );
};

export default MenuItemRow;
