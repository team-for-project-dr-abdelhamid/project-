import styles from "../styles/women.module.css";
import Link from "next/Link";
import Image from "next/image";
import Cardwm from "../components/Cardwm" 
export default function women() {
  return ( 
    <div >
        <div className={styles.bg}>
    
    <p className={styles.pp} >
    Women
    
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
              Women Wear
            </label>
            <ul className={styles.categoriesul}>
              <li>
                <input className={styles.categoriesinput} type="checkbox" id="item-0-1" />
                <label  className={styles.categorieslabel} htmlFor="item-0-1">Party Wear</label>
                <ul className={styles.categoriesul}>
                  <li>
                    <a className={styles.categoriesa} href="#c0">Dresses</a>
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
                <label  className={styles.categorieslabel} htmlFor="item-0-2">Casual Wear</label>
                <ul className={styles.categoriesul} >
                  <li>
                    <a className={styles.categoriesa}  href="#c4">Shirts</a>
                  </li>
                  <li>
                    <a className={styles.categoriesa}  href=" #c5">Pants</a>
                  </li>
                  <li>
                    <a className={styles.categoriesa}  href=" #c6">Shoes</a>
                  </li>
                  <li>
                    <a className={styles.categoriesa}  href="#c7">Sunglasses</a>
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
                  <a className={styles.categoriesa}  href=" #c9">Pants</a>
                </li>
                <li>
                  <a className={styles.categoriesa}  href=" #c10">Shoes</a>
                </li>
                <li>
                  <a className={styles.categoriesa}  href=" #c11">Sunglasses</a>
                </li>
              </ul>
            </ul>
          </li>
        </ul>
    
        <br></br> <br></br> <br></br>

<Image className={styles.oo}
          src="/img/d4.jpg"
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
          className={styles.imgresponsive} src="/img/d5.jpg"
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
          className={styles.imgresponsive} src="/img/sh9.jpg"
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
          className={styles.imgresponsive} src="/img/rt.jpg"
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
          className={styles.imgresponsive} src="/img/g5.webp"
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
          src="/img/200.webp"
          objectFit="cover"
          alt=""
          width={500}
          height={600}
        />
<br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
<Image className={styles.oo}
          src="/img/st2.jpg"
          objectFit="cover"
          alt=""
          width={500}

          height={600}
        />
<br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
<Image className={styles.oo}
          src="/img/st11.webp"
          objectFit="cover"
          alt=""
          width={500}

          height={600}
        />

        <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
        <Image className={styles.oo}
          src="/img/s2.jpg"
          objectFit="cover"
          alt=""
          width={500}

          height={600}
        />
         <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
        <Image className={styles.oo}
          src="/img/sho3.jpg"
          objectFit="cover"
          alt=""
          width={500}

          height={600}
        />
        <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
        <Image className={styles.oo}
          src="/img/899.webp"
          objectFit="cover"
          alt=""
          width={500}

          height={600}
        />

<br></br> <br></br> <br></br> <br></br> <br></br> <br></br>

        <Image
                  src="/img/st10.jpg"
                  objectFit="cover"
                  alt=""
                  width={500}
                  height={600}
                />
      </div>

<div className={styles.hhq}>

           
      <div className={styles.contai}>
      <h1 className={styles.ti} >Party Wear </h1>
      <h3 className={styles.hg}  id="c0">Dresses</h3>
      <div className={styles.wrapper}>
          <Cardwm  img="/img/d1.jpg" title="Sed ut perspiciatis unde" price="123$" des="TElegant Sleeveless Tweed Dress With Faux Leather Pockets - Burgundy, Gold & Black."/>
          
           <div className={styles.diva}>  </div>
          <Cardwm img="/img/d2.jpg"  title="Sed ut perspiciatis unde" price="$345" des="Casual Faux Leather Buttoned Dress With Belt - Black. " />
         <div className={styles.diva}>  </div>
          <Cardwm img="/img/d3.jpg" title="Sed ut perspiciatis unde" price="$678" des="Casual Midi Floral Printed Dress With Small Faux Leather Buckle - Black, White & Red." />
        
         <div className={styles.divv}>
         <h3 className={styles.hg}  id="c1">Pants</h3>
         </div>
         
         <div className={styles.diva}>  </div>
          <Cardwm img="/img/pq.jpg" title="Sed ut perspiciatis unde" price="$890" des="Ten Women's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
          
          <div className={styles.diva}>  </div>
          <Cardwm img="/img/p2.jpg"  title="Sed ut perspiciatis unde" price="$678" des="Ten Women's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
         <div className={styles.diva}>  </div>
          <Cardwm img="/img/p3.jpg"  title="Sed ut perspiciatis unde" price="$870" des="Ten Women's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
         <div className={styles.divv}>
         <h3 className={styles.hg}  id="c2">Shoes</h3>
         </div>
         
         <div className={styles.diva}>  </div>
          <Cardwm img="/img/s1.jpg" title="Sed ut perspiciatis unde" price="$785" des="Ten Women's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
         <div className={styles.diva}>  </div>
          <Cardwm img="/img/s2.jpg"  title="Sed ut perspiciatis unde" price="$678" des="Ten Women's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
      </div>
    </div>
     
    <div className={styles.contai}>
    <h1 className={styles.ti} >Casual Wear </h1>
    <h3 className={styles.hg}  id="c3">Sunglasses</h3>
      <div className={styles.wrapper}>
          <Cardwm img="/img/g3.jpg" title="Sed ut perspiciatis unde" price="123$" des="Ten Women's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
          
           <div className={styles.diva}>  </div>
          <Cardwm img="/img/g2.jpg"  title="Sed ut perspiciatis unde" price="$345" des="Ten Women's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
         <div className={styles.diva}>  </div>
          <Cardwm img="/img/g5.jpg" title="Sed ut perspiciatis unde" price="$678" des="Ten Women's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
        
         <div className={styles.divv}>
         <h3 className={styles.hg}  id="c4">Shirts</h3>
         </div>
         
         <div className={styles.diva}>  </div>
          <Cardwm img="/img/sh1.jpg" title="Sed ut perspiciatis unde" price="$890" des="Ten Women's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
          
          <div className={styles.diva}>  </div>
          <Cardwm img="/img/sh2.jpg"  title="Sed ut perspiciatis unde" price="$678" des="Ten Women's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
         <div className={styles.diva}>  </div>
          <Cardwm img="/img/sh3.jpg"  title="Sed ut perspiciatis unde" price="$870" des="Ten Women's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
         <div className={styles.divv}>
         <h3 className={styles.hg}  id="c5">Pants</h3>
         </div>
         
         <div className={styles.diva}>  </div>
          <Cardwm img="/img/p4.jpg" title="Sed ut perspiciatis unde" price="$785" des="Ten Women's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
         <div className={styles.diva}>  </div>
          <Cardwm img="/img/p6.jpg"  title="Sed ut perspiciatis unde" price="$678" des="Ten Women's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
      </div>
    </div>
     


    </div>



    <Image className={styles.oo}
                  src="/img/ttt.png"
                  objectFit="cover"
                  alt=""
                  width={1000}

                  height={1000}
                />

    <div className={styles.contai}>
    <h3 className={styles.hg}  id="c6">Shoes</h3>
      <div className={styles.wrapper}>
          <Cardwm img="/img/sh10.jpg" title="Sed ut perspiciatis unde" price="123$" des="Ten Women's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
          
           <div className={styles.diva}>  </div>
          <Cardwm img="/img/s5.jpg"  title="Sed ut perspiciatis unde" price="$345" des="Ten Women's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
         <div className={styles.diva}>  </div>
          <Cardwm img="/img/s6.jpg" title="Sed ut perspiciatis unde" price="$678" des="Ten Women's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
        
         <div className={styles.divv}>
         <h1 className={styles.ti} >Best Seller </h1>
         <h3 className={styles.hg}  id="c7">Sunglasses</h3>
         </div>
         
         <div className={styles.diva}>  </div>
          <Cardwm img="/img/g1.jpg" title="Sed ut perspiciatis unde" price="$890" des="Ten Women's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
          
          <div className={styles.diva}>  </div>
          <Cardwm img="/img/g3.jpg"  title="Sed ut perspiciatis unde" price="$678" des="Ten Women's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
         <div className={styles.diva}>  </div>
          <Cardwm img="/img/g6.jpg"  title="Sed ut perspiciatis unde" price="$870" des="Ten Women's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
         <div className={styles.divv}>
         <h3 className={styles.hg}  id="c8">Shirts</h3>
         </div>
         
         <div className={styles.diva}>  </div>
          <Cardwm img="/img/sh1.jpg" title="Sed ut perspiciatis unde" price="$785" des="Ten Women's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
         <div className={styles.diva}>  </div>
          <Cardwm img="/img/sh2.jpg"  title="Sed ut perspiciatis unde" price="$678" des="Ten Women's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
      </div>
    </div>
   





    <div className={styles.contai}>
    <h3 className={styles.hg} id="c9">Pants</h3>
      <div className={styles.wrapper}>
          <Cardwm img="/img/pant1.jpg" title="Sed ut perspiciatis unde" price="123$" des="Ten Women's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
          
           <div className={styles.diva}>  </div>
          <Cardwm img="/img/pant2.jpg"  title="Sed ut perspiciatis unde" price="$345" des="Ten Women's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
         <div className={styles.diva}>  </div>
          <Cardwm img="/img/pant3.jpg" title="Sed ut perspiciatis unde" price="$678" des="Ten Women's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
        
         <div className={styles.divv}>
         <h3 className={styles.hg} id="c10">Shoses</h3>
         </div>
         
         <div className={styles.diva}>  </div>
          <Cardwm img="/img/sho1.jpg" title="Sed ut perspiciatis unde" price="$890" des="Ten Women's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
          
          <div className={styles.diva}>  </div>
          <Cardwm img="/img/sho2.jpg"  title="Sed ut perspiciatis unde" price="$678" des="Ten Women's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
         <div className={styles.diva}>  </div>
          <Cardwm img="/img/sho3.jpg"  title="Sed ut perspiciatis unde" price="$870" des="Ten Women's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " />
         <div className={styles.divv}>
         <h3 className={styles.hg} id="c11">Sunglasses</h3>
         </div>
         
         <div className={styles.diva}>  </div>
          <Cardwm img="/img/sun1.jpg" title="Sed ut perspiciatis unde" price="$785" des="Ten Women's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
         <div className={styles.diva}>  </div>
          <Cardwm img="/img/sun2.jpg"  title="Sed ut perspiciatis unde" price="$678" des="Ten Women's Cotton Viscose fabric Grey Shrug
Quick Overview
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
      
    </div>



    </div>

    </div>  


  );
};


