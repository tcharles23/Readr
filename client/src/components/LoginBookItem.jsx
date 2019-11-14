/* A single book component from the BookListView.
* Renders a thumbnail image, the title, author, genre, short description, date added.
* buttons to remove from list, move to another list, and read now
*/
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Typography, Grid, Paper, Button,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import MenuBookTwoToneIcon from '@material-ui/icons/MenuBookTwoTone';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 500,
  },
  image: {
    width: 300,
    height: 250,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

function LoginBookItem(props) {
  const classes = useStyles();
  const { book, handleReadNow } = props;
  const availabilityCheck = (book) => {
    switch (book.availability) {
      case 'open': return (
        <Link to="/readnow" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            size="small"
            className={classes.button}
            startIcon={<MenuBookOutlinedIcon />}
            onClick={() => handleReadNow(book.urlSnippet)}
          >Read Now
          </Button>
        </Link>
      );
      case 'borrow_available': return (
        <Link to="/readnow" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            size="small"
            className={classes.button}
            startIcon={<MenuBookTwoToneIcon />}
            onClick={() => handleReadNow(book.urlSnippet)}
          > Preview
          </Button>
        </Link>
      );
      case 'borrow_unavailable': return (
        <Link to="/readnow" style={{ textDecoration: 'none' }}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            className={classes.button}
            startIcon={<MenuBookTwoToneIcon />}
            onClick={() => handleReadNow(book.urlSnippet)}
          > Preview
          </Button>
        </Link>
      );
      default: return 'Sorry, no preview available';
    }
  };

  const buyNow = (book) => {
    return book.buyLink ? (
      <Button
        target="_blank"
        href={book.buyLink}
        variant="contained"
        color="secondary"
        size="small"
      >Buy Now
      </Button>
    )
      : null;
  };


  return (
    <Paper className={classes.paper}>
      <Grid container>
        <Grid item md={5} className={classes.image}>
          <img className={classes.img} alt="complex" src={book.coverURL} />
        </Grid>
        <Grid item md={7}>
          <Typography gutterBottom variant="subtitle1">
            {book.title}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {book.author}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {book.genre}
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {/* <Grid item>
          {buyNow(book)}
        </Grid> */}
      </Grid>
    </Paper>
  );
}

export default LoginBookItem;
