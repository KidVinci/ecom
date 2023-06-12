import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.scss';
import Header from '@/components/header';
import Footer from '@/components/footer';
import Link from 'next/link';
import Main from '@/components/home/main';

import Category from '@/components/home/category';
import axios from 'axios';
import { useMediaQuery } from 'react-responsive';
import { bathroom, cutting_boards, decor, kitchen } from '@/data/home';
import { useSession, signIn, signOut } from "next-auth/react";
import Produc from "../models/Produc";
import db from "../utils/db";
import ProductSwiper from '@/components/productsSwiper';
import ProductCard from '@/components/productCard';
const inter = Inter({ subsets: ['latin'] });
export default function Home({country, products}) {
  const { data: session } = useSession();
  const isMedium = useMediaQuery({ query: "(max-width:850px)" });
  const isMobile = useMediaQuery({ query: "(max-width:550px)" });
  
  return (
    <>
     <Header country={country} />
     <div className={styles.home}>
        <div className={styles.container}>
          <Main />
          <div className={styles.store_container}>
               <h1>Store</h1>
                <div className={styles.products}>
                {products.map((product) =>(
                <ProductCard product={product} key={product._id} />
                ))}
              </div>
              </div>
          
          <div className={styles.home__category}>
            <Category
              header="Decor"
              products={decor}
              background="#5a31f4" 
              />
            {!isMedium && (
              <Category
                header="Cutting Boards"
                products={cutting_boards}
                background="#3c811f"
                />
            )}
            {isMobile && (
              <Category
                header="Cutting Boards"
                products={cutting_boards}
                background="#3c811f"
              />
            )}
            <Category
              header="Kitchen"
              products={kitchen}
              background="#000"
            />
          </div>
          <ProductSwiper products={bathroom} />
             
         
        </div>
     </div>
     
     <Footer country={country}/>
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
