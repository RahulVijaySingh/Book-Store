import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
// axios allows to make api rerquest from react app

const Book = () => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        const fetchAllBooks = async () => {
            try {
                const res = await axios.get("http://localhost:8800/books")
                setBooks(res.data);
                console.log(res)
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllBooks()
    }, [])
    return (
        <div>
            <h1>Rahul Book Shop</h1>
            <div className="books">
                {books.map(book => (
                    <div className="book" key={book.id}>
                        {book.cover && <img src={book.cover} alt="" />}
                        <h2>{book.title}</h2>
                        <h2>{book.des}</h2>
                        <h2>{book.price}</h2>
                    </div>
                ))}
            </div>

            <button > <Link to="/add">Add new Book</Link> </button>
        </div>
    )
}

export default Book