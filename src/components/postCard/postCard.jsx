import Image from 'next/image'
import styles from './postCard.module.css'
import Link from 'next/link'

const PostCard = () => {
  return (
    <div className={styles.container}>
        <div className={styles.top}>
            <div className={styles.imgContainer}>
                <Image src="https://images.pexels.com/photos/3182452/pexels-photo-3182452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" fill className={styles.img} />
            </div>
            <span className={styles.date}>01.01.2024</span>
        </div>
        <div className={styles.bottom}>
            <h1 className={styles.title}>Title</h1>
            <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis impedit autem fugit in amet veritatis facere dolorem, ab quisquam esse, enim earum deserunt quibusdam voluptatum quis animi? At, eius autem.</p>
            <Link href="/blog/post" className={styles.link}>READ MORE</Link>
        </div>
    </div>
  )
}

export default PostCard