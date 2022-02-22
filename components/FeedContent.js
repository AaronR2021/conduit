import React from 'react'
import Image from 'next/image'
import style from '../styles/componentStyling/FeedContent.module.scss'
import FavoriteIcon from '@mui/icons-material/Favorite';

function FeedContent() {
  return (
    <>
    <div className={style.FeedContent}>
        <div className={style.headercard}>
            <div className={style.row}>
                <div className={style.userInfo}>
                    <Image 
                    src='https://cdn.pixabay.com/photo/2013/07/21/13/00/rose-165819_960_720.jpg'
                    width='60px'
                    height="60px"
                    className='rounded-full'
                    />  
                <div className={style.username}>
                    <span className={style.name}>Gildart</span>
                    <span className={style.date}>November 24,2021</span>
                </div>
                </div>
                {/*for left side */}
                <div className={style.like}><FavoriteIcon color='success'/><span>21</span></div>{/*for right side */}
            </div>
        </div>
        <div className={style.bodycard}>
            <h2 className={style.title}>Create a new implementation</h2>
            <p className={style.para}>join the community by creating a new implementation</p>
        </div>
        <div className={style.footercard}>
            <button className={style.readmore}>Read more ...</button>
            <div className={style.listtags}>
            <button>JSX</button>
            <button>React</button>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default FeedContent