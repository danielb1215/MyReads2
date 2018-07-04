import React , { Component }from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom' //I install the react-router-dom to use the Route function 
// I import the BooksCategories and SearchPage because I'm calling that classes in this file
import BooksCategories from './BooksCategories.js' 
import SearchPage from './SearchPage.js' 

class BooksApp extends Component {
   
  state = {
    //Here I store the books array in 'books' after the call of the function storeBooks
    books: [],
  }
  componentDidMount(){
    //I called this function because i want that to call after the page get load the function "bringBooks"
    this.bringBooks()   
  }

  bringBooks = () => {
    //Here i use the API(BooksAPI) and call the function getAll() that is inside booksAPI to get the books and store then in the state.books
    BooksAPI.getAll().then((books) => {
      this.setState({
        books: books
      })   
     })       
  }  
   updateBooks = (book, shelf) =>{
    BooksAPI.update(book,shelf).then(() => {    
      this.bringBooks()  
    })
  }

  render() {
    return (
      <div>        
        {console.log(this.state.books)}
        <BrowserRouter>
         <Route  exact path='/' render={() => (
           //here I'm calling the component BooksCategories and sending the props "booksArray"
           <BooksCategories booksArray={this.state.books}  onChange={this.updateBooks} />
         )}
         
         />
        
         </BrowserRouter>
      </div>
    )
  }
}

export default BooksApp
