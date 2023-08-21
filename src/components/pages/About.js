import React, { useContext } from 'react'
import Navbar from '../Navbar';
import noteContext from '../../context/notes/noteContext';

const About = () => {

    const state = useContext(noteContext)
    return (
        <div>
            <Navbar />
            <h1>
                About {state.name}
            </h1>
        </div>
    )
}

export default About
