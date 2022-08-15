import Image from "next/image";
import styles from "../styles/gallery.module.css";

const Gallery = () => { 
  return (   
    <div> 
        <div className={styles.container}>
    <Image src="/img/g1.webp" alt="Other Headphones" className={styles.image} width="400"   height="250"/>
    <div className={styles.overlay}>
      <div className={styles.text}>Women</div>
    </div>
  </div>
  <div className={styles.container}>
    <Image src="/img/g2.avif" alt="Other Headphones" className={styles.image} width="400"   height="250" />
    <div className={styles.overlay}>
      <div className={styles.text}>Men</div>
    </div>
  </div>
  <div className={styles.container}>
    <Image src="/img/g3.webp" alt="Other Headphones" className={styles.image} width="400"   height="250" />
    <div className={styles.overlay}>
      <div className={styles.text}>Bag</div>
    </div>
  </div>
  <div className={styles.container}>
    <Image src="/img/g4.webp" alt="Other Headphones" className={styles.image} width="400"   height="250"/>
    <div className={styles.overlay}>
      <div className={styles.text}>Sun glasses</div>
    </div>
  </div>
  <div className={styles.container}>
    <Image src="/img/g5.webp" alt="Other Headphones" className={styles.image} width="400"   height="250"/>
    <div className={styles.overlay}>
      <div className={styles.text}>Watch</div>
    </div>
  </div>
  <div className={styles.container}>
    <Image src="/img/g6.webp" alt="Other Headphones" className={styles.image} width="400"   height="250"/>
    <div className={styles.overlay}>
      <div className={styles.text}>Shoes</div>
    </div>
  </div>


    </div>
  );
};

export default Gallery;
