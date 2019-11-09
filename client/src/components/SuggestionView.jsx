/* This is the book suggestion view where the user sees the single book suggestion.
 * It is dynaic and update each time the user clicks "yes", "no", or "read now".
 * It renders a large image of the book cover along with description and the three button
 * choices above. The user should not see a book they have already said yes or no to.
 */
import React from 'react';
import axios from 'axios';
import { Typography } from '@material-ui/core';
import SuggestionButtons from './SuggestionButtons.jsx';
import testBook from './TestBook';


class SuggestionView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // this inherits the first book suggestion from the first app load, reset with each click
      bookSuggestion: testBook,
    };

    this.getBookSuggestion = this.getBookSuggestion.bind(this);
    this.handleYesClick = this.handleYesClick.bind(this);
    this.handleNoClick = this.handleNoClick.bind(this);
    this.handleReadNowClick = this.handleReadNowClick.bind(this);
  }

  // Request to Server to get a new book suggestion
  getBookSuggestion() {
    return axios.get('/readr/suggestion').then((retrievedBook) => {
      this.setState({ bookSuggestion: retrievedBook });
    });
  }

  // Sends post reqest to server to update the users interest in book suggestion
  postUserInterest(isInterested) {
    const { bookSuggestion } = this.state;
    const { user } = this.props;
    return axios.post('/interest', {
      userID: user.id,
      isbn: bookSuggestion.isbn,
      // this is true or false value, passed in on click
      toRead: isInterested,
    });
  }

  /* Adds book to the logged in users "not interested" list by
  * sending a update user interest request to the database.
  * Show the next book suggestion.
  */
  handleNoClick() {
    console.log('Clicked No');
    // send get request to add the book to the users_books in database
    this.postUserInterest(false);
    // request new book sugestion
    // this.getBookSuggestion();
  }

  /* Adds book to the logged in users "to-read" list by
  * sending a update user interest request to the database.
  * Show the next book suggestion.
  */
  handleYesClick() {
    console.log('Clicked Yes');
    // send get request to add the book to the users_books in database
    this.postUserInterest(true);
    // request new book sugestion
    // this.getBookSuggestion();
  }

  handleReadNowClick() {
    console.log('Clicked Read Now!');
    // sends users to a view or link to openURL
    // *************************** FIX ME
  }

  render() {
    const { bookSuggestion } = this.state;
    return (
      <div>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        >
          <img src={bookSuggestion.volumeInfo.imageLinks.thumbnail} alt="Smiley face" />
        </div>
        <Typography variant="h6">
          {bookSuggestion.volumeInfo.title}: {bookSuggestion.volumeInfo.subtitle || null}
        </Typography>
        <Typography variant="subtitle1">{bookSuggestion.volumeInfo.authors || null} </Typography>
        <Typography variant="caption">
          {/* some books do not have descriptons so we'll use text snippet */}
          {bookSuggestion.volumeInfo.description || bookSuggestion.searchInfo.textSnippet || null}
        </Typography>
        <br />
        <div>
          <SuggestionButtons
            handleNoClick={this.handleNoClick}
            handleYesClick={this.handleYesClick}
            handleReadNowClick={this.handleReadNowClick}
          />
        </div>
      </div>
    );
  }
}

export default SuggestionView;
