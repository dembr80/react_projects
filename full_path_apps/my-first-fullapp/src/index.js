import React from 'react';
import ReactDOM from 'react-dom';

class Book extends React.Component {
  
  handleClick = () => {           // event figyelés itt a nyilas módszerrel: =()=>
    const testBook = {
      title: 'The Quantum Thief',
      author: 'Hannu Rajaniemi',
    };

    this.props.addBook(testBook);
  };

  render() {
    return <button onClick={this.handleClick}>Add new book</button>;
  }
}

class BookStore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: {
        book1: {
          title: 'American Gods',
          author: 'Neil Gaiman',
        },
        book2: {
          title: 'Extremely Loud and Incredibly Close',
          author: 'Johnathan Safran Foer',
        },
      },
    };
  }

  addBook = book => {
    // 1. Take a copy of state
    const newBooks = { ...this.state.books };
    // 2. Add new item to the copy
    newBooks[`book${Date.now()}`] = book;
    // 3. Set the new object to state
    this.setState({
      books: newBooks,
    });
  };

  render() {
    return <Book addBook={this.addBook} />;
  }
}

ReactDOM.render(<BookStore />, document.getElementById('root'));