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
    };
    this.handleYesClick = this.handleYesClick.bind(this);
    this.handleNoClick = this.handleNoClick.bind(this);
    this.handleReadNowClick = this.handleReadNowClick.bind(this);
    this.getBookSuggestion = props.getBookSuggestion;
  }

  /* this should add the book to the logged in users "to-read" list
  * by sending a patch request to the database to input the isbn and "true"
  */
  handleNoClick() {
    console.log('Clicked No');
    this.getBookSuggestion();
  }

  handleYesClick() {
    console.log('Clicked Yes');
    // calls the function from App that sends request to server for google API 
    this.getBookSuggestion();
  }

  handleReadNowClick() {
    console.log('Clicked Read Now!');
  }

  render() {
    return (
      <div>
        BOOK SUGGESTION HERE
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
