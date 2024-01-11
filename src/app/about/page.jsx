import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subTitle}>
          <h1>About Agency</h1>
          </h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger, bolder.
        </h1>
        <p className={styles.desc}>
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission. We are world's
          Special Team consulting & finance solution provider. Wide range of web
          and software development services, believe in good ideas flexibility.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of Experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of Experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Year of Experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="About image" fill className={styles.img} />
      </div>
    </div>
  );
};

export default AboutPage;
