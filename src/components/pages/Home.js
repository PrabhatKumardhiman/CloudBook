import Navbar from '../Navbar';
import AddNote from '../AddNote';
import AllNotes from '../AllNotes';
import Alert from '../Alert';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Alert />
                <AddNote />
                <AllNotes />
            </div>
        </>
    )
}

export default Home
