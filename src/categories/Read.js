import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

class Read extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onChange: PropTypes.func.isRequired
    }
    render(){
        const ReadBooks = this.props.books.filter(book => book.shelf === "read")
     return(
         <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    { ReadBooks.map((books) => (  
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
                          <div className="book-title">To Kill a Mockingbird</div>
                          <div className="book-authors">Harper Lee</div>
                        </div>
                      </li>   
                    ))}                     
                    </ol>
                  </div>
                </div>  

     )
    }
}

export default Read