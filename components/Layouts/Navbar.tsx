import * as React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
  TextField,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Meta from "./Meta";
import Link from "next/link";
import PropTypes from "prop-types";
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import { AccountCircle } from "@material-ui/icons";
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Tab, Tabs } from "@material-ui/core";

//Navigation bar
const Navbar = () => {

  return (
    <>
      {/* @ts-ignore */}
      <Meta />
      <Box sx={{ flexGrow: 1 , marginBottom: '10px'}}>

          <Toolbar>
            <IconButton
              className="themeColor"
              size="large"
              edge="start"
            >
              <ViewInArIcon />
            </IconButton>
            <TextField sx={{marginLeft: '40%', width: '20%'}}id="standard-basic" label="Global Search" variant="standard" />
            <Box sx={{ display: { xs: 'none', md: 'flex' }, marginLeft: 'auto' }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
  
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"

            >
              <AccountCircle />
            </IconButton>
          </Box>          
          </Toolbar>

      </Box>
    </>
  );
};


export default Navbar;
