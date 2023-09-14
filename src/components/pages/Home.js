import Navbar from '../Navbar';
import AddNote from '../AddNote';
import AllNotes from '../AllNotes';
import Alert from '../Alert';

const Home = () => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <section>
                <div className="container">
                    <Alert alert={alert} />
                    <AddNote />
                    <AllNotes />
                </div>
            </section>
        </>
    )
}

export default Home
