import AlertContext from "./alertContext";
import { useState } from 'react';

const AlertState = (props) => {
    const [ alert, setAlert ] = useState(null)
    console.log(alert)

    const showAlert = (message, type)=>{
        setAlert({
        msg: message,
        type: type,
        css: "alertopen"
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
    }

    return (
        <AlertContext.Provider value={{ alert, showAlert }} >
          {props.children}
        </AlertContext.Provider>
      )
}

export default AlertState;