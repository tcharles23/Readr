import React from 'react';
import { Typography } from '@material-ui/core';

const Book = props => {
  const { title, author, description, coverURL } = props.bookSuggestion;
  return (
    <div>
      <Typography variant="h6">{title}</Typography>
      <img src={coverURL} alt="Smiley face" />
      <Typography variant="subtitle1">{author || null}</Typography>
      <Typography variant="caption"> {description.slice(0, 200)}...</Typography>
    </div>
  );
};

export default Book;
