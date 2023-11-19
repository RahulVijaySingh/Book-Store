import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const [book, setBook] = useState({
        title: "",
        des: "",
        price: null,
        cover: ""
    });
    const navigate = useNavigate()
    const handleChange = (e) => {
        setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    };
    const handleClick = async e => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:8800/books", book)    //8800 isliye likhe hai kyunki mera backend port 8800 pe run hoo raha hai
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    console.log(book);
    return (
        <div className="form">
            <h1>Add new Book</h1>
            <input type="text" placeholder='title' onChange={handleChange} name='title' />
            <input type="text" placeholder='des' onChange={handleChange} name='des' />
            <input type="number" placeholder='price' onChange={handleChange} name='price' />
            <input type="text" placeholder='cover' onChange={handleChange} name='cover' />
            <button onClick={handleClick}>Add</button>
        </div>
    )
}

export default Add




// import axios from "axios";
// import React from "react";
// import { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const Add = () => {
//     const [book, setBook] = useState({
//         title: "",
//         des: "",
//         price: null,
//         cover: "",
//     });
//     const [error, setError] = useState(false)

//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//     };

//     const handleClick = async (e) => {
//         e.preventDefault();
//         try {
//             await axios.post("http://localhost:8800/books", book);
//             navigate("/");
//         } catch (err) {
//             console.log(err);
//             setError(true)
//         }
//     };

//     return (
//         <div className="form">
//             <h1>Add New Book</h1>
//             <input
//                 type="text"
//                 placeholder="Book title"
//                 name="title"
//                 onChange={handleChange}
//             />
//             <textarea
//                 rows={5}
//                 type="text"
//                 placeholder="Book des"
//                 name="des"
//                 onChange={handleChange}
//             />
//             <input
//                 type="number"
//                 placeholder="Book price"
//                 name="price"
//                 onChange={handleChange}
//             />
//             <input
//                 type="text"
//                 placeholder="Book cover"
//                 name="cover"
//                 onChange={handleChange}
//             />
//             <button onClick={handleClick}>Add</button>
//             {error && "Something went wrong!"}
//             <Link to="/">See all books</Link>
//         </div>
//     );
// };

// export default Add;

