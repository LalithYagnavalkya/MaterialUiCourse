import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { HomeSharp } from "@mui/icons-material";

import React from "react";

const Sidebar = () => {
  return (
    <Box
      flex={1}
      //   bgcolor="skyblue"
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
              <HomeSharp />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
