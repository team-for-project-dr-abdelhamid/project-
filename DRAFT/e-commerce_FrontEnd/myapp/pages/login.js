
import styles from "../styles/login.module.css";

export default function login() {
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
        <h3 className={styles.formmh3}>Login To New Shop</h3>
        <form action="/action_page.php" method="post">
          <div className={styles.key}>
            
            <input className={styles.in1}
              type="text"
              placeholder=" Email"
              required
              id="email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              title="This Email isn't correct"
              minLength={8}
              maxLength={20}
            />
            <div className={styles.clearfix}> </div>
          </div>
          <div className={styles.key}>
            
            <input 
              type="password" className={styles.in1}
              placeholder=" Password"
              required
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="This Password is wrong, Please enter the correct password"
              minLength={8}
              maxLength={20}
            />
            <div className={styles.clearfix}> </div>
          </div>
          <input className={styles.sub} type="Submit" defaultValue="Login" />
        </form>
      </div>
      <br></br>
      <div className={styles.forg}>
        <a  href="#" className={styles.forgl}>
          Forget Password
        </a>
        <a href="/register2" className={styles.forgr}>
          Register
        </a>
      </div>
    </div>
    <br></br>
  </div>
</div>










  )
}