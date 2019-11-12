/* Our react component for the in-app e-reader. See "README" for link to documentation.
*/
import React from 'react';
import { Box } from '@material-ui/core';

class ReaderView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urlSnippet: null,
    };
  }

  render() {
    const { urlSnippet } = this.props;
    return (
      <Box align="center">
        <iframe src={`https://www.archive.org/stream/${urlSnippet}`} width="75%" height="800" title="testing" />
      </Box>
    );
  }
}

export default ReaderView;
