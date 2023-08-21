import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext'
import { useState } from 'react'

const AddNote = () => {
    const { addNote } = useContext(noteContext)
    const [note, setNote] = useState({title: "", description : "", tag : ""})
    
    const handleSubmit  = (e) => {
        e.preventDefault();
        addNote(note)
    }
    const handleChange = (e) => {
        setNote({...note, [e.target.name] : e.target.value})
        console.log(note);
    }

    return (
        <div>
            <h1 className='my3'>Add a Note</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                        Title
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        aria-describedby="title"
                        name='title'
                        onChange={handleChange}
                        value = {note.title}
                        minLength= {5}
                        required
                    />
                    {/* <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div> */}
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                        description
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        name='description'
                        onChange={handleChange}
                        value = {note.description}
                        minLength= {5}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">
                        Tag
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="tag"
                        name='tag'
                        value = {note.tag}
                        onChange={handleChange}
                        minLength= {5}
                        required
                    />
                </div>
                {/* <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                        Check me out
                    </label>
                </div> */}
                <button disabled = {note.title.length < 5 || note.description.length < 5} type="submit" className="btn btn-primary">
                    Add Note
                </button>
            </form>
        </div>
    )
}

export default AddNote