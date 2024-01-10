import Link from "next/link";
import styles from "./links.module.css";
import Navlink from "./navlink/navlink";

const Links = () => {
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
  );
};

export default Links;
