import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const StyledToolbar = styled(Toolbar)`
  display: flex;
  flex: 1;
  justify-content: space-between;
`

const Header = () => {
  let history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClose = (route) => {
    setAnchorEl(null);
    console.log(history)
    switch (route) {
      case "/spend-history":
        if (history.location.pathname !== `/dashboard${route}`) {
          history.push(`/dashboard${route}`)
        }
        break;

      case "/client-contacts":
        if(history.location.pathname !== `/dashboard${route}`) {
          history.push(`/dashboard${route}`)
        }
        break;

      case "/logout":
        localStorage.removeItem("token");
        history.push("/")
        break;
    
      default:
        break;
    }
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <AppBar position={"static"}>
      <StyledToolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">Humane</Typography>
        {/* Menu Drop Down */}
        <div>
          <IconButton
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={() => handleClose("/spend-history")}>Spend History</MenuItem>
            <MenuItem onClick={() => handleClose("/client-contacts")}>Manage Contacts</MenuItem>
            <MenuItem onClick={() => handleClose("/logout")}>Logout</MenuItem>
          </Menu>
        </div>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
