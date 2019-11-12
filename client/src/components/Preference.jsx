import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function LikeButton(props) {
  const classes = useStyles();
  return (
    <div>
      {/* centers the "not interested" and "interested" buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button variant="contained" size="large" color="primary" className={classes.button} onClick={() => props.handleYesClick()}>
          Like
        </Button>
        <Button variant="contained" size="large" color="default" className={classes.button} onClick={() => props.handleNoClick()}>
        Dislike
        </Button>
      </div>
    </div>
  );
}
export default LikeButton;
