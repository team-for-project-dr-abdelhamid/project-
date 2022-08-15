import React, {useState,setState} from 'react';
import styles from "../styles/register.module.css"; 
export default function Register() { 
    const [UseaName, setuserName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);
    const handleInputChange = (e) => {
        const {id , value} = e.target;
        if(id === "UserName"){
            setuserName(value);
        }
        if(id === "email"){
            setEmail(value);
        }
        if(id === "password"){
            setPassword(value);
        }
        if(id === "confirmPassword"){
            setConfirmPassword(value);
        }

    }

    const handleSubmit  = () => {
        console.log(UserName,email,password,confirmPassword);
    }
  return (  
    <div> 
    <meta charSet="UTF-8" /> 
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" /> 
  <meta name="viewport" content="width=device-width, initial-scale=1.0" /> 
  <title>Login</title> 
  <link 
    rel="stylesheet" 
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" 
  /> 
  <div className={styles.login}> 
    <div className={styles.mma}> 
      <div className={styles.formm}> 
        <h3 className={styles.formmh3}>Register</h3> 
        <form action="/send-data-here" method="post"> 
        <div className={styles.key}> 
            <input className={styles.in1} 
              type="text" 
              defaultValue="Username" 
              name="Username" 
              required="" 
              onChange = {(e) => handleInputChange(e)}
              id="Username"
            /> 
            <div className={styles.clearfix}> </div> 
          </div> 
          <div className={styles.key}> 
             
            <input className={styles.in1} 
              type="text" 
              defaultValue="Email" 
              name="Email" 
              required="" 
              onChange = {(e) => handleInputChange(e)}
              id="Email"
            /> 
            <div className={styles.clearfix}> </div> 
          </div> 
          <div className={styles.key}> 
             
            <input  
              type="password" className={styles.in1} 
              defaultValue="Password" 
              name="Password"                                           
              required=""
              onChange = {(e) => handleInputChange(e)} 
              id="password"
              pattern="[a-z0-9]{1,15}"
              title="Password should be digits (0 to 9) or alphabets (a to z)."

            /> 
            <div className={styles.clearfix}> </div> 
          </div> 
          <div className={styles.key}> 
             
            <input  
              type="password" className={styles.in1} 
              pattern="[a-z0-9]{1,15}"
              title="Password should be digits (0 to 9) or alphabets (a to z)."
              defaultValue="confirmPassword" 
              name="confirmPassword" 
              required="" 
              onChange = {(e) => handleInputChange(e)}
              id="confirmPassword"
            /> 
            <div className={styles.clearfix}> </div> 
          </div>
          <input className={styles.sub} type="Submit" defaultValue="Submit" /> 
        </form> 
      </div> 
      <br></br> 
    </div> 
    <br></br> 
  </div> 
</div>
  )
}