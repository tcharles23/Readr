/* Page where the users of our app can login with their google credentials.
*/
import React from 'react';
import Button from '@material-ui/core/Button';

const Login = (props) => {
  console.log(props);
  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      onClick={() => window.open('/auth/google', '_self')}
    >
      Sign In
    </Button>
  );
};

export default Login;
