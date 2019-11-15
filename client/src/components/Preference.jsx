import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(3),
  },

  button: {
    margin: theme.spacing(1),
  },

  input: {
    display: 'none',
  },
}));

export default function SelectGenre({ user }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    Comedy: false,
    Thriller: false,
    Fantasy: false,
    Romance: false,
  });

  const handleChange = (name) => (event) => {
    setState({ ...state, [name]: event.target.checked });
  };

  const handleSubmit = () => {
    const preferences = state;
    preferences.user = user;
    axios.post('/readr/preferences', preferences)
      .catch((error) => {
        console.error('something went wrong', error);
      });
  };

  const {
    Comedy, Thriller, Fantasy, Romance,
  } = state;

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Pick Interested Genre</FormLabel>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={Comedy} onChange={handleChange('Comedy')} value="Comedy" />}
            label="Comedy"
          />
          <FormControlLabel
            control={<Checkbox checked={Thriller} onChange={handleChange('Thriller')} value="Thriller" />}
            label="Thriller"
          />
          <FormControlLabel
            control={
              <Checkbox checked={Fantasy} onChange={handleChange('Fantasy')} value="Fantasy" />
            }
            label="Fantasy"
          />
          <FormControlLabel
            control={
              <Checkbox checked={Romance} onChange={handleChange('Romance')} value="Romance" />
            }
            label="Romance"
          />
          <Button variant="contained" className={classes.button} onClick={handleSubmit}>
            Submit
          </Button>
        </FormGroup>
        <FormHelperText>Choose Wisely!</FormHelperText>
      </FormControl>
    </div>
  );
}
