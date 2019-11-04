import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  }
}));

function SuggestionButtons(props) {
  const classes = useStyles();
  return (
    <div>
      <div>
        <Button variant="contained" color="primary" className={classes.button} onClick={() => props.handleNoClick()}>
        Not Interested
        </Button>
        <Button variant="contained" color="secondary" className={classes.button} onClick={() => props.handleYesClick()}>
        Interested
        </Button>
      </div>
      <Button type="submit" variant="contained" fullWidth color="default" className={classes.button} onClick={() => props.handleReadNowClick()}>
        Read Now
      </Button>
    </div>
  );
}
export default SuggestionButtons;