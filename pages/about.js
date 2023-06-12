import { Inter } from 'next/font/google';
import styles from '@/styles/land.module.scss';
import axios from 'axios';
import Link from 'next/link';
import Produc from "../models/Produc";
import { useSession, signIn, signOut } from "next-auth/react";
import db from "../utils/db";
const inter = Inter({ subsets: ['latin'] });
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function About(){
    return(
        <>
<nav>
    <div class={styles.logos_selection}>
      <h2 class={styles.logo}>MED</h2>
        <ul class={styles.menu_items}>
           <Link href="./">
              <li>Store</li>
           </Link> 
            <li>Blog</li>
            <li>Gallery</li>
            <li>About</li>
        </ul>
    </div>
        <ul class={styles.cta_btns}>
            <li onClick={()=>signIn()}>Login</li>
            <Link href="./signin">
            <li>Register</li>
            </Link>
        </ul>
</nav>
    <div class={styles.cover}>
      {/* <!-- <header class="mb-auto">
        <div>
          <h3 class="float-md-start mb-0">Cover</h3>
          <nav class="nav nav-masthead justify-content-center float-md-end">
            <a class="nav-link fw-bold py-1 px-0 active" aria-current="page" href="#">Home</a>
            <a class="nav-link fw-bold py-1 px-0" href="#">Features</a>
            <a class="nav-link fw-bold py-1 px-0" href="#">Contact</a>
          </nav>
        </div>
      </header> --> */}
      <Container>
         <div class={styles.topText}>
          <h1 class={styles.top}>Modern E Decor</h1>
            <p class={styles.top}>Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
        </div>
      </Container>
    </div>
    <Container>
    <div class={styles.secondLvl}>
    <Row>
      <div class={styles.left}>
              <div className={styles.piImg}>
                <img src="images/swiper/c1.jpeg" alt="1st" />
                <img src="images/swiper/c2.jpeg" alt="2nd" /> 
              </div>
      </div>
            <div class={styles.right}>
              <div className={styles.scriptRight}>
              <Link href="./">
              <h1>Shop</h1>
              </Link>
              
                {/* <!-- <div class="circle"></div> --> */}
                <p>just some extra words to fill the space. Think and push push and think is a circle the has a harmonistic thing about it</p>
              </div>
                
            </div>
    </Row>
        <Row>
      <div class={styles.left}>
              <h1>Discover something new</h1>
              <p>just some extra words to fill the space. Think and push push and think is a circle the has a harmonistic thing about it</p>
          </div>
            <div class={styles.right}>
              <div className={styles.piImg}>
              <img src="images/drd3.jpg" alt="3rd" />
              <img src="images/drd4.jpg" alt="4th" /> 
              </div>
          </div>
        </Row>
        <Row>
        <div class={styles.left}>
          <div className={styles.bigImg}>
          <img src="images/drd5.jpg" alt="5th" />
          </div> 
        </div>
        <div class={styles.right}>
            <h1>Design your home</h1>
            <p>just some extra words to fill the space. Think and push push and think is a circle the has a harmonistic thing about it</p>
        </div>

        </Row>
         <Row>
          <div class={styles.left}>
            <h1>Show the You, in Your Home</h1>
            <p>just some extra words to fill the space. Think and push push and think is a circle the has a harmonistic thing about it</p>
          </div>
          <div class={styles.right}>
          <div className={styles.bigImg}>
            <img src="images/swiper/c5.jpeg" alt="5th" />
          </div>
          </div>
         </Row>
        </div>
    </Container>

<div className={styles.bottom}>
  <Container className={styles.contact}>
    <Row>
      <h2>Contact Me</h2>
          <p>If you have any questions please contact</p>

          <div class={styles.left}>
              <form action="/" method="post">
                <input type="text" placeholder="Name" /><br/>
                <input type="email" placeholder="Email " /><br />
                <input type="text" placeholder="Phone Number" /><br />
                <button type="submit">Submit</button>
              </form>
            </div>
            <div class={styles.right}>
              Contact me to design for you!
            <br />
            deanna@DRD.com
            <br />
            999-999-9999
            </div>
            
          
    </Row>
</Container>
</div>

      
    
        </>
    )
}
export async function getServerSideProps(){
  db.connectDb();
  let products = await Produc.find().sort({ createdAt: -1 }).lean();
  let data = await axios
    .get("https://api.ipregistry.co/?key=ppheeccexzk4qtx3")
    .then((res) => {
      return res.data.location.country;
    })
    .catch((err) => {
      console.log(err);
    });
  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
      //country: { name: data.name, flag: data.flag.emojitwo },
      country: {
        name: "United States",
        flag: "../images/country.png",
      },
    },
  };
}