import Name from './components/Name';
import Testimony from './components/Testimony';
import Tanya from '/image-tanya.jpg';
import styles from './App.module.css';


export default function App() {
  return (
    <div className={styles.app}>
      <img className={styles.image} src={Tanya}/>
      <Testimony />
      <Name />
    </div>
  )
}