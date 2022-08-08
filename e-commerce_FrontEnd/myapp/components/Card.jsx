import Image from "next/image";
import styles from "../styles/Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.container}>
      <a href="/Product/123"><Image src={props.img} alt="" width="500" height="500" /></a>
      <h1 className={styles.title}>{props.title}</h1>
      <span className={styles.price}>{props.price}</span>
      <p className={styles.desc}>
        {props.des}

        <h6>XL / XXL / S</h6>

       <a href="/Cart"> <button className={styles.btn} onClick={()=>addItem(props.item)}>Add to cart</button> </a>
      </p>
    </div>
  );
};

export default Card;
