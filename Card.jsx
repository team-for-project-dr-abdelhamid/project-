import Image from "next/image";
import styles from "../styles/Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.container}>
      <Image src={props.img} alt="" width="500" height="500" />
      <h1 className={styles.title}>{props.title}</h1>
      <span className={styles.price}>{props.price}</span>
      <p className={styles.desc}>
        {props.des}

        <h6>XL / XXL / S</h6>

        <button className={styles.btn} onClick={()=>addItem(props.item)}>Add to cart</button>
      </p>
    </div>
  );
};

export default Card;
