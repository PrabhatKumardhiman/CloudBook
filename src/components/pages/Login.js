import { useState, useContext } from 'react';
import authContext from '../../context/authentication/authContext';
import alertContext from './../../context/alert/alertContext';
import Alert from './../Alert';


const Login = () => {
    const { login } = useContext(authContext)
    const { showAlert } = useContext(alertContext)

    const [user, setUser] = useState({ email: "", password: "" })

    const handleSubmit = (e) => {
        e.preventDefault();
        login(user, showAlert)
    }

    const onChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <Alert alert={alert} />
            <div className="container-md .flex-row justify-content-around align-items-center mt-3" >
                <h1 className="container"> CloudBook </h1>
                <div className="container" >
                    <div className="card-body">
                        <form onSubmit={handleSubmit} >
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label" style={{ fontSize: "1.5rem" }} >
                                    Email address
                        </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    aria-describedby="emailHelp"
                                    value={user.email}
                                    onChange={onChange}
                                />
                                <div id="emailHelp" className="form-text">
                                    We'll never share your email with anyone else.
                        </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label" style={{ fontSize: "1.5rem" }}>
                                    Password
                        </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    value={user.password}
                                    onChange={onChange}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Login
                    </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
