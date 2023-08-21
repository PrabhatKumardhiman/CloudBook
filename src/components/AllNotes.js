import { useEffect, useContext } from "react"
import noteContext from '../context/notes/noteContext'
import Note from "./Note"

const AllNotes = () => {

    const { getNotes } = useContext(noteContext)
    useEffect(() => {
        getNotes()
    }, [])
    

    return (
        <div>
            <h1 className='my-3'>Add a Note</h1>
            <div className="notes my-3 ">
             <Note/>
            </div>
        </div>
    )
}

export default AllNotes