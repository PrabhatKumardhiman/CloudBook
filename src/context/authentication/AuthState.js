import AuthContext from "./authContext";
import { useNavigate  } from "react-router-dom";


const AuthState = (props) => {
  
  let navigate = useNavigate();

  const login = async (user) => {
    console.log(user)
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
      if(json.jwtToken){
        localStorage.setItem("token", json.jwtToken)
        navigate("/");
      }
      else {
        console.log("Invalid Credentials")
      }
    } catch (error) {
      console.error(error.message)
    }
  }


  return (
    <AuthContext.Provider value={{ login }} >
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthState;