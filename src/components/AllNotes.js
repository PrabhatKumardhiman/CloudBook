import { useEffect, useContext } from "react"
import noteContext from '../context/notes/noteContext'
import Note from "./Note"
import { useNavigate } from "react-router-dom";

const AllNotes = () => {
    const navigateto = useNavigate()
    const { getNotes } = useContext(noteContext)
    useEffect(() => {
        localStorage.getItem("token")? getNotes() : navigateto('/login')
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