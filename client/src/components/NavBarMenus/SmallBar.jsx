import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  logout: {
    color: 'black',
    textDecoration: 'none',
  },
}));

export default function SmallBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
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
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem
          onClick={handleClose}
          component={Link}
          to="/suggestion"
        >
          Explore Books
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          component={Link}
          to="/booklist"
        >
          Favorites
        </MenuItem>
        <MenuItem
          onClick={handleClose}
          component={Link}
          to="/following"
        >
          Following
        </MenuItem>
        <MenuItem
          onClick={handleClose}
        >
          <a
            href="/auth/logout"
            className={classes.logout}
          >
            Logout
          </a>
        </MenuItem>
      </Menu>
    </div>
  );
}
