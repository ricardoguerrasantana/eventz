import styles from "./HomePage.module.css"
import { Link } from "react-router-dom"


export default function HomePage() {
  return (
    <div className={styles.heading}>
      <div className={styles.title}>
        <h1 className={styles.titleText}>Imagine if</h1>
        <h1 className={styles.snapchat}>Snapchat</h1>
        <h1 className={styles.titleText}>had events.</h1>
      </div>
      <div className={styles.motto}>
        <p>
          Easily host and share events with your friends across any social
          media.
        </p>
      </div>
      <img
        src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220924%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220924T222313Z&X-Amz-Expires=86400&X-Amz-Signature=692301a87ceddfca7a4f2e14d364a4e8a53738bbfe8ca8ff4a632c64719c7b77&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject"
        className={styles.card}
        alt="card"
      />
      <Link to="/create">
        <button className={styles.create}>🎉 Create my event</button>
      </Link>
    </div>
  )
}
