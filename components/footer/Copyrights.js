import Link from "next/link";
import styles from "./styles.module.scss";
import { TfiLocationPin } from "react-icons/tfi";


export default function Copyright({country}){
    return(
        <div className={styles.footer__copyright}>
            <section>
                ©2022 SHOPPAY ALL Rights Reserved.
            </section>
            <section>
            <ul>
                {data.map((data)=>(
                    <li
                    key={index}>
                        <Link href={data.link}>
                            {data.name}
                        </Link>
                    </li>
                ))}
                <li>
                 
                    <TfiLocationPin></TfiLocationPin> {country.name}
                   
                </li>
            </ul>
            </section>
            
        </div>
    );
}
const data = [
    {
        name:"Privacy Center",
        link: "",
    },
    {
        name:"Privacy & Cookie Policy",
        link:"",
    },
    {
        name:"Manage Cookies",
        link:"",
    },
    {
        name:"Terms & Conditions",
        link:"",
    },
    {
        name:"Copyright Notice",
        link:"",
    },
];