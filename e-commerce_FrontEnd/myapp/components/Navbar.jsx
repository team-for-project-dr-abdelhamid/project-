import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import Link from "next/Link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/phone.svg" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Help</div>
          <div className={styles.text}>012 345 678</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}><a className={styles.btn}><Link href="/"> Home</Link> </a></li>
          <li className={styles.listItem}><a className={styles.btn} href="/men">Men</a></li>
          <li className={styles.listItem}><a className={styles.btn} href="/women">Women</a></li>
          
          <Image src="/img/uyi.png" alt="" width="160px" height="69px" />
          <li className={styles.listItem}><a className={styles.btn} href="/login">Login</a></li>
          <li className={styles.listItem}><a className={styles.btn} href="/register2">Create Account</a></li>
          <li className={styles.listItem}><a className={styles.btn} href="/mailus">Mail Us</a></li>
        </ul>
      </div>
      <div className={styles.item}>
      <li className={styles.navleft}><a href="/checkout">Checkout</a></li>
        <div className={styles.cart}>
          <a  href="/Cart"><Image src="/img/cart.png" alt="" width="30px" height="30px" /> </a>
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;