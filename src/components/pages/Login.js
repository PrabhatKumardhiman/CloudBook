import react , {useState, useContext} from 'react';
import Navbar from '../Navbar';
import authContext from '../../context/authentication/authContext';


const Login = () => {
    const { login } = useContext(authContext)
    const [ user, setUser ] = useState({ email : "", password : ""})

    const handleSubmit = (e) =>{
        e.preventDefault();
        login(user)
    }

    const onChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <Navbar display={"d-none"} />
            <div className="container d-flex justify-content-between align-items-center " style = {{height: "calc(100vh - 60px)", width: "60%"}} >
            <h1> CloudBook </h1>
                <form onSubmit = {handleSubmit} >
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
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Login
                    </button>
                </form>

            </div>
        </div>
    )
}

export default Login
