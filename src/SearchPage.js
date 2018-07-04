import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI  from './BooksAPI'
import PropTypes from 'prop-types'
class SearchPage extends Component{
state = {
  query: '',
  books: [],
}
static propTypes = {
  onChange: PropTypes.func.isRequired
}
//here im using the API search depending on the search of the user a list of books appear 
updateQuery = (query) => {
  //here I'm validating if the query is not emply make BooksAPI search to avoid errors
  if(query.length !== 0){
    console.log(query)
    BooksAPI.search(query).then((books) => {
      if(books.length > 0){
        //Here I'm filtering book.imagesLinks to avoid an error if the book don't have a imageLink
        books = books.filter((book) => (book.imageLinks))
        this.setToNone(books)
        //here I update the books state with the especific seach
        this.setState(() =>{
          return {books: books}
        })
      }
    }) 
  }else {
    this.setState({books: [], query: ''})
  }
 
}
setToNone = (books) => { 
  //here i make a loop of the array of books to change each book.shelf into 'none'
 for(let key in books)
   books[key].shelf = 'none'
  console.log(books)
}


render(){

    const { query } = this.state.query 
  return(
    <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to='/'>Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" value={query} onChange={(event) => this.updateQuery(event.target.value)}                
                />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {console.log(this.state.books)}
                { 
                  this.state.books.map((books) => (
                  <li key={books.id}>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${books.imageLinks.thumbnail})` }}></div>
                      <div className="book-shelf-changer">
                        <select value={books.shelf} onChange={(event) => this.props.onChange(books , event.target.value)}>
                          <option value="move" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">{books.title}</div>
                    <div className="book-authors">{books.authors}</div>
                  </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
    )

  
  
  }         

}
export default SearchPage