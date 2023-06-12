import Link from "next/link";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <div className={styles.header}>
      <ul>
        <li>
          <Link href="">Store</Link>
        </li>
        <li>
          <Link href="">Blog </Link>
        </li>
        <li>
          <Link href="">Gallery</Link>
        </li>
      </ul>
    </div>
  );
}