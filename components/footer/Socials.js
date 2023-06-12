import styles from "./styles.module.scss";
import {BsGoogle, BsFacebook, BsInstagram, BsTwitter, BsPinterest, BsApple } from "react-icons/bs";

export default function Socials(){
    return(
        <div className={styles.footer__socials}>
            <section>
            <h3>STAY CONNECTED</h3>
            <ul>
                <li>
                    <a><BsGoogle></BsGoogle></a>
                </li>
                <li>
                    <a><BsApple></BsApple></a>
                </li>
                <li>
                    <a><BsFacebook></BsFacebook></a>
                </li>
                <li>
                    <a><BsInstagram></BsInstagram></a>
                </li>
                <li>
                    <a><BsTwitter></BsTwitter></a>
                </li>
                <li>
                    <a><BsPinterest></BsPinterest></a>
                </li>
           </ul>
            </section>
            
        </div>
    );
}