//page specific styling
import styles from '../styles/pageStyling/Home.module.scss';
import Nav from '../components/Nav';
import FeedContent from '../components/FeedContent'

export default function Home() {
  return (
    <div className={styles.body}>
      <Nav/>
      <div className={styles.hero}>
        <h2>conduit</h2>
        <p>A place to share your knowledge</p>
      </div>
      <div className={styles.grid}>
        <div className={styles.globalfeed}>
          <div className={styles.buttonsfeed}>
            <button>Global Feed</button>
            <button>Personal Feed</button>
          </div>
          <hr/>
          <div className={styles.content}>
              <FeedContent/>
              <FeedContent/>
              <FeedContent/>
              <FeedContent/>
              <FeedContent/>
              <FeedContent/>
          </div>
        </div>
        <div className={styles.tags}>
          <div className={styles.tagbox}>
            <button>Welcome</button>
            <button>react</button>
            <button>HTML</button>
            <button>react-native</button>
            <button>js</button>

          </div>
        </div>
      </div>
    </div>
  )
}
 