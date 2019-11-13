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
import DeleteIcon from '@material-ui/icons/Delete';
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

function BookListItem(props) {
  const classes = useStyles();
  const { book, handleRemoveClick, handleReadNow } = props;
  const availabilityCheck = (book) => {
    switch (book.availability) {
      case 'open': return (
        <Button
          as={Link}
          to="/readnow"
          variant="contained"
          // color="textPrimary"
          size="small"
          className={classes.button}
          startIcon={<MenuBookOutlinedIcon />}
        > Read Now
        </Button>
      );
      case 'borrow_available': return (
        <Button
          as={Link}
          to="/readnow"
          variant="contained"
          // color="textSecondary"
          size="small"
          className={classes.button}
          startIcon={<MenuBookTwoToneIcon />}
        > Preview
        </Button>
      );
      case 'borrow_unavailable': return (
        <Button
          as={Link}
          to="/readnow"
          variant="contained"
          // color="textSecondary"
          size="small"
          className={classes.button}
          startIcon={<MenuBookTwoToneIcon />}
        > Preview
        </Button>
      );
      default: return 'Sorry, no preview available';
    }
  };

  return (
    <div>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item className={classes.image}>
            <img className={classes.img} alt="complex" src={book.coverURL} />
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
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
            <Grid container spacing={3}>
              <Grid item xs={4} lg={6}>
                <Typography color="primary" variant="body2" style={{ cursor: 'pointer' }} onClick={() => handleReadNow(book.urlSnippet)}>
                  {availabilityCheck(book)}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                {/* <Typography color="primary" variant="body2" style={{ cursor: 'pointer' }} onClick={() => handleRemoveClick(book.isbn, false)}> */}
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  className={classes.button}
                  startIcon={<DeleteIcon />}
                  onClick={() => handleRemoveClick(book.isbn, false)}
                >
                  Delete
                </Button>
                {/* </Typography> */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default BookListItem;
