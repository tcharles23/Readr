import React from 'react';
import { Box } from '@material-ui/core';

import Deck from './LandingTinder.jsx';


function Landing() {
  return (
    <Box display="flex" justifyContent="center" m={1} p={1} bgcolor="background.paper">
      <Deck style={{ textAlign: 'center' }}>
        <h2>Cool</h2>
        <h2>Cool</h2>
        <h2>Cool</h2>
      </Deck>
    </Box>
  );
}

export default Landing;


// old landing code
{/* <Box m={1} mx="auto">
  <Typography variant="body1" align="center">
    To get started, click the Explore Books link and we&apos;ll do the rest!
        </Typography>
</Box> */}