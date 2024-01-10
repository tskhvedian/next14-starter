"use client"
import Link from "next/link";
import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";

const Navlink = ({ item }) => {
  const pathName = usePathname();
  
  return (
    <Link href={item.url} className={`${styles.container} ${ 
        pathName === item.url && styles.active
        }`}>
      {item.title}
    </Link>
  );
};

export default Navlink;
