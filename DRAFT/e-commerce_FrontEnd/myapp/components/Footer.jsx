import Image from "next/image";
import styles from "../styles/Footer.module.css";
import Link from "next/Link";

const Footer = () => {
  return (
    <div className={styles.conta}>
      <div className={styles.item}>
        <Image src="/img/fot2.jpg" objectFit="cover" layout="fill" alt="" />
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
          <li className={styles.fooo}><Link href="/">Home</Link></li>
          <li className={styles.fooo}><a href="/men">Men</a></li>
          <li className={styles.fooo}><a href="/women">Women</a></li>
          </ul>
          </p>
          
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>Contact Us</h1>
          <p className={styles.text}>
             
          <Image src="/img/location.svg" alt="" width="20" height="20" /> 9878/25 sec 9 rohini 35
          </p>
          <p className={styles.text}>
          <Image src="/img/phone.svg" alt="" width="20" height="20" /> +91-9999878398
          </p>
          <p className={styles.text}>
          <Image src="/img/email.svg" alt="" width="20" height="20" /> info@example.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
