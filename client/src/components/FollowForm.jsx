import React from 'react';
import { Typography, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  tabs: {
    backgroundColor: theme.palette.background.paper,
    // width: 500,
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
}));

const FollowForm = () => {
  const classes = useStyles();

  return (
    <div>
      <form className={classes.container} noValidate autoComplete="off">
        <div>
          <Typography gutterBottom variant="subtitle1" style={{ float: 'left' }}>
            Add a user`s ID to following them!
          </Typography>
          <TextField
            id="outlined-number"
            label="User ID"
            type="number"
            style={{ float: 'right' }}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
            variant="outlined"
          />
        </div>
      </form>
    </div>
  );
};

export default FollowForm;
