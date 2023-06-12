import Link from "next/link";
import styles from "./styles.module.scss";
import UserMenu from "./UserMenu";
import {AiOutlineSafety} from 'react-icons/ai';
import {RiAccountPinBoxLine, RiArrowDropDownFill} from 'react-icons/ri';
import {BsFillBalloonHeartFill} from 'react-icons/bs';
import { useState } from "react";
import { useSession } from "next-auth/react";
 export default function Top({country}){

    const { data: session } = useSession();
    const [visible,setVisible] = useState(false);

    return(
        <div className={styles.top}>
        <div className={styles.top__container}>
            <div></div>
            <ul className={styles.top__list}>
                <li className={styles.li}>
                    <img
                        src={country.flag}
                        alt=""
                    />
                    <span> {country.name} / usd</span>
                </li>
                <li className={styles.li}>
                    <AiOutlineSafety />
                    <span>Buyer Protection</span>
                </li>
                <li className={styles.li}>
                    <span>Customer Service</span>
                </li>
                <li className={styles.li}>
                    <span>Help</span>
                </li>
                <li className={styles.li}>
                    <Link href="/profile/whistlist">
                    <BsFillBalloonHeartFill></BsFillBalloonHeartFill>
                    <span> Whishlist</span>
                    </Link>
                </li>
                <li 
                    className={styles.li}
                    onMouseOver={()=>{setVisible(true)}}
                    onMouseLeave={()=>{setVisible(false)}}>
                { session ? (
                    <li className={styles.li}>
                    <div className={styles.flex}>
                    <RiAccountPinBoxLine></RiAccountPinBoxLine>
                        <Link href="/profile/account">
                        <img 
                            src={session.user.image}
                        />
                        <span>{session.user.name}</span>
                        </Link>
                    <RiArrowDropDownFill></RiArrowDropDownFill>
                    </div>
                </li>
                ) : (
                    <li className={styles.li}>
                    <div className={styles.flex}>
                    <RiAccountPinBoxLine></RiAccountPinBoxLine>
                        <Link href="/profile/account">
                        <span> Account </span>
                        </Link>
                    <RiArrowDropDownFill></RiArrowDropDownFill>
                    </div>
                </li>
                )}
                {visible && <UserMenu loggedIn={session} /> }
                
                </li>
                
            </ul>
        </div>
    </div>
    )
}