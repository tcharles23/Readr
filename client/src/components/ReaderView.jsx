/* Our react component for the in-app e-reader. See "README" for link to documentation.
*/
import React from 'react';

class ReaderView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      urlSnippet: null,
    };
  }

  render() {
    // const { urlSnippet } = this.props;
    const urlSnippet = 'shakespearescom000shak';
    // const urlSnippet = 'gammagecup00kend';
    // console.log("Hi, im props", this.props);
    return (
      <iframe src={`https://www.archive.org/stream/${urlSnippet}?ui=embed`} width="480px" height="480px" title="testing" />
    );
  }
}

export default ReaderView;
