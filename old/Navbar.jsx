import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Help</div>
          <div className={styles.text}>012 345 678</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}><link href="/" /> </li>
          <li className={styles.listItem}><a href="/men">Men</a></li>
          <li className={styles.listItem}><a href="/women">Women</a></li>
          <Image src="/img/uyi.png" alt="" width="160px" height="69px" />
          <li className={styles.listItem}><a href="login.js">Login</a></li>
          <li className={styles.listItem}><a href="register.js">Create Account</a></li>
          <li className={styles.listItem}><a href="/mailus">Mail Us</a></li>
        </ul>
      </div>
      <div className={styles.item}>
      <li className={styles.navleft}><a href="checkout.js">Checkout</a></li>
        <div className={styles.cart}>
          <Image src="/img/cart.png" alt="" width="30px" height="30px" />
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;