import styles from "../styles/checkout.module.css";
import Image from "next/image";

export default function Checkout() {
  return ( 
    <div>
        
        <title>Shopping Cart</title>
  <div className={styles.cont}>
    <h1 className={styles.conth1}>Shopping Cart</h1>
    <div className={styles.cart}>
      <div className={styles.products}>
        <div className={styles.product}> 
        <Image
        src="/img/33.jpg"
        alt="Other Headphones"
        width="500px"
        height="500px"
      />
          <div className={styles.productinfo}>  
            <h3 className={styles.productname}>New pijama</h3>
            <h4 className={styles.productprice}>₹ 1,000</h4> 
            <h4 className={styles.productoffer}>50%</h4> 
            <p className={styles.productquantityp}> 
              Qnt:{" "}
              <input
                className={styles.productquantityinput} 
                defaultValue={1}
                name=""
              />
            </p>
            <p className={styles.productremove}> 

              <span className={styles.remove}>Remove</span>
            </p>
          </div>
        </div>
        <div className={styles.product}>
        <Image
        src="/img/22.jpg"
        alt="Other Headphones"
        width="500px"
        height="500px"
      />
          <div className={styles.productinfo}>
            <h3 className={styles.productname}>New Bag</h3>
            <h4 className={styles.productprice}>₹ 2,000</h4>
            <h4 className={styles.productoffer}>40%</h4>
            <p className={styles.productquantity}>
              Qnt:{" "}
              <input
                className={styles.productquantityinput}
                defaultValue={1}
                name=" "
              />
            </p>
            <p className={styles.productremove}>
            
            
              <span className={styles.remove}>Remove</span>
            </p>
          </div>
        </div>
      </div>
      <div className={styles.carttotal}>
        <p className={styles.carttotalp}> 
          <span>Total Price</span>
          <span>₹ 3,000</span>
        </p>
        <p>
          <span>Number of Items</span>
          <span>2</span>
        </p>
        <p>
          <span>You Save</span>
          <span>₹ 1,000</span>
        </p>
        <a className={styles.carttotala} href="{#}">
          Proceed to Checkout
        </a>
      </div>
    </div>
  </div>
  
        
  
  
  
   </div>

  );
};


