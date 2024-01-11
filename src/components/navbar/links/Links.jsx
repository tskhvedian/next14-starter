"use client";
import Link from "next/link";
import styles from "./links.module.css";
import Navlink from "./navlink/navlink";
import { useState } from "react";

const Links = () => {
  const [open, setOpen] = useState(false);
  const links = [
    {
      title: "Homepage",
      url: "/",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Contact",
      url: "/contact",
    },
    {
      title: "Blog",
      url: "/blog",
    },
  ];

  //TEMPORARY
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <Navlink item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && <Navlink item={{ title: "Admin", url: "/admin" }} />}
            <button>Logout</button>
          </>
        ) : (
          <Navlink item={{ title: "Login", url: "/login" }} />
        )}
      </div>
      <button className={styles.menuButton} onClick={()=> setOpen((prev) => !prev)}>MENU</button>        {/* changed to opposite */}
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <Navlink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
