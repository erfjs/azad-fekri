import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Badge, Box, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import useMediaQuery from "@mui/material/useMediaQuery";

import star from "../../../public/assets/images/star.svg";
import starActive from "../../../public/assets/images/star-a.svg";
import circle from "../../../public/assets/images/circle.svg";
import circleActive from "../../../public/assets/images/circle-a.svg";
import square from "../../../public/assets/images/square.svg";
import { styled } from "@mui/material/styles";

export default function FooterMenu() {
  const [value, setValue] = React.useState("star");
  const width = useMediaQuery("(min-width:360px)");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      color: "white",
      border: `1px solid white`,
    },
  }));

  return (
    <>
      <Fab
        size='large'
        color='secondary'
        aria-label='add'
        sx={{
          position: "absolute",
          top: "-27px",
          border: "1px solid black",
          borderBottom: "4px solid black",
        }}
      >
        <AddIcon sx={{ fontSize: "29px" }} />
      </Fab>
      <BottomNavigation
        sx={{
          width: "100%",
          height: "64px",
          boxShadow: "inset 0px 1px 0px #18191F",
        }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          value='star'
          icon={
            <img
              src={value === "star" ? starActive.src : star.src}
              alt='star'
              width='26px'
              height='26px'
            />
          }
        />
        <BottomNavigationAction
          value='circle'
          sx={{
            paddingRight: width ? "30px" : "",
          }}
          icon={
            <img
              src={value === "circle" ? circleActive.src : circle.src}
              alt='circle'
              width='26px'
              height='26px'
            />
          }
        />

        <BottomNavigationAction
          value='square'
          sx={{
            paddingLeft: width ? "30px" : "",
          }}
          icon={
            <StyledBadge
              badgeContent={"4"}
              overlap='circular'
              invisible={false}
              color='danger'
            >
              <img
                src={value === "square" ? circleActive.src : square.src}
                alt='square'
                width='26px'
                height='26px'
              />
            </StyledBadge>
          }
        />
        <BottomNavigationAction
          value='circle2'
          icon={
            <img
              src={value === "circle2" ? circleActive.src : circle.src}
              alt='circle2'
              width='26px'
              height='26px'
            />
          }
        />
      </BottomNavigation>
    </>
  );
}
