import { Box } from "@mui/material";

import Header from "@/components/common/header";
import LeftSidebar from "@/components/common/left-sidebar";
import RightSidebar from "@/components/common/right-sidebar";

interface Props {
  children: React.ReactNode;
}

const HomeLayout = ({ children }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        bgcolor: "#f0f2f5",
        minHeight: "100vh",
      }}
    >
      <Header />
      <LeftSidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - 480px)` },
          mt: 8,
        }}
      >
        {children}
      </Box>
      <RightSidebar />
    </Box>
  );
};

export default HomeLayout;
