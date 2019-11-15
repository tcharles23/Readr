/* This is the book suggestion view where the user sees the single book suggestion.
 * It is dynaic and update each time the user clicks "yes", "no", or "read now".
 * It renders a large image of the book cover along with description and the three button
 * choices above. The user should not see a book they have already said yes or no to.
 */
import React from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import Zoom from '@material-ui/core/Zoom';
import Slider from './BookTinder.jsx';
import LoadingSuggestion from './SuggestionView/LoadingSuggestion.jsx';
import Book from './SuggestionView/Book.jsx';

class SuggestionView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookSuggestion: null,
      // ---FORMAT IS THIS
      /* author: "Susan Wiggs"
       * coverURL: "http...."
       * description: "Book 1 of .."
       * isbn: "9781459247925"
       * title: "THE CHARM SCHOOL"
       */
    };

    this.getBookSuggestion = this.getBookSuggestion.bind(this);
    this.postUserInterest = this.postUserInterest.bind(this);
    this.handleYesClick = this.handleYesClick.bind(this);
    this.handleNoClick = this.handleNoClick.bind(this);
    this.clearBookSuggestion = this.clearBookSuggestion.bind(this);
    // this.handleReadNowClick = this.handleReadNowClick.bind(this);
  }

  componentDidMount() {
    this.getBookSuggestion();
  }

  // Request to server to get a new book suggestion
  getBookSuggestion() {
    return axios.get('/readr/suggestion').then((retrievedBook) => {
      // a conditinal is here becuase some books were returning empty data, so we want to retry
      if (retrievedBook.data === '') {
        this.getBookSuggestion();
      } else {
        this.setState({ bookSuggestion: retrievedBook.data });
      }
    });
  }

  // Sends post reqest to server to update the users interest in book suggestion
  postUserInterest(isInterested) {
    const { bookSuggestion } = this.state;
    const { user } = this.props;
    return axios.post('/readr/interest', {
      userID: user.id,
      isbn: bookSuggestion.isbn,
      // this is true or false value, passed in on click
      toRead: isInterested,
    });
  }

  // clears bookSuggestion before finding another
  clearBookSuggestion() {
    setTimeout(() => {
      this.setState({
        bookSuggestion: null,
      });
    }, 400);
  }

  /* Adds book to the logged in users "not interested" list by
  * sending a update user interest request to the database.
  * Show the next book suggestion.
  */
  handleNoClick() {
    this.postUserInterest(false);
    this.clearBookSuggestion();
    this.getBookSuggestion();
  }

  /* Adds book to the logged in users "to-read" list by
  * sending a update user interest request to the database.
  * Show the next book suggestion.
  */
  handleYesClick() {
    this.postUserInterest(true);
    this.clearBookSuggestion();
    this.getBookSuggestion();
  }

  // handleReadNowClick() {
  //   console.log('Clicked Read Now!');
  //   // sends users to a view or link to openURL
  //   // *************************** FIX ME
  // }

  render() {
    const { bookSuggestion } = this.state;
    // check if no book description
    if (bookSuggestion) {
      if (!bookSuggestion.description) {
        bookSuggestion.description = 'No description available';
      }
    }
    return (
      <div>
        {/* Spinner until component mounts and sets state */}
        {bookSuggestion === null ? (
          <LoadingSuggestion />
        ) : (
          <Zoom in="true">
            <Grid container align="center">
              <Grid item xs={12}>
                <Slider
                  handleNoClick={this.handleNoClick}
                  handleYesClick={this.handleYesClick}
                  book={(
                    <div>
                      <Book
                        bookSuggestion={bookSuggestion}
                        handleNoClick={this.handleNoClick}
                        handleYesClick={this.handleYesClick}
                      />
                    </div>
                  )}
                />
              </Grid>
            </Grid>
          </Zoom>
        )}
      </div>
    );
  }
}

export default SuggestionView;
