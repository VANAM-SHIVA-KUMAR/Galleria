import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

const BestSellerBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect( () => {
        fetch("http://localhost:5000/all-arts").then(res => res.json()).then(data => setBooks(data.slice(0,8)))
    }, [])
  return (
    <div>
      <BookCards books={books} headline="Best Artworks"/>
    </div>
  )
}

export default BestSellerBooks
