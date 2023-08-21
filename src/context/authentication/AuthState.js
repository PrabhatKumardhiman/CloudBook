import AuthContext from "./authContext";
import { useNavigate } from "react-router-dom";


const AuthState = (props) => {

  let navigate = useNavigate();
  const login = async (user, showAlert) => {
    console.log(showAlert)
    try {
      const response = await fetch(`http://localhost:5000/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const json = await response.json();
      console.log(json)
      if (json.jwtToken) {
        localStorage.setItem("token", json.jwtToken)
        navigate("/");
        showAlert("Login Sucessful", "success")
      }
    } catch (error) {
      showAlert("Invalid Login Credentials", "danger")
    }
  }

  const createUser = async (user) =>{
      const {name, email, password } = await user
      try {
        const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({name, email, password }),
        });
        const json = await response.json();
        console.log(json)
        if (json.jwtToken) {
          localStorage.setItem("token", json.jwtToken)
          navigate("/");
        }
        else {
          console.log("Invalid Credentials")
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