import styled from "styled-components";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { FormControl, InputLabel, NativeSelect } from "@mui/material";
import Logo from "./Logo";

const NavWrapper = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  box-shadow: 0px 4px 12px 3px rgba(242, 242, 242, 0.75);
`;

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <NavWrapper>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar sx={{ background: "#000200" }} position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <img
                  src={
                    "https://upload.wikimedia.org/wikipedia/commons/9/96/SpaceX_Logo_Black.png"
                  }
                  width={210}
                  height={100}
                />
              </Typography>
              <FormControl>
                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                  Language
                </InputLabel>
                <NativeSelect
                  defaultValue={1}
                  inputProps={{
                    name: "English",
                    id: "uncontrolled-native",
                  }}
                >
                  <option value={1}>English</option>
                  <option value={2}>French</option>
                  <option value={3}>Ducth</option>
                  <option value={4}>Spanish</option>
                </NativeSelect>
              </FormControl>
              <Button color="inherit">
                <DarkModeSwitch
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                  size={35}
                  sunColor="yellow"
                  moonColor="gray"
                />
              </Button>
              <Button color="inherit">Login</Button>
              <Button color="inherit">Sign Up</Button>
            </Toolbar>
          </AppBar>
        </Box>
      </NavWrapper>
    </>
  );
};

export default Navbar;
