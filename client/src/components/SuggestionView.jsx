/* This is the book suggestion view where the user sees the single book suggestion.
 * It is dynaic and update each time the user clicks "yes", "no", or "read now".
 * It renders a large image of the book cover along with description and the three button
 * choices above. The user should not see a book they have already said yes or no to.
 */
import React from 'react';
import SuggestionButtons from './SuggestionButtons.jsx';

class SuggestionView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // this inherits the first book suggestion from the first app load and gets reset with each click
      bookSuggestion: props.bookSuggestion,
    };
    this.handleYesClick = this.handleYesClick.bind(this);
    this.handleNoClick = this.handleNoClick.bind(this);
    this.handleReadNowClick = this.handleReadNowClick.bind(this);
    this.getBookSuggestion = props.getBookSuggestion;
  }

  // allows more DRY code by not having this repeat inside the handleClicks
  newBookSuggestion() {
    this.getBookSuggestion();
    // .then((book) => {
    //   this.setState({ bookSuggestion: book });
    // });
  }

  /* Adds book to the logged in users "not interested" list by
  * sending a update request to the database.
  * Show the next book suggestion.
  */
  handleNoClick() {
    console.log('Clicked No');
    this.newBookSuggestion();
  }

  /* Adds book to the logged in users "to-read" list by
  * sending a update request to the database.
  * Show the next book suggestion.
  */
  handleYesClick() {
    console.log('Clicked Yes');
    this.newBookSuggestion();
  }

  handleReadNowClick() {
    console.log('Clicked Read Now!');
  }

  render() {
    const { bookSuggestion } = this.state;
    return (
      <div>
        <div>
          <img src={bookSuggestion.volumeInfo.imageLinks.thumbnail} alt="Smiley face" />
        </div>
        <div><h3>{bookSuggestion.volumeInfo.title}: {bookSuggestion.volumeInfo.subtitle || null}</h3>
          <b>{bookSuggestion.volumeInfo.authors || null}</b>
        </div>
        {/* some books do not have descriptons so we'll use text snippet */}
        <div>{bookSuggestion.volumeInfo.description || bookSuggestion.searchInfo.textSnippet || null}</div>
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
