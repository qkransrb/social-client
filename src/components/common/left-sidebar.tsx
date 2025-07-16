import {
  Bookmark,
  Event,
  Group,
  Home,
  OndemandVideo,
  Person,
  Storefront,
} from "@mui/icons-material";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const LeftSidebar = () => {
  const drawer = (
    <Box sx={{ overflow: "auto" }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Home color="primary" />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <OndemandVideo />
            </ListItemIcon>
            <ListItemText primary="Watch" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Storefront />
            </ListItemIcon>
            <ListItemText primary="Marketplace" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Bookmark />
            </ListItemIcon>
            <ListItemText primary="Saved" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Event />
            </ListItemIcon>
            <ListItemText primary="Events" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        display: { xs: "none", sm: "block" },
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          borderRight: 0,
          mt: 8,
        },
      }}
      open
    >
      {drawer}
    </Drawer>
  );
};

export default LeftSidebar;
