import { Box, Fab, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import AddIcon from "@mui/icons-material/Add";

import appImg from "../public/assets/images/about.svg";
import FooterMenu from "../app/components/FooterMenu";
import MainModal from "../app/components/MainModal";

const App = () => {
  return (
    <Container maxWidth='xs' disableGutters>
      <Box
        sx={{
          bgcolor: "#cfe8fc",
          height: "100vh",
          position: "relative",
          overflowX: "hidden",
        }}
      >
        <img src={appImg.src} alt='app img' width='100%' height='auto' />
        <Typography>Test Document</Typography>
        {/* <MainModal/> */}
        <Box
          sx={{
            display: "flex",
            position: "absolute",
            top: "0",
            width: "100%",
            justifyContent: "space-between",
            padding: "1rem",
          }}
        >
          <Fab
            sx={{ border: "2px solid black" }}
            size='medium'
            color='white'
            aria-label='back'
          >
            <ArrowBackIosNewIcon color='black' />
          </Fab>
          <Fab
            sx={{ border: "2px solid black" }}
            size='medium'
            color='white'
            aria-label='more'
          >
            <MoreVertIcon color='black' />
          </Fab>
        </Box>
        <Box
          sx={{
            position: "absolute",
            bottom: "0",
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <FooterMenu />
        </Box>
      </Box>
    </Container>
  );
};
export default App;
