/*Page where the users of our app can login with their credentials.
*/
import React from 'react';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';




const Login = () => (
    <Container component="main" maxWidth="xs">
        <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary">
        Sign In
        </Button>
    </Container>
);

export default Login;