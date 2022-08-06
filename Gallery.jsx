import Image from "next/image";
import styles from "../styles/gallery.module.css";

const Gallery = () => { 
  return (   
    <div> 
        <div className={styles.container}>
    <Image src="/img/photo_2022-08-05_20-31-50.jpg" alt="Other Headphones" className={styles.image} width="500"   height="250"/>
    <div className={styles.overlay}>
      <div className={styles.text}>men</div>
    </div>
  </div>
  <div className={styles.container}>
    <Image src="/img/photo_2022-08-05_20-30-30.jpg" alt="Other Headphones" className={styles.image} width="500"   height="250" />
    <div className={styles.overlay}>
      <div className={styles.text}>shoes</div>
    </div>
  </div>
  <div className={styles.container}>
    <Image src="/img/photo_2022-08-05_20-31-46.jpg" alt="Other Headphones" className={styles.image} width="500"   height="250" />
    <div className={styles.overlay}>
      <div className={styles.text}>woman</div>
    </div>
  </div>
  <div className={styles.container}>
    <Image src="/img/photo_2022-08-05_20-31-40.jpg" alt="Other Headphones" className={styles.image} width="500"   height="250"/>
    <div className={styles.overlay}>
      <div className={styles.text}>watch</div>
    </div>
  </div>
  <div className={styles.container}>
    <Image src="/img/photo_2022-08-05_20-31-55.jpg" alt="Other Headphones" className={styles.image} width="500"   height="250"/>
    <div className={styles.overlay}>
      <div className={styles.text}>bags</div>
    </div>
  </div>
  <div className={styles.container}>
    <Image src="/img/photo_2022-08-05_20-31-59.jpg" alt="Other Headphones" className={styles.image} width="500"   height="250"/>
    <div className={styles.overlay}>
      <div className={styles.text}>camera</div>
    </div>
  </div>


    </div>
  );
};

export default Gallery;
