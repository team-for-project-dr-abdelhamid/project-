import Head from "next/head";
import CardList from "../components/CardList";
import Featured from "../components/Featured";
import styles from "../styles/Home.module.css";

import Gallery2 from "../components/Gellary2";


export default function Home() {

  
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Best Shopping experience in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      <Gallery2/>
      <CardList/>
      
      <t/> <t/> <t/> <t/> <t/> <t/> 
      
    </div>
  );
};
