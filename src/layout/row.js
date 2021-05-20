import React, { Component ,useState,useEffect} from 'react'
import axios from 'axios'; 
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const Row=(props)=>{

    const [books,setBooks]=useState([]);

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get("https://www.googleapis.com/books/v1/volumes?q=duck&filter=free-ebooks");
            setBooks(request.data.items)
            
            return request;
        }
        fetchData();
    }, []);

    console.log(books);

    return(
       
        
             
            <div className="row" id="slider">
                <h1 className="logo">All Books</h1>
                <ul id="autoWidth" className="cs-hidden">
                    <li className="item-a">
                        <div className="row-box">
                            <div className="row-b-image">
                            {books.map(book=> 
                                (<img src={book.volumeInfo.imageLinks.thumbnail} height="650" width="425"></img>)
                            )}
                            </div>
                        </div>
                    </li>
                </ul>


            </div>
        
        
    )
}

export default Row

