import axios from "axios";
import { useEffect, useState } from "react"
import { Route, useNavigate } from "react-router-dom";

//Creating a book using a function. Simpler than the Create.js
export function FCreate(props) {

    const [title, setTitle] = useState('');
    const [cover, setCover] = useState('');
    const [author, setAuthor] = useState('');

    const navigate = useNavigate();

    //initialize the state
    useEffect(()=>{
        setTitle('');
    }, [])

    const handleSubmit = (e) => {

        e.preventDefault();//fix for the navigate function
        alert(`${title} ${cover}, by ${author}`);
        const newBook = {
            title: title,
            cover: cover,
            author: author
        }

        axios.post('http://localhost:4000/api/books', newBook)
            .then()
            .catch((err)=>{console.log(err)});
            navigate('/read');
    }

    return (
        <div>
            <h1>Good morning</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input placeholder="Book title" type="text" className="form-control" value={title} onChange={(e) => { setTitle(e.target.value) }}></input>
                </div>
                <div>
                    <input placeholder="Book cover" type="text" className="form-control" value={cover} onChange={(e) => { setCover(e.target.value) }}></input>
                </div>
                <div>
                    <input placeholder="Author" type="text" className="form-control" value={author} onChange={(e) => { setAuthor(e.target.value) }}></input>
                    <input type="submit" value="Add Book"></input>
                </div>
            </form>
        </div>
    )
}