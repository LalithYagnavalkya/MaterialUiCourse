import { Box, Button, Container, Stack, styled } from "@mui/material";
// import SettingsIcon from "@mui/icons-material/Settings";
import { Add, Settings } from "@mui/icons-material";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import { Rightbar } from "./components/Rightbar";
import Navbar from "./components/Navbar";

function App() {
  const BlueButton = styled(Button)({
    backgroundColor: "skyblue",
    color: "#888",
    margin: 5,
    "&:hover": {
      backgroundColor: "lightblue",
    },
    "&:disabled": {
      backgroundColor: "gray",
      color: "white",
    },
  });
  return (
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
