import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

  const [state, setState] = useState([])

  // Fetch all Notes 
  const getNotes = async () =>{
    try{
    const response = await fetch(`http://localhost:5000/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "authtoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlMTFjOWYxZTRkNjFmMDY4YzQ5NDhhIn0sImlhdCI6MTY5MjQ3NDUyN30.T2qMtz3FmLgK1lqobbCCkdeRI1pVxUl2G_lc1NaX76c"
      },
    });
    const json = await response.json();
    setState(json)
  }catch(error){
    console.error(error.message)
  }
  }

  // Add a note
  const addNote = async (newNote) => {
    try {
    const response = await fetch(`http://localhost:5000/api/notes/addnote`, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "authtoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlMTFjOWYxZTRkNjFmMDY4YzQ5NDhhIn0sImlhdCI6MTY5MjQ3NDUyN30.T2qMtz3FmLgK1lqobbCCkdeRI1pVxUl2G_lc1NaX76c"
      },
      body: JSON.stringify(newNote), 
    });
    const note = await response.json();
    setState(state.concat(note))
  }catch(error){
    console.error(error.message)
  }
  }

  // Delete Note
  const deleteNote = async (id) => {
    try{
    const response = await fetch(`http://localhost:5000/api/notes/deletenote/${id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "authtoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlMTFjOWYxZTRkNjFmMDY4YzQ5NDhhIn0sImlhdCI6MTY5MjQ3NDUyN30.T2qMtz3FmLgK1lqobbCCkdeRI1pVxUl2G_lc1NaX76c"
      },
    });
    const json = await response.json()
  } catch(error){
    console.error(error.message)
  }
    
    const newNotes = state.filter((note) => { return note._id !== id })
    setState(newNotes)
  }

  // Edit Note
  const updateNote = async (newNote) => {
    try {
    const response = await fetch(`http://localhost:5000/api/notes/updatenote/${newNote._id}`, {
      method: "PUT",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
        "authtoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRlMTFjOWYxZTRkNjFmMDY4YzQ5NDhhIn0sImlhdCI6MTY5MjQ3NDUyN30.T2qMtz3FmLgK1lqobbCCkdeRI1pVxUl2G_lc1NaX76c"
      },
      body: JSON.stringify({title : newNote.updatetitle, description: newNote.updatedescription, tag : newNote.updatetag}), 
    });
    const json = await response.json(); 
  }catch(error){
    console.error(error.message)
  }
    let updatedNote = JSON.parse(JSON.stringify(state))
    for (let index = 0; index < state.length; index++) {
      const note = updatedNote[index];
      if (note._id === newNote._id) {
        updatedNote[index].title = newNote.updatetitle
        updatedNote[index].description = newNote.updatedescription
        updatedNote[index].tag = newNote.updatetag
        break;
      }
    }
    setState(updatedNote)
  }
  return (
    <NoteContext.Provider value={{ state, setState, addNote, deleteNote, updateNote, getNotes }} >
      {props.children}
    </NoteContext.Provider>
  )
}

export default NoteState;