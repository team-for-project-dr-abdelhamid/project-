import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bb1.jpg" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h3 className={styles.motto}>
            <h1 className={styles.title}>About Us</h1>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
          </h3>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>My Account</h1>
          <p className={styles.text}>
          <ul className={styles.list}>
          <li className={styles.fooo}><a href="index.js">Home</a></li>
          <li className={styles.fooo}><a href="men.js">Men</a></li>
          <li className={styles.fooo}><a href="women.js">Women</a></li>
          </ul>
          </p>
          
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.text}>
             
          <Image src="/img/images.jpg" alt="" width="20" height="20" /> 9878/25 sec 9 rohini 35
          </p>
          <p className={styles.text}>
          <Image src="/img/telephone.png" alt="" width="20" height="20" /> +91-9999878398
          </p>
          <p className={styles.text}>
          <Image src="/img/email.jpg" alt="" width="20" height="20" /> info@example.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
