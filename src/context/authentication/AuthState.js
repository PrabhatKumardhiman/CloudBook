import AuthContext from "./authContext";
import { useNavigate } from "react-router-dom";


const AuthState = (props) => {
  const host = 'https://cloudbook-backend-vqj0.onrender.com/'
  let navigate = useNavigate();
  const login = async (user, showAlert) => {
    try {
      const response = await fetch(`${host}api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const json = await response.json();
      if (json.jwtToken) {
        localStorage.setItem("token", json.jwtToken)
        navigate("/");
        showAlert("Login Sucessful", "success")
      }
    } catch (error) {
      showAlert("Invalid Login Credentials", "danger")
    }
  }

  const createUser = async (user) => {
    const { name, email, password } = await user
    try {
      const response = await fetch(`${host}api/auth/createuser`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      const json = await response.json();
      if (json.jwtToken) {
        localStorage.setItem("token", json.jwtToken)
        navigate("/");
      }
      else {
        showAlert("Invalid Credentials", "danger")
      }
    } catch (error) {
      alert("Invalid Credentials")
    }
  }


  return (
    <AuthContext.Provider value={{ login, createUser }} >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState;