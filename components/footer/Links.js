import Link from "next/link";
import styles from "./styles.module.scss";
 
export default function Links(){
    return(
        <div className={styles.footer__links}>
            {links.map((link,i)=>(
                <ul
                key={i}>
                {i===0?
                (<img src="./images/shoppay.png" alt="" /> ) : (
                    <b>{link.heading}</b>
                )}
                    {link.links.map((link)=>(
                            <li key={i}>
                                <Link href="/">{link.name}</Link>
                            </li>
                        ))}
                </ul>
            ))}
        </div>
    )
}

const links = [
    {
        heading:"Modern E",
        links:[
        {   
            name:"About us",
            link:"",
        },
        {
            name:"Contact us",
            link:"",
        },
        {
            name:"Social Responsibility",
            link:"",
        },
        ]
    },
    {
        heading:"HELP & SUPPORT",
        links:[
            {
                name:"Shipping Info",
                link:"",
            },
            {
                name:"Returns",
                link:"",
            },
            {
                name:"How to Order",
                link:"",
            },
            {
                name:"How To Track",
                link:"",
            },
            {
                name:"Size Guide",
                link:"",
            },
        ]
    },
    {
        heading:"Customer service",
        links:[
            {
                name:"Customer service",
                link:"",
            },
            {
                name:"Terms and Conditions",
                link:"",
            },
            {
                name:"Consumers (Transactions)",
                link:"",
            },
        ],
    },
];