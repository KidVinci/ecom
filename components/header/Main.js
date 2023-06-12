import Link from "next/link";
import styles from "./styles.module.scss";
import {AiOutlineSearch} from "react-icons/ai";
import {FaShoppingCart} from "react-icons/fa";
import { useSelector } from "react-redux";

export default function Main(){
    const {cart} = useSelector((state)=>({...state}));
    return(
        <div className={styles.main}>
            <div className={styles.main__container}>
                <Link href="/" className={styles.logo}>
                    <img src="../../images/shoppay.png" alt=""></img>
                </Link>
                <div className={styles.search}>
                    <input type="text" placeholder="Search..."></input>
                    <div className={styles.search__icon}>
                        <AiOutlineSearch></AiOutlineSearch>
                    </div>
                </div>
                <Link className={styles.cart} href="/cart">
                    <FaShoppingCart></FaShoppingCart>
                    <span>{cart.length}</span>
                </Link>
            </div>
        </div>
    );
}