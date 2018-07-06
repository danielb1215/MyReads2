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
     //this funcion receives two arguments (book,shelf) the entire book info and the shelf that the user selected
     //then the API function update is called and the book  gets the shelf update also in the UI the book goes to the respective category
    BooksAPI.update(book,shelf).then(() => {    
      this.bringBooks()  
      //after the book update and alert appears to inform the user that the book has been moved
      alert("The book: " + book.title + " has been moved into " + shelf )
    })
  }
  render() {
    return (
      <div>        
        {console.log(this.state.books)
        //Here i used <BrowerRouter> to be able to use Route i used some help from https://reacttraining.com/react-router/web/api/BrowserRouter
        }       
        <BrowserRouter>       
        <div>
         <Route  exact path='/' render={() => (
           //here I'm calling the component BooksCategories and sending the props "booksArray"
           <BooksCategories booksArray={this.state.books}  onChange={this.updateBooks} />
         )}        
         />
         <Route exact path='/search' render={() => (
           //Here im render the Seach page when the url is /seach and when the onChange is call the function updatebooks run 
          <SearchPage onChange={this.updateBooks}/>
         )}
          
         />
         </div>    
         </BrowserRouter>
         
      </div>
    )
  }
}

export default BooksApp
