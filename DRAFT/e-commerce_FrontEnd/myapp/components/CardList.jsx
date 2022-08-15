import styles from "../styles/CardList.module.css";
import Card from "./Card"
import Gallery from "../components/Gallery";
const CardList = () => {
  return (
    <div className={styles.contai}>
      <h1 className={styles.title}>New Arrivals</h1>
      <div className={styles.wrapper}>
          <Card img="/img/w8.jpg" title=" Leather  Shoes" price="123$" des=" Classic Genuine Leather Derby Shoes"/>
          
           <div className={styles.diva}>  </div>
          <Card img="/img/w1.jpg"  title=" Dress With Belt " price="$345" des="Casual Faux Leather Buttoned Dress With Belt - Black" />
         <div className={styles.diva}>  </div>
          <Card img="/img/w2.jpg" title=" Leather Sneakers" price="$678" des="Fancy Faux Leather Slip-On Snake Print Sneakers" />
         <Gallery/>
         <div className={styles.divv}>
         <h1 className={styles.title}>Best Sellers</h1>
         </div>
         
         <div className={styles.diva}>  </div>
          <Card img="/img/w3.jpg" title=" Leather Jacket" price="$890" des="Full Sleeves Leather Zipped Jacket - Black." />
          
          <div className={styles.diva}>  </div>
          <Card img="/img/w4.jpg"  title="Crew Neck Sweatshirt " price="$678" des="Crew Neck Sweatshirt With Front Embriodery - Black" />
         <div className={styles.diva}>  </div>
          <Card img="/img/w5.jpg"  title=" Heel Sandals" price="&870" des="Nude Clear Heel Mule Sandals" />
         <div className={styles.divv}>
         <h1 className={styles.title}>New Products</h1>
         </div>
         
         <div className={styles.diva}>  </div>
          <Card img="/img/w6.jpg" title="Casual Collared Paisely Pattern Buttoned Short Dress" price="$785" des="Casual Collared Paisely Pattern Buttoned Short Dress With Block Bottom Part & Pleats - Yellow & Electric Blue Paisley Print" />
         <div className={styles.diva}>  </div>
          <Card img="/img/w7.jpg"  title=" T-Shirt With Prin" price="$678" des="Short Sleeve Regular Fit Crew Neck Cotton T-Shirt With Prin" />
      </div>
    </div>
  );
};

export default CardList;
