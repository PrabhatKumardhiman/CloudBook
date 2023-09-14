import React, { useContext, useRef, useState } from 'react'
import noteContext from '../context/notes/noteContext'
import { UilTrash, UilEdit } from '@iconscout/react-unicons'

const Note = () => {
    const { state, deleteNote, updateNote } = useContext(noteContext)
    const [note, setNote] = useState({ updatetitle: "", updatedescription: "", updatetag: "" })
    const [checked, setChecked] = useState(false)
    const ref = useRef(null)
    const closeRef = useRef(null)



    const openModal = async (note) => {
        const currentNote = await note
        setNote({ _id: currentNote._id, updatetitle: currentNote.title, updatedescription: currentNote.description, updatetag: currentNote.tag })
        ref.current.click()
    }

    const handleUpdateClick = (e) => {
        e.preventDefault();
        updateNote(note)
        closeRef.current.click()
    }

    const handleChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    const handleCheckBoxClick = (e) => {
        setChecked(e.target.checked)
    }

    return (
        <>
            {/* Button trigger modal */}
            <button
                type="button"
                ref={ref}
                className="btn btn-primary d-none"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
            >
                Modal
            </button>
            {/* Modal */}
            <div
                className="modal fade"
                id="staticBackdrop"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                tabIndex={-1}
                aria-labelledby="staticBackdropLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">
                                Update Note
                             </h1>

                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleUpdateClick}>
                                <div className="mb-3">
                                    <label htmlFor="updatetitle" className="form-label">
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="updatetitle"
                                        name="updatetitle"
                                        aria-describedby="emailHelp"
                                        onChange={handleChange}
                                        value={note.updatetitle}
                                        minLength={5}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="updatedescription" className="form-label">
                                        Description
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="updatedescription"
                                        name="updatedescription"
                                        onChange={handleChange}
                                        value={note.updatedescription}
                                        minLength={5}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="updatetag" className="form-label">
                                        Tag
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="updatetag"
                                        name="updatetag"
                                        onChange={handleChange}
                                        value={note.updatetag}
                                        minLength={5}
                                        required
                                    />
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={handleCheckBoxClick} />
                                    <label className="form-check-label" htmlFor="exampleCheck1">
                                        Yes! I want to update the note
                                    </label>
                                </div>
                            </form>

                        </div>
                        <div className="modal-footer">
                            <button
                                ref={closeRef}
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button disabled={!checked || note.updatetitle.length < 5 || note.updatedescription.length < 5} type="button" className="btn btn-primary" onClick={handleUpdateClick} >
                                Update Note
                            </button>
                        </div>
                    </div>
                </div>
            </div>
                <div className="notes row ">
                    {state.length === 0 && <div className="container">No Note to Display.</div>}
                    {state.map((e) => {
                        return <div key={e._id} className="card col-md-3 mx-1 my-3" style={{ width: "16rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">{e.title}</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">{e.tag}</h6>
                                <p className="card-text">
                                    {e.description}
                                </p>
                                <UilTrash to="/" style = {{cursor : "pointer"}} className="card-link " onClick={() => deleteNote(e._id)} />
                                <UilEdit to="/" style = {{cursor : "pointer"}} className="card-link " onClick={() => openModal(e)} />
                            </div>
                        </div>
                    })}
                </div>
        </>
    )
}

export default Note