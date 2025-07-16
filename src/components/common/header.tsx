"use client";

import { useState } from "react";
import { Menu as MenuIcon, Notifications, Search } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          Social Media
        </Typography>
        <TextField
          placeholder="Search Friends"
          size="small"
          sx={{
            ml: 2,
            bgcolor: "#f0f2f5",
            borderRadius: 1,
            width: { xs: "100%", sm: 300 },
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "transparent",
              },
              "&:hover fieldset": {
                borderColor: "transparent",
              },
              "&.Mui-focused fieldset": {
                borderColor: "transparent",
              },
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
        <Box sx={{ flexGrow: 1 }} />
        <IconButton color="inherit">
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
        </IconButton>
        <IconButton color="inherit">
          <Avatar
            alt="User"
            src="/placeholder.svg?height=40&width=40"
            sx={{ width: 32, height: 32 }}
          />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
