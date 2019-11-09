/* A single book component from the BookListView.
* Renders a thumbnail image, the title, author, genre, short description, date added. 
* buttons to remove from list, move to another list, and read now 
*/
import React from 'react';

function BookListItem(props) {
  const { book } = props;
  console.log(book);
  return (
    <div>
      <ul key={book.thumbnail}>

        <button type="button" onClick={() => this.handleGameClick()}>
          Remove from To-Read list
        </button>
      </ul>
    </div>
  );
}

export default BookListItem;
