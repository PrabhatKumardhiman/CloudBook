import React, {useContext} from 'react'
import alertContext from './../context/alert/alertContext';

function Alert() {
    const { alert } = useContext(alertContext)
    console.log(alert)
    const capitalize = (word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{height: '50px'}}>
        {alert && <div className={`alert ${alert.css} alert-${alert.type} alert-dismissible fade show`} role="alert">
           <strong>{capitalize(alert.type)}</strong>: {alert.msg} 
        </div>}
        </div>
    )
}

export default Alert