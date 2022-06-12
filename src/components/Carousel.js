import React from 'react'
import styles from "../styles/carousel.module.css";

function Carousel() {
  return (
    <>
        <div className={styles.content}>
          <div className={styles.carouselcontent}>
          </div>
          <div className={styles.slideshow}>
            <button className={styles.slidebtn}/>
          <button className={styles.slidebtn}  />
          <button className={styles.slidebtn}  />
      <div className={styles.slideshowwrapper}>
      <div className={styles.slide}>
          <img className={styles.slideimg}
            src="https://marketresearchtelecast.com/wp-content/uploads/2021/08/The-10-best-free-games-for-PC.jpg" />
        </div>
        <div className={styles.slide}>
          <img className={styles.slideimg}
            src="https://cdn2.unrealengine.com/Diesel%2Fblog%2Fepic-games-store-update%2FEGS_Social_Update_News-2560x1440-128a69890d92407b815582c1deba54450e5645f9.jpg" />
        </div>
        <div className={styles.slide}>
          <img className={styles.slideimg}
            src="https://esportsgen.com/wp-content/uploads/2022/05/top.jpg" />
        </div>
        <div className={styles.slide}>
          <img className={styles.slideimg} src="https://www.internetmatters.org/wp-content/uploads/2020/11/TOP-VIDEO-GAMES-2020.png" />
        </div>
        
      </div>
            </div>
        </div>
    </>
  )
}

export default Carousel
