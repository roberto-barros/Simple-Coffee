import styles from "./Banner.module.css"
import banner from '../assets/bg-cafe-lg.jpg'

function Banner() {
  return (
    <>
      <img className={styles.banner} src={banner} alt="" />
    </>
  )
}

export default Banner