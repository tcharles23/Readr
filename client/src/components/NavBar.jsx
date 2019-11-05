/* This is the header or top bar component.  It is pretty static.
 * Includes navigatin links- App logo Title  2. link to "To-Read" list,
 * 3. "Explore Books" (new book suggestion), 4. Logout button.
 */
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TypoGraphy from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  link: {
    margin: theme.spacing(1),
    color: 'white',
  },
}));

const NavBar = () => {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();
  return (
    <div>
      <AppBar color="primary" position="static">
        <Toolbar>
          <TypoGraphy color="inherit" variant="h6" margin="10">
            Welcome Bookworm!
          </TypoGraphy>
          <TypoGraphy>
            <Link href="./App.jsx" onClick={preventDefault} className={classes.link}>
              Explore Books
            </Link>
            <Link href="./BookListView.jsx" onClick={preventDefault} className={classes.link}>
              To-Read
            </Link>
            <Link href="/" onClick={preventDefault} className={classes.link}>
              Logout
            </Link>
          </TypoGraphy>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
