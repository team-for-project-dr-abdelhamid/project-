import styles from "../styles/women.module.css";
import Link from "next/Link";
import Image from "next/image";
import Cardwm from "../components/Cardwm" 

export default function Men() {
  return ( 
    <div >
        <div className={styles.bg}>
    
    <p className={styles.pp} >
    Men
    
    <b>
         
        
    
    <a  className={styles.lin} target=""><Link href="/"> / Home</Link></a>
      
    </b>
    </p>
  </div>
        <div className={styles.categories}>
      <button className={styles.butn}>Categories</button>
        <ul className="treelistpad">
          <li>
            <input className={styles.categoriesinput} type="checkbox" defaultChecked="checked" id="item-0" />
            <label className={styles.categorieslabel} htmlFor="item-0">
              <span />
              Men Wear
            </label>
            <ul className={styles.categoriesul}>
              <li>
                <input className={styles.categoriesinput} type="checkbox" id="item-0-1" />
                <label  className={styles.categorieslabel} htmlFor="item-0-1">Casual wear</label>
                <ul className={styles.categoriesul}>
                  <li>
                    <a className={styles.categoriesa} href="#c0">Shirts</a>
                  </li>
                  <li>
                    <a className={styles.categoriesa}  href=" #c1">Pants</a>
                  </li>
                  <li>
                    <a className={styles.categoriesa}  href=" #c2">Shoes</a>
                  </li>
                  <li>
                    <a className={styles.categoriesa}  href="#c3">Sunglasses</a>
                  </li>
                </ul>
              </li>
              <li>
                <input className={styles.categoriesinput} type="checkbox" id="item-0-2" />
                <label  className={styles.categorieslabel} htmlFor="item-0-2">Formal Wear</label>
                <ul className={styles.categoriesul} >
                  <li>
                    <a className={styles.categoriesa}  href="#c4">Suits</a>
                  </li>
                  <li>
                    <a className={styles.categoriesa}  href=" #c5">Jakets</a>
                  </li>
                  <li>
                    <a className={styles.categoriesa}  href=" #c6">Pants</a>
                  </li>
                  <li>
                    <a className={styles.categoriesa}  href="#c7">Shoes</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>

            <input className={styles.categoriesinput} type="checkbox" defaultChecked="checked" id="item-2" />
            <label  className={styles.categorieslabel} htmlFor="item-2">Best Seller</label>
            <ul className={styles.categoriesul}>
              <ul className={styles.categoriesul}>
                <li>
                  <a className={styles.categoriesa}  href="#c8">Shirts</a>
                </li>
                <li>
                  <a className={styles.categoriesa}  href=" #c9">Suits</a>
                </li>
                <li>
                  <a className={styles.categoriesa}  href=" #c10">Shoes</a>
                </li>
                <li>
                  <a className={styles.categoriesa}  href=" #c11">Pants</a>
                </li>
              </ul>
            </ul>
          </li>
        </ul>
    
    <br></br> <br></br> <br></br>

        <Image className={styles.oo}
                  src="/img/male55.webp"
                  objectFit="cover"
                  alt=""
                  width={500}
                  height={600}
                />
<div className={styles.cc}>
  <h3 className={styles.ff}>Top Rates products</h3>
  <div className={styles.recentgrids}>
    <div className={styles.recentleft}>
      <a className={styles.bb} href="/Product/123">
            <Image 
                  className={styles.imgresponsive} src="/img/csh2.jpg"
                  objectFit="cover"
                  alt=""
                  width={600}
          height={400}
                />
  
      </a>
    </div>
    <div className={styles.recentright}>
      <h6 className={styles.best2}>
        <a className={styles.bb} href="/Product/123">
          Lorem ipsum dolor{" "}
        </a>
      </h6>
      <p className={styles.gg}>
        <del>$100.00</del> <em className={styles.itemprice}>$09.00</em>
      </p>
    </div>
    <div className={styles.cf}> </div>
  </div>
  <div className={styles.recentgrids}>
    <div className={styles.recentleft}>
      <a className={styles.bb} href="/Product/123">

      <Image
                  className={styles.imgresponsive} src="/img/csh9.jpg"
                  objectFit="cover"
                  alt=""
                  width={600}
          height={400}
                />
      </a>
    </div>
    <div className={styles.recentright}>
      <h6 className={styles.best2}>
        <a className={styles.bb} href="/Product/123">
          Duis aute irure{" "}
        </a>
      </h6>
      <p>
        <del>$100.00</del> <em className={styles.itemprice}>$19.00</em>
      </p>
    </div>
    <div className={styles.cf}> </div>
  </div>
  <div className={styles.recentgrids}>
    <div className={styles.recentleft}>
      <a className={styles.bb} href="/Product/123">

      <Image
                  className={styles.imgresponsive} src="/img/fsu1.jpg"
                  objectFit="cover"
                  alt=""
                  width={600}
          height={400}
                />
       
      </a>
    </div>
    <div className={styles.recentright}>
      <h6 className={styles.best2}>
        <a className={styles.bb} href="/Product/123">
          Lorem ipsum dolor{" "}
        </a>
      </h6>
      <p>
        <del>$100.00</del> <em className={styles.itemprice}>$39.00</em>
      </p>
    </div>
    <div className={styles.cf}> </div>
  </div>
  <div className={styles.recentgrids}>
    <div className={styles.recentleft}>
      <a className={styles.bb} href="/Product/123">

      <Image
                  className={styles.imgresponsive} src="/img/fsh1.jpg"
                  objectFit="cover"
                  alt=""
                  width={600}
          height={400}
                />
        
      </a>
    </div>
    <div className={styles.recentright}>
      <h6 className={styles.best2}>
        <a className={styles.bb} href="/Product/123">
          Ut enim ad minim{" "}
        </a>
      </h6>
      <p>
        <em className={styles.itemprice}>$39.00</em>
      </p>
    </div>
    <div className={styles.cf}> </div>
  </div>
  </div>
  <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
  <Image className={styles.oo}
                  src="/img/male1.jpg"
                  objectFit="cover"
                  alt=""
                  width={500}
                  height={600}
                />
<br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
<Image className={styles.oo}
                  src="/img/male2.webp"
                  objectFit="cover"
                  alt=""
                  width={500}

                  height={600}
                />
<br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
<Image className={styles.oo}
                  src="/img/male3.jpg"
                  objectFit="cover"
                  alt=""
                  width={500}

                  height={600}
                />

                <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
                <Image className={styles.oo}
                  src="/img/male4.jpg"
                  objectFit="cover"
                  alt=""
                  width={500}

                  height={600}
                />
                 <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
                <Image className={styles.oo}
                  src="/img/male7.jpg"
                  objectFit="cover"
                  alt=""
                  width={500}

                  height={600}
                />
                <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
                <Image className={styles.oo}
                  src="/img/male8.avif"
                  objectFit="cover"
                  alt=""
                  width={500}

                  height={600}
                />

<br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
                <Image className={styles.oo}
                  src="/img/male10.jpg"
                  objectFit="cover"
                  alt=""
                  width={500}

                  height={600}
                />
                </div>
      


<div className={styles.hhq}>

           
      <div className={styles.contai}>
      <h1 className={styles.ti} >Casual Wear </h1>
      <h3 className={styles.hg}  id="c0">Shirts</h3>
      <div className={styles.wrapper}>
          <Cardwm  img="/img/csh.jpg" title="Sed ut perspiciatis unde" price="123$" des="TElegant Sleeveless Tweed Dress With Faux Leather Pockets - Burgundy, Gold & Black."/>
          
           <div className={styles.diva}>  </div>
          <Cardwm img="/img/csh2.jpg"  title="Sed ut perspiciatis unde" price="$345" des="Casual Faux Leather Buttoned Dress With Belt - Black. " />
         <div className={styles.diva}>  </div>
          <Cardwm img="/img/csh9.jpg" title="Sed ut perspiciatis unde" price="$678" des="Casual Midi Floral Printed Dress With Small Faux Leather Buckle - Black, White & Red." />
        
         <div className={styles.divv}>
         <h3 className={styles.hg}  id="c1">Pants</h3>
         </div>
         
         <div className={styles.diva}>  </div>
          <Cardwm img="/img/cp1.jpg" title="Sed ut perspiciatis unde" price="$890" des="Ten men's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
          
          <div className={styles.diva}>  </div>
          <Cardwm img="/img/cp2.jpg"  title="Sed ut perspiciatis unde" price="$678" des="Ten men's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
         <div className={styles.diva}>  </div>
          <Cardwm img="/img/cp3.jpg"  title="Sed ut perspiciatis unde" price="$870" des="Ten men's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
         <div className={styles.divv}>
         <h3 className={styles.hg}  id="c2">Shoes</h3>
         </div>
         
         <div className={styles.diva}>  </div>
          <Cardwm img="/img/csho1.jpg" title="Sed ut perspiciatis unde" price="$785" des="Ten men's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
         <div className={styles.diva}>  </div>
          <Cardwm img="/img/csho2.jpg"  title="Sed ut perspiciatis unde" price="$678" des="Ten men's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
      </div>
    </div>
     
    <div className={styles.contai}>
    <h1 className={styles.ti} >Formal Wear </h1>
    <h3 className={styles.hg}  id="c3">Suits</h3>
      <div className={styles.wrapper}>
          <Cardwm img="/img/fsu.jpg" title="Sed ut perspiciatis unde" price="123$" des="Ten men's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
          
           <div className={styles.diva}>  </div>
          <Cardwm img="/img/fsu1.jpg"  title="Sed ut perspiciatis unde" price="$345" des="Ten men's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
         <div className={styles.diva}>  </div>
          <Cardwm img="/img/fsu3.jpg" title="Sed ut perspiciatis unde" price="$678" des="Ten men's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
        
         <div className={styles.divv}>
         <h3 className={styles.hg}  id="c4">Jakets</h3>
         </div>
         
         <div className={styles.diva}>  </div>
          <Cardwm img="/img/fj.jpg" title="Sed ut perspiciatis unde" price="$890" des="Ten men's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
          
          <div className={styles.diva}>  </div>
          <Cardwm img="/img/fj1.jpg"  title="Sed ut perspiciatis unde" price="$678" des="Ten men's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
         <div className={styles.diva}>  </div>
          <Cardwm img="/img/fj3.jpg"  title="Sed ut perspiciatis unde" price="$870" des="Ten men's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
         <div className={styles.divv}>
         <h3 className={styles.hg}  id="c5">Pants</h3>
         </div>
         
         <div className={styles.diva}>  </div>
          <Cardwm img="/img/fp5.jpg" title="Sed ut perspiciatis unde" price="$785" des="Ten men's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
         <div className={styles.diva}>  </div>
          <Cardwm img="/img/fp7.jpg"  title="Sed ut perspiciatis unde" price="$678" des="Ten men's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
      </div>
    </div>
     


    </div>

    <Image className={styles.oo}
                  src="/img/male11.webp"
                  objectFit="cover"
                  alt=""
                  width={1000}

                  height={400}
                />

    <div className={styles.contai}>
    <h3 className={styles.hg}  id="c6">Shoes</h3>
      <div className={styles.wrapper}>
          <Cardwm img="/img/fsh2.jpg" title="Sed ut perspiciatis unde" price="123$" des="Ten men's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
          
           <div className={styles.diva}>  </div>
          <Cardwm img="/img/fsh3.jpg"  title="Sed ut perspiciatis unde" price="$345" des="Ten men's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
         <div className={styles.diva}>  </div>
          <Cardwm img="/img/csho2.jpg" title="Sed ut perspiciatis unde" price="$678" des="Ten men's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
        
         <div className={styles.divv}>
         <h1 className={styles.ti} >Best Seller </h1>
         <h3 className={styles.hg}  id="c7">Shirts</h3>
         </div>
         
         <div className={styles.diva}>  </div>
          <Cardwm img="/img/csh3.jpg" title="Sed ut perspiciatis unde" price="$890" des="Ten men's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
          
          <div className={styles.diva}>  </div>
          <Cardwm img="/img/csh4.jpg"  title="Sed ut perspiciatis unde" price="$678" des="Ten men's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
         <div className={styles.diva}>  </div>
          <Cardwm img="/img/csh5.jpg"  title="Sed ut perspiciatis unde" price="$870" des="Ten men's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
         <div className={styles.divv}>
         <h3 className={styles.hg}  id="c8">Suits</h3>
         </div>
         
         <div className={styles.diva}>  </div>
          <Cardwm img="/img/fsu.jpg" title="Sed ut perspiciatis unde" price="$785" des="Ten men's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
         <div className={styles.diva}>  </div>
          <Cardwm img="/img/fsu1.jpg"  title="Sed ut perspiciatis unde" price="$678" des="Ten men's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
      </div>
    </div>
     






    <div className={styles.contai}>
    <h3 className={styles.hg} id="c9">Shoes</h3>
      <div className={styles.wrapper}>
          <Cardwm img="/img/fsh2.jpg" title="Sed ut perspiciatis unde" price="123$" des="Ten men's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
          
           <div className={styles.diva}>  </div>
          <Cardwm img="/img/csho2.jpg"  title="Sed ut perspiciatis unde" price="$345" des="Ten men's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
         <div className={styles.diva}>  </div>
          <Cardwm img="/img/fsh3.jpg" title="Sed ut perspiciatis unde" price="$678" des="Ten men's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
        
         <div className={styles.divv}>
         <h3 className={styles.hg} id="c10">Pants</h3>
         </div>
         
         <div className={styles.diva}>  </div>
          <Cardwm img="/img/cp2.jpg" title="Sed ut perspiciatis unde" price="$890" des="Ten men's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
          
          <div className={styles.diva}>  </div>
          <Cardwm img="/img/fp7.jpg"  title="Sed ut perspiciatis unde" price="$678" des="Ten men's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
         <div className={styles.diva}>  </div>
          <Cardwm img="/img/cp3.jpg"  title="Sed ut perspiciatis unde" price="$870" des="Ten men's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
         <div className={styles.divv}>
         <h3 className={styles.hg} id="c11">Sunglasses</h3>
         </div>
         
         <div className={styles.diva}>  </div>
          <Cardwm img="/img/sunm1.jpg" title="Sed ut perspiciatis unde" price="$785" des="Ten men's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
         <div className={styles.diva}>  </div>
          <Cardwm img="/img/sunm2.jpg"  title="Sed ut perspiciatis unde" price="$678" des="Ten men's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
      
    </div>

    
    </div>

    </div>  


  );
};
