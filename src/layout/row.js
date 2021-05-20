import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const Row = (props) => {
  const [books, setBooks] = useState([]);
  let button = false;

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        "https://www.googleapis.com/books/v1/volumes?q=duck&filter=free-ebooks"
      );
      console.log(request.data);
      setBooks(request.data.items);

      return request;
    }
    fetchData();
  }, []);

  const toggleButton = (i) => {
    let el = document.getElementById(i);
    if (button === false) {
      el.classList.add("display");
      button = i;
    } else {
      el.classList.remove("display");
      button = false;
    }
  };

  console.log(books);

  return (
    <div className="row" id="slider">
      <h1 className="logo">All Books</h1>
      <div className="row-box">
        <Splide
          options={{
            rewind: true,
            perPage: 4,
          }}
        >
          {books.map((book, i) => (
            <SplideSlide>
              <div className="img-wrapper">
                <img
                  className="thumbnail"
                  alt="mskamska"
                  src={book.volumeInfo.imageLinks.thumbnail}
                  onClick={(e) => toggleButton(i, e)}
                />
                <div id={i} className="button-on-hover">
                  <a href={book.accessInfo.webReaderLink}>Read More</a>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Row;
