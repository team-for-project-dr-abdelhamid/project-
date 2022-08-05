
import styles from '../styles/mailus.module.css';
import Image from "next/image";
import Link from "next/Link";

export default function mailus() {
  return (
    <div className={styles.container}>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
  
<div className={styles.bg}>
    
    <p className={styles.pp} >
    Mail us
    
    <b>
         
        
    
    <a  className={styles.lin} target=""><Link href="/"> Home</Link></a>
      
    </b>
    </p>
  </div>
  
  
  <br />
  <h1 className= {styles.h11}>Mail us</h1>
  <br />
  
  <div className={styles.container}>
    <div className={styles.row}>
      <div className={styles.column}>
        <button className={styles.btn }>
        <Image src="/img/icon1.png" alt="" width="60" height="60" />
        </button>
        <p className={styles.p1}>Adress</p> <br />
        <p className={styles.p2}>shoubra facality of engineering</p> 
      </div>
      <div className={styles.column}>  
        <button className={styles.btn}> 
        <Image src="/img/telephone.png" alt="" width="60" height="60" />
        </button>
        <p className={styles.p1}>Phone</p>
        <br />
        <p className={styles.p2}> Telephone: +1 800 603 6035</p>
      </div>
      <div className={styles.column}>
        <button className={styles.btn}>
        <Image src="/img/iconnn.png" alt="" width="60" height="60" />
        </button>
        <p className={styles.p1}>E-mail</p>
        <br />
        <p className={styles.p2}>E-mail: example@mail.com</p>
      </div>
    </div>
  </div>
  <div className={styles.map}>
    <iframe className={styles.iframe2}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.4334153018676!2d31.247288485814614!3d30.081771223765244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584011af8feb2f%3A0xd839444d08bb1fa5!2z2YPZhNmK2Kkg2KfZhNmH2YbYr9iz2Kkg2KzYp9mF2LnYqSDYqNmG2YfYpyDYqNi02KjYsdin!5e0!3m2!1sar!2seg!4v1659517564199!5m2!1sar!2seg"
      width={600}
      height={450}
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
  <h1 className={styles.h11}> Get In Touch With Us</h1>
  <br />
  <div className={styles.alll}>
  <div className="w3-row-padding"> 
    <div className="w3-third">
      <input className="w3-input w3-border" type="text" placeholder="name" />
    </div>
    <div className="w3-third">
      <input className="w3-input w3-border" type="text" placeholder="Email" />
    </div>
    <div className="w3-third">
      <input
        className="w3-input w3-border"
        type="text"
        placeholder="Telephone"
      />
    </div>
    <br />
    <br />
    <div className="w3-third">
      <form>
        <textarea className={styles.textarea2} type="text" placeholder="message" defaultValue={""} />
      </form>
    </div>
  </div>
  <button className={styles.button}>Submit</button> <t/> <t/> <t/>
  <button className={styles.button}>Clear</button>
  
    </div>

    <br></br>
    </div>


  )
}