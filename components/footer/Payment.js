import styles from "./styles.module.scss";

export default function Payment(){
    return(
        <div className={styles.footer__payment}>
            <h3>WE ACCEPT </h3>
            <div className={styles.footer__flexwrap}>
                <img src="../../images/amex3.png" />
                <img src="../../images/visa3.png" />
                <img src="../../images/mastercard2.png" />
                <img src="../../images/paypal.png" />
            </div>
        </div>
    );
}