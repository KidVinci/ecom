import styles from "./styles.module.scss";

export default function Newsletter(){
    return(
        <div className={styles.footer__newsletter}>
            <h3>
                SIGN UP FOR THE NEWSLETTER!
            </h3>
            <div className={styles.footer__flex}>
                <input type="text" placeholder="Enter Email here.."></input>
                <button className={styles.btn_primary}>Subscribe</button>
            </div>
            <p>By Subscribing to the newsletter you agree to our Privacy & Cookies Policy</p>

        </div>
    );
}