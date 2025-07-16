import { MoreVert, FavoriteBorder, Chat } from "@mui/icons-material";
import {
  Avatar,
  IconButton,
  TextField,
  Typography,
  Box,
  Paper,
  Divider,
  Card,
  CardHeader,
  CardContent,
  CardMedia,
  CardActions,
  Button,
} from "@mui/material";

export default function HomePage() {
  const posts = [
    {
      id: "1",
      author: "Jane Smith",
      avatar: "/placeholder.svg?height=40&width=40",
      time: "3 hours ago",
      content: "Just finished my new painting! What do you think?",
      image: "/placeholder.svg?height=400&width=600",
      likes: 124,
      comments: 43,
    },
    {
      id: "2",
      author: "John Doe",
      avatar: "/placeholder.svg?height=40&width=40",
      time: "5 hours ago",
      content:
        "Had an amazing trip to the mountains this weekend. The views were breathtaking!",
      image: "/placeholder.svg?height=400&width=600",
      likes: 287,
      comments: 56,
    },
    {
      id: "3",
      author: "Sarah Johnson",
      avatar: "/placeholder.svg?height=40&width=40",
      time: "Yesterday",
      content:
        "Just got accepted into my dream university! So excited for this new chapter in my life! 🎓",
      image: null,
      likes: 432,
      comments: 87,
    },
  ];

  return (
    <>
      <Paper sx={{ p: 2, mb: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Avatar src="/placeholder.svg?height=40&width=40" sx={{ mr: 1 }} />
          <TextField
            fullWidth
            placeholder="What's on your mind?"
            variant="outlined"
            size="small"
            sx={{
              "& .MuiOutlinedInput-root": {
                borderRadius: 4,
              },
            }}
          />
        </Box>
        <Divider sx={{ my: 1 }} />
      </Paper>

      {/* Posts */}
      {posts.map((post) => (
        <Card key={post.id} sx={{ mb: 3 }}>
          <CardHeader
            avatar={<Avatar src={post.avatar} />}
            action={
              <IconButton aria-label="settings">
                <MoreVert />
              </IconButton>
            }
            title={post.author}
            subheader={post.time}
          />
          <CardContent>
            <Typography variant="body1">{post.content}</Typography>
          </CardContent>
          {post.image && (
            <CardMedia
              component="img"
              height="400"
              image={post.image}
              alt="Post image"
            />
          )}
          <CardActions
            disableSpacing
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Box sx={{ position: "relative" }}>
              <Button
                className="reaction-button"
                startIcon={<FavoriteBorder />}
              >
                1
              </Button>{" "}
            </Box>
            <Button startIcon={<Chat />}>{post.comments} Comments</Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
}
