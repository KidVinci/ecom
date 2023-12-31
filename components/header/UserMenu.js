import Link from "next/link";
import styles from "./styles.module.scss";
import { useSession, signOut, signIn } from "next-auth/react";

export default function UserMenu({loggedIn}){
    
    const { data: session } = useSession();
    return(
        <div className={styles.menu}>
        <h4> Welcome to Shoppay ! </h4>
        {loggedIn ? (
            <div className={styles.flex}>
            <img 
                src="/images/profile.png"
                alt=""
                className={styles.menu__img}
                />
                <div className={styles.col}>
                    <span> Welcome Back,</span>
                    <h3>{session.user.name}</h3>
                    <span onClick={()=>signOut()}>Sign Out</span>
                </div>
            
               
            </div>
        ) : (
            <div className={styles.flex}>
            <button className={styles.btn_primary}>
                Register
            </button>
            <button 
            className={styles.btn_outlined}
            onClick={()=>signIn()}
            >
                Login
            </button>
               
            </div>
        )}
        <ul>
            <li>
                <Link href="/profile/">Account</Link>
            </li>
            <li>
                <Link href="/profile/order">My Orders</Link>
            </li>
            <li>
                <Link href="/profile/messages"> Message Center</Link>
            </li>
            <li>
                <Link href="/profile/address"> Address</Link>
            </li>
            <li>
                <Link href="/profile/whishlist">Whistlist</Link>
            </li>
            <li>
                <Link href="/profile/"></Link>
            </li>
        </ul>
            
        </div>
    );
}