import Image from "next/image";
import styles from "../styles/Gallery2.module.css";

const Gallery2 = () => { 
  return (   
    <div> 
        
  <div className={styles.container}>
    <div className={styles.imghoverzoom}>
      <Image
        src="/img/1.jpg"
        alt="Other Headphones"
        className={styles.image}
        width="600px"
        height="620px"
      />
    </div>
    <div className={styles.textblock}>
      <h4>Men clothing</h4>
    </div>
  </div>
  <div className={styles.container}>
    <div className={styles.imghoverzoom}>
      <Image
        src="/img/2.jpg"
        alt="Other Headphones"
        className={styles.image}
        width="600px"
        height="300px"
      />
    </div>
    <div className={styles.textblock}>
      <h4>Women clothing</h4>
    </div>
  </div>
  <div className={styles.containerimage1}>
    <div className={styles.imghoverzoom}>
      <Image
        src="/img/3.jpg"
        alt="Other Headphones"
        className={styles.image1}
        width="300px"
        height="300px"
      />
    </div>
    <div className={styles.textblock}>
      <h4>T-shirt</h4>
    </div>
  </div>
  <div className={styles.containerimage1}>
    <div className={styles.imghoverzoom}>
      <Image
        src="/img/4.jpg"
        alt="Other Headphones"
        className={styles.image1}
        width="300px"
        height="300px"
      />
    </div>
    <div className={styles.textblock}>
      <h4>Hand bag</h4>
    </div>
  </div>



    </div>
  );
};

export default Gallery2;
