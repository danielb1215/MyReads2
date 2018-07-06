# MyReads2 Project

In this project you will find 5 files where the project is developed and explain each file what it contains and its usability.

Src /

-App.js

-BooksCategories.js

-SearchPage.js


Src / categories /

-Currently.js

-Read.js

-WantTo.js





1- App.js

contains the functions:

	-componentDidMount (): the function that calls the BringBooks () function Just the page is reloaded.

	-bringBooks (): the function is used to call the function getAll () that is in BooksAPI after the getAll () function is invoked the state books is updated with the information that the API brings.

	-updateBooks (): the function requires two parameters (Book, shelf) the book and the category in which it wants to be updated, then make a call to the function update the API and thus be able to update the selected book in the category desired.


the <BooksCategories> and <SearchPage> components are called to render and generate the UI to the user.



2-BooksCategories.js
-When it is called, the state that is in the App.js file is sent and received in the booksArray properties, and the function to update the book is also sent and received in the onChange property.

	-Here are called the components <Currently>, <WantTo>, <Read> since they contain the UI of each category in these components the booksArray and onChange properties are sent.

	- <Link> is used so that every time it is called update the URL in "/ search"


2.1- WantTo.js

	-the booksArray and Onchange properties of the BooksCategories component are received and saved in the books and onChange properties.

	-a filter is made of the array books so that we can organize the books that are in the category WantToRead and be shown.

	-each time the user makes a change to the shelf, the onChange property is called so that the respective update is made.


2.2- Currently.js

	-the booksArray and Onchange properties of the BooksCategories component are received and saved in the books and onChange properties.

	-filter is made of the array books so that we can organize the books that are in the CurrentlyReading category to be shown.

	-each time the user makes a change to the shelf, the onChange property is called so that the respective update is made.


2.3- Read.js

	-the booksArray and Onchange properties of the BooksCategories component are received and saved in the books and onChange properties.

	-filter is made of the array books so that we can organize the books that are in the category read and be shown.

	-each time the user makes a change to the shelf, the onChange property is called so that the respective update is made.



3-SearchPage.js

	-When this component is called, the UpdateBooks function is sent and saved in the onChange property
-contains the following functions:

	-updateQuery (): this requires a parameter that is the word you want to find this is taken from the input where the search is performed in this function is done:

		1- it is validated that the query parameter is not empty so that we can continue with the process of calling the API

		2- After making the call of the API a validation is made to see that the result of the API is not empty

		3- A filter is made to the result of the API to see that all the books contain an image and do not generate an error, and so only the books that contain an image remain

		4- If all the above is positive, the state books are updated with the result that the API brings.

	-setToNone (): requires the books parameter that the update query function brings and a loop is made to the array books to update the shelf to none according to each book.

-Each time the user changes the shelf of the book, the call is made to the onChange property so that the book is updated in the UI.