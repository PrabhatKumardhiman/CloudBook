import react , {useState, useContext} from 'react';
import Navbar from '../Navbar';
import authContext from '../../context/authentication/authContext';

const Signup = () => {
    const { createUser } = useContext(authContext)
    const [ user, setUser ] = useState({name: "", email : "", password : "", cpassword : ""})

    const handleSubmit = (e) =>{
        e.preventDefault();
        user.password === user.cpassword ? createUser(user) : alert("Password does not match")
    }

    const onChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value })
    }
    return (
        <div>
        <Navbar displaysignup={"d-none"} />
        <div className="container d-flex justify-content-around align-items-center " style = {{height: "calc(100vh - 60px)", width: "60%"}} >
        <h1> CloudBook </h1>
            <form onSubmit = {handleSubmit} >
                <div className="mb-3">
                    <label htmlFor="name" className="form-label" style={{fontSize:"1.5rem"}} >
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name = "name"
                        aria-describedby="emailHelp"
                        value = {user.name}
                        onChange = {onChange}
                        required
                        minLength = {3}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label" style={{fontSize:"1.5rem"}} >
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name = "email"
                        aria-describedby="emailHelp"
                        value = {user.email}
                        onChange = {onChange}
                        required
                    />
                    <div id="emailHelp" className="form-text">
                        We'll never share your email with anyone else.
                    </div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label" style={{fontSize:"1.5rem"}}>
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name = "password"
                        value = {user.password}
                        onChange = {onChange}
                        required
                        minLength = {5}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label" style={{fontSize:"1.5rem"}}>
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="cpassword"
                        name = "cpassword"
                        value = {user.cpassword}
                        onChange = {onChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Signup
                </button>
            </form>

        </div>
    </div>
    )
}

export default Signup
