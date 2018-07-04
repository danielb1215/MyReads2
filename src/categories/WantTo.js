import React, { Component } from 'react'
import { PropTypes } from 'prop-types'

class WantTo extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onChange: PropTypes.func.isRequired
    }
    render(){
        const WantToBooks = this.props.books.filter(book => book.shelf === "wantToRead")
        return(
            <div className="bookshelf">
                     <h2 className="bookshelf-title">Want to Read</h2>
                     <div className="bookshelf-books">
                       <ol className="books-grid">
                         
                       { //Here i made a map or the all the books to display all the books with the respective information of each one 
                         WantToBooks.map((books) => (  
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

export default WantTo