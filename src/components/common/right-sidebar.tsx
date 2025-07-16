import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";

const RightSidebar = () => {
  const friends = [
    {
      name: "Alex Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      online: true,
    },
    {
      name: "Maria Garcia",
      avatar: "/placeholder.svg?height=40&width=40",
      online: true,
    },
    {
      name: "David Kim",
      avatar: "/placeholder.svg?height=40&width=40",
      online: false,
    },
    {
      name: "Lisa Wong",
      avatar: "/placeholder.svg?height=40&width=40",
      online: true,
    },
    {
      name: "Robert Smith",
      avatar: "/placeholder.svg?height=40&width=40",
      online: false,
    },
    {
      name: "Emma Davis",
      avatar: "/placeholder.svg?height=40&width=40",
      online: true,
    },
  ];

  return (
    <Box
      sx={{
        width: 240,
        flexShrink: 0,
        display: { xs: "none", sm: "block" },
        mt: 8,
        p: 2,
        position: "sticky",
        maxHeight: "100vh",
        top: 64,
        overflowY: "auto",
      }}
    >
      <Typography variant="h6" sx={{ mb: 2 }}>
        Contacts
      </Typography>
      <List>
        {friends.map((friend) => (
          <ListItem key={friend.name} disablePadding>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar alt={friend.name} src={friend.avatar} />
              </ListItemAvatar>
              <ListItemText primary={friend.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{ my: 2 }} />
      <Typography variant="h6" sx={{ mb: 2 }}>
        Upcoming Events
      </Typography>
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="subtitle1" fontWeight="bold">
            Web Dev Meetup
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Tomorrow at 6:00 PM
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            15 people going
          </Typography>
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography variant="subtitle1" fontWeight="bold">
            Birthday Party
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Saturday at 8:00 PM
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            8 people going
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RightSidebar;
