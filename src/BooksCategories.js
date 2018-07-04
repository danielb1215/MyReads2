import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import Currently from './categories/Currently.js'
import WantTo from './categories/WantTo.js'
import Read from './categories/Read.js'
import { Link } from 'react-router-dom'

class BooksCategories extends Component {
  static propTypes = {
    //Here I'm reciving the props booksarray and marking as a required
    booksArray: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
  }
 
  render(){
    return(
        <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              {
                //Here im calling these 3 components to organice the categories of each book
              }            
              <div>              
              <Currently books={this.props.booksArray} onChange={this.props.onChange}/>
              <WantTo books={this.props.booksArray} onChange={this.props.onChange}/>
              <Read books={this.props.booksArray} onChange={this.props.onChange}/>
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>Add a book </Link>
            </div>
          </div>
        )}
      </div>
      
     
    )
  }

}

export default BooksCategories
