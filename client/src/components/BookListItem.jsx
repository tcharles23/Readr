/* A single book component from the BookListView.
* Renders a thumbnail image, the title, author, genre, short description, date added. 
* buttons to remove from list, move to another list, and read now 
*/
import React from 'react';
import { Typography, Button, Box } from '@material-ui/core';

function BookListItem(props) {
  const { book } = props;
  console.log(book);
  return (
    <div>
      <Box m={1} mx="auto">
        <ul key={book.id}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          >
            <img src={book.coverURL} alt="Smiley face" />
          </div>
          <Typography variant="body1" align="center">{book.title}</Typography>
          <Typography variant="subtitle1" align="center">{book.author || null} </Typography>
          <Button size="small" color="primary" variant="text" onClick={() => this.handleGameClick()}>
            Remove from To-Read list
          </Button>
        </ul>
      </Box>
    </div>
  );
}

export default BookListItem;
