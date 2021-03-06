import React, { Component } from "react";
import { graphql } from "react-apollo";
import {getBookQuery}

class BookDetails extends Component {
   displayBookDetails(){
        const {book}= this.props.data;
        if(book){
            return(
<div>
<h2> {book.name}</h2>
<p>{book.genre}</p>
<p>{book.author.name}</p>
<p>All books by this author: </p>
<ul className="other-books">
{
    book.author.books.map(item => {
        return( 
            <li key={item.id}>{item.name}</li>
        )
    })
}
</ul>
</div>
            )
        }else{
            return(
                <div>No book selected</div>
            )
        }
    }
     // console.log(this.props)
 
    render() {

    return (
      <div id="book-details">
        <p>this.displayBookDetails()</p>
      </div>
    );
  }
}

export default graphql(getBookQuery, {
    options: (props)=>{
        return {
            varibles:{
                id:props.bookId
            }
        }
    }
})(BookDetails);
