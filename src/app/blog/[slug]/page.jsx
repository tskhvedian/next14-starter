import Image from "next/image";
import styles from "./singlepost.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/3182452/pexels-photo-3182452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="image"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>TITLE</h1>
        <div className={styles.detail}>
       
          <div className={styles.detailText}>
            <div className={styles.detailTitle}>Author</div>
            <div className={styles.detailValue}>Terry Jefferson</div>
          </div>
          <div className={styles.detailText}>
            <div className={styles.detailTitle}>Published</div>
            <div className={styles.detailValue}>01.01.2024</div>
          </div>
        </div>
        <div className={styles.content}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            quae expedita rem? Enim sed laborum perspiciatis, voluptatibus
            cumque iure vero quod soluta quae veritatis quidem quo rerum culpa
            ut impedit! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, omnis nesciunt sunt vel amet iste ea nemo, quia
            debitis voluptatum aliquid dignissimos tempore expedita praesentium
            sapiente tempora possimus et? Perferendis!
          </p>
          <br></br>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            quae expedita rem? Enim sed laborum perspiciatis, voluptatibus
            cumque iure vero quod soluta quae veritatis quidem quo rerum culpa
            ut impedit! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, omnis nesciunt sunt vel amet iste.
           
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
