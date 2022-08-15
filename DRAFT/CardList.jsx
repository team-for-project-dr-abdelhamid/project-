import styles from "../styles/CardList.module.css";
import Card from "./Card"

const CardList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST Shop IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wrapper}>
          <Card img="/img/p5.jpg" title="Sed ut perspiciatis unde" price="123$" des="Ten Women's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
          
           <div className={styles.diva}>  </div>
          <Card img="/img/p7.jpg"  title="Sed ut perspiciatis unde" price="$345" des="Ten Women's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
         <div className={styles.diva}>  </div>
          <Card img="/img/p10.jpg" title="Sed ut perspiciatis unde" price="$678Sed ut perspiciatis unde" des="Ten Women's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
         <div className={styles.diva}>  </div>
          <Card img="/img/p12.jpg" title="Sed ut perspiciatis unde" price="$890" des="Ten Women's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
          
          <div className={styles.diva}>  </div>
          <Card img="/img/p27.jpg"  title="Sed ut perspiciatis unde" price="$678" des="Ten Women's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
         <div className={styles.diva}>  </div>
          <Card img="/img/s4.jpg"  title="Sed ut perspiciatis unde" price="&870" des="Ten Women's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
         <div className={styles.diva}>  </div>
          <Card img="/img/si.jpg" title="Sed ut perspiciatis unde" price="$785" des="Ten Women's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
         <div className={styles.diva}>  </div>
          <Card img="/img/si1.jpg"  title="Sed ut perspiciatis unde" price="$678" des="Ten Women's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
      </div>
    </div>
  );
};

export default CardList;
